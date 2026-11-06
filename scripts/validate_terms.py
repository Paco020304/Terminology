#!/usr/bin/env python3
"""Validate data/terms-data.js and its consistency with data/source-plan.json."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TERMS_FILE = ROOT / "data" / "terms-data.js"
PLAN_FILE = ROOT / "data" / "source-plan.json"
ARRAY_PREFIX = "window.TERMINOLOGY_TERMS = "
REQUIRED_TERM_FIELDS = ["id", "order", "term", "term_zh", "definition_en", "definition_zh", "citations", "examples"]
REQUIRED_CITATION_FIELDS = ["title", "publisher", "url", "accessed", "note"]
VALID_STATUSES = {"pending", "in_progress", "done"}


def load_terms():
    """Parse the JS dataset by extracting its JSON array literal."""
    source = TERMS_FILE.read_text(encoding="utf-8")
    start = source.index(ARRAY_PREFIX) + len(ARRAY_PREFIX)
    end = source.rindex("]") + 1
    return json.loads(source[start:end])


def load_source_plan():
    return json.loads(PLAN_FILE.read_text(encoding="utf-8"))


def validate_term_fields(term, errors):
    label = term.get("id", "<missing id>")
    for field in REQUIRED_TERM_FIELDS:
        if not term.get(field):
            errors.append(f"{label}: missing field '{field}'")
    for citation in term.get("citations", []):
        for field in REQUIRED_CITATION_FIELDS:
            if not citation.get(field):
                errors.append(f"{label}: citation missing '{field}'")
        if citation.get("url") and not citation["url"].startswith(("http://", "https://")):
            errors.append(f"{label}: citation url is not http(s)")
    for example in term.get("examples", []):
        if not example.get("en") or not example.get("zh"):
            errors.append(f"{label}: example needs both 'en' and 'zh'")


def validate_unique_terms(terms, errors):
    seen_ids, seen_names = set(), {}
    for term in terms:
        term_id = term.get("id")
        if term_id in seen_ids:
            errors.append(f"duplicate id '{term_id}'")
        seen_ids.add(term_id)
        names = [term.get("term", "")] + list(term.get("aliases", []))
        for name in names:
            key = name.strip().lower()
            if key and key in seen_names and seen_names[key] != term_id:
                errors.append(f"'{name}' in {term_id} duplicates {seen_names[key]}")
            seen_names.setdefault(key, term_id)


def validate_order_sequence(terms, errors):
    orders = [term.get("order") for term in terms]
    if orders != list(range(1, len(terms) + 1)):
        errors.append("'order' must be 1..N in array order")


def validate_plan_references(terms, plan, errors):
    term_ids = {term["id"] for term in terms if "id" in term}
    claimed = {}
    for phase in plan.get("phases", []):
        if phase.get("status") not in VALID_STATUSES:
            errors.append(f"phase {phase.get('phase')}: invalid status")
        for source in phase.get("sources", []):
            if source.get("status") not in VALID_STATUSES:
                errors.append(f"source {source.get('id')}: invalid status")
            for term_id in source.get("terms_added", []):
                if term_id not in term_ids:
                    errors.append(f"source {source.get('id')}: unknown term id '{term_id}'")
                if term_id in claimed:
                    errors.append(f"term '{term_id}' listed under {claimed[term_id]} and {source.get('id')}")
                claimed[term_id] = source.get("id")
    for term_id in sorted(term_ids - set(claimed)):
        errors.append(f"term '{term_id}' is not recorded in any source's terms_added")


def main():
    errors = []
    terms = load_terms()
    for term in terms:
        validate_term_fields(term, errors)
    validate_unique_terms(terms, errors)
    validate_order_sequence(terms, errors)
    validate_plan_references(terms, load_source_plan(), errors)
    if errors:
        print("\n".join(f"ERROR: {e}" for e in errors))
        return 1
    print(f"OK: {len(terms)} terms")
    return 0


if __name__ == "__main__":
    sys.exit(main())
