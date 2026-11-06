// Terminology dataset.
// Add one object per term. Professional terms should include rigorous definitions,
// citations, and bilingual examples.
//
// Schema:
// {
//   "id": "kebab-case-id",
//   "term": "English term",
//   "term_zh": "中文翻译",
//   "aliases": ["optional", "aliases"],
//   "part_of_speech": "noun",
//   "category": "Category / 分类",
//   "level": "beginner",
//   "status": "draft",
//   "definition_en": "Rigorous English definition.",
//   "definition_zh": "中文严谨释义。",
//   "notes_zh": "Optional usage notes / common misconceptions.",
//   "citations": [
//     {
//       "title": "Source title",
//       "publisher": "Publisher / author",
//       "url": "https://example.com",
//       "accessed": "YYYY-MM-DD",
//       "note": "Why this source supports the definition."
//     }
//   ],
//   "examples": [
//     {
//       "en": "English example sentence.",
//       "zh": "中文翻译。",
//       "context": "Optional context."
//     }
//   ],
//   "related_terms": ["related", "terms"],
//   "tags": ["tag1", "tag2"]
// }

window.TERMINOLOGY_TERMS = [
  {
    "id": "blockchain",
    "term": "blockchain",
    "term_zh": "区块链",
    "aliases": ["block chain"],
    "part_of_speech": "noun",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A blockchain is a distributed ledger technology that maintains a continuously growing list of timestamped records called blocks, where each block is linked to the previous block by a cryptographic hash and the ledger is maintained by a peer-to-peer network rather than a central authority.",
    "definition_zh": "区块链是一种分布式账本技术：它维护一个持续增长的、带时间戳的记录列表（称为区块），每个区块通过密码学哈希链接到前一个区块，并由点对点网络而非中心化权威机构共同维护。",
    "notes_zh": "区块链不是单一技术，而是分布式账本、密码学哈希、共识机制和点对点网络等技术的组合。不要把“区块链”直接等同于比特币或某一条公链。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "比特币白皮书提出用哈希链式时间戳服务器实现无需可信第三方的分布式交易记录，是区块链概念的原始来源。"
      },
      {
        "title": "Blockchain",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Blockchain",
        "accessed": "2026-11-06",
        "note": "用于核对“distributed ledger / blocks linked by cryptography”的通用表述；正式引用仍应优先使用白皮书或正式文献。"
      }
    ],
    "examples": [
      {
        "en": "A blockchain can timestamp transactions without relying on a trusted third party.",
        "zh": "区块链可以在不依赖可信第三方的情况下为交易打上时间戳。",
        "context": "改写自比特币白皮书对分布式时间戳服务器的描述。"
      },
      {
        "en": "Each new block is linked to the previous block by a cryptographic hash.",
        "zh": "每个新区块都通过密码学哈希链接到前一个区块。",
        "context": "说明区块链“链式结构”的基本特征。"
      }
    ],
    "related_terms": ["block", "chain", "distributed ledger", "consensus", "cryptographic hash"],
    "tags": ["origin", "basic", "ledger"]
  }
];
