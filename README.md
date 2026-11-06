# Terminology

区块链英语词汇库（新手向）：英文术语 + 中文翻译 + 严谨定义 + 引用 + 中英例句。

## 🌐 Live site

**Visit the glossary online:** <https://paco020304.github.io/Terminology/>

## Structure

- `index.html` / `styles.css` / `app.js`: static glossary + search viewer
- `data/terms-data.js`: term entries

## View locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Add a term

Edit `data/terms-data.js` and append an object to `window.TERMINOLOGY_TERMS`.

Required for professional terms:

- `term` + `term_zh`
- `definition_en` + `definition_zh`
- `citations` with `title`, `publisher`, `url`, `accessed`, `note`
- `examples` with `en`, `zh`, optional `context`

Recommended fields: `aliases`, `part_of_speech`, `category`, `level`, `status`, `notes_zh`, `related_terms`, `tags`.
