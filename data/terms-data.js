// Terminology dataset.
// Curated terms for blockchain beginners: rigorous definitions, citations, bilingual examples.
// Schema: { id, order, term, term_zh, aliases, part_of_speech, category, level, status,
//           definition_en, definition_zh, notes_zh, citations[], examples[], related_terms[], tags[] }
// citations[]: { title, publisher, url, accessed, note }
// examples[]: { en, zh, context }

window.TERMINOLOGY_TERMS = [
  {
    "id": "blockchain",
    "order": 1,
    "term": "blockchain",
    "term_zh": "区块链",
    "aliases": [
      "block chain"
    ],
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
    "related_terms": [
      "block",
      "chain",
      "distributed ledger",
      "consensus",
      "cryptographic hash"
    ],
    "tags": [
      "origin",
      "basic",
      "ledger"
    ]
  },
  {
    "id": "peer-to-peer",
    "order": 2,
    "term": "peer-to-peer",
    "term_zh": "点对点",
    "aliases": [
      "P2P",
      "peer to peer"
    ],
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
    "related_terms": [
      "node",
      "network",
      "distributed ledger",
      "blockchain"
    ],
    "tags": [
      "origin",
      "network",
      "basic"
    ]
  },
  {
    "id": "timestamp",
    "order": 3,
    "term": "timestamp",
    "term_zh": "时间戳",
    "aliases": [
      "digital timestamp",
      "timestamp server"
    ],
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
    "related_terms": [
      "block",
      "hash",
      "proof-of-work",
      "transaction"
    ],
    "tags": [
      "origin",
      "time",
      "basic"
    ]
  },
  {
    "id": "transaction",
    "order": 4,
    "term": "transaction",
    "term_zh": "交易",
    "aliases": [
      "tx"
    ],
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
    "related_terms": [
      "block",
      "digital signature",
      "hash",
      "public key"
    ],
    "tags": [
      "origin",
      "transaction",
      "basic"
    ]
  },
  {
    "id": "block",
    "order": 5,
    "term": "block",
    "term_zh": "区块",
    "aliases": [
      "block header"
    ],
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
    "related_terms": [
      "blockchain",
      "transaction",
      "timestamp",
      "proof-of-work"
    ],
    "tags": [
      "origin",
      "block",
      "basic"
    ]
  },
  {
    "id": "hash",
    "order": 6,
    "term": "hash",
    "term_zh": "哈希",
    "aliases": [
      "cryptographic hash",
      "hash function"
    ],
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
    "related_terms": [
      "block",
      "transaction",
      "proof-of-work",
      "SHA-256"
    ],
    "tags": [
      "crypto",
      "integrity",
      "basic"
    ]
  },
  {
    "id": "digital-signature",
    "order": 7,
    "term": "digital signature",
    "term_zh": "数字签名",
    "aliases": [
      "signature"
    ],
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
    "related_terms": [
      "transaction",
      "public key",
      "private key",
      "hash"
    ],
    "tags": [
      "crypto",
      "authorization",
      "basic"
    ]
  },
  {
    "id": "proof-of-work",
    "order": 8,
    "term": "proof-of-work",
    "term_zh": "工作量证明",
    "aliases": [
      "PoW"
    ],
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
    "related_terms": [
      "block",
      "hash",
      "nonce",
      "longest chain"
    ],
    "tags": [
      "consensus",
      "mining",
      "basic"
    ]
  },
  {
    "id": "nonce",
    "order": 9,
    "term": "nonce",
    "term_zh": "随机数",
    "aliases": [
      "number used once"
    ],
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
    "related_terms": [
      "proof-of-work",
      "block",
      "hash",
      "difficulty"
    ],
    "tags": [
      "consensus",
      "mining",
      "crypto"
    ]
  },
  {
    "id": "longest-chain",
    "order": 10,
    "term": "longest chain",
    "term_zh": "最长链",
    "aliases": [
      "longest-chain rule"
    ],
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
    "related_terms": [
      "block",
      "proof-of-work",
      "consensus",
      "fork"
    ],
    "tags": [
      "consensus",
      "fork",
      "basic"
    ]
  },
  {
    "id": "difficulty",
    "order": 11,
    "term": "difficulty",
    "term_zh": "难度",
    "aliases": [
      "mining difficulty",
      "target"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Difficulty is a measure of how hard it is to find a valid proof-of-work for a block; it is adjusted over time so that blocks are produced at a roughly stable rate.",
    "definition_zh": "难度衡量找到有效工作量证明有多困难；它会随时间调整，使区块产生速度大致稳定。",
    "notes_zh": "在比特币中，区块哈希必须小于目标值；目标值越低，难度越高。难度会按固定周期根据出块速度调整。",
    "citations": [
      {
        "title": "Difficulty",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Difficulty",
        "accessed": "2026-11-06",
        "note": "解释比特币难度、目标值以及按出块速度调整难度的机制。"
      }
    ],
    "examples": [
      {
        "en": "The network adjusts difficulty so that blocks are found roughly every ten minutes.",
        "zh": "网络调整难度，使区块大约每十分钟被找到一次。",
        "context": "Bitcoin Wiki Difficulty。"
      },
      {
        "en": "A lower target means higher difficulty.",
        "zh": "目标值越低，难度越高。",
        "context": "说明难度与目标值的关系。"
      }
    ],
    "related_terms": [
      "proof-of-work",
      "nonce",
      "block",
      "miner"
    ],
    "tags": [
      "mining",
      "consensus",
      "basic"
    ]
  },
  {
    "id": "merkle-tree",
    "order": 12,
    "term": "merkle tree",
    "term_zh": "默克尔树",
    "aliases": [
      "hash tree",
      "Merkle root"
    ],
    "part_of_speech": "noun",
    "category": "Cryptography / 密码学",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A Merkle tree is a binary hash tree in which every leaf is a hash of a data block and every parent node is the hash of its children; the root commits to all leaves with a single hash.",
    "definition_zh": "默克尔树是一种二叉哈希树：每个叶子是数据块的哈希，每个父节点是其子节点的哈希；根哈希用一个哈希承诺所有叶子。",
    "notes_zh": "在比特币中，交易被哈希成默克尔树，默克尔根写入区块头；这使轻节点可以用较少数据验证交易是否被包含。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书描述交易被哈希进默克尔树，根哈希进入区块头。"
      },
      {
        "title": "Merkle tree",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Merkle_tree",
        "accessed": "2026-11-06",
        "note": "用于核对默克尔树的通用结构与性质。"
      }
    ],
    "examples": [
      {
        "en": "The Merkle root lets a node verify that a transaction is included in a block without downloading all transactions.",
        "zh": "默克尔根让节点无需下载所有交易即可验证某交易是否包含在区块中。",
        "context": "说明 Merkle tree 的用途。"
      },
      {
        "en": "Changing one transaction changes the Merkle root and therefore the block hash.",
        "zh": "更改一笔交易会改变默克尔根，进而改变区块哈希。",
        "context": "说明默克尔树与区块完整性的关系。"
      }
    ],
    "related_terms": [
      "block",
      "hash",
      "transaction",
      "proof-of-work"
    ],
    "tags": [
      "crypto",
      "data-structure",
      "basic"
    ]
  },
  {
    "id": "mempool",
    "order": 13,
    "term": "mempool",
    "term_zh": "交易池",
    "aliases": [
      "memory pool",
      "transaction pool"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A mempool is the set of transactions that have been broadcast to the network but not yet included in a block.",
    "definition_zh": "交易池（mempool）是指已广播到网络但尚未被打包进区块的交易集合。",
    "notes_zh": "交易池不是单一的全局队列；每个节点维护自己的交易池视图，并按本地策略选择交易打包。",
    "citations": [
      {
        "title": "Mempool",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Mempool",
        "accessed": "2026-11-06",
        "note": "解释 mempool 是节点保存的待确认交易集合。"
      }
    ],
    "examples": [
      {
        "en": "A transaction waits in the mempool until a miner includes it in a block.",
        "zh": "交易会一直留在交易池中，直到矿工把它打包进区块。",
        "context": "Bitcoin Wiki Mempool。"
      },
      {
        "en": "The mempool is not a single global queue; each node has its own view.",
        "zh": "交易池不是单一的全局队列；每个节点都有自己的视图。",
        "context": "说明交易池的分布式性质。"
      }
    ],
    "related_terms": [
      "transaction",
      "block",
      "miner",
      "mining reward"
    ],
    "tags": [
      "transaction",
      "network",
      "basic"
    ]
  },
  {
    "id": "miner",
    "order": 14,
    "term": "miner",
    "term_zh": "矿工",
    "aliases": [
      "mining node"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A miner is a network participant that collects transactions, builds candidate blocks, and performs proof-of-work to extend the blockchain.",
    "definition_zh": "矿工是收集交易、构建候选区块并执行工作量证明以延长区块链的网络参与者。",
    "notes_zh": "“Miner”更精确地说是运行挖矿软件的节点；奖励支付到 coinbase 交易指定的地址，而不是必须对应某个自然人。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节描述节点通过 PoW 把交易打包成区块并广播。"
      },
      {
        "title": "Mining",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Mining",
        "accessed": "2026-11-06",
        "note": "解释挖矿节点如何收集交易、构建区块并竞争有效哈希。"
      }
    ],
    "examples": [
      {
        "en": "A miner packages pending transactions into a block and searches for a valid nonce.",
        "zh": "矿工把待处理交易打包成区块，并搜索有效的 nonce。",
        "context": "白皮书 PoW 过程。"
      },
      {
        "en": "The first transaction in a block pays the miner.",
        "zh": "区块中的第一笔交易支付给矿工。",
        "context": "白皮书第 4 节对创世交易的描述。"
      }
    ],
    "related_terms": [
      "proof-of-work",
      "nonce",
      "difficulty",
      "mining reward"
    ],
    "tags": [
      "mining",
      "consensus",
      "basic"
    ]
  },
  {
    "id": "mining-reward",
    "order": 15,
    "term": "mining reward",
    "term_zh": "挖矿奖励",
    "aliases": [
      "block reward",
      "coinbase reward"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "The mining reward is the newly created coins plus transaction fees awarded to the miner who successfully adds a block to the blockchain.",
    "definition_zh": "挖矿奖励是奖励给成功把区块加入区块链的矿工的新产生币和交易手续费。",
    "notes_zh": "在比特币中，奖励通过 coinbase 交易支付；补贴会随发行计划逐渐减少，手续费则来自被打包交易。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节说明区块第一笔交易会开启归区块创建者所有的新币。"
      },
      {
        "title": "Block reward",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Block_reward",
        "accessed": "2026-11-06",
        "note": "解释区块奖励由新币补贴和交易手续费组成，并随减半周期变化。"
      }
    ],
    "examples": [
      {
        "en": "The miner receives the block reward through the coinbase transaction.",
        "zh": "矿工通过 coinbase 交易获得区块奖励。",
        "context": "白皮书第 4 节。"
      },
      {
        "en": "Transaction fees are added to the block reward.",
        "zh": "交易手续费会加到区块奖励中。",
        "context": "区块奖励的组成部分。"
      }
    ],
    "related_terms": [
      "miner",
      "coinbase transaction",
      "transaction fee",
      "block"
    ],
    "tags": [
      "mining",
      "reward",
      "basic"
    ]
  },
  {
    "id": "public-key",
    "term": "public key",
    "term_zh": "公钥",
    "aliases": [
      "pubkey"
    ],
    "part_of_speech": "noun",
    "category": "Keys & Addresses / 密钥与地址",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A public key is the publicly shareable part of an asymmetric key pair; in Bitcoin it is used to verify digital signatures and, after hashing, to derive payment addresses.",
    "definition_zh": "公钥是非对称密钥对中可公开分享的部分；在比特币中，它用于验证数字签名，并在哈希后派生付款地址。",
    "notes_zh": "公钥不是地址本身；地址通常由公钥哈希派生。任何人都可以持有公钥来验证签名，但不能用它伪造签名。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 3 节提到转移币时加入下一所有者的公钥，并用签名验证所有权链。"
      },
      {
        "title": "Public key",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Public_key",
        "accessed": "2026-11-06",
        "note": "用于核对公钥在非对称加密中的通用定义。"
      }
    ],
    "examples": [
      {
        "en": "The next owner's public key is added to the end of the coin.",
        "zh": "下一所有者的公钥被添加到币的末尾。",
        "context": "白皮书第 3 节 Transactions。"
      },
      {
        "en": "A public key can verify a signature but cannot create it.",
        "zh": "公钥可以验证签名，但不能创建签名。",
        "context": "说明公钥与私钥的分工。"
      }
    ],
    "related_terms": [
      "private key",
      "digital signature",
      "address",
      "hash"
    ],
    "tags": [
      "keys",
      "crypto",
      "basic"
    ],
    "order": 16
  },
  {
    "id": "private-key",
    "term": "private key",
    "term_zh": "私钥",
    "aliases": [
      "secret key"
    ],
    "part_of_speech": "noun",
    "category": "Keys & Addresses / 密钥与地址",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A private key is the secret part of an asymmetric key pair that can create digital signatures authorizing the spending of funds associated with the corresponding public key or address.",
    "definition_zh": "私钥是非对称密钥对中用于生成数字签名的秘密部分，可授权花费与对应公钥或地址关联的资金。",
    "notes_zh": "私钥必须保密；丢失通常意味着对应资金无法再花费。它不是“密码”，而是密码学密钥材料。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书用数字签名描述所有权转移，私钥是生成这些签名的秘密。"
      },
      {
        "title": "Private key",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Private_key",
        "accessed": "2026-11-06",
        "note": "用于核对私钥在非对称加密中的通用定义。"
      }
    ],
    "examples": [
      {
        "en": "Only the holder of the private key can create a satisfactory signature.",
        "zh": "只有私钥持有者才能创建有效签名。",
        "context": "Bitcoin Wiki Protocol documentation / Transaction 的表述。"
      },
      {
        "en": "Losing the private key can make funds unspendable.",
        "zh": "丢失私钥可能使资金无法花费。",
        "context": "说明私钥的安全与备份重要性。"
      }
    ],
    "related_terms": [
      "public key",
      "digital signature",
      "address",
      "wallet"
    ],
    "tags": [
      "keys",
      "crypto",
      "security"
    ],
    "order": 17
  },
  {
    "id": "address",
    "term": "address",
    "term_zh": "地址",
    "aliases": [
      "Bitcoin address",
      "payment address"
    ],
    "part_of_speech": "noun",
    "category": "Keys & Addresses / 密钥与地址",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In Bitcoin, an address is a user-facing identifier derived from a public key, typically a hash of it, that specifies where funds can be sent; spending from it requires the corresponding private key.",
    "definition_zh": "在比特币中，地址是从公钥派生（通常是公钥的哈希）得到的用户侧标识符，用于指定资金可发送到的位置；从中花费资金需要对应私钥。",
    "notes_zh": "地址不是私钥，也不是公钥本身；它更像“收款标识”。主网 P2PKH 地址通常以数字 1 开头。",
    "citations": [
      {
        "title": "Technical background of version 1 Bitcoin addresses",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses",
        "accessed": "2026-11-06",
        "note": "说明比特币地址是公钥部分的 160 位哈希，并使用 Base58Check 编码。"
      },
      {
        "title": "Using Bitcoin",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Using_Bitcoin",
        "accessed": "2026-11-06",
        "note": "说明用户可以为每笔交易创建新地址以保护隐私。"
      }
    ],
    "examples": [
      {
        "en": "A Bitcoin address is a 160-bit hash of the public portion of a keypair.",
        "zh": "比特币地址是密钥对公钥部分的 160 位哈希。",
        "context": "Bitcoin Wiki technical background。"
      },
      {
        "en": "You can create many addresses and use a new one for each transaction for privacy.",
        "zh": "你可以创建多个地址，并为每笔交易使用新地址以保护隐私。",
        "context": "Bitcoin Wiki Using Bitcoin。"
      }
    ],
    "related_terms": [
      "public key",
      "private key",
      "wallet",
      "hash"
    ],
    "tags": [
      "keys",
      "address",
      "basic"
    ],
    "order": 18
  },
  {
    "id": "transaction-fee",
    "term": "transaction fee",
    "term_zh": "交易手续费",
    "aliases": [
      "miner fee",
      "tx fee"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A transaction fee is the optional amount, equal to inputs minus outputs, that a spender adds to incentivize miners to include the transaction in a block.",
    "definition_zh": "交易手续费是花费者额外加入的可选金额（等于输入减输出），用于激励矿工把该交易打包进区块。",
    "notes_zh": "手续费不是付给固定机构；实际打包该交易的矿工可以通过 coinbase 交易领取。实践中更关键的是“费率”（每 vbyte 手续费）。",
    "citations": [
      {
        "title": "Miner fees",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Miner_fees",
        "accessed": "2026-11-06",
        "note": "解释交易手续费等于输入与输出之差，并由打包矿工收取。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-06",
        "note": "说明未被输出兑现的输入金额会成为交易手续费。"
      }
    ],
    "examples": [
      {
        "en": "The difference between inputs and outputs is the transaction fee.",
        "zh": "输入与输出之间的差额就是交易手续费。",
        "context": "Bitcoin Wiki Transaction / Miner fees。"
      },
      {
        "en": "A higher fee rate improves the chance of faster confirmation.",
        "zh": "更高的费率会提高更快被确认的概率。",
        "context": "Miner fees 对 fee rate 的说明。"
      }
    ],
    "related_terms": [
      "transaction",
      "mempool",
      "miner",
      "mining reward"
    ],
    "tags": [
      "transaction",
      "fee",
      "basic"
    ],
    "order": 19
  },
  {
    "id": "coinbase-transaction",
    "term": "coinbase transaction",
    "term_zh": "coinbase 交易",
    "aliases": [
      "generation transaction"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "The coinbase transaction is the first transaction in a block; it has no inputs and creates newly issued coins plus collected transaction fees for the miner.",
    "definition_zh": "coinbase 交易是区块中的第一笔交易；它没有输入，负责创建新发行的币并把收集到的交易手续费支付给矿工。",
    "notes_zh": "coinbase 交易也叫 generation transaction；在比特币中，它是唯一允许凭空创建新币的交易。",
    "citations": [
      {
        "title": "Coinbase",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Coinbase",
        "accessed": "2026-11-06",
        "note": "解释 coinbase/generation transaction 没有父交易，负责创建新区块奖励。"
      },
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书第 4 节说明区块第一笔交易会开启归区块创建者所有的新币。"
      }
    ],
    "examples": [
      {
        "en": "The first transaction in a block is a special transaction that starts a new coin owned by the creator of the block.",
        "zh": "区块中的第一笔交易是一笔特殊交易，它开启了归区块创建者所有的新币。",
        "context": "白皮书第 4 节原意。"
      },
      {
        "en": "The coinbase transaction has no inputs and pays the block reward plus fees.",
        "zh": "coinbase 交易没有输入，支付区块奖励和手续费。",
        "context": "Bitcoin Wiki Coinbase / Protocol documentation。"
      }
    ],
    "related_terms": [
      "mining reward",
      "transaction fee",
      "block",
      "miner"
    ],
    "tags": [
      "mining",
      "transaction",
      "basic"
    ],
    "order": 20
  },
  {
    "id": "confirmation",
    "term": "confirmation",
    "term_zh": "确认",
    "aliases": [
      "confirmations",
      "block confirmation"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A confirmation is each subsequent block added after the block containing a transaction; merchants often wait for a threshold number of confirmations before treating a payment as final.",
    "definition_zh": "确认是指交易所在区块之后又被添加的区块数量；商家通常等待达到一定确认数后才把付款视为最终。",
    "notes_zh": "0 确认交易仍可能被双花或竞态攻击反转；“6 确认”只是常见默认值，不是协议强制值。",
    "citations": [
      {
        "title": "Confirmation",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Confirmation",
        "accessed": "2026-11-06",
        "note": "解释确认数、0/unconfirmed 风险以及 6 确认默认值的由来。"
      },
      {
        "title": "Irreversible Transactions",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Irreversible_Transactions",
        "accessed": "2026-11-06",
        "note": "说明等待确认是防范双花的主要手段。"
      }
    ],
    "examples": [
      {
        "en": "A transaction with 0/unconfirmed can still be reversed by a conflicting transaction.",
        "zh": "0 确认的交易仍可能被一笔冲突交易反转。",
        "context": "Confirmation / Irreversible Transactions。"
      },
      {
        "en": "Most exchanges require 6 or more confirmations.",
        "zh": "多数交易所要求 6 个或更多确认。",
        "context": "Confirmation 页面对默认值的说明。"
      }
    ],
    "related_terms": [
      "transaction",
      "block",
      "double-spending",
      "fork"
    ],
    "tags": [
      "consensus",
      "finality",
      "basic"
    ],
    "order": 21
  },
  {
    "id": "fork",
    "term": "fork",
    "term_zh": "分叉",
    "aliases": [
      "chain fork",
      "blockchain fork"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A fork is a split in the blockchain in which two or more blocks exist at the same height or competing chains diverge; the longest valid chain eventually becomes the accepted history.",
    "definition_zh": "分叉是区块链在同一高度出现两个或更多区块、或竞争链分岔的情形；最终最长的有效链成为被接受的历史。",
    "notes_zh": "并非所有分叉都是攻击：两个区块相隔几秒生成时也会偶然出现一个区块分叉。hard fork/soft fork 是协议变更，与 chain fork 不同。",
    "citations": [
      {
        "title": "Block chain",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Block_chain",
        "accessed": "2026-11-06",
        "note": "说明创世块到当前块可分叉，较短链中的区块不会被使用。"
      },
      {
        "title": "Scalability FAQ",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Scalability_FAQ",
        "accessed": "2026-11-06",
        "note": "区分 hard fork、soft fork、chain fork、software fork 等容易混淆的术语。"
      }
    ],
    "examples": [
      {
        "en": "One-block forks are created from time to time when two blocks are created just a few seconds apart.",
        "zh": "当两个区块相隔几秒被创建时，偶尔会出现一个区块的分叉。",
        "context": "Block chain 页面。"
      },
      {
        "en": "Nodes build onto whichever block they received first until a longer chain emerges.",
        "zh": "在更长链出现之前，节点会在先收到的区块上继续构建。",
        "context": "说明分叉期间节点的行为。"
      }
    ],
    "related_terms": [
      "block",
      "longest chain",
      "reorganization",
      "confirmation"
    ],
    "tags": [
      "consensus",
      "fork",
      "basic"
    ],
    "order": 22
  },
  {
    "id": "reorganization",
    "term": "reorganization",
    "term_zh": "重组",
    "aliases": [
      "reorg",
      "chain reorganization"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A reorganization (reorg) occurs when a node switches from one chain to a longer competing chain, invalidating blocks and transactions that are not included in the new chain.",
    "definition_zh": "重组（reorg）是指节点从一条链切换到更长的竞争链，使不在新链中的区块和交易失效。",
    "notes_zh": "确认数越深，发生重组的概率越低；重组会改变交易确认数，并可能使旧链交易重新变为 0 确认。",
    "citations": [
      {
        "title": "Vocabulary",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Vocabulary",
        "accessed": "2026-11-06",
        "note": "Reorganize 词条解释链重组会使旧块成为 orphan blocks、交易回到 0/unconfirmed。"
      },
      {
        "title": "Block chain",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Block_chain",
        "accessed": "2026-11-06",
        "note": "说明较短链或无效链中的区块不会被使用。"
      }
    ],
    "examples": [
      {
        "en": "After a reorg, transactions not in the new chain become 0/unconfirmed again.",
        "zh": "重组后，不在新链中的交易会重新变为 0 确认。",
        "context": "Bitcoin Wiki Vocabulary。"
      },
      {
        "en": "Blocks in shorter chains are not used for anything.",
        "zh": "较短链中的区块不会被使用。",
        "context": "Block chain 页面。"
      }
    ],
    "related_terms": [
      "fork",
      "longest chain",
      "confirmation",
      "orphan block"
    ],
    "tags": [
      "consensus",
      "fork",
      "basic"
    ],
    "order": 23
  },
  {
    "id": "double-spending",
    "term": "double-spending",
    "term_zh": "双花",
    "aliases": [
      "double spend"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Double-spending is the attempt to spend the same bitcoin more than once by creating conflicting transactions that spend the same output.",
    "definition_zh": "双花是指通过创建花费同一输出的冲突交易，尝试把同一笔比特币花费不止一次。",
    "notes_zh": "工作量证明和确认数让成功双花代价很高；商家在高风险场景应等待足够确认。",
    "citations": [
      {
        "title": "Irreversible Transactions",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Irreversible_Transactions",
        "accessed": "2026-11-06",
        "note": "解释 race attack 等双花手法以及等待确认的防护作用。"
      },
      {
        "title": "Vocabulary",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Vocabulary",
        "accessed": "2026-11-06",
        "note": "Double-Spending 定义为尝试花费已经在另一笔交易中花费的币。"
      }
    ],
    "examples": [
      {
        "en": "The fraudster sends a transaction paying the merchant and a conflicting transaction spending the same coin to himself.",
        "zh": "欺诈者一边给商家付款，一边把同一币的冲突交易发给自己。",
        "context": "Irreversible Transactions 中的 race attack。"
      },
      {
        "en": "Waiting for confirmations protects against double spending.",
        "zh": "等待确认可以防范双花。",
        "context": "Irreversible Transactions 的核心结论。"
      }
    ],
    "related_terms": [
      "transaction",
      "confirmation",
      "utxo",
      "fork"
    ],
    "tags": [
      "security",
      "transaction",
      "basic"
    ],
    "order": 24
  },
  {
    "id": "wallet",
    "term": "wallet",
    "term_zh": "钱包",
    "aliases": [
      "bitcoin wallet",
      "crypto wallet"
    ],
    "part_of_speech": "noun",
    "category": "Keys & Addresses / 密钥与地址",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A wallet is software or hardware that manages private keys and can create, sign, and broadcast transactions; in common usage it may also refer to the collection of keys and addresses it controls.",
    "definition_zh": "钱包是管理私钥并能创建、签名和广播交易的软件或硬件；口语中也可指它控制的一组密钥和地址。",
    "notes_zh": "钱包并不把币“存”在服务器上；它管理的是控制 UTXO 的密钥。丢失密钥通常意味着丢失资金。",
    "citations": [
      {
        "title": "Wallet",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Wallet",
        "accessed": "2026-11-06",
        "note": "定义钱包为私钥集合及管理这些密钥的软件。"
      },
      {
        "title": "UTXO",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/UTXO",
        "accessed": "2026-11-06",
        "note": "说明钱包余额是其私钥控制的 UTXO 之和。"
      }
    ],
    "examples": [
      {
        "en": "A Bitcoin wallet is a collection of private keys and the software used to manage them.",
        "zh": "比特币钱包是一组私钥以及用于管理它们的软件。",
        "context": "Bitcoin Wiki Wallet。"
      },
      {
        "en": "Your wallet balance is the sum of the UTXOs controlled by its private keys.",
        "zh": "你的钱包余额是其私钥控制的 UTXO 之和。",
        "context": "UTXO 页面。"
      }
    ],
    "related_terms": [
      "private key",
      "public key",
      "address",
      "utxo"
    ],
    "tags": [
      "wallet",
      "keys",
      "basic"
    ],
    "order": 25
  },
  {
    "id": "utxo",
    "term": "UTXO",
    "term_zh": "未花费交易输出",
    "aliases": [
      "unspent transaction output",
      "unspent txo"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A UTXO (unspent transaction output) is an output of a previous transaction that has not yet been spent; Bitcoin balances are the sum of UTXOs controlled by a wallet's keys.",
    "definition_zh": "UTXO（未花费交易输出）是指前一笔交易尚未被花费的输出；比特币余额就是钱包密钥控制的 UTXO 之和。",
    "notes_zh": "比特币使用 UTXO 模型而不是账户余额；花费会消费整个输出，并通常产生找零输出。",
    "citations": [
      {
        "title": "UTXO",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/UTXO",
        "accessed": "2026-11-06",
        "note": "定义 UTXO 并说明钱包余额是受控 UTXO 的总和。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-06",
        "note": "说明交易输入引用先前输出，输出又可被后续交易引用。"
      }
    ],
    "examples": [
      {
        "en": "Every on-chain bitcoin transaction sends bitcoin to one or more addresses from at least zero addresses.",
        "zh": "每笔链上比特币交易都从至少零个地址向一个或多个地址发送比特币。",
        "context": "UTXO 页面。"
      },
      {
        "en": "A bitcoin wallet balance is actually the sum of the UTXOs controlled by the wallet's private keys.",
        "zh": "比特币钱包余额实际上是其私钥控制的 UTXO 之和。",
        "context": "UTXO 页面。"
      }
    ],
    "related_terms": [
      "transaction",
      "wallet",
      "address",
      "script"
    ],
    "tags": [
      "transaction",
      "utxo",
      "basic"
    ],
    "order": 26
  },
  {
    "id": "consensus",
    "term": "consensus",
    "term_zh": "共识",
    "aliases": [
      "Nakamoto consensus"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In Bitcoin, consensus refers to the rules and mechanism by which nodes agree on the valid block chain; the longest proof-of-work chain is treated as the valid history.",
    "definition_zh": "在比特币中，共识指节点就有效区块链达成一致的规则与机制；最长的工作量证明链被视为有效历史。",
    "notes_zh": "Bitcoin Wiki 提醒“consensus”一词有歧义；这里指协议共识规则与最长链规则，而不是泛泛的社会共识。",
    "citations": [
      {
        "title": "Consensus",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Consensus",
        "accessed": "2026-11-06",
        "note": "区分 consensus rules、near-unanimity 等不同含义，并指出该词容易误用。"
      },
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "白皮书说明最长 PoW 链作为所见事件顺序的证明。"
      }
    ],
    "examples": [
      {
        "en": "Nodes express acceptance of the block by working on creating the next block in the chain.",
        "zh": "节点通过在链上构建下一个区块来表达对该区块的接受。",
        "context": "白皮书第 3 节网络步骤。"
      },
      {
        "en": "The longest chain serves as proof of the sequence of events witnessed.",
        "zh": "最长链作为所见事件顺序的证明。",
        "context": "白皮书摘要。"
      }
    ],
    "related_terms": [
      "longest chain",
      "proof-of-work",
      "fork",
      "block"
    ],
    "tags": [
      "consensus",
      "protocol",
      "basic"
    ],
    "order": 27
  },
  {
    "id": "halving",
    "term": "halving",
    "term_zh": "减半",
    "aliases": [
      "block reward halving",
      "subsidy halving"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Halving is the scheduled 50% reduction of the block reward that occurs roughly every 210,000 blocks (about four years), slowing the issuance of new bitcoins.",
    "definition_zh": "减半是区块奖励按计划大约每 210,000 个区块（约四年）减少 50%，从而放慢新比特币的发行。",
    "notes_zh": "受控供应使总量略低于 2100 万枚；由于出块时间会波动，减半的具体日期并不固定。",
    "citations": [
      {
        "title": "Controlled supply",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Controlled_supply",
        "accessed": "2026-11-06",
        "note": "说明区块奖励每 210,000 块减半，总供应接近但不超过 2100 万。"
      },
      {
        "title": "Block",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Block",
        "accessed": "2026-11-06",
        "note": "说明区块奖励随时间减半，创世奖励为 50 BTC。"
      }
    ],
    "examples": [
      {
        "en": "The number of bitcoins generated per block is set to decrease geometrically, with a 50% reduction every 210,000 blocks.",
        "zh": "每个区块生成的比特币数量按几何级数下降，每 210,000 个区块减少 50%。",
        "context": "Controlled supply。"
      },
      {
        "en": "The block reward was 50 BTC at launch and is halved over time.",
        "zh": "创世时区块奖励为 50 BTC，并随时间减半。",
        "context": "Block 页面。"
      }
    ],
    "related_terms": [
      "mining reward",
      "miner",
      "block",
      "difficulty"
    ],
    "tags": [
      "issuance",
      "mining",
      "basic"
    ],
    "order": 28
  },
  {
    "id": "hashrate",
    "term": "hashrate",
    "term_zh": "算力",
    "aliases": [
      "hash rate",
      "network hashrate"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Hashrate is the number of hash computations performed per second; for Bitcoin it measures mining performance and, aggregated across the network, the total computational power securing the chain.",
    "definition_zh": "算力（hashrate）是每秒执行的哈希计算次数；对比特币而言，它衡量挖矿性能，聚合到全网则表示保护链的总计算能力。",
    "notes_zh": "全网算力不能直接观测，通常根据出块间隔和难度估算；它与难度调整共同决定出块速度。",
    "citations": [
      {
        "title": "Hash per second",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Hash_per_second",
        "accessed": "2026-11-06",
        "note": "定义 hash/s 为每秒双 SHA-256 计算次数，并说明其用于矿工性能与全网估算。"
      },
      {
        "title": "Difficulty",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Difficulty",
        "accessed": "2026-11-06",
        "note": "说明难度按出块时间调整，并与算力估算相关。"
      }
    ],
    "examples": [
      {
        "en": "The hash rate is the primary measure of a Bitcoin miner's performance.",
        "zh": "哈希率是衡量比特币矿工性能的主要指标。",
        "context": "Hash per second 页面。"
      },
      {
        "en": "The overall hash rate of the network is calculated based on the time between blocks.",
        "zh": "全网算力是根据区块间隔时间估算的。",
        "context": "Hash per second 页面。"
      }
    ],
    "related_terms": [
      "miner",
      "difficulty",
      "proof-of-work",
      "block"
    ],
    "tags": [
      "mining",
      "metrics",
      "basic"
    ],
    "order": 29
  },
  {
    "id": "script",
    "term": "script",
    "term_zh": "脚本",
    "aliases": [
      "Bitcoin script",
      "scriptPubKey",
      "scriptSig"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Bitcoin script is a small, stack-based, Forth-like scripting system used to define the conditions under which transaction outputs can be spent.",
    "definition_zh": "比特币脚本是一种小型、基于栈、类似 Forth 的脚本系统，用于定义交易输出在什么条件下可以被花费。",
    "notes_zh": "比特币脚本故意不是图灵完备的；典型 P2PKH 输出要求签名和公钥哈希满足 scriptPubKey。",
    "citations": [
      {
        "title": "Script",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Script",
        "accessed": "2026-11-06",
        "note": "解释脚本是随交易记录的指令列表，用于约束后续花费条件。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-06",
        "note": "说明 scriptSig 与 scriptPubKey 被求值以授权花费。"
      }
    ],
    "examples": [
      {
        "en": "A script is essentially a list of instructions recorded with each transaction that describe how the next person can gain access to the bitcoins.",
        "zh": "脚本本质上是一组记录在交易中的指令，描述下一个想花费这些比特币的人需要满足什么条件。",
        "context": "Script 页面。"
      },
      {
        "en": "The input's scriptSig and the referenced output's scriptPubKey are evaluated to authorize spending.",
        "zh": "输入的 scriptSig 与被引用输出的 scriptPubKey 会被求值，以授权花费。",
        "context": "Transaction 页面。"
      }
    ],
    "related_terms": [
      "transaction",
      "utxo",
      "public key",
      "digital signature"
    ],
    "tags": [
      "script",
      "transaction",
      "advanced-basic"
    ],
    "order": 30
  },
  {
    "id": "trusted-third-party",
    "order": 31,
    "term": "trusted third party",
    "term_zh": "可信第三方",
    "aliases": [
      "TTP",
      "trusted intermediary"
    ],
    "part_of_speech": "noun phrase",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A trusted third party is an intermediary, such as a financial institution or a central mint, that both sides of a payment must rely on to process the transaction and prevent double-spending; the Bitcoin whitepaper proposes replacing this trust with cryptographic proof.",
    "definition_zh": "可信第三方是支付双方都必须依赖的中介（例如金融机构或中央铸币方），由它处理交易并防止双重支付；比特币白皮书提出用密码学证明取代这种信任。",
    "notes_zh": "白皮书并不是说密码学能消除一切信任，而是去掉“必须经过某个中心机构”这一点；系统安全转而依赖“诚实节点控制多数算力”的假设。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "Abstract 与第 1 节 Introduction：指出电子支付依赖金融机构作为可信第三方，并提出基于密码学证明而非信任的支付系统；第 2 节将中央铸币方（mint）作为对照方案。"
      }
    ],
    "examples": [
      {
        "en": "Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments.",
        "zh": "互联网商业几乎完全依赖金融机构充当可信第三方来处理电子支付。",
        "context": "比特币白皮书第 1 节 Introduction。"
      },
      {
        "en": "What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party.",
        "zh": "我们需要的是一种基于密码学证明而非信任的电子支付系统，让任意两个自愿的参与方无需可信第三方就能直接交易。",
        "context": "比特币白皮书第 1 节 Introduction。"
      }
    ],
    "related_terms": [
      "peer-to-peer",
      "double-spending",
      "digital signature",
      "consensus"
    ],
    "tags": [
      "origin",
      "trust",
      "whitepaper"
    ]
  },
  {
    "id": "one-cpu-one-vote",
    "order": 32,
    "term": "one-CPU-one-vote",
    "term_zh": "一 CPU 一票",
    "aliases": [
      "one CPU one vote"
    ],
    "part_of_speech": "noun phrase",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "One-CPU-one-vote is the Bitcoin whitepaper's description of proof-of-work as a voting rule: influence over the majority decision is proportional to computational power rather than to identities such as IP addresses, and the majority decision is represented by the longest chain, which has the greatest proof-of-work invested in it.",
    "definition_zh": "“一 CPU 一票”是比特币白皮书对工作量证明投票规则的描述：对多数决策的影响力与计算能力成正比，而不是与 IP 地址等身份数量成正比；多数决策由投入工作量证明最多的最长链来体现。",
    "notes_zh": "这里的“CPU”泛指算力，并非字面意义上的处理器个数；如今挖矿使用 ASIC，影响力按算力（hashrate）而非设备或节点数量计算。它的提出是为了抵御靠伪造大量身份（如分配大量 IP）来操纵投票的攻击。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "第 4 节 Proof-of-Work：对比 one-IP-address-one-vote 可被分配大量 IP 的人操纵，指出工作量证明本质上是 one-CPU-one-vote，多数决策由最长链体现。"
      }
    ],
    "examples": [
      {
        "en": "If the majority were based on one-IP-address-one-vote, it could be subverted by anyone able to allocate many IPs. Proof-of-work is essentially one-CPU-one-vote.",
        "zh": "如果多数决策基于“一个 IP 地址一票”，任何能分配大量 IP 的人都可以颠覆它。工作量证明本质上是“一 CPU 一票”。",
        "context": "比特币白皮书第 4 节 Proof-of-Work。"
      },
      {
        "en": "Under one-CPU-one-vote, running many nodes on one laptop does not add voting power; only additional hashing power does.",
        "zh": "在“一 CPU 一票”规则下，在一台笔记本上运行许多节点并不会增加投票权，只有增加算力才会。",
        "context": "解释工作量证明抗女巫攻击的场景。"
      }
    ],
    "related_terms": [
      "proof-of-work",
      "longest chain",
      "hashrate",
      "consensus"
    ],
    "tags": [
      "consensus",
      "proof-of-work",
      "whitepaper"
    ]
  },
  {
    "id": "pruning",
    "order": 33,
    "term": "pruning",
    "term_zh": "修剪",
    "aliases": [
      "reclaiming disk space",
      "blockchain pruning"
    ],
    "part_of_speech": "noun",
    "category": "Scaling / 扩容",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Pruning is discarding transaction data that is no longer needed once outputs are fully spent and buried under enough blocks; because transactions are hashed into a Merkle tree and only the root is included in the block's hash, old blocks can be compacted by stubbing off branches without breaking the block hash.",
    "definition_zh": "修剪是指在输出已被完全花费、且其所在区块之后已有足够多区块时，丢弃不再需要的交易数据；由于交易被哈希进默克尔树、只有根被纳入区块哈希，因此可以剪掉树的分支来压缩旧区块，而不会破坏区块哈希。",
    "notes_zh": "修剪只是节省本地存储，不改变共识规则，也不会删除网络中其他节点保存的数据；修剪后的节点仍需保留区块头和未花费输出等验证所需的数据。“Pruning”在白皮书第 7 节的图中出现，该节标题为 Reclaiming Disk Space。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "第 7 节 Reclaiming Disk Space：交易被埋在足够多区块之下后可丢弃已花费交易；Merkle 树只把根纳入区块哈希，旧区块可剪掉分支压缩（图示 After Pruning Tx0-2 from the Block）。"
      },
      {
        "title": "Scalability",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Scalability",
        "accessed": "2026-11-06",
        "note": "Storage 部分：说明白皮书描述的 pruning 可删除已完全花费交易的数据，使全验证节点只需保存当前未花费输出集及处理重组所需数据。"
      }
    ],
    "examples": [
      {
        "en": "Once the latest transaction in a coin is buried under enough blocks, the spent transactions before it can be discarded to save disk space.",
        "zh": "一旦某个币的最新交易被埋在足够多的区块之下，它之前已花费的交易就可以被丢弃以节省磁盘空间。",
        "context": "比特币白皮书第 7 节 Reclaiming Disk Space。"
      },
      {
        "en": "In Satoshi's paper he describes \"pruning\", a way to delete unnecessary data about transactions that are fully spent.",
        "zh": "中本聪在论文中描述了“修剪”，即删除关于已完全花费交易的不必要数据的方法。",
        "context": "Bitcoin Wiki Scalability 页面。"
      }
    ],
    "related_terms": [
      "merkle tree",
      "block",
      "utxo",
      "full node"
    ],
    "tags": [
      "storage",
      "scaling",
      "whitepaper"
    ]
  },
  {
    "id": "simplified-payment-verification",
    "order": 34,
    "term": "simplified payment verification",
    "term_zh": "简化支付验证",
    "aliases": [
      "SPV",
      "SPV client",
      "thin client"
    ],
    "part_of_speech": "noun phrase",
    "category": "Scaling / 扩容",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Simplified payment verification (SPV) is a method for verifying payments without running a full network node: the user keeps only the block headers of the longest proof-of-work chain and obtains the Merkle branch linking a transaction to the block it is timestamped in, which shows that the network has accepted it.",
    "definition_zh": "简化支付验证（SPV）是一种无需运行完整网络节点即可验证支付的方法：用户只保存最长工作量证明链的区块头，并获取把交易连接到其所在区块的默克尔分支，从而确认网络已接受该交易。",
    "notes_zh": "SPV 证明的是“交易被包含在某个高工作量区块中”，而不是“交易本身有效”；白皮书指出只要诚实节点控制网络它就可靠，但在攻击者算力占优时，SPV 用户可能被伪造交易欺骗。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "第 8 节 Simplified Payment Verification：用户只需保存最长链区块头并获取 Merkle 分支；在网络被攻击者压制时更脆弱。"
      },
      {
        "title": "Scalability",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Scalability",
        "accessed": "2026-11-06",
        "note": "Simplified payment verification 小节：SPV 客户端只下载区块头，检查区块头相连且难度足够高，并通过 Merkle 分支证明交易被包含。"
      }
    ],
    "examples": [
      {
        "en": "It is possible to verify payments without running a full network node.",
        "zh": "不运行完整网络节点也可以验证支付。",
        "context": "比特币白皮书第 8 节 Simplified Payment Verification。"
      },
      {
        "en": "In SPV mode, clients connect to an arbitrary full node and download only the block headers.",
        "zh": "在 SPV 模式下，客户端连接任意一个全节点，并且只下载区块头。",
        "context": "Bitcoin Wiki Scalability 页面。"
      }
    ],
    "related_terms": [
      "merkle tree",
      "block",
      "longest chain",
      "full node"
    ],
    "tags": [
      "spv",
      "verification",
      "whitepaper"
    ]
  },
  {
    "id": "51-percent-attack",
    "order": 35,
    "term": "51% attack",
    "term_zh": "51% 攻击",
    "aliases": [
      "majority attack",
      ">50% attack"
    ],
    "part_of_speech": "noun phrase",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A 51% attack (majority attack) is an attack in which an attacker controlling more than half of the network's hashrate privately mines an alternate chain that outpaces the honest chain, allowing the attacker to reverse their own recent transactions (double-spend) and to exclude or reorder transactions while in control.",
    "definition_zh": "51% 攻击（多数攻击）是指攻击者控制超过一半的全网算力，私下挖出一条比诚实链增长更快的替代链，从而在控制期间撤销自己最近的交易（双重支付），并排除或重排交易。",
    "notes_zh": "51% 攻击者不能凭空造币、不能花费不属于自己的币、也不能改变区块奖励，因为诚实节点不会接受包含无效交易的区块。白皮书第 11 节表明，算力少于一半的攻击者追上诚实链的概率随落后区块数呈指数下降；超过一半时则最终必然成功。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-06",
        "note": "第 11 节 Calculations：分析攻击者生成比诚实链更快的替代链，指出攻击者只能尝试改回自己的交易，并用赌徒破产模型计算追上的概率。"
      },
      {
        "title": "Majority attack",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Majority_attack",
        "accessed": "2026-11-06",
        "note": "定义 majority attack（通常称 51% attack），并说明攻击者控制过半算力时成功概率为 100%。"
      },
      {
        "title": "Weaknesses",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Weaknesses",
        "accessed": "2026-11-06",
        "note": "Attacker has a lot of computing power 小节：列出控制超过 50% 算力的攻击者能做和不能做的事。"
      }
    ],
    "examples": [
      {
        "en": "An attacker can only try to change one of his own transactions to take back money he recently spent.",
        "zh": "攻击者只能尝试修改他自己的某笔交易，以收回他最近花出去的钱。",
        "context": "比特币白皮书第 11 节 Calculations。"
      },
      {
        "en": "If the attacker controls more than half of the network hashrate, this has a probability of 100% to succeed.",
        "zh": "如果攻击者控制了超过一半的全网算力，这种攻击的成功概率为 100%。",
        "context": "Bitcoin Wiki Majority attack 页面。"
      }
    ],
    "related_terms": [
      "double-spending",
      "hashrate",
      "longest chain",
      "reorganization",
      "confirmation"
    ],
    "tags": [
      "security",
      "attack",
      "whitepaper"
    ]
  }
];
