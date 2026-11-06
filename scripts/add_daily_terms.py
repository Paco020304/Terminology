#!/usr/bin/env python3
"""Append the next curated batch from data/term-queue.json to data/terms-data.js."""
import argparse
import json
import os
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
TERMS_DATA = REPO_ROOT / "data" / "terms-data.js"
QUEUE_PATH = REPO_ROOT / "data" / "term-queue.json"

HEADER = """// Terminology dataset.
// Curated terms are appended by scripts/add_daily_terms.py from data/term-queue.json.
// Schema: { id, order, term, term_zh, aliases, part_of_speech, category, level, status,
//           definition_en, definition_zh, notes_zh, citations[], examples[], related_terms[], tags[] }
// citations[]: { title, publisher, url, accessed, note }
// examples[]: { en, zh, context }
"""


def load_terms(path):
    text = path.read_text(encoding="utf-8")
    match = re.search(r"window\.TERMINOLOGY_TERMS\s*=\s*(\[.*\])\s*;", text, re.S)
    if not match:
        raise SystemExit(f"could not find TERMINOLOGY_TERMS array in {path}")
    return json.loads(match.group(1))


def write_terms(path, terms):
    payload = (
        HEADER
        + "\nwindow.TERMINOLOGY_TERMS = "
        + json.dumps(terms, ensure_ascii=False, indent=2)
        + ";\n"
    )
    path.write_text(payload, encoding="utf-8")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--batch-size",
        type=int,
        default=int(os.environ.get("TERMS_PER_DAY", "5")),
        help="number of queued terms to append (default: TERMS_PER_DAY or 5)",
    )
    parser.add_argument("--dry-run", action="store_true", help="print what would change without writing")
    args = parser.parse_args()

    terms = load_terms(TERMS_DATA)
    queue = json.loads(QUEUE_PATH.read_text(encoding="utf-8")) if QUEUE_PATH.exists() else []
    batch = queue[: args.batch_size]
    if not batch:
        print("term queue is empty; nothing to add")
        return 0

    orders = [int(term.get("order") or index + 1) for index, term in enumerate(terms)]
    start_order = max(orders, default=0) + 1
    for offset, queued in enumerate(batch):
        term = dict(queued)
        term["order"] = start_order + offset
        term.setdefault("status", "draft")
        terms.append(term)

    remaining = queue[len(batch):]
    if args.dry_run:
        print(
            f"dry-run: would add {len(batch)} terms "
            f"(orders {start_order}..{start_order + len(batch) - 1}); "
            f"queue remaining {len(remaining)}"
        )
        return 0

    write_terms(TERMS_DATA, terms)
    QUEUE_PATH.write_text(json.dumps(remaining, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"added {len(batch)} terms; queue remaining {len(remaining)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
