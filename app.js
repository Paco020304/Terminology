(function () {
  "use strict";

  const terms = Array.isArray(window.TERMINOLOGY_TERMS) ? window.TERMINOLOGY_TERMS : [];
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const sortSelect = document.getElementById("sort");
  const resultCount = document.getElementById("result-count");
  const termsSection = document.getElementById("terms");
  const emptySection = document.getElementById("empty");
  const emptyTitle = document.getElementById("empty-title");
  const emptyText = document.getElementById("empty-text");

  function text(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function list(value) {
    return Array.isArray(value) ? value : [];
  }

  function escapeHtml(value) {
    return text(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function safeUrl(value) {
    const raw = text(value).trim();
    if (!raw) return "";
    try {
      const parsed = new URL(raw, window.location.href);
      return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.href : "";
    } catch (_err) {
      return "";
    }
  }

  function flattenSearchValue(value) {
    if (Array.isArray(value)) {
      return value.map(flattenSearchValue).join(" ");
    }
    if (value && typeof value === "object") {
      return Object.values(value).map(flattenSearchValue).join(" ");
    }
    return text(value);
  }

  function searchText(term) {
    const fields = [
      term.id,
      term.term,
      term.term_zh,
      term.translation_zh,
      term.aliases,
      term.part_of_speech,
      term.category,
      term.level,
      term.status,
      term.definition_en,
      term.definition_zh,
      term.definition,
      term.notes_zh,
      term.examples,
      term.citations,
      term.related_terms,
      term.tags
    ];
    return fields.map(flattenSearchValue).join(" ").toLowerCase();
  }

  function matchesQuery(term, query) {
    if (!query) return true;
    const haystack = searchText(term);
    const tokens = query.split(/\s+/).filter(Boolean);
    return tokens.every((token) => haystack.includes(token));
  }

  function populateCategories() {
    const seen = new Set();
    const categories = [];
    terms.forEach((term) => {
      const category = text(term.category).trim();
      if (category && !seen.has(category)) {
        seen.add(category);
        categories.push(category);
      }
    });
    categorySelect.innerHTML = '<option value="">全部分类</option>' +
      categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  }

  function sortTerms(list, mode) {
    const sorted = list.slice();
    const byTerm = (a, b) => text(a.term).localeCompare(text(b.term), "en", { sensitivity: "base" });
    const byCategory = (a, b) =>
      text(a.category).localeCompare(text(b.category), "zh") || byTerm(a, b);
    if (mode === "term") sorted.sort(byTerm);
    if (mode === "category") sorted.sort(byCategory);
    return sorted;
  }

  function renderBadges(term) {
    const badges = [];
    const category = text(term.category).trim();
    const partOfSpeech = text(term.part_of_speech).trim();
    const level = text(term.level).trim();
    const status = text(term.status).trim();

    if (category) badges.push(`<span class="badge">${escapeHtml(category)}</span>`);
    if (partOfSpeech) badges.push(`<span class="badge">${escapeHtml(partOfSpeech)}</span>`);
    if (level) badges.push(`<span class="badge level">${escapeHtml(level)}</span>`);
    if (status && status.toLowerCase() !== "published") {
      badges.push(`<span class="badge status">${escapeHtml(status)}</span>`);
    }
    return badges.length ? `<div class="badges">${badges.join("")}</div>` : "";
  }

  function renderCitation(citation) {
    const title = text(citation.title).trim() || text(citation.url).trim() || "Untitled citation";
    const url = safeUrl(citation.url);
    const titleHtml = url
      ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>`
      : escapeHtml(title);

    const meta = [];
    if (text(citation.publisher).trim()) meta.push(escapeHtml(citation.publisher));
    if (text(citation.accessed).trim()) meta.push(`访问于 ${escapeHtml(citation.accessed)}`);
    if (text(citation.type).trim()) meta.push(escapeHtml(citation.type));

    const note = text(citation.note).trim()
      ? `<div class="citation-meta">${escapeHtml(citation.note)}</div>`
      : "";

    return `<li>${titleHtml}${meta.length ? `<div class="citation-meta">${meta.join(" · ")}</div>` : ""}${note}</li>`;
  }

  function renderExample(example) {
    const en = text(example.en).trim();
    const zh = text(example.zh).trim();
    const context = text(example.context || example.note).trim();
    return `<li>
      ${en ? `<p class="example-en">${escapeHtml(en)}</p>` : ""}
      ${zh ? `<p class="example-zh">${escapeHtml(zh)}</p>` : ""}
      ${context ? `<p class="example-context">${escapeHtml(context)}</p>` : ""}
    </li>`;
  }

  function renderRelated(term) {
    const related = list(term.related_terms).map(text).map((item) => item.trim()).filter(Boolean);
    if (!related.length) return "";
    const buttons = related.map((item) =>
      `<button type="button" class="related-term" data-term="${escapeHtml(item)}">${escapeHtml(item)}</button>`
    ).join("");
    return `<section class="related"><h3>Related terms</h3><div>${buttons}</div></section>`;
  }

  function renderTerm(term) {
    const termName = text(term.term).trim() || "Untitled";
    const termZh = text(term.term_zh || term.translation_zh).trim();
    const phonetic = text(term.phonetic || term.ipa).trim();
    const definitionEn = text(term.definition_en).trim();
    const definitionZh = text(term.definition_zh || term.definition).trim();
    const notes = text(term.notes_zh).trim();
    const citations = list(term.citations);
    const examples = list(term.examples);

    const definitionHtml = (definitionEn || definitionZh)
      ? `<section class="definition">
          ${definitionEn ? `<div class="definition-en"><h3>English definition</h3><p>${escapeHtml(definitionEn)}</p></div>` : ""}
          ${definitionZh ? `<div class="definition-zh" style="margin-top:${definitionEn ? "12px" : "0"}"><h3>中文释义</h3><p>${escapeHtml(definitionZh)}</p></div>` : ""}
        </section>`
      : "";

    const notesHtml = notes
      ? `<section class="notes"><h3>Notes / 注意</h3><p>${escapeHtml(notes)}</p></section>`
      : "";

    const citationsHtml = citations.length
      ? `<section class="citations"><h3>References / 引用</h3><ol>${citations.map(renderCitation).join("")}</ol></section>`
      : "";

    const examplesHtml = examples.length
      ? `<section class="examples"><h3>Examples / 例句</h3><ul>${examples.map(renderExample).join("")}</ul></section>`
      : "";

    return `<article class="term-card">
      <header class="term-head">
        <h2><span class="term-en">${escapeHtml(termName)}</span>${termZh ? ` <span class="term-zh">${escapeHtml(termZh)}</span>` : ""}</h2>
        ${phonetic ? `<span class="phonetic">${escapeHtml(phonetic)}</span>` : ""}
      </header>
      ${renderBadges(term)}
      ${definitionHtml}
      ${notesHtml}
      ${citationsHtml}
      ${examplesHtml}
      ${renderRelated(term)}
    </article>`;
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sortMode = sortSelect.value;

    let filtered = terms.filter((term) => {
      if (category && text(term.category) !== category) return false;
      return matchesQuery(term, query);
    });
    filtered = sortTerms(filtered, sortMode);

    termsSection.innerHTML = filtered.map(renderTerm).join("");

    if (terms.length === 0) {
      resultCount.textContent = "尚未加载词条";
      emptyTitle.textContent = "暂无词条";
      emptyText.textContent = "请把教材、笔记或链接整理进 data/terms-data.js。";
      emptySection.hidden = false;
      return;
    }

    resultCount.textContent = `共 ${terms.length} 条，当前显示 ${filtered.length} 条`;
    if (filtered.length === 0) {
      emptyTitle.textContent = "没有匹配结果";
      emptyText.textContent = "试试其他关键词、英文原形、中文释义或切换分类。";
      emptySection.hidden = false;
    } else {
      emptySection.hidden = true;
    }
  }

  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);
  sortSelect.addEventListener("change", render);

  termsSection.addEventListener("click", (event) => {
    const button = event.target.closest(".related-term");
    if (!button) return;
    searchInput.value = button.dataset.term || "";
    searchInput.focus();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  populateCategories();
  render();
})();
