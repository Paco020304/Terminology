// Terminology dataset.
// Add one object per term. Professional terms should include rigorous definitions,
// citations, and bilingual examples.
//
// Schema:
// {
//   "id": "kebab-case-id",
//   "order": 1,
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
    "order": 1,
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
  },
  {
    "id": "peer-to-peer",
    "order": 2,
    "term": "peer-to-peer",
    "term_zh": "点对点",
    "aliases": ["P2P", "peer to peer"],
    "part_of_speech": "adjective",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Peer-to-peer describes a network architecture in which participants connect and exchange resources directly with each other rather than through a central server or intermediary.",
    "definition_zh": "点对点（P2P）描述一种网络架构：参与者直接相互连接并交换资源，而不是通过中心服务器或中介机构。",
    "notes_zh": "比特币白皮书标题中的“peer-to-peer electronic cash”强调用户可以直接发送交易，而不必依赖金融机构作为中介。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书标题和摘要直接使用 peer-to-peer 描述电子现金系统的网络模型。"
      }
    ],
    "examples": [
      {
        "en": "Bitcoin was proposed as a peer-to-peer electronic cash system.",
        "zh": "比特币被提出作为一种点对点的电子现金系统。",
        "context": "比特币白皮书标题。"
      },
      {
        "en": "In a peer-to-peer network, nodes can leave and rejoin the network at will.",
        "zh": "在点对点网络中，节点可以随时离开并重新加入网络。",
        "context": "白皮书第 5 节 Network 对节点行为的描述。"
      }
    ],
    "related_terms": ["node", "network", "distributed ledger", "blockchain"],
    "tags": ["origin", "network", "basic"]
  },
  {
    "id": "timestamp",
    "order": 3,
    "term": "timestamp",
    "term_zh": "时间戳",
    "aliases": ["digital timestamp", "timestamp server"],
    "part_of_speech": "noun",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A timestamp is a record that associates data with a specific point in time; in distributed systems it is often produced by a timestamping service or server.",
    "definition_zh": "时间戳是把数据与某一时间点关联起来的记录；在分布式系统中，通常由时间戳服务或时间戳服务器生成。",
    "notes_zh": "比特币白皮书用“distributed timestamp server”说明如何在不可信环境中为交易建立时间顺序；它与区块链的哈希链直接相关。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节提出用基于工作量证明的哈希链实现分布式时间戳服务器。"
      }
    ],
    "examples": [
      {
        "en": "The server timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work.",
        "zh": "服务器通过把交易哈希进一个持续增长的、基于工作量证明的哈希链来为交易打时间戳。",
        "context": "改写自白皮书对时间戳服务器的描述。"
      },
      {
        "en": "A trusted timestamp can prove that data existed at a certain time.",
        "zh": "可信时间戳可以证明数据在某一时间点已经存在。",
        "context": "说明时间戳的通用用途。"
      }
    ],
    "related_terms": ["block", "hash", "proof-of-work", "transaction"],
    "tags": ["origin", "time", "basic"]
  },
  {
    "id": "transaction",
    "order": 4,
    "term": "transaction",
    "term_zh": "交易",
    "aliases": ["tx"],
    "part_of_speech": "noun",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In blockchain systems, a transaction is a digitally signed instruction that transfers value or records a state change between participants.",
    "definition_zh": "在区块链系统中，交易是一条经数字签名的指令，用于在参与者之间转移价值或记录状态变更。",
    "notes_zh": "比特币白皮书把电子币描述为数字签名链：每个所有者通过签名前一交易的哈希和下一所有者的公钥来转移币。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 3 节 Transactions 定义了交易作为数字签名链的基本模型。"
      }
    ],
    "examples": [
      {
        "en": "Each owner transfers the coin by digitally signing the hash of the previous transaction.",
        "zh": "每个所有者通过对前一交易的哈希进行数字签名来转移该币。",
        "context": "白皮书第 3 节对交易链的描述。"
      },
      {
        "en": "A transaction becomes valid only after its signature is verified.",
        "zh": "交易只有在签名验证通过后才有效。",
        "context": "说明交易验证的基本要求。"
      }
    ],
    "related_terms": ["block", "digital signature", "hash", "public key"],
    "tags": ["origin", "transaction", "basic"]
  },
  {
    "id": "block",
    "order": 5,
    "term": "block",
    "term_zh": "区块",
    "aliases": ["block header"],
    "part_of_speech": "noun",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In a blockchain, a block is a data structure that packages a batch of transactions together with metadata such as a timestamp and the hash of the previous block.",
    "definition_zh": "在区块链中，区块是一个数据结构，它把一批交易与时间戳、前一区块哈希等元数据打包在一起。",
    "notes_zh": "在比特币中，区块还包含 nonce 和工作量证明；区块哈希承诺了区块头中的内容，任何改动都会改变哈希。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4-5 节描述区块如何打包交易、通过 PoW 生成，并被最长链规则接受。"
      }
    ],
    "examples": [
      {
        "en": "A block bundles transactions and links to the previous block's hash.",
        "zh": "区块把交易打包，并链接到前一个区块的哈希。",
        "context": "区块的基本结构。"
      },
      {
        "en": "The longest chain is treated as proof of what happened while a node was offline.",
        "zh": "最长链被视为节点离线期间发生了什么的证明。",
        "context": "白皮书第 5 节 Network 对最长链规则的描述。"
      }
    ],
    "related_terms": ["blockchain", "transaction", "timestamp", "proof-of-work"],
    "tags": ["origin", "block", "basic"]
  },
  {
    "id": "hash",
    "order": 6,
    "term": "hash",
    "term_zh": "哈希",
    "aliases": ["cryptographic hash", "hash function"],
    "part_of_speech": "noun",
    "category": "Cryptography / 密码学",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A hash is the fixed-size output of a hash function; in blockchain systems, cryptographic hashes are used to commit to data so that any change produces a different output.",
    "definition_zh": "哈希是哈希函数的定长输出；在区块链系统中，密码学哈希用于承诺数据，使任何改动都会产生不同的输出。",
    "notes_zh": "比特币使用 SHA-256。交易哈希承诺交易内容，区块哈希承诺区块头内容；篡改任一被承诺字段都会改变哈希。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书多处使用 hash：交易签名前一交易的哈希、用哈希链实现时间戳、用哈希承诺区块内容。"
      }
    ],
    "examples": [
      {
        "en": "The hash of the previous transaction is signed to prove ownership.",
        "zh": "通过签名前一交易的哈希来证明所有权。",
        "context": "白皮书第 3 节 Transactions。"
      },
      {
        "en": "A block hash changes if any committed field changes.",
        "zh": "如果任何被承诺的字段发生变化，区块哈希就会改变。",
        "context": "说明哈希承诺的基本性质。"
      }
    ],
    "related_terms": ["block", "transaction", "proof-of-work", "SHA-256"],
    "tags": ["crypto", "integrity", "basic"]
  },
  {
    "id": "digital-signature",
    "order": 7,
    "term": "digital signature",
    "term_zh": "数字签名",
    "aliases": ["signature"],
    "part_of_speech": "noun",
    "category": "Cryptography / 密码学",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A digital signature is a cryptographic value created with a private key that allows others to verify that a message or transaction was authorized by the holder of the corresponding public key.",
    "definition_zh": "数字签名是用私钥生成的密码学值，使他人能够验证某条消息或交易确实由对应公钥的持有者授权。",
    "notes_zh": "数字签名证明“授权”，但不等于加密；它常与公钥密码学一起出现，用于交易授权和所有权链验证。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 3 节把电子币描述为数字签名链，并说明收款人可验证签名以验证所有权链。"
      }
    ],
    "examples": [
      {
        "en": "A digital signature proves authorization without revealing the private key.",
        "zh": "数字签名在不暴露私钥的情况下证明授权。",
        "context": "数字签名的通用性质。"
      },
      {
        "en": "The payee can verify the signatures to verify the chain of ownership.",
        "zh": "收款人可以验证签名，从而验证所有权链。",
        "context": "白皮书第 3 节原意。"
      }
    ],
    "related_terms": ["transaction", "public key", "private key", "hash"],
    "tags": ["crypto", "authorization", "basic"]
  },
  {
    "id": "proof-of-work",
    "order": 8,
    "term": "proof-of-work",
    "term_zh": "工作量证明",
    "aliases": ["PoW"],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Proof-of-work is a consensus mechanism in which participants must perform a computationally expensive task—typically finding a nonce that makes a block hash meet a target—to create or validate blocks.",
    "definition_zh": "工作量证明是一种共识机制：参与者必须完成计算成本高昂的任务——通常是找到一个使区块哈希满足目标的 nonce——才能创建或验证区块。",
    "notes_zh": "PoW 通过提高篡改历史的成本来保护账本；在比特币中，它同时用于为交易提供时间戳。不要把它等同于“挖矿收益”本身。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节 Working Proof-of-Work 定义了基于哈希现金的工作量证明机制。"
      }
    ],
    "examples": [
      {
        "en": "The proof-of-work is essentially one-CPU-one-vote.",
        "zh": "工作量证明本质上是“一 CPU 一票”。",
        "context": "白皮书第 4 节原句。"
      },
      {
        "en": "Miners vary the nonce until the block hash meets the difficulty target.",
        "zh": "矿工不断改变 nonce，直到区块哈希满足难度目标。",
        "context": "说明 PoW 的实际计算过程。"
      }
    ],
    "related_terms": ["block", "hash", "nonce", "longest chain"],
    "tags": ["consensus", "mining", "basic"]
  },
  {
    "id": "nonce",
    "order": 9,
    "term": "nonce",
    "term_zh": "随机数",
    "aliases": ["number used once"],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In proof-of-work systems, a nonce is an arbitrary number that miners vary repeatedly until the resulting block hash satisfies the required target.",
    "definition_zh": "在工作量证明系统中，nonce 是一个任意数字，矿工反复改变它，直到得到的区块哈希满足要求的目标。",
    "notes_zh": "Nonce 字面意思是“number used once”，但在比特币挖矿中它更像一个被不断尝试的计数器；它是区块头字段之一。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节描述了通过改变输入来寻找满足目标的哈希，即 PoW 过程。"
      },
      {
        "title": "Block header",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Block_header",
        "accessed": "2026-11-06",
        "note": "比特币区块头字段列表包含 nonce，矿工在挖矿时调整该字段。"
      }
    ],
    "examples": [
      {
        "en": "Miners increment the nonce until the block hash has enough leading zeros.",
        "zh": "矿工递增 nonce，直到区块哈希具有足够多的前导零。",
        "context": "PoW 挖矿的常见实现方式。"
      },
      {
        "en": "Changing the nonce changes the block hash but not the transactions.",
        "zh": "改变 nonce 会改变区块哈希，但不会改变交易内容。",
        "context": "说明 nonce 位于区块头而非交易体中。"
      }
    ],
    "related_terms": ["proof-of-work", "block", "hash", "difficulty"],
    "tags": ["consensus", "mining", "crypto"]
  },
  {
    "id": "longest-chain",
    "order": 10,
    "term": "longest chain",
    "term_zh": "最长链",
    "aliases": ["longest-chain rule"],
    "part_of_speech": "noun phrase",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "The longest chain is the blockchain branch with the greatest cumulative proof-of-work; nodes treat it as the valid history because it is the most expensive to rewrite.",
    "definition_zh": "最长链是累计工作量证明最大的区块链分支；节点把它当作有效历史，因为它是重写成本最高的分支。",
    "notes_zh": "最长链规则是比特币中最简单的共识规则：当出现分叉时，节点接受累计 PoW 最多的那条链。它不是“速度最快”，而是“最难被推翻”。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 5 节 Network 明确说明节点接受最长链作为离线期间发生情况的证明。"
      }
    ],
    "examples": [
      {
        "en": "Nodes accept the longest chain as proof of what happened while they were offline.",
        "zh": "节点接受最长链作为其离线期间所发生情况的证明。",
        "context": "白皮书第 5 节原句。"
      },
      {
        "en": "A fork is resolved when one branch accumulates more proof-of-work.",
        "zh": "当某个分支累积更多工作量证明时，分叉就会被解决。",
        "context": "说明最长链规则如何处理分叉。"
      }
    ],
    "related_terms": ["block", "proof-of-work", "consensus", "fork"],
    "tags": ["consensus", "fork", "basic"]
  }
];
