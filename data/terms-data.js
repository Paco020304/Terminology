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
  },
  {
    "id": "chain-of-ownership",
    "order": 36,
    "term": "chain of ownership",
    "term_zh": "所有权链",
    "aliases": [
      "chain of digital signatures",
      "electronic coin"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In the Bitcoin whitepaper, an electronic coin is defined as a chain of digital signatures: each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin, so a payee can verify the signatures to verify the chain of ownership.",
    "definition_zh": "在比特币白皮书中，电子货币被定义为一条数字签名链：每一位所有者对“上一笔交易的哈希”和“下一位所有者的公钥”进行数字签名，并把它们附加到这枚币的末尾，从而把币转给下一位所有者；收款人可以通过验证这些签名来验证所有权链。",
    "notes_zh": "所有权链只能证明每一次转移都经过了上一任所有者的授权，却无法证明某位所有者没有把同一枚币再签给别人（双重支付）。白皮书正是为了解决这个缺口，才引入公开广播交易、时间戳服务器和工作量证明。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 2 节 Transactions：把电子货币定义为数字签名链，收款人验证签名即可验证所有权链，但无法验证此前的所有者是否双重支付。"
      },
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 12 节 Conclusion：由数字签名构成的币提供了强有力的所有权控制，但若无防止双重支付的方法则是不完整的。"
      }
    ],
    "examples": [
      {
        "en": "A payee can verify the signatures to verify the chain of ownership.",
        "zh": "收款人可以通过验证签名来验证所有权链。",
        "context": "比特币白皮书第 2 节 Transactions。"
      },
      {
        "en": "Coins made from digital signatures provide strong control of ownership, but they are incomplete without a way to prevent double-spending.",
        "zh": "由数字签名构成的币能够提供强有力的所有权控制，但如果没有防止双重支付的方法，它仍然是不完整的。",
        "context": "根据比特币白皮书第 12 节 Conclusion 改写。"
      }
    ],
    "related_terms": [
      "digital signature",
      "transaction",
      "public key",
      "double-spending"
    ],
    "tags": [
      "ownership",
      "signature",
      "whitepaper"
    ]
  },
  {
    "id": "transaction-input",
    "order": 37,
    "term": "transaction input",
    "term_zh": "交易输入",
    "aliases": [
      "input",
      "TxIn",
      "txin"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A transaction input is the part of a Bitcoin transaction that references an output of a previous transaction—identified by that transaction's hash and the output's index—together with the data (such as a signature and public key in scriptSig) needed to prove authorization to spend it; the values of all referenced outputs form the value available to the new transaction.",
    "definition_zh": "交易输入是比特币交易中引用某个先前交易输出的部分——用该先前交易的哈希和输出序号来定位——并附带证明有权花费该输出所需的数据（例如 scriptSig 中的签名和公钥）；所有被引用输出的金额之和，构成新交易可支配的价值。",
    "notes_zh": "输入本身并不“装着”金额，金额来自它引用的那个先前输出；并且被引用的输出必须整笔花掉，不能只花一部分。白皮书第 9 节指出，通常是一个来自较大先前交易的输入，或多个合并小额的输入；多输入交易也会暴露这些输入属于同一所有者（第 10 节）。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 9 节 Combining and Splitting Value：为了拆分与合并价值，交易包含多个输入和输出；通常是单个较大输入或多个合并小额的输入。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-07",
        "note": "Input 与 Txin 小节：输入是对先前交易输出的引用，包含 Previous tx 哈希、输出 Index 和 scriptSig；所有输入金额相加后（扣除手续费）全部分配给新输出。"
      }
    ],
    "examples": [
      {
        "en": "To allow value to be split and combined, transactions contain multiple inputs and outputs.",
        "zh": "为了让价值能够被拆分和合并，交易包含多个输入和输出。",
        "context": "比特币白皮书第 9 节 Combining and Splitting Value。"
      },
      {
        "en": "An input is a reference to an output from a previous transaction.",
        "zh": "输入是对某个先前交易输出的引用。",
        "context": "Bitcoin Wiki Transaction 页面 Input 小节。"
      }
    ],
    "related_terms": [
      "transaction output",
      "utxo",
      "transaction",
      "script",
      "digital signature"
    ],
    "tags": [
      "transaction-structure",
      "utxo",
      "whitepaper"
    ]
  },
  {
    "id": "transaction-output",
    "order": 38,
    "term": "transaction output",
    "term_zh": "交易输出",
    "aliases": [
      "output",
      "TxOut",
      "txout"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A transaction output is the part of a Bitcoin transaction that assigns an amount of bitcoin (its value, in satoshis) together with a locking script (scriptPubKey) that sets the conditions for spending that amount later; each output can be referenced by an input of a subsequent transaction only once, and the outputs of a transaction share the combined value of its inputs, with any unassigned remainder treated as the transaction fee.",
    "definition_zh": "交易输出是比特币交易中分配一笔比特币金额（以聪为单位的 value）并附带锁定脚本（scriptPubKey）的部分，锁定脚本规定了日后花费这笔金额的条件；每个输出只能被后续交易的某个输入引用一次，一笔交易的各个输出共同分配其输入的总价值，未被分配的差额即为交易手续费。",
    "notes_zh": "尚未被任何输入引用的输出就是 UTXO；一旦被引用便成为已花费输出。白皮书第 6 节指出：若交易的输出总值小于输入总值，差额就是交易手续费，归打包该交易的区块创建者所有。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 9 节 Combining and Splitting Value：交易通常至多有两个输出，一个用于支付，一个把找零（如有）退回发送方；第 6 节 Incentive：输出值小于输入值的差额为交易手续费。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-07",
        "note": "Output 与 Txout 小节：输出包含 Value（以 satoshi 计）和 scriptPubKey；每个输出只能被后续交易的输入引用一次，未被输出领取的输入金额视为交易手续费。"
      }
    ],
    "examples": [
      {
        "en": "If the output value of a transaction is less than its input value, the difference is a transaction fee.",
        "zh": "如果一笔交易的输出值小于其输入值，差额就是交易手续费。",
        "context": "比特币白皮书第 6 节 Incentive。"
      },
      {
        "en": "Each output from one transaction can only ever be referenced once by an input of a subsequent transaction.",
        "zh": "一笔交易中的每个输出只能被后续交易的某个输入引用一次。",
        "context": "Bitcoin Wiki Transaction 页面 Output 小节。"
      }
    ],
    "related_terms": [
      "transaction input",
      "utxo",
      "change output",
      "transaction fee",
      "script"
    ],
    "tags": [
      "transaction-structure",
      "utxo",
      "whitepaper"
    ]
  },
  {
    "id": "change-output",
    "order": 39,
    "term": "change output",
    "term_zh": "找零输出",
    "aliases": [
      "change",
      "change address"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A change output is a transaction output that returns to the sender the part of the input value not being paid to the recipient (minus any fee); it is needed because a previous output used as an input must be spent in its entirety, so the difference is sent back, typically to a newly generated address controlled by the sender's wallet.",
    "definition_zh": "找零输出是把输入价值中未支付给收款人的那部分（扣除手续费后）退回给发送方的交易输出；之所以需要它，是因为作为输入的先前输出必须整笔花掉，所以差额要转回发送方，通常转到发送方钱包新生成的地址。",
    "notes_zh": "如果忘记设置找零输出，未分配的差额会全部变成交易手续费被矿工拿走。找零虽然是发给自己，但在链上看起来与普通支付输出相似；区分哪个输出是找零，正是链上隐私分析的常用手段之一。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 9 节 Combining and Splitting Value：交易通常至多两个输出——一个用于支付，一个把找零（如有）退回发送方。"
      },
      {
        "title": "Change",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Change",
        "accessed": "2026-11-07",
        "note": "页面开头：输出作为另一笔交易的输入时必须整笔花掉；若金额超过想支付的数额，客户端生成新地址并把差额发回，这称为找零。"
      },
      {
        "title": "Transaction",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Transaction",
        "accessed": "2026-11-07",
        "note": "Output 小节：输入 50 BTC 只想发送 25 BTC 时，会创建两个各 25 BTC 的输出，一个给收款人，一个发回自己（即 change）。"
      }
    ],
    "examples": [
      {
        "en": "There will be at most two outputs: one for the payment, and one returning the change, if any, back to the sender.",
        "zh": "交易至多会有两个输出：一个用于支付，另一个把找零（如果有的话）退回给发送方。",
        "context": "比特币白皮书第 9 节 Combining and Splitting Value。"
      },
      {
        "en": "The client generates a new Bitcoin address, and sends the difference back to this address. This is known as change.",
        "zh": "客户端会生成一个新的比特币地址，并把差额发回这个地址，这就叫作找零。",
        "context": "Bitcoin Wiki Change 页面。"
      }
    ],
    "related_terms": [
      "transaction output",
      "transaction input",
      "utxo",
      "address",
      "wallet"
    ],
    "tags": [
      "transaction-structure",
      "privacy",
      "whitepaper"
    ]
  },
  {
    "id": "honest-node",
    "order": 40,
    "term": "honest node",
    "term_zh": "诚实节点",
    "aliases": [
      "honest nodes"
    ],
    "part_of_speech": "noun phrase",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "In the Bitcoin whitepaper, an honest node is a network node that follows the protocol rather than cooperating to attack the network: it accepts a block only if all transactions in it are valid and not already spent, and expresses acceptance by working to extend the longest chain. The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes.",
    "definition_zh": "在比特币白皮书中，诚实节点是遵循协议、而不与他人合谋攻击网络的节点：它只接受其中所有交易都有效且未被花费的区块，并通过在最长链上继续工作来表示接受。只要诚实节点合计控制的 CPU 算力多于任何合谋攻击者节点群体，系统就是安全的。",
    "notes_zh": "“诚实”指行为上遵守协议规则，而不是道德判断，节点也无需表明身份。白皮书的安全性论证建立在“诚实算力占多数”这一假设上；第 6 节还论证了激励机制会让贪婪但理性的攻击者更愿意遵守规则。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 1 节 Introduction：只要诚实节点合计控制的 CPU 算力多于任何合谋攻击者节点群体，系统就是安全的；第 4 节 Proof-of-Work：若多数算力由诚实节点控制，诚实链增长最快。"
      },
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-07",
        "note": "第 5 节 Network 与第 11 节 Calculations：节点只接受所有交易有效且未被花费的区块；诚实节点永远不会接受包含无效交易的区块。"
      }
    ],
    "examples": [
      {
        "en": "The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes.",
        "zh": "只要诚实节点合计控制的 CPU 算力多于任何合谋的攻击者节点群体，系统就是安全的。",
        "context": "比特币白皮书第 1 节 Introduction。"
      },
      {
        "en": "If a majority of CPU power is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains.",
        "zh": "如果多数 CPU 算力由诚实节点控制，诚实链就会增长得最快，并超过任何与之竞争的链。",
        "context": "比特币白皮书第 4 节 Proof-of-Work。"
      }
    ],
    "related_terms": [
      "51% attack",
      "longest chain",
      "proof-of-work",
      "consensus",
      "hashrate"
    ],
    "tags": [
      "security",
      "consensus",
      "whitepaper"
    ]
  },
  {
    "id": "full-node",
    "order": 41,
    "term": "full node",
    "term_zh": "全节点",
    "aliases": [
      "full network node",
      "fully validating node"
    ],
    "part_of_speech": "noun phrase",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A full node is a Bitcoin node that downloads every block and transaction and independently checks them against all of the consensus rules, rejecting any block or transaction that violates them even if other nodes accept it. The Bitcoin whitepaper contrasts running a full network node with simplified payment verification, in which a user keeps only block headers and relies on the network for transaction validity.",
    "definition_zh": "全节点是下载每一个区块和每一笔交易、并独立按照全部共识规则进行校验的比特币节点；任何违反规则的区块或交易都会被它拒绝，即使其他节点接受了也一样。比特币白皮书把“运行完整的网络节点”与简化支付验证（SPV）相对照：后者只保存区块头，交易是否有效要依赖网络来判断。",
    "notes_zh": "全节点不等于矿工：全节点负责验证和转发，不一定参与挖矿。全节点也不必保存全部历史区块——启用修剪（pruning）后仍是完整验证的全节点；对外提供旧区块下载的称为归档节点（archival node）。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-08",
        "note": "第 8 节 Simplified Payment Verification：无需运行完整的网络节点（full network node）也能验证支付；SPV 用户无法自行检查交易，频繁收款的企业可能仍希望运行自己的节点，以获得更独立的安全性和更快的验证。"
      },
      {
        "title": "Full node",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Full_node",
        "accessed": "2026-11-08",
        "note": "页面开头与 What makes a full node? 小节：完全验证比特币所有规则的节点称为全节点；全节点下载每个区块和交易并按共识规则检查，违规者一律拒绝；Archival Nodes 小节说明修剪后仍是全节点。"
      }
    ],
    "examples": [
      {
        "en": "It is possible to verify payments without running a full network node.",
        "zh": "不运行完整的网络节点，也可以验证支付。",
        "context": "比特币白皮书第 8 节 Simplified Payment Verification。"
      },
      {
        "en": "If a transaction or block violates the consensus rules, then it is absolutely rejected by a full node, even if every other node on the network thinks that it is valid.",
        "zh": "如果某笔交易或某个区块违反共识规则，全节点就会坚决拒绝它，即使网络上其他所有节点都认为它有效。",
        "context": "改写自 Bitcoin Wiki Full node 页面。"
      }
    ],
    "related_terms": [
      "simplified payment verification",
      "pruning",
      "consensus",
      "block",
      "miner"
    ],
    "tags": [
      "node",
      "validation",
      "whitepaper"
    ]
  },
  {
    "id": "broadcast",
    "order": 42,
    "term": "broadcast",
    "term_zh": "广播",
    "aliases": [
      "transaction broadcast",
      "block broadcast",
      "relay"
    ],
    "part_of_speech": "verb / noun",
    "category": "Origin / 起源",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In Bitcoin, to broadcast is to propagate a new transaction or a newly found block across the peer-to-peer network so that other nodes receive it: new transactions are broadcast to all nodes, and a node that finds a proof-of-work broadcasts its block to all nodes. Broadcasting is best effort; a transaction only needs to reach many nodes to be included in a block before long, and a node that misses a block requests it when it receives the next one.",
    "definition_zh": "在比特币中，广播是指把新交易或新找到的区块在点对点网络中传播出去，让其他节点收到：新交易会广播给所有节点，找到工作量证明的节点会把它的区块广播给所有节点。广播是“尽力而为”的：交易只要到达足够多的节点，很快就会被打包进区块；某节点若漏收了一个区块，会在收到下一个区块时发现缺失并请求补发。",
    "notes_zh": "广播不是中心服务器群发，而是节点之间逐跳转发（relay）：实际实现中节点先用 inv 消息通告，对方再用 getdata 请求完整数据。交易“已广播”只表示进入了网络，不代表已被确认。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-08",
        "note": "摘要与第 5 节 Network：消息以尽力而为（best effort）的方式广播；步骤 1) 新交易广播给所有节点，步骤 4) 找到工作量证明的节点把区块广播给所有节点；交易广播无需到达所有节点，区块广播也能容忍丢失的消息。"
      },
      {
        "title": "Network",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Network",
        "accessed": "2026-11-08",
        "note": "页面开头与 Standard relaying 小节：比特币使用简单的广播网络传播交易和区块；节点用 inv 通告、getdata 请求，验证有效后再向其他对等节点转发。"
      }
    ],
    "examples": [
      {
        "en": "When a node finds a proof-of-work, it broadcasts the block to all nodes.",
        "zh": "当某个节点找到工作量证明时，它会把该区块广播给所有节点。",
        "context": "比特币白皮书第 5 节 Network。"
      },
      {
        "en": "New transaction broadcasts do not necessarily need to reach all nodes. As long as they reach many nodes, they will get into a block before long.",
        "zh": "新交易的广播不一定要到达所有节点。只要到达了许多节点，它们很快就会被打包进区块。",
        "context": "比特币白皮书第 5 节 Network。"
      }
    ],
    "related_terms": [
      "peer-to-peer",
      "transaction",
      "block",
      "mempool",
      "confirmation"
    ],
    "tags": [
      "network",
      "propagation",
      "whitepaper"
    ]
  },
  {
    "id": "incentive",
    "order": 43,
    "term": "incentive",
    "term_zh": "激励",
    "aliases": [
      "mining incentive",
      "incentive mechanism"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "In the Bitcoin whitepaper, the incentive is the reward that motivates nodes to support the network: the first transaction in each block creates new coins owned by the block's creator, and transaction fees are added to it. Besides distributing coins without a central issuer, the incentive is meant to make honest behaviour more profitable than attacking, since a greedy attacker with majority CPU power should earn more by following the rules than by undermining the system.",
    "definition_zh": "在比特币白皮书中，激励是促使节点支持网络的奖励：每个区块的第一笔交易会凭空产生归区块创建者所有的新币，交易手续费也会计入其中。激励除了在没有中心发行方的情况下把币分发出去，还旨在让诚实行为比攻击更有利可图——即使贪婪的攻击者掌握多数 CPU 算力，遵守规则所得也应多于破坏系统。",
    "notes_zh": "“激励”是白皮书第 6 节的设计思想，具体载体是挖矿奖励（新币补贴 + 手续费）。当预定数量的币全部进入流通后，激励将完全转为手续费。激励只是让攻击“不划算”，并不能在技术上阻止多数算力攻击。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-08",
        "note": "第 6 节 Incentive：区块第一笔交易产生归区块创建者的新币，为节点支持网络提供激励并分发货币；激励也可由交易手续费提供，最终可完全转为手续费；激励可能有助于让节点保持诚实。"
      },
      {
        "title": "Mining",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Mining",
        "accessed": "2026-11-08",
        "note": "页面开头：矿工获得交易手续费以及新创造币的“补贴”，这既以去中心化方式分发新币，也激励人们为系统提供安全性。"
      }
    ],
    "examples": [
      {
        "en": "The incentive may help encourage nodes to stay honest.",
        "zh": "激励机制可能有助于促使节点保持诚实。",
        "context": "比特币白皮书第 6 节 Incentive。"
      },
      {
        "en": "Once a predetermined number of coins have entered circulation, the incentive can transition entirely to transaction fees and be completely inflation free.",
        "zh": "一旦预定数量的币进入流通，激励就可以完全过渡到交易手续费，从而完全没有通胀。",
        "context": "比特币白皮书第 6 节 Incentive。"
      }
    ],
    "related_terms": [
      "mining reward",
      "transaction fee",
      "coinbase transaction",
      "honest node",
      "halving"
    ],
    "tags": [
      "economics",
      "mining",
      "whitepaper"
    ]
  },
  {
    "id": "pseudonymity",
    "order": 44,
    "term": "pseudonymity",
    "term_zh": "假名性",
    "aliases": [
      "pseudonymous",
      "pseudo-anonymity"
    ],
    "part_of_speech": "noun",
    "category": "Privacy / 隐私",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Pseudonymity is the privacy model in which participants act under identifiers that are not directly tied to their real-world identity. In Bitcoin, every transaction is announced publicly, so privacy comes from keeping public keys (addresses) anonymous: anyone can see that some amount moved from one key to another, but not who owns those keys, unless other information links a key to its owner.",
    "definition_zh": "假名性是一种隐私模型：参与者以不直接关联其真实身份的标识进行活动。在比特币中，所有交易都要公开广播，因此隐私来自让公钥（地址）保持匿名：任何人都能看到一定金额从一个密钥转到另一个密钥，却不知道这些密钥属于谁——除非有其他信息把某个密钥与其所有者关联起来。",
    "notes_zh": "比特币是假名的，而不是完全匿名的：交易历史永久公开，一旦某个地址与身份关联，就可能顺藤摸瓜追溯更多交易。白皮书本身没有用 pseudonymity 这个词，它描述的是“保持公钥匿名”的新隐私模型；“假名”这一说法来自后续文献与社区。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-08",
        "note": "第 10 节 Privacy：传统银行通过限制信息访问实现隐私；比特币必须公开所有交易，但可以通过保持公钥匿名来切断信息流——公众能看到有人向某人转账，却没有把交易关联到任何人的信息；配图 New Privacy Model。"
      },
      {
        "title": "Privacy",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Privacy",
        "accessed": "2026-11-08",
        "note": "Why privacy 小节：比特币白皮书承诺通过假名地址（pseudonymous addresses）绕开账本公开可见的问题；Introduction 部分说明找到一个地址的身份即可攻击相关交易的匿名性。"
      }
    ],
    "examples": [
      {
        "en": "The public can see that someone is sending an amount to someone else, but without information linking the transaction to anyone.",
        "zh": "公众可以看到某人向另一个人发送了一笔金额，但没有任何信息把这笔交易关联到具体的人。",
        "context": "比特币白皮书第 10 节 Privacy。"
      },
      {
        "en": "Bitcoin offers pseudonymity rather than anonymity, because once an address is linked to a person, its whole public history can be traced.",
        "zh": "比特币提供的是假名性而非匿名性，因为一旦某个地址与某个人关联起来，它的全部公开历史都可以被追溯。",
        "context": "说明假名性与匿名性的区别。"
      }
    ],
    "related_terms": [
      "public key",
      "address",
      "address reuse",
      "transaction",
      "wallet"
    ],
    "tags": [
      "privacy",
      "identity",
      "whitepaper"
    ]
  },
  {
    "id": "address-reuse",
    "order": 45,
    "term": "address reuse",
    "term_zh": "地址复用",
    "aliases": [
      "key reuse",
      "reused address"
    ],
    "part_of_speech": "noun phrase",
    "category": "Privacy / 隐私",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Address reuse is the practice of using the same Bitcoin address (and thus the same key pair) for more than one transaction. It weakens privacy because all transactions involving the address can be linked to a common owner; the Bitcoin whitepaper therefore recommends using a new key pair for each transaction as an additional firewall, and modern wallets generate a fresh address for every payment received.",
    "definition_zh": "地址复用是指把同一个比特币地址（也就是同一对密钥）用于多笔交易的做法。它会削弱隐私，因为涉及该地址的所有交易都能被关联到同一个所有者；因此比特币白皮书建议每笔交易使用新的密钥对，作为额外的“防火墙”，现代钱包也会为每次收款生成新地址。",
    "notes_zh": "地址复用不会让资金直接被盗，但会暴露余额和交易关系，也会伤害交易对手的隐私。即使不复用地址，多输入交易仍会暴露这些输入属于同一所有者（白皮书第 10 节已指出这种无法避免的关联）。",
    "citations": [
      {
        "title": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "publisher": "Satoshi Nakamoto",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "accessed": "2026-11-08",
        "note": "第 10 节 Privacy：作为额外的防火墙，每笔交易应使用新的密钥对，以免它们被关联到同一个所有者；多输入交易仍不可避免地暴露其输入属于同一所有者；一旦某个密钥的所有者暴露，关联可能揭示其他交易。"
      },
      {
        "title": "Address reuse",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Address_reuse",
        "accessed": "2026-11-08",
        "note": "页面开头：地址复用指同一地址用于多笔交易，会损害交易参与者及资金后续持有者的隐私与安全；最私密安全的用法是给每个付款人提供全新地址。"
      }
    ],
    "examples": [
      {
        "en": "As an additional firewall, a new key pair should be used for each transaction to keep them from being linked to a common owner.",
        "zh": "作为额外的防火墙，每笔交易都应使用新的密钥对，以免这些交易被关联到同一个所有者。",
        "context": "比特币白皮书第 10 节 Privacy。"
      },
      {
        "en": "The most private and secure way to use bitcoin is to send a brand new address to each person who pays you.",
        "zh": "使用比特币最私密、最安全的方式，是给每个向你付款的人提供一个全新的地址。",
        "context": "Bitcoin Wiki Address reuse 页面。"
      }
    ],
    "related_terms": [
      "address",
      "pseudonymity",
      "change output",
      "wallet",
      "public key"
    ],
    "tags": [
      "privacy",
      "wallet",
      "whitepaper"
    ]
  },
  {
    "id": "smart-contract",
    "order": 46,
    "term": "smart contract",
    "term_zh": "智能合约",
    "aliases": [
      "smart contracts"
    ],
    "part_of_speech": "noun phrase",
    "category": "Smart Contracts / 智能合约",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A smart contract is a program stored on a blockchain that controls digital assets according to rules written in its code. In the Ethereum whitepaper, smart contracts are described as cryptographic \"boxes\" that contain value and only unlock it if certain conditions are met; on Ethereum a smart contract lives at its own address as a contract account with code and storage, and it runs whenever a transaction or message is sent to it.",
    "definition_zh": "智能合约是存储在区块链上、按照代码中写定的规则控制数字资产的程序。以太坊白皮书把智能合约描述为装有价值、只有在满足特定条件时才会解锁的密码学“盒子”；在以太坊上，智能合约以合约账户的形式位于自己的地址，带有代码和存储，每当有交易或消息发给它时就会运行。",
    "notes_zh": "“合约”不是法律意义上需要“履行”的合同：白皮书强调它更像生活在以太坊执行环境中的“自治代理”，被调用时总是执行固定代码。比特币脚本也能实现弱形式的智能合约，但缺少图灵完备性、价值感知、区块链感知和状态。部署后的代码默认不可修改，交互也不可撤销。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-09",
        "note": "Introduction 与 Ethereum 一节：智能合约是由实现任意规则的代码直接控制数字资产的应用，是只有在满足特定条件时才解锁其中价值的密码学“盒子”；Ethereum Accounts 一节：合约更像生活在以太坊执行环境中的“自治代理”。"
      },
      {
        "title": "Introduction to smart contracts",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/smart-contracts/",
        "accessed": "2026-11-09",
        "note": "What is a smart contract?：智能合约就是运行在以太坊区块链上的程序，是位于特定地址的代码（函数）与数据（状态）的集合；它是一种以太坊账户，不由用户控制，而是部署后按程序运行。"
      }
    ],
    "examples": [
      {
        "en": "Smart contracts, cryptographic \"boxes\" that contain value and only unlock it if certain conditions are met, can also be built on top of the platform.",
        "zh": "智能合约——装有价值、只有在满足特定条件时才解锁的密码学“盒子”——也可以构建在这个平台之上。",
        "context": "以太坊白皮书 Ethereum 一节。"
      },
      {
        "en": "Deploying a smart contract is technically a transaction, so you need to pay gas just as you do for a simple ETH transfer.",
        "zh": "部署智能合约在技术上是一笔交易，所以和普通的 ETH 转账一样需要支付 gas。",
        "context": "ethereum.org 智能合约开发文档。"
      }
    ],
    "related_terms": [
      "contract account",
      "externally owned account",
      "gas",
      "ether",
      "script"
    ],
    "tags": [
      "ethereum",
      "smart-contract",
      "whitepaper"
    ]
  },
  {
    "id": "ether",
    "order": 47,
    "term": "ether",
    "term_zh": "以太币",
    "aliases": [
      "ETH"
    ],
    "part_of_speech": "noun",
    "category": "Currency / 货币",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Ether (ETH) is the built-in native currency of the Ethereum network. The Ethereum whitepaper calls it the main internal crypto-fuel of Ethereum: it is used to pay transaction fees (gas) and also serves as a primary liquidity layer for exchanging digital assets. Its smallest unit is the wei, and 1 ether equals 10^18 wei.",
    "definition_zh": "以太币（ETH）是以太坊网络内置的原生货币。以太坊白皮书称它为以太坊主要的内部“加密燃料”：用于支付交易费（gas），同时作为数字资产之间交换的主要流动性层。它的最小单位是 wei，1 ether 等于 10^18 wei。",
    "notes_zh": "“以太坊”（Ethereum）是网络/平台，“以太币”（ether, ETH）是其中的货币，二者不要混用。gas 本身不是币，而是计算量单位，gas 费用才用 ETH（常以 gwei，即 10^9 wei 计价）支付。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-09",
        "note": "Ethereum Accounts 一节：Ether 是以太坊主要的内部加密燃料，用于支付交易费；Currency And Issuance 一节：以太坊内置货币 ether 兼具主要流动性层与支付交易费机制的双重作用，并预设面额 1 wei、10^12 szabo、10^15 finney、10^18 ether。"
      },
      {
        "title": "What is ether (ETH)?",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/what-is-ether/",
        "accessed": "2026-11-09",
        "note": "页面开头：Ether (ETH) 是驱动以太坊网络的原生加密货币，用于支付交易费（gas）、通过质押保护网络，并可作为数字货币用于支付与投资。"
      }
    ],
    "examples": [
      {
        "en": "\"Ether\" is the main internal crypto-fuel of Ethereum, and is used to pay transaction fees.",
        "zh": "“以太币”是以太坊主要的内部加密燃料，用于支付交易费。",
        "context": "以太坊白皮书 Ethereum Accounts 一节。"
      },
      {
        "en": "Gas prices are usually quoted in gwei, a denomination of ETH equal to one-billionth of an ether.",
        "zh": "gas 价格通常以 gwei 报价，gwei 是 ETH 的一种面额，等于十亿分之一个 ether。",
        "context": "ethereum.org Gas and fees 文档。"
      }
    ],
    "related_terms": [
      "gas",
      "transaction fee",
      "externally owned account",
      "smart contract"
    ],
    "tags": [
      "ethereum",
      "currency",
      "whitepaper"
    ]
  },
  {
    "id": "externally-owned-account",
    "order": 48,
    "term": "externally owned account",
    "term_zh": "外部账户",
    "aliases": [
      "EOA",
      "externally-owned account"
    ],
    "part_of_speech": "noun phrase",
    "category": "Keys & Addresses / 密钥与地址",
    "level": "beginner",
    "status": "draft",
    "definition_en": "An externally owned account (EOA) is an Ethereum account controlled by a private key rather than by code. It has no contract code; its holder sends messages from it by creating and signing a transaction, so every Ethereum transaction originates from an EOA. Like every Ethereum account, it has a 20-byte address, a nonce and an ether balance.",
    "definition_zh": "外部账户（EOA）是由私钥而非代码控制的以太坊账户。它没有合约代码；持有者通过创建并签名交易从该账户发送消息，因此每一笔以太坊交易都源自外部账户。与所有以太坊账户一样，它具有 20 字节的地址、nonce 和以太币余额。",
    "notes_zh": "以太坊采用账户模型，与比特币的 UTXO 模型不同。“外部”指控制者在以太坊执行环境之外（持有私钥的人或程序）。EOA 账户中的 nonce 是交易计数器，用来保证每笔交易只被处理一次，不同于工作量证明中的区块 nonce。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-09",
        "note": "Ethereum Accounts 一节：账户有 20 字节地址，包含 nonce、ether 余额、合约代码（若有）和存储四个字段；账户分两类：由私钥控制的外部账户和由合约代码控制的合约账户；外部账户没有代码，可以通过创建并签名交易从外部账户发送消息。Messages and Transactions 一节：交易是存储由外部账户发出的消息的已签名数据包。"
      },
      {
        "title": "Ethereum accounts",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/accounts/",
        "accessed": "2026-11-09",
        "note": "Account types / Key differences：外部账户由持有私钥的任何人控制，创建免费，可以发起交易，由一对公私钥控制账户活动。"
      }
    ],
    "examples": [
      {
        "en": "An externally owned account has no code, and one can send messages from an externally owned account by creating and signing a transaction.",
        "zh": "外部账户没有代码，人们可以通过创建并签名一笔交易，从外部账户发送消息。",
        "context": "以太坊白皮书 Ethereum Accounts 一节。"
      },
      {
        "en": "Only an externally owned account can initiate a transaction; a contract account can only send messages in response to one.",
        "zh": "只有外部账户能够发起交易；合约账户只能在收到交易后作出响应、发送消息。",
        "context": "根据 ethereum.org Ethereum accounts 文档 Key differences 部分。"
      }
    ],
    "related_terms": [
      "contract account",
      "private key",
      "address",
      "nonce",
      "transaction"
    ],
    "tags": [
      "ethereum",
      "account",
      "whitepaper"
    ]
  },
  {
    "id": "contract-account",
    "order": 49,
    "term": "contract account",
    "term_zh": "合约账户",
    "aliases": [
      "contract accounts"
    ],
    "part_of_speech": "noun phrase",
    "category": "Smart Contracts / 智能合约",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A contract account is an Ethereum account controlled by its contract code instead of a private key. Every time it receives a transaction or message, its code activates and can read and write its persistent storage, send messages to other accounts or create new contracts; it cannot initiate a transaction on its own. A deployed smart contract exists on Ethereum as a contract account.",
    "definition_zh": "合约账户是由其合约代码而非私钥控制的以太坊账户。每当它收到交易或消息时，其代码就会被激活，可以读写自己的持久存储、向其他账户发送消息或创建新合约；它不能自行发起交易。已部署的智能合约在以太坊上就以合约账户的形式存在。",
    "notes_zh": "合约账户没有私钥，任何人（包括部署者）都不能“签名”替它花钱，资金只能按代码逻辑转出。合约账户只能被动响应：它的每次执行最终都追溯到某个外部账户发起的交易。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-09",
        "note": "Ethereum Accounts 一节：合约账户由其合约代码控制；合约账户每次收到消息时代码被激活，可以读写内部存储、发送其他消息或依次创建合约。Messages 一节：合约执行 CALL 操作码时产生消息，使接收账户运行其代码。"
      },
      {
        "title": "Ethereum accounts",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/accounts/",
        "accessed": "2026-11-09",
        "note": "Account types / Key differences：合约账户是部署到网络上的由代码控制的智能合约；创建合约因占用网络存储而有成本；只能在收到交易时发送消息；没有私钥，由智能合约代码逻辑控制。"
      }
    ],
    "examples": [
      {
        "en": "In a contract account, every time the contract account receives a message its code activates, allowing it to read and write to internal storage.",
        "zh": "对于合约账户，每当它收到一条消息，其代码就会被激活，使它可以读写内部存储。",
        "context": "以太坊白皮书 Ethereum Accounts 一节。"
      },
      {
        "en": "Contract accounts don't have private keys; instead, they are controlled by the logic of the smart contract code.",
        "zh": "合约账户没有私钥，而是由智能合约代码的逻辑控制。",
        "context": "ethereum.org Ethereum accounts 文档。"
      }
    ],
    "related_terms": [
      "smart contract",
      "externally owned account",
      "gas",
      "ether"
    ],
    "tags": [
      "ethereum",
      "account",
      "smart-contract",
      "whitepaper"
    ]
  },
  {
    "id": "gas",
    "order": 50,
    "term": "gas",
    "term_zh": "燃料（gas）",
    "aliases": [
      "gas unit"
    ],
    "part_of_speech": "noun",
    "category": "Smart Contracts / 智能合约",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Gas is the unit that measures the computational effort required to execute operations on Ethereum. Each operation costs a fixed amount of gas (more for computationally expensive or storage-increasing operations, plus a fee per byte of transaction data), and the sender pays the gas consumed multiplied by a price per unit of gas in ether. Because a transaction sets a maximum amount of gas it may use, execution halts when gas runs out, which stops infinite loops and makes attackers pay in proportion to the resources they consume.",
    "definition_zh": "gas 是衡量在以太坊上执行操作所需计算量的单位。每种操作消耗固定数量的 gas（计算开销大或会增加存储的数据的操作更多，交易数据每字节另计费），发送者按消耗的 gas 乘以每单位 gas 的价格用以太币付费。由于交易会设定可用 gas 的上限，gas 耗尽时执行就会停止，从而阻止无限循环，并让攻击者按其消耗的资源成比例付费。",
    "notes_zh": "gas 是计算量单位，不是货币；“gas 费”才是用 ETH 支付的金额（gas 用量 × 单价）。执行因 gas 耗尽失败时，状态变化会回滚，但已消耗的 gas 费不退。白皮书中的 STARTGAS / GASPRICE 对应今天的 gas limit 与 gas price；EIP-1559 之后单价又分为 base fee 与 priority fee。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-09",
        "note": "Messages and Transactions 一节：计算的基本单位是“gas”，通常每个计算步骤花费 1 gas，开销更大或增加状态存储的操作更多，交易数据每字节收 5 gas；交易须用 STARTGAS 限定计算步数，以防意外或恶意的无限循环，费用体系要求攻击者为消耗的计算、带宽和存储按比例付费。State Transition Function 一节：gas 耗尽时回滚除费用外的所有状态变化。"
      },
      {
        "title": "Gas and fees",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/gas/",
        "accessed": "2026-11-09",
        "note": "What is gas?：gas 指衡量在以太坊网络上执行特定操作所需计算量的单位；gas 费为所用 gas 数量乘以每单位 gas 的价格，无论交易成功或失败都需支付，并以 ETH 支付。"
      }
    ],
    "examples": [
      {
        "en": "The fundamental unit of computation is \"gas\"; usually, a computational step costs 1 gas, but some operations cost higher amounts of gas.",
        "zh": "计算的基本单位是“gas”；通常一个计算步骤消耗 1 gas，但有些操作消耗更多 gas。",
        "context": "以太坊白皮书 Messages and Transactions 一节。"
      },
      {
        "en": "If the code execution runs out of gas, all state changes are reverted except the payment of the fees.",
        "zh": "如果代码执行耗尽了 gas，除已支付的费用外，所有状态变化都会被回滚。",
        "context": "根据以太坊白皮书 Ethereum State Transition Function 一节。"
      }
    ],
    "related_terms": [
      "ether",
      "transaction fee",
      "smart contract",
      "contract account"
    ],
    "tags": [
      "ethereum",
      "fees",
      "whitepaper"
    ]
  },
  {
    "id": "ethereum-virtual-machine",
    "order": 51,
    "term": "Ethereum Virtual Machine",
    "term_zh": "以太坊虚拟机",
    "aliases": [
      "EVM"
    ],
    "part_of_speech": "noun phrase",
    "category": "Smart Contracts / 智能合约",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "The Ethereum Virtual Machine (EVM) is the execution environment in which Ethereum contract code runs. Contract code is written in a low-level, stack-based bytecode (\"EVM code\") in which each byte represents an operation; execution repeatedly carries out the operation at the program counter until the code ends or an error, STOP or RETURN is reached. Operations can use three kinds of space—a stack, a memory that resets after the computation, and the contract's long-term storage—and every operation consumes gas. Every Ethereum node runs the EVM, so the same code produces the same result across the network.",
    "definition_zh": "以太坊虚拟机（EVM）是以太坊合约代码运行的执行环境。合约代码用一种低级、基于栈的字节码（“EVM 代码”）编写，每个字节代表一个操作；执行时反复执行程序计数器所指的操作，直到代码结束或遇到错误、STOP 或 RETURN 指令。操作可使用三种空间——栈、计算结束后即重置的内存，以及合约的长期存储——并且每个操作都消耗 gas。每个以太坊节点都运行 EVM，因此同样的代码在全网得到相同的结果。",
    "notes_zh": "EVM 是协议规定的“虚拟”执行规范，不是某台具体的服务器；每个节点各自执行同一份字节码并核对结果。开发者通常用 Solidity 等高级语言编写合约，再编译成 EVM 字节码。“EVM 兼容”指其他链实现了相同的执行语义，可直接部署同样的字节码。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-10",
        "note": "Code Execution 一节：以太坊合约代码用低级、基于栈的字节码语言编写，称为“以太坊虚拟机代码”或“EVM 代码”；代码由一系列字节组成，每个字节代表一个操作；执行反复进行当前程序计数器处的操作，直到代码结束或遇到错误、STOP 或 RETURN；操作可访问栈、内存和长期存储三种空间，内存在计算结束后重置；EVM 运行时的完整计算状态可由元组 (block_state, transaction, message, code, memory, stack, pc, gas) 定义。"
      },
      {
        "title": "Ethereum Virtual Machine (EVM)",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/evm/",
        "accessed": "2026-11-10",
        "note": "页首定义：EVM 是在所有以太坊节点上一致且安全地执行代码的去中心化虚拟环境；节点运行 EVM 来执行智能合约，并用 gas 衡量操作所需的计算量。EVM instructions 一节：EVM 作为深度 1024 的栈机执行，每项为 256 位字。"
      }
    ],
    "examples": [
      {
        "en": "The code in Ethereum contracts is written in a low-level, stack-based bytecode language, referred to as \"Ethereum virtual machine code\" or \"EVM code\".",
        "zh": "以太坊合约中的代码用一种低级、基于栈的字节码语言编写，称为“以太坊虚拟机代码”或“EVM 代码”。",
        "context": "以太坊白皮书 Code Execution 一节。"
      },
      {
        "en": "Nodes run the EVM to execute smart contracts, using gas to measure the computational effort required for operations.",
        "zh": "节点运行 EVM 来执行智能合约，并用 gas 衡量各项操作所需的计算量。",
        "context": "ethereum.org Ethereum Virtual Machine (EVM) 文档。"
      }
    ],
    "related_terms": [
      "smart contract",
      "gas",
      "contract account",
      "Turing completeness",
      "state transition function"
    ],
    "tags": [
      "ethereum",
      "evm",
      "execution",
      "whitepaper"
    ]
  },
  {
    "id": "state-transition-function",
    "order": 52,
    "term": "state transition function",
    "term_zh": "状态转换函数",
    "aliases": [
      "APPLY function"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A state transition function is the rule that takes the current state of a ledger and a transaction and outputs either the new state or an error, written APPLY(S, TX) -> S' or ERROR. The Ethereum whitepaper describes Bitcoin's ledger as a state transition system whose state is the set of UTXOs; in Ethereum the state is the set of all accounts, and the function checks the transaction's validity, charges the fee, transfers value and runs any contract code, reverting all changes except the fee payment if the sender lacks funds or execution runs out of gas.",
    "definition_zh": "状态转换函数是一条规则：输入账本的当前状态和一笔交易，输出新的状态或一个错误，记作 APPLY(S, TX) -> S' 或 ERROR。以太坊白皮书把比特币账本描述为一个状态转换系统，其状态是全部 UTXO 的集合；在以太坊中，状态是所有账户的集合，该函数会检查交易是否有效、扣除费用、转移价值并运行合约代码；若发送者余额不足或执行耗尽 gas，则回滚除费用支付以外的所有变化。",
    "notes_zh": "区块链共识要达成一致的其实是“按什么顺序执行哪些交易”；只要状态转换函数是确定性的，所有诚实节点从同一初始状态出发就会算出同一个新状态。白皮书中区块验证就是依次对区块内每笔交易调用 APPLY。“智能合约可以编码任意状态转换函数”是以太坊相对比特币脚本的核心扩展。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-10",
        "note": "Bitcoin As A State Transition System 一节：加密货币账本可视为状态转换系统，“状态转换函数”接收一个状态和一笔交易并输出新状态，可形式化定义为 APPLY(S,TX) -> S' or ERROR；比特币的状态是所有未花费交易输出（UTXO）。Ethereum State Transition Function 一节：给出以太坊 APPLY(S,TX) -> S' 的步骤，包括校验签名与 nonce、按 STARTGAS * GASPRICE 扣费、转账、运行合约代码，余额不足或 gas 耗尽时回滚除费用外的所有状态变化。"
      },
      {
        "title": "Ethereum Virtual Machine (EVM)",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/evm/",
        "accessed": "2026-11-10",
        "note": "The Ethereum state transition function 一节：EVM 像数学函数一样，给定输入产生确定性输出；以太坊状态转换函数 Y(S, T) = S' 由旧的有效状态 S 和一组新的有效交易 T 产生新的有效状态 S'。"
      }
    ],
    "examples": [
      {
        "en": "The ledger of a cryptocurrency such as Bitcoin can be thought of as a state transition system, where there is a \"state\" and a \"state transition function\" that takes a state and a transaction and outputs a new state.",
        "zh": "比特币这类加密货币的账本可以看作一个状态转换系统：有一个“状态”，以及一个接收状态和交易并输出新状态的“状态转换函数”。",
        "context": "根据以太坊白皮书 Bitcoin As A State Transition System 一节。"
      },
      {
        "en": "To validate a block, a node applies the state transition function to each transaction in order, starting from the state at the end of the previous block.",
        "zh": "验证区块时，节点从上一个区块结束时的状态出发，依次对每笔交易应用状态转换函数。",
        "context": "根据以太坊白皮书 Blockchain and Mining 一节的区块验证算法。"
      }
    ],
    "related_terms": [
      "transaction",
      "utxo",
      "Ethereum Virtual Machine",
      "gas",
      "consensus"
    ],
    "tags": [
      "ethereum",
      "state",
      "formal-model",
      "whitepaper"
    ]
  },
  {
    "id": "turing-completeness",
    "order": 53,
    "term": "Turing completeness",
    "term_zh": "图灵完备性",
    "aliases": [
      "Turing-complete",
      "Turing complete"
    ],
    "part_of_speech": "noun",
    "category": "Smart Contracts / 智能合约",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Turing completeness is the property of a system of data-manipulation rules, such as an instruction set or programming language, that can simulate any Turing machine and therefore express any computation, including infinite loops. The Ethereum whitepaper states that the EVM is Turing-complete: JUMP and JUMPI instructions and calls between contracts allow arbitrary looping. Because of the halting problem one cannot tell in general whether a program will halt, so Ethereum requires each transaction to set a maximum number of computational steps (gas); if execution exceeds it, the computation is reverted but fees are still paid.",
    "definition_zh": "图灵完备性是指一套数据操作规则（如指令集或编程语言）能够模拟任何图灵机，因而能表达任意计算（包括无限循环）的性质。以太坊白皮书指出 EVM 是图灵完备的：JUMP 和 JUMPI 指令以及合约之间的相互调用都允许任意循环。由于停机问题，一般无法判断一个程序是否会停止，因此以太坊要求每笔交易设定可执行计算步数的上限（gas）；执行超出上限时计算被回滚，但费用照付。",
    "notes_zh": "图灵完备描述的是“能表达什么”，不代表链上可以无限计算——实际计算量始终受 gas 上限约束。比特币脚本刻意不支持循环，因此不是图灵完备的；白皮书也讨论了图灵不完备方案，并指出它并不能干净地解决问题（合约可以层层调用放大计算量）。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-10",
        "note": "Computation And Turing-Completeness 一节：EVM 是图灵完备的，EVM 代码可以编码任何可设想的计算，包括无限循环；通过 JUMP/JUMPI 指令和合约递归调用实现循环；由于停机问题无法一般地判断程序是否会停止，解决方案是要求交易设定最大计算步数，超出则计算回滚但费用照付；并讨论了图灵不完备的替代方案及其不足。Scripting 一节：比特币脚本缺乏图灵完备性，不支持循环。"
      },
      {
        "title": "Ethereum glossary",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/glossary/",
        "accessed": "2026-11-10",
        "note": "Turing complete 词条：以英国数学家、计算机科学家艾伦·图灵命名；一套数据操作规则（如计算机指令集、编程语言或元胞自动机）若可用于模拟任何图灵机，就称为“图灵完备”或“计算通用”。"
      }
    ],
    "examples": [
      {
        "en": "An important note is that the Ethereum virtual machine is Turing-complete; this means that EVM code can encode any computation that can be conceivably carried out, including infinite loops.",
        "zh": "需要特别指出的是，以太坊虚拟机是图灵完备的；这意味着 EVM 代码可以编码任何可设想的计算，包括无限循环。",
        "context": "以太坊白皮书 Computation And Turing-Completeness 一节。"
      },
      {
        "en": "Bitcoin Script deliberately lacks loops, so it is not Turing-complete, whereas Ethereum bounds its Turing-complete code with gas.",
        "zh": "比特币脚本刻意不支持循环，因此不是图灵完备的；而以太坊用 gas 为其图灵完备的代码设定计算上限。",
        "context": "对比以太坊白皮书 Scripting 一节与 Computation And Turing-Completeness 一节。"
      }
    ],
    "related_terms": [
      "Ethereum Virtual Machine",
      "gas",
      "gas limit",
      "script",
      "smart contract"
    ],
    "tags": [
      "ethereum",
      "computation",
      "evm",
      "whitepaper"
    ]
  },
  {
    "id": "gas-limit",
    "order": 54,
    "term": "gas limit",
    "term_zh": "gas 上限",
    "aliases": [
      "STARTGAS"
    ],
    "part_of_speech": "noun phrase",
    "category": "Transactions / 交易",
    "level": "beginner",
    "status": "draft",
    "definition_en": "The gas limit of a transaction is the maximum amount of gas its sender allows its execution to consume; the Ethereum whitepaper calls this field STARTGAS. At the start of execution GAS is set to STARTGAS and each operation deducts from it; if execution runs out of gas, all state changes except the fee payment are reverted, and otherwise the fee for the unused gas is refunded to the sender. The limit protects the network against accidental or hostile infinite loops.",
    "definition_zh": "交易的 gas 上限是发送者允许该交易执行时最多消耗的 gas 数量；以太坊白皮书中称这一字段为 STARTGAS。执行开始时 GAS 被设为 STARTGAS，每个操作从中扣减；若执行耗尽 gas，则回滚除费用支付以外的所有状态变化，否则未用完的 gas 对应的费用退还给发送者。这一上限保护网络免受意外或恶意的无限循环。",
    "notes_zh": "交易的 gas 上限（由用户设置）不同于区块 gas 上限（白皮书中的 GASLIMIT，限制一个区块内所有交易消耗的 gas 总和）。上限设得高不会多付钱，未用部分会退还；但设得过低会导致交易失败，执行中耗尽时已消耗的 gas 不退。普通 ETH 转账需要 21,000 gas。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-10",
        "note": "Messages and Transactions 一节：交易包含 STARTGAS 值，表示交易执行允许的最大计算步数；STARTGAS 与 GASPRICE 是以太坊防拒绝服务模型的关键，每笔交易都必须限定可用的计算步数以防止意外或恶意的无限循环。Ethereum State Transition Function 一节：初始化 GAS = STARTGAS；gas 耗尽时回滚除费用外的所有状态变化，否则退还剩余 gas 的费用。Blockchain and Mining 一节：区块内累计消耗的 gas 超过 GASLIMIT 时区块无效。"
      },
      {
        "title": "Gas and fees",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/gas/",
        "accessed": "2026-11-10",
        "note": "What is gas limit? 一节：gas limit 指你愿意在一笔交易上消耗的最大 gas 量；标准 ETH 转账需要 21,000 gas；未消耗的部分会退还；设置过低会使交易在验证阶段失败；执行中耗尽 gas 时 EVM 回滚所有更改但所提供的 gas 仍被消耗。Block size 一节：每个区块的目标大小为当前区块 gas 上限的一半。"
      }
    ],
    "examples": [
      {
        "en": "A STARTGAS value represents the maximum number of computational steps the transaction execution is allowed to take.",
        "zh": "STARTGAS 值表示交易执行允许进行的最大计算步数。",
        "context": "根据以太坊白皮书 Messages and Transactions 一节。"
      },
      {
        "en": "If you put a gas limit of 50,000 for a simple ETH transfer, the EVM would consume 21,000, and you would get back the remaining 29,000.",
        "zh": "如果你为一笔普通 ETH 转账设置 50,000 的 gas 上限，EVM 会消耗 21,000，剩余的 29,000 会退还给你。",
        "context": "ethereum.org Gas and fees 文档 What is gas limit? 一节。"
      }
    ],
    "related_terms": [
      "gas",
      "transaction fee",
      "Ethereum Virtual Machine",
      "Turing completeness"
    ],
    "tags": [
      "ethereum",
      "fees",
      "gas",
      "whitepaper"
    ]
  },
  {
    "id": "decentralized-autonomous-organization",
    "order": 55,
    "term": "decentralized autonomous organization",
    "term_zh": "去中心化自治组织",
    "aliases": [
      "DAO",
      "DAOs"
    ],
    "part_of_speech": "noun phrase",
    "category": "Governance / 治理",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A decentralized autonomous organization (DAO) is a virtual entity whose rules and funds are controlled by smart contract code on a blockchain: a set of members or shareholders, for example with a two-thirds majority, has the right to spend the entity's funds and modify its code, and the members collectively decide how funds are allocated. The Ethereum whitepaper describes this as replicating the legal trappings of a traditional company or nonprofit using only cryptographic blockchain technology for enforcement.",
    "definition_zh": "去中心化自治组织（DAO）是一种由区块链上的智能合约代码控制其规则和资金的虚拟实体：一组成员或股东（例如以三分之二多数）有权支配该实体的资金并修改其代码，成员共同决定资金如何分配。以太坊白皮书将其描述为：仅用密码学区块链技术来执行，复刻传统公司或非营利组织的法律架构。",
    "notes_zh": "DAO 是一类组织形态的统称；2016 年遭黑客攻击、导致以太坊硬分叉出 Ethereum Classic 的 “The DAO” 只是其中一个具体项目。“自治”指规则由代码自动执行，并不等于没有人参与——提案和投票仍由成员完成。多数 DAO 的法律地位在各司法辖区仍不明确。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-10",
        "note": "Decentralized Autonomous Organizations 一节：“去中心化自治组织”的一般概念是一个虚拟实体，拥有一组成员或股东，他们（例如以 67% 多数）有权支配该实体的资金并修改其代码；成员共同决定组织如何分配资金；这本质上仅用密码学区块链技术来执行，复刻了传统公司或非营利组织的法律架构；最简单的设计是在三分之二成员同意时修改的自修改代码。"
      },
      {
        "title": "Decentralized autonomous organizations (DAOs)",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/dao/",
        "accessed": "2026-11-10",
        "note": "What is a DAO? 一节：DAO 是为共同使命而工作的集体所有的组织；基于区块链的规则写在代码中，定义组织如何运作和资金如何使用；内置金库未经集体批准任何人无权动用；决策通过提案和投票进行。"
      }
    ],
    "examples": [
      {
        "en": "The members would collectively decide on how the organization should allocate its funds.",
        "zh": "成员将共同决定组织应如何分配其资金。",
        "context": "以太坊白皮书 Decentralized Autonomous Organizations 一节。"
      },
      {
        "en": "A DAO's treasury can only be spent after members approve a proposal by voting, as enforced by its smart contracts.",
        "zh": "DAO 的金库只有在成员投票通过提案后才能动用，这一规则由其智能合约强制执行。",
        "context": "根据 ethereum.org DAO 页面 What is a DAO? 一节。"
      }
    ],
    "related_terms": [
      "smart contract",
      "token",
      "contract account"
    ],
    "tags": [
      "ethereum",
      "governance",
      "dao",
      "whitepaper"
    ]
  },
  {
    "id": "token",
    "order": 56,
    "term": "token",
    "term_zh": "代币",
    "aliases": [
      "tokens",
      "token system"
    ],
    "part_of_speech": "noun",
    "category": "Smart Contracts / 智能合约",
    "level": "beginner",
    "status": "draft",
    "definition_en": "On Ethereum, a token is a unit of value whose balances are recorded and transferred by a smart contract rather than by the base protocol. The Ethereum whitepaper explains that a currency or token system is fundamentally a database with one operation: subtract X units from A and give X units to B, provided that A had at least X units before the transaction and the transaction is approved by A; implementing a token system only requires writing this logic into a contract. Tokens can represent sub-currencies, assets such as USD or gold, company shares, smart property, coupons, or reward points.",
    "definition_zh": "在以太坊上，代币是一种由智能合约（而非底层协议本身）记录余额并执行转移的价值单位。以太坊白皮书指出，货币或代币系统本质上是一个只有一种操作的数据库：从 A 处扣减 X 个单位并加给 B，前提是 (i) A 在交易前至少拥有 X 个单位，且 (ii) 该交易得到 A 的批准；实现一个代币系统只需把这段逻辑写进一个合约。代币可以代表子货币、美元或黄金等资产、公司股份、智能财产、优惠券或积分等。",
    "notes_zh": "代币不同于 ether：ether 是协议原生资产，余额直接记在账户状态中；代币余额保存在代币合约的存储里，“转代币”实际上是调用该合约，手续费（gas）仍需用 ether 支付。中文也常译作“通证”。ERC-20 是可互换代币的接口标准，属于后续收录的来源。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-11",
        "note": "Token Systems 一节：链上代币系统可用于代表美元或黄金等资产的子货币、公司股票、代表智能财产的单个代币、不可伪造的优惠券乃至积分系统；货币或代币系统本质上是一个只有一种操作的数据库——从 A 扣减 X 单位并给 B，前提是 A 事先至少有 X 单位且交易经 A 批准；实现代币系统只需把这段逻辑写进合约。"
      },
      {
        "title": "ERC-20 Token Standard",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",
        "accessed": "2026-11-11",
        "note": "What is a Token? 一节：代币在以太坊中几乎可以代表任何东西，如在线平台的声誉积分、游戏角色技能、公司股份等金融资产、美元等法币、一盎司黄金等；ERC-20 标准使代币应用能与其他产品和服务互操作。"
      },
      {
        "title": "Ethereum glossary",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/glossary/",
        "accessed": "2026-11-11",
        "note": "Token 词条：在以太坊区块链上由智能合约定义的可交易虚拟物品。"
      }
    ],
    "examples": [
      {
        "en": "All that it takes to implement a token system is to implement this logic into a contract.",
        "zh": "实现一个代币系统所需要的，只是把这段逻辑写进一个合约。",
        "context": "以太坊白皮书 Token Systems 一节。"
      },
      {
        "en": "When you send a stablecoin to a friend, your wallet calls the token contract to lower your balance and raise theirs, while the gas fee is still paid in ether.",
        "zh": "当你给朋友转一笔稳定币时，钱包会调用该代币合约，减少你的余额并增加对方的余额，而 gas 费用仍以 ether 支付。",
        "context": "日常转账场景。"
      }
    ],
    "related_terms": [
      "smart contract",
      "ether",
      "contract account",
      "state transition function"
    ],
    "tags": [
      "ethereum",
      "token",
      "smart-contract",
      "whitepaper"
    ]
  },
  {
    "id": "message",
    "order": 57,
    "term": "message",
    "term_zh": "消息",
    "aliases": [
      "internal transaction",
      "internal transactions"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "In Ethereum, a message is a virtual object produced when a contract that is executing code runs the CALL opcode; it is never serialized and exists only in the Ethereum execution environment. A message contains the (implicit) sender, the recipient, the amount of ether to transfer, an optional data field and a STARTGAS value. A message is like a transaction except that it is produced by a contract rather than by an external actor, and, like a transaction, it causes the recipient account to run its code. If a message execution runs out of gas, that execution and all executions it triggered revert, but parent executions do not need to revert.",
    "definition_zh": "在以太坊中，消息是正在执行代码的合约运行 CALL 操作码时产生的一种虚拟对象；它从不被序列化，只存在于以太坊执行环境之中。消息包含：（隐含的）发送者、接收者、随消息转移的 ether 数量、一个可选的数据字段，以及一个 STARTGAS 值。消息与交易类似，区别在于它由合约而非外部参与者产生；与交易一样，消息会使接收账户运行其代码。若某次消息执行耗尽 gas，则该次执行及其触发的所有执行都会回滚，但其上层（父）执行不必回滚。",
    "notes_zh": "消息不是独立上链的交易：它不单独签名、没有自己的交易哈希，只是某笔交易执行过程中的合约间调用；区块浏览器通常把它显示为“内部交易”（internal transactions）。交易设定的 gas 上限覆盖它触发的全部消息执行，因此子调用耗尽 gas 不会让调用方损失超过其分配给子调用的 gas。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-11",
        "note": "Messages 一节：合约可以向其他合约发送“消息”；消息是从不被序列化、只存在于以太坊执行环境中的虚拟对象，包含隐含的发送者、接收者、转移的 ether 数量、可选数据字段和 STARTGAS 值；消息本质上像交易，只是由合约而非外部参与者产生，当执行中的合约运行 CALL 操作码时产生并执行消息。Ethereum State Transition Function 一节：消息执行耗尽 gas 时，该执行及其触发的所有执行回滚，但父执行不必回滚。"
      },
      {
        "title": "Ethereum glossary",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/glossary/",
        "accessed": "2026-11-11",
        "note": "Message 词条：一种从不被序列化、只在 EVM 内部发送的内部交易。Message call 词条：从一个账户向另一个账户传递消息的行为；若目标账户关联有 EVM 代码，则以该对象的状态启动虚拟机并处理该消息。"
      }
    ],
    "examples": [
      {
        "en": "Essentially, a message is like a transaction, except it is produced by a contract and not an external actor.",
        "zh": "本质上，消息就像一笔交易，只不过它由合约而非外部参与者产生。",
        "context": "以太坊白皮书 Messages 一节。"
      },
      {
        "en": "If an external actor A sends a transaction to B with 1000 gas, and B consumes 600 gas before sending a message to C, and the internal execution of C consumes 300 gas before returning, then B can spend another 100 gas before running out of gas.",
        "zh": "如果外部参与者 A 向 B 发送一笔带 1000 gas 的交易，B 消耗 600 gas 后向 C 发送一条消息，C 的内部执行消耗 300 gas 后返回，那么 B 在耗尽 gas 之前还能再花费 100 gas。",
        "context": "以太坊白皮书 Messages 一节中关于 gas 额度覆盖所有子执行的示例。"
      }
    ],
    "related_terms": [
      "transaction",
      "contract account",
      "gas limit",
      "Ethereum Virtual Machine"
    ],
    "tags": [
      "ethereum",
      "evm",
      "transactions",
      "whitepaper"
    ]
  },
  {
    "id": "merkle-patricia-trie",
    "order": 58,
    "term": "Merkle Patricia trie",
    "term_zh": "默克尔帕特里夏树",
    "aliases": [
      "Patricia tree",
      "Merkle-Patricia trie",
      "Patricia Merkle trie",
      "MPT"
    ],
    "part_of_speech": "noun phrase",
    "category": "Cryptography / 密码学",
    "level": "advanced",
    "status": "draft",
    "definition_en": "The Merkle Patricia trie is the authenticated key-value data structure that Ethereum's execution layer uses to store its state and other data. It combines a Merkle tree, in which nodes are referenced by their hashes so that a single root hash commits to all of the data, with a Patricia (radix) trie, which allows nodes to be inserted and deleted, not just changed, efficiently. The Ethereum whitepaper notes that because only a small part of the tree changes after each block, adjacent states share most of their nodes through hash pointers, which makes storing the full state with every block practical. Each block header contains the roots of the state, transactions and receipts tries.",
    "definition_zh": "默克尔帕特里夏树是以太坊执行层用来存储状态及其他数据的、可认证的键值数据结构。它把默克尔树（节点通过其哈希被引用，因此单个根哈希即可承诺全部数据）与帕特里夏树（基数树，允许高效地插入和删除节点，而不只是修改节点）结合起来。以太坊白皮书指出，由于每个区块之后只有树的一小部分发生变化，相邻状态可以通过哈希指针共享绝大部分节点，因此每个区块都保存完整状态是可行的。每个区块头都包含状态树、交易树和收据树的根。",
    "notes_zh": "比特币区块头中的默克尔根只承诺交易列表，且其默克尔树不支持高效的插入删除；以太坊的 MPT 则承诺整个全局状态。全局状态树的键是 keccak256(以太坊地址)，值是 rlp 编码的账户 [nonce, balance, storageRoot, codeHash]，其中 storageRoot 又是该合约独立存储树的根。“trie”与“tree”在中文里都常译作“树”。ethereum.org 提到以太坊计划迁移到 Verkle 树。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-11",
        "note": "Blockchain and Mining 一节：状态以树结构存储，每个区块之后只有一小部分树需要改变，相邻区块间的大部分树相同，数据可存储一次并通过指针（子树哈希）引用两次；为此使用一种称为“Patricia tree”的特殊树，它对 Merkle 树概念做了修改，使节点不仅能被高效修改，还能被高效插入和删除。"
      },
      {
        "title": "Merkle Patricia Trie",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",
        "accessed": "2026-11-11",
        "note": "开篇：以太坊状态被编码为一种特殊的 Merkle 树；其数据结构是“modified Merkle-Patricia Trie”，借用了 PATRICIA 的特性；它是确定性且可密码学验证的，不可能构造出具有相同根哈希的两个不同状态。Tries in Ethereum 一节：执行层所有 merkle trie 均使用 MPT，区块头中有 stateRoot、transactionsRoot、receiptsRoot 三个根。State Trie 一节：路径为 keccak256(ethereumAddress)，值为 rlp(ethereumAccount)，账户为 [nonce, balance, storageRoot, codeHash]。"
      }
    ],
    "examples": [
      {
        "en": "A special kind of tree known as a \"Patricia tree\" is used to accomplish this, including a modification to the Merkle tree concept that allows for nodes to be inserted and deleted, and not just changed, efficiently.",
        "zh": "为此使用了一种称为“Patricia 树”的特殊树，它对 Merkle 树的概念做了修改，使节点不仅能被高效修改，还能被高效地插入和删除。",
        "context": "以太坊白皮书 Blockchain and Mining 一节。"
      },
      {
        "en": "Every Ethereum block header carries three trie roots: stateRoot, transactionsRoot and receiptsRoot.",
        "zh": "每个以太坊区块头都携带三个树根：stateRoot、transactionsRoot 和 receiptsRoot。",
        "context": "根据 ethereum.org Merkle Patricia Trie 文档 Tries in Ethereum 一节。"
      }
    ],
    "related_terms": [
      "merkle tree",
      "hash",
      "block header",
      "state transition function"
    ],
    "tags": [
      "ethereum",
      "data-structure",
      "state",
      "whitepaper"
    ]
  },
  {
    "id": "uncle-block",
    "order": 59,
    "term": "uncle block",
    "term_zh": "叔块",
    "aliases": [
      "uncle",
      "ommer",
      "ommer block"
    ],
    "part_of_speech": "noun phrase",
    "category": "Mining / 挖矿",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "An uncle block (also called an ommer) is a stale block, a valid block that lost the race to extend the chain, that a later block includes by reference and that receives a partial reward. In the simplified version of the GHOST protocol described in the Ethereum whitepaper, a block specifies one parent and zero or more uncles; an uncle included in block B must be a direct child of the k-th generation ancestor of B with 2 <= k <= 7, must not be an ancestor of B, must be a valid block header, and must not have been included before. Rewarding uncles, and the miner who includes them, reduces the security loss and the centralization bias that high stale rates cause on fast-block chains.",
    "definition_zh": "叔块（也称 ommer）是一种陈旧块，即竞争延长主链失败但本身有效的区块，它被后续区块以引用方式纳入并获得部分奖励。在以太坊白皮书描述的简化版 GHOST 协议中，区块指定一个父块和零个或多个叔块；被区块 B 纳入的叔块必须是 B 的第 k 代祖先的直接子块（2 <= k <= 7），不能是 B 的祖先，必须是有效的区块头，且不能被重复纳入。奖励叔块及纳入叔块的矿工，可以减轻出块较快的链上高陈旧率造成的安全性损失和中心化偏向。",
    "notes_zh": "叔块不在主链上，其中的交易不会被执行，交易费也不归叔块矿工。白皮书给出的分成是：B 的矿工每纳入一个叔块额外获得 3.125% 的 coinbase 奖励，叔块矿工获得标准奖励的 93.75%（同一节前文另写有 87.5%/12.5%，以具体规则为准）。“ommer”是后来采用的中性说法。以太坊 2022 年转为权益证明后，每个 slot 只选一个区块提议者，不再产生叔块。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-11",
        "note": "Modified GHOST Implementation 一节：GHOST 把陈旧的后代块（以太坊术语中的 “uncles”）计入哪条链拥有最多工作量的计算，以解决网络安全损失；并对陈旧块发放区块奖励以解决中心化偏向；区块必须指定一个父块和 0 个或多个叔块；被 B 纳入的叔块须为 B 第 k 代祖先（2 <= k <= 7）的直接子块、不能是 B 的祖先、须为有效区块头、不得重复纳入；每个叔块 U 使 B 的矿工额外获得 3.125% 的 coinbase 奖励，U 的矿工获得标准 coinbase 奖励的 93.75%。"
      },
      {
        "title": "Ethereum glossary",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/glossary/",
        "accessed": "2026-11-11",
        "note": "Ommer (uncle) block 词条：工作量证明矿工找到有效区块时，另一矿工可能已发布了先被加到链尖的竞争区块；这个有效但陈旧的区块可被更新的区块作为 ommer 纳入并获得部分区块奖励；“ommer”是父块兄弟块的中性称呼，也称“uncle”；以太坊改用权益证明后每个 slot 只选一个区块提议者。"
      }
    ],
    "examples": [
      {
        "en": "A block must specify a parent, and it must specify 0 or more uncles.",
        "zh": "一个区块必须指定一个父块，并且必须指定 0 个或多个叔块。",
        "context": "以太坊白皮书 Modified GHOST Implementation 一节。"
      },
      {
        "en": "For every uncle U in block B, the miner of B gets an additional 3.125% added to its coinbase reward and the miner of U gets 93.75% of a standard coinbase reward.",
        "zh": "对区块 B 中的每个叔块 U，B 的矿工在其 coinbase 奖励之外额外获得 3.125%，U 的矿工获得标准 coinbase 奖励的 93.75%。",
        "context": "以太坊白皮书 Modified GHOST Implementation 一节。"
      }
    ],
    "related_terms": [
      "block",
      "fork",
      "mining reward",
      "longest chain",
      "miner"
    ],
    "tags": [
      "ethereum",
      "mining",
      "ghost",
      "whitepaper"
    ]
  },
  {
    "id": "wei",
    "order": 60,
    "term": "wei",
    "term_zh": "wei（以太币最小单位）",
    "aliases": [],
    "part_of_speech": "noun",
    "category": "Currency / 货币",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Wei is the smallest denomination of ether: 1 ether = 10^18 wei. The Ethereum whitepaper pre-labels the denominations wei (1), szabo (10^12), finney (10^15) and ether (10^18), by analogy with satoshi and BTC, and expects wei to be used in technical discussions around fees and protocol implementation. In practice, transaction values and account balances are denominated in wei at the protocol level, and gas prices are commonly quoted in gwei (10^9 wei).",
    "definition_zh": "wei 是 ether 的最小面额：1 ether = 10^18 wei。以太坊白皮书预先规定了面额 wei（1）、szabo（10^12）、finney（10^15）和 ether（10^18），类比于 satoshi 与 BTC 的关系，并预期 wei 用于有关手续费和协议实现的技术讨论。实践中，协议层面的交易金额和账户余额都以 wei 计价，gas 价格则通常以 gwei（10^9 wei）表示。",
    "notes_zh": "钱包里显示的 “0.5 ETH” 在链上实际存储为 500000000000000000 wei，开发时要注意单位换算以免差 10^18 倍。gwei 并非白皮书中的面额，而是后来通行的 gas 价格单位。",
    "citations": [
      {
        "title": "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform",
        "publisher": "Vitalik Buterin / ethereum.org",
        "url": "https://ethereum.org/en/whitepaper/",
        "accessed": "2026-11-11",
        "note": "Currency And Issuance 一节：以太坊内置货币 ether，面额预先标记为 1: wei、10^12: szabo、10^15: finney、10^18: ether，可视为“美元与美分”或“BTC 与 satoshi”概念的扩展；预期 ether 用于普通交易，finney 用于小额交易，szabo 和 wei 用于有关手续费和协议实现的技术讨论。"
      },
      {
        "title": "Intro to ether",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/intro-to-ether/",
        "accessed": "2026-11-11",
        "note": "Denominations of ether 一节：wei 是 ether 的最小可能数量，以太坊黄皮书等技术实现均以 wei 计算；gwei（giga-wei）常用于描述 gas 成本；wei = 10^-18 ether，gwei = 10^-9 ether。其后小节：交易的 value 字段和账户的 balance 字段均以 wei 计价。"
      },
      {
        "title": "Ethereum glossary",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/glossary/",
        "accessed": "2026-11-11",
        "note": "Wei 词条：ether 的最小面额，10^18 wei = 1 ether。"
      }
    ],
    "examples": [
      {
        "en": "We expect \"ether\" to be used for ordinary transactions, \"finney\" for microtransactions and \"szabo\" and \"wei\" for technical discussions around fees and protocol implementation.",
        "zh": "我们预期 “ether” 用于普通交易，“finney” 用于小额交易，而 “szabo” 和 “wei” 用于有关手续费和协议实现的技术讨论。",
        "context": "以太坊白皮书 Currency And Issuance 一节。"
      },
      {
        "en": "A gas price of 20 gwei equals 20,000,000,000 wei, or 0.00000002 ether, per unit of gas.",
        "zh": "20 gwei 的 gas 价格相当于每单位 gas 20,000,000,000 wei，即 0.00000002 ether。",
        "context": "手续费单位换算场景。"
      }
    ],
    "related_terms": [
      "ether",
      "gas",
      "transaction fee"
    ],
    "tags": [
      "ethereum",
      "currency",
      "units",
      "whitepaper"
    ]
  },
  {
    "id": "proof-of-stake",
    "order": 61,
    "term": "proof-of-stake",
    "term_zh": "权益证明",
    "aliases": [
      "PoS",
      "proof of stake"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Proof-of-stake is a consensus mechanism in which the right to create blocks and secure the chain is tied to ownership of the currency itself rather than to expended computation. The PPCoin paper (2012), which launched the first proof-of-stake cryptocurrency, describes proof-of-stake as \"a form of proof of ownership of the currency\" and implements it by having a block producer consume the coin age of its own coins in a special coinstake transaction; because the hash search runs over a limited space, block generation does not require significant energy consumption. Modern designs such as Ethereum instead require validators to lock up (stake) coins that can be destroyed if they act dishonestly.",
    "definition_zh": "权益证明是一种共识机制：创建区块、保护链安全的权利与对货币本身的所有权挂钩，而不是与消耗的计算量挂钩。推出首个权益证明加密货币的 PPCoin 论文（2012）把权益证明描述为“对货币所有权的一种证明”，其实现方式是让出块者在一笔特殊的 coinstake 交易中消耗自己币的币龄；由于哈希搜索只在有限空间内进行，生成区块不需要大量能源消耗。以太坊等现代设计则要求验证者锁定（质押）币，若其作恶，这些币可被销毁。",
    "notes_zh": "PPCoin 是 PoW/PoS 混合设计：PoW 主要负责初始发行，PoS 提供大部分网络安全；以太坊的 PoS 则完全取消了挖矿，并通过罚没（slashing）惩罚作恶验证者。“持币即可出块”不等于“持币越多收益无限放大”，各协议对权重、最小币龄和惩罚的规定不同。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-12",
        "note": "Abstract 与 Proof-of-Stake 一节：proof-of-stake 取代 proof-of-work 提供大部分网络安全，PoW 主要提供初始铸币；粗略地说，proof-of-stake 指一种对货币所有权的证明，交易所消耗的币龄可视为一种 proof-of-stake；与 PoW 类似，proof-of-stake 不易伪造。Block Generation under Proof-of-Stake 一节：哈希运算只在有限搜索空间进行（每个未花费钱包输出每秒一次哈希），因此不涉及显著能耗。"
      },
      {
        "title": "Proof-of-stake (PoS)",
        "publisher": "ethereum.org",
        "url": "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",
        "accessed": "2026-11-12",
        "note": "What is proof-of-stake 一节：权益证明是证明验证者向网络投入了有价值之物的方式，若其不诚实，这些价值可被销毁；以太坊验证者把 ETH 质押进智能合约，负责检查新区块的有效性并偶尔创建、传播新区块。"
      },
      {
        "title": "Proof of Stake",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Proof_of_Stake",
        "accessed": "2026-11-12",
        "note": "开篇：Proof of Stake 是 Proof of Work 的一种替代方案，同样试图提供共识和防止双花；PoW 中出块概率取决于矿工完成的工作量，PoS 中比较的资源是矿工持有的币量。"
      }
    ],
    "examples": [
      {
        "en": "Proof-of-stake replaces proof-of-work to provide most of the network security.",
        "zh": "权益证明取代工作量证明，提供大部分网络安全。",
        "context": "PPCoin 论文 Abstract。"
      },
      {
        "en": "Roughly speaking, proof-of-stake means a form of proof of ownership of the currency.",
        "zh": "粗略地说，权益证明是一种对货币所有权的证明。",
        "context": "PPCoin 论文 Proof-of-Stake 一节。"
      }
    ],
    "related_terms": [
      "proof-of-work",
      "coin age",
      "coinstake transaction",
      "consensus",
      "minting"
    ],
    "tags": [
      "consensus",
      "proof-of-stake",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "coin-age",
    "order": 62,
    "term": "coin age",
    "term_zh": "币龄",
    "aliases": [
      "coin-days",
      "coin-day",
      "coin-days destroyed"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Coin age is a quantity defined in the PPCoin paper as currency amount times holding period, measured in units such as coin-days. Coin age accumulates while coins sit unspent and is consumed (or destroyed) when they are spent. PPCoin uses consumed coin age as its proof-of-stake: a coinstake kernel meets the hash target more easily the more coin age it consumes, proof-of-stake blocks mint new coins in proportion to the coin age consumed, and the main chain is the chain with the highest total consumed coin age.",
    "definition_zh": "币龄是 PPCoin 论文定义的一个量：币的数量乘以持有时长，单位如“币天”（coin-day）。币在未花费期间累积币龄，被花费时币龄即被消耗（或销毁）。PPCoin 把消耗的币龄用作权益证明：coinstake 的 kernel 消耗的币龄越多，越容易满足哈希目标；权益证明区块按所消耗的币龄铸造新币；累计消耗币龄最高的链被选为主链。",
    "notes_zh": "币龄不是“账户开立了多久”，而是金额 × 时间：10 个币持有 90 天 = 900 币天。PPCoin 还规定了最小币龄（如一个月），不足时币龄按零计算。比特币早期曾用币龄给交易排优先级，但它并非比特币安全模型的关键部分。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-12",
        "note": "Coin Age 一节：币龄简单定义为货币数量乘以持有时长；Bob 从 Alice 收到 10 个币并持有 90 天，即累积 900 币天的币龄；Bob 花费这 10 个币时，其累积的币龄被消耗（或销毁）；为便于计算币龄，每笔交易引入了时间戳字段。Main Chain Protocol 一节：每笔交易把其消耗的币龄计入区块得分，累计消耗币龄最高的链被选为主链。Checkpoint 一节：币龄计算要求最小年龄（如一个月），低于此值时币龄按零计算。"
      },
      {
        "title": "Peercoin",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peercoin",
        "accessed": "2026-11-12",
        "note": "正文：Peercoin 使用权益证明保护网络，当区块链分裂时，PoS 币龄最长的链获胜。"
      }
    ],
    "examples": [
      {
        "en": "If Bob received 10 coins from Alice and held it for 90 days, we say that Bob has accumulated 900 coin-days of coin age.",
        "zh": "如果 Bob 从 Alice 收到 10 个币并持有 90 天，我们就说 Bob 累积了 900 币天的币龄。",
        "context": "PPCoin 论文 Coin Age 一节。"
      },
      {
        "en": "The block chain with highest total consumed coin age is chosen as main chain.",
        "zh": "累计消耗币龄最高的区块链被选为主链。",
        "context": "PPCoin 论文 Main Chain Protocol 一节。"
      }
    ],
    "related_terms": [
      "proof-of-stake",
      "coinstake transaction",
      "longest chain",
      "timestamp"
    ],
    "tags": [
      "consensus",
      "proof-of-stake",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "coinstake-transaction",
    "order": 63,
    "term": "coinstake transaction",
    "term_zh": "coinstake 交易（权益交易）",
    "aliases": [
      "coinstake",
      "stake transaction"
    ],
    "part_of_speech": "noun",
    "category": "Transactions / 交易",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A coinstake transaction is the special transaction that carries the proof-of-stake in a PPCoin proof-of-stake block, named after Bitcoin's coinbase transaction. In it the block owner pays himself, consuming the coin age of his inputs while gaining the privilege of generating a block and minting new coins. Its first input, called the kernel, must meet a hash target per unit of coin age consumed, so the hash search covers a limited space (one hash per unspent wallet output per second) instead of the unlimited search of proof-of-work.",
    "definition_zh": "coinstake 交易是 PPCoin 权益证明区块中承载权益证明的特殊交易，其名称源自比特币的 coinbase 交易。在这笔交易中，区块所有者向自己付款，消耗其输入的币龄，同时获得为网络生成区块并铸造新币的特权。它的第一个输入称为 kernel，必须满足按单位消耗币龄计算的哈希目标，因此哈希搜索只在有限空间内进行（每个未花费钱包输出每秒一次哈希），而不是像工作量证明那样无限搜索。",
    "notes_zh": "coinbase 交易凭空产生区块奖励，没有真实输入；coinstake 交易则有真实的“权益输入”，输出付回给权益所有者本人。PPCoin 还要求每个区块由其所有者签名，并用 (kernel, timestamp) 对检测重复权益，防止同一权益被复制用于攻击。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-12",
        "note": "Block Generation under Proof-of-Stake 一节：新类型区块中的 proof-of-stake 是一笔称为 coinstake 的特殊交易（得名于比特币的特殊交易 coinbase）；区块所有者在 coinstake 中向自己付款从而消耗币龄，同时获得为网络生成区块和为权益证明铸币的特权；coinstake 的第一个输入称为 kernel，需满足一定的哈希目标协议；哈希目标是按 kernel 中消耗的单位币龄（币天）计算的。图示：Kernel input、Stake input、Stake output（pay to stake owner himself）。Block Signatures and Duplicate Stake Protocol 一节：节点收集所见 coinstake 交易的 (kernel, timestamp) 对。"
      },
      {
        "title": "Coinbase",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Coinbase",
        "accessed": "2026-11-12",
        "note": "供对照：coinbase 是 generation transaction（即 coinbase 交易）的“输入”内容；普通交易的 inputs 引用其父交易的输出，而 generation transaction 没有父交易，凭空创造新币；coinbase 可包含任意数据。"
      }
    ],
    "examples": [
      {
        "en": "In the coinstake transaction block owner pays himself thereby consuming his coin age, while gaining the privilege of generating a block for the network and minting for proof-of-stake.",
        "zh": "在 coinstake 交易中，区块所有者向自己付款，从而消耗其币龄，同时获得为网络生成区块并通过权益证明铸币的特权。",
        "context": "PPCoin 论文 Block Generation under Proof-of-Stake 一节。"
      },
      {
        "en": "The first input of coinstake is called kernel and is required to meet certain hash target protocol.",
        "zh": "coinstake 的第一个输入称为 kernel，必须满足一定的哈希目标协议。",
        "context": "PPCoin 论文 Block Generation under Proof-of-Stake 一节。"
      }
    ],
    "related_terms": [
      "coinbase transaction",
      "coin age",
      "proof-of-stake",
      "difficulty",
      "minting"
    ],
    "tags": [
      "transactions",
      "proof-of-stake",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "checkpoint",
    "order": 64,
    "term": "checkpoint",
    "term_zh": "检查点",
    "aliases": [
      "checkpoints",
      "checkpointing",
      "checkpoint lock-in"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A checkpoint is a block that nodes treat as fixed, so that the part of the chain at or before it can no longer be changed by a reorganization. Bitcoin introduced checkpoints in 2010 by hardcoding old block hashes into its software. PPCoin added a second, centrally broadcast form of checkpoint, issued at much shorter intervals such as a few times daily, to freeze the block chain and finalize transactions, because selecting the main chain by consumed coin age lowers the cost of attacking history and of double-spending. The paper acknowledges that this broadcast mechanism is a form of centralization.",
    "definition_zh": "检查点是节点视为固定不变的区块，检查点及其之前的链段不再能被重组改变。比特币在 2010 年引入检查点，方式是把旧区块哈希硬编码进软件。PPCoin 又增加了第二种由中心广播的检查点，以短得多的间隔（如每天数次）发布，用于冻结区块链、使交易最终确定；原因是按消耗币龄选择主链会降低攻击历史和双花的成本。论文承认这种广播机制是一种中心化。",
    "notes_zh": "PPCoin 的中心化检查点与比特币随软件发布的硬编码检查点不同：前者由开发者持续广播，类似比特币的警报系统。以太坊 Casper FFG 中的 “checkpoint” 指每个 epoch 的边界区块，由验证者投票确定最终性，含义又不相同。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-12",
        "note": "Checkpoint: Protection of History 一节：用总消耗币龄决定主链的缺点是降低了攻击整条历史链的成本；Nakamoto 在 2010 年引入检查点以固化区块链历史，防止检查点之前的部分被改变；双花攻击成本也可能降低，攻击者只需积累一定币龄即可强制重组；因此 PPCoin 引入一种中心广播的检查点，间隔短得多（如每天数次），用于冻结区块链并最终确定交易，其广播方式类似比特币的警报系统；论文承认广播检查点是一种中心化，但在分布式方案出现前可以接受。"
      },
      {
        "title": "Checkpoint Lockin",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Checkpoint_Lockin",
        "accessed": "2026-11-12",
        "note": "正文：比特币软件会不时硬编码一个旧区块哈希；检查点可防止节点被大量不可用链淹没的 DoS 攻击以及隔离节点并提供伪造链的攻击，但主要是初始区块链下载的优化；一些山寨链使用不同形式的检查点，例如持续的“中心检查点脉冲”。"
      }
    ],
    "examples": [
      {
        "en": "We decided to introduce an additional form of checkpoints that are broadcasted centrally, at much shorter intervals such as a few times daily, to serve to freeze block chain and finalize transactions.",
        "zh": "我们决定引入另一种由中心广播的检查点，以短得多的间隔（如每天数次）发布，用于冻结区块链并使交易最终确定。",
        "context": "PPCoin 论文 Checkpoint: Protection of History 一节。"
      },
      {
        "en": "Nakamoto still introduced checkpoints in 2010 as a mechanism to solidify the block chain history.",
        "zh": "Nakamoto 仍在 2010 年引入了检查点，作为固化区块链历史的机制。",
        "context": "PPCoin 论文 Checkpoint: Protection of History 一节。"
      }
    ],
    "related_terms": [
      "reorganization",
      "double-spending",
      "coin age",
      "confirmation"
    ],
    "tags": [
      "consensus",
      "security",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "minting",
    "order": 65,
    "term": "minting",
    "term_zh": "铸币",
    "aliases": [
      "mint",
      "mint rate"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "Minting is the protocol-defined creation of new coins when a block is produced. The PPCoin paper uses the term for both of its block types: proof-of-work blocks mint coins as in Bitcoin, with a mint amount that falls as difficulty rises (each 16x rise in difficulty halves it), while proof-of-stake blocks mint coins based on the coin age consumed in the coinstake transaction, at a rate of 1 cent per coin-year. Participants who generate proof-of-stake blocks are often called minters rather than miners.",
    "definition_zh": "铸币是指在产生区块时，按协议规定创造新币。PPCoin 论文把这个词用于两种区块：工作量证明区块像比特币一样铸币，但铸币量随难度上升而下降（难度每上升 16 倍，铸币量减半）；权益证明区块则按 coinstake 交易中消耗的币龄铸币，速率为每消耗 1 币年铸造 1 分（0.01 币）。生成权益证明区块的参与者常被称为“铸币者”（minter）而不是矿工。",
    "notes_zh": "这里的 minting 指协议层的新币发行，与 NFT 或代币合约中的 “mint” 函数（由合约创建新代币）不同。PPCoin 的 PoW 铸币量由难度而非区块高度决定，曲线是连续的，不同于比特币的阶梯式减半。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-12",
        "note": "Minting based on Proof-of-Stake 一节：在比特币的 PoW 铸币之外为 PoS 区块引入新的铸币过程；PoS 区块按 coinstake 交易消耗的币龄铸币，选择每消耗 1 币年铸造 1 分的速率以获得较低的未来通胀率；保留 PoW 是为了便于初始铸币。Other Considerations 一节：PoW 铸币率不由区块高度决定而由难度决定，难度每上升 16 倍，区块铸币量减半。Abstract：PoW 主要提供初始铸币。"
      },
      {
        "title": "Peercoin",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peercoin",
        "accessed": "2026-11-12",
        "note": "正文：Peercoin 同时使用 PoW 和 PoS 算法分发新币；早期主要依赖 PoW，现已转向 PoS。"
      }
    ],
    "examples": [
      {
        "en": "A mint rate of 1 cent per coin-year consumed is chosen to give rise to a low future inflation rate.",
        "zh": "选择每消耗 1 币年铸造 1 分的铸币率，以带来较低的未来通胀率。",
        "context": "PPCoin 论文 Minting based on Proof-of-Stake 一节。"
      },
      {
        "en": "A continuous curve is chosen such that each 16x raise of mining difficulty halves the block mint amount.",
        "zh": "所选的连续曲线使挖矿难度每上升 16 倍，区块铸币量就减半。",
        "context": "PPCoin 论文 Other Considerations 一节。"
      }
    ],
    "related_terms": [
      "mining reward",
      "proof-of-stake",
      "coinstake transaction",
      "halving",
      "difficulty"
    ],
    "tags": [
      "mining",
      "issuance",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "stake-kernel",
    "order": 66,
    "term": "stake kernel",
    "term_zh": "权益内核",
    "aliases": [
      "kernel",
      "coinstake kernel",
      "kernel input"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "advanced",
    "status": "draft",
    "definition_en": "In PPCoin, the stake kernel is the first input of a coinstake transaction; it must meet a hash target for a proof-of-stake block to be valid, which makes proof-of-stake block generation a stochastic process similar to proof-of-work. Unlike proof-of-work, the hashing is done over a limited search space (one hash per unspent wallet output per second), so no significant energy is consumed. The hash target is a target per unit of coin age (coin-day) consumed in the kernel, so the more coin age the kernel consumes, the easier it is to meet the target.",
    "definition_zh": "在 PPCoin 中，权益内核（kernel）是 coinstake 交易的第一个输入；它必须满足一个哈希目标，权益证明区块才有效，这使得生成权益证明区块成为与工作量证明类似的随机过程。与工作量证明不同，这种哈希运算在有限的搜索空间内进行（每个未花费钱包输出每秒一次哈希），因此不会消耗大量能源。该哈希目标是按内核所消耗的每单位币龄（币天）计算的目标，因此内核消耗的币龄越多，越容易满足目标。",
    "notes_zh": "内核只是 coinstake 交易的第一个输入，并不是整笔 coinstake 交易；其余输入（stake input）只是一并花费、不参与满足哈希目标。与比特币对所有节点相同的固定 PoW 目标不同，PPCoin 的 PoS 目标随内核消耗的币龄而放宽。论文还提到，节点会记录所有已见 coinstake 交易的（kernel, timestamp）对，以拒绝重复权益区块。",
    "citations": [
      {
        "title": "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake",
        "publisher": "Sunny King, Scott Nadal",
        "url": "https://www.peercoin.net/papers/peercoin-paper.pdf",
        "accessed": "2026-11-13",
        "note": "Proof-of-Stake 一节：coinstake 交易的第一个输入称为 kernel，必须满足一定的哈希目标协议，使 PoS 区块生成成为与 PoW 类似的随机过程；但哈希运算在有限搜索空间内进行（每个未花费钱包输出每秒一次哈希），不消耗大量能源；内核须满足的哈希目标是按内核消耗的每单位币龄（币天）计的目标，消耗币龄越多越容易满足；文中附图展示 Kernel input、Stake input、Stake output 的结构。Block Signatures and Duplicate Stake Protocol 一节：节点收集所有已见 coinstake 交易的 (kernel, timestamp) 对以防御重复权益攻击。"
      }
    ],
    "examples": [
      {
        "en": "The first input of coinstake is called kernel and is required to meet certain hash target protocol, thus making the generation of proof-of-stake blocks a stochastic process similar to proof-of-work blocks.",
        "zh": "coinstake 的第一个输入称为内核，它必须满足一定的哈希目标协议，从而使权益证明区块的生成成为与工作量证明区块类似的随机过程。",
        "context": "PPCoin 论文 Proof-of-Stake 一节。"
      },
      {
        "en": "If Bob has a wallet-output which accumulated 100 coin-years and expects it to generate a kernel in 2 days, then Alice can roughly expect her 200 coin-year wallet-output to generate a kernel in 1 day.",
        "zh": "如果 Bob 有一个累积了 100 币年的钱包输出，预计 2 天内能生成一个内核，那么 Alice 大致可以预期她那个 200 币年的钱包输出在 1 天内生成内核。",
        "context": "PPCoin 论文 Proof-of-Stake 一节中的示例。"
      }
    ],
    "related_terms": [
      "coinstake transaction",
      "coin age",
      "proof-of-stake",
      "difficulty",
      "transaction input"
    ],
    "tags": [
      "consensus",
      "proof-of-stake",
      "ppcoin",
      "whitepaper"
    ]
  },
  {
    "id": "mining-pool",
    "order": 67,
    "term": "mining pool",
    "term_zh": "矿池",
    "aliases": [
      "pool",
      "pooled mining",
      "pool mining"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "beginner",
    "status": "draft",
    "definition_en": "A mining pool is a group of miners who work together to mine each block and share the revenue whenever any member mines a block, typically in proportion to each member's contributed mining power. Because block discovery is a random process, a single small miner may wait a very long time between rewards; joining a pool does not change a miner's expected revenue, but it reduces the variance and makes income more predictable. Eyal and Sirer model a pool as a group of miners that behaves as a single agent with a centralized coordinator.",
    "definition_zh": "矿池是一组矿工共同挖每一个区块，并在任一成员挖到区块时分享收益的组织形式，收益通常按各成员贡献的算力比例分配。由于出块是随机过程，单个小矿工两次获得奖励之间可能要等待很久；加入矿池不会改变矿工的期望收益，但能降低收益的方差，使收入更可预测。Eyal 与 Sirer 将矿池建模为一组像单一主体一样行动、由中心化协调者指挥的矿工。",
    "notes_zh": "矿池降低的是收益波动，而不是提高期望收益。矿池成员通常提交难度更低的“份额”（share）来证明自己的贡献。矿池像单一主体一样行动，因此大型矿池意味着算力与出块策略的集中，这正是自私挖矿论文担心的风险。",
    "citations": [
      {
        "title": "Majority is not Enough: Bitcoin Mining is Vulnerable",
        "publisher": "Ittay Eyal, Emin Gün Sirer (arXiv:1311.0243; FC 2014)",
        "url": "https://arxiv.org/abs/1311.0243",
        "accessed": "2026-11-13",
        "note": "Section 2.1 Blockchain and Mining：从单个矿工角度看出块间隔方差很大，单个家庭 ASIC 矿工可能多年挖不到一个块，因此矿工通常组成矿池；矿池所有成员共同挖每个块，并在其中一人成功挖到时分享收益；加入矿池不改变期望收益，但降低方差。Section 3.1 Modeling Miners and Pools：一组矿工可组成像单一主体一样、由中心化协调者按某种策略行动的矿池，其算力为成员算力之和，收益按成员相对算力分配。"
      },
      {
        "title": "Pooled mining",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Pooled_mining",
        "accessed": "2026-11-13",
        "note": "正文：矿池挖矿是多个客户端共同参与生成区块，再按贡献的处理能力分割区块奖励的方式；矿池向提交与区块同类型但难度较低的工作量证明的客户端记“份额”（share）。"
      }
    ],
    "examples": [
      {
        "en": "While joining a pool does not change a miner's expected revenue, it decreases the variance and makes the monthly revenues more predictable.",
        "zh": "虽然加入矿池不会改变矿工的期望收益，但它降低了方差，使每月收入更可预测。",
        "context": "Majority is not Enough 论文 Section 2.1。"
      },
      {
        "en": "A group of miners can form a pool that behaves as single agent with a centralized coordinator, following some strategy.",
        "zh": "一组矿工可以组成一个矿池，它像单一主体一样，由中心化协调者按某种策略行动。",
        "context": "Majority is not Enough 论文 Section 3.1 对矿池的建模。"
      }
    ],
    "related_terms": [
      "miner",
      "mining reward",
      "hashrate",
      "selfish mining",
      "block withholding attack"
    ],
    "tags": [
      "mining",
      "pool",
      "selfish-mining",
      "paper"
    ]
  },
  {
    "id": "selfish-mining",
    "order": 68,
    "term": "selfish mining",
    "term_zh": "自私挖矿",
    "aliases": [
      "Selfish-Mine",
      "selfish mining attack",
      "selfish miner"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "Selfish mining is a mining strategy, introduced by Eyal and Sirer (2013), in which a colluding pool keeps the blocks it discovers private, intentionally forking the chain, and mines on its own private branch while honest miners keep mining on the public branch. When the public branch approaches the private branch in length, the pool reveals blocks from its private branch, so that honest miners' blocks are discarded and their work is wasted. The honest miners waste proportionally more than the pool, so a pool above a threshold size earns more than its share of the total mining power. The paper shows that the threshold can be close to zero for a well-connected pool, can never exceed 1/3, and can be raised to 1/4 with the proposed fix of choosing uniformly at random among equal-length branches.",
    "definition_zh": "自私挖矿是 Eyal 与 Sirer（2013）提出的一种挖矿策略：合谋的矿池把自己挖到的区块保密，有意制造分叉，在自己的私有分支上继续挖矿，而诚实矿工继续在公开分支上挖矿。当公开分支的长度逼近私有分支时，矿池公布私有分支中的区块，使诚实矿工的区块被丢弃、工作被浪费。诚实矿工浪费的比例比矿池更高，因此规模超过某一阈值的矿池能获得高于其算力占比的收益。论文表明：对于网络连接良好的矿池，阈值可接近于零；该阈值永远不会超过 1/3；若采用论文提出的修正（在等长分支间均匀随机选择），阈值可提升到 1/4。",
    "notes_zh": "自私挖矿不同于 51% 攻击：它不需要多数算力，目标是获得超额收益并吸引理性矿工加入，最终可能使矿池成长为多数。它也不同于针对矿池的“扣块攻击”（block withholding），后者是矿池成员损害矿池自身。论文提出的随机选分支修正并未被 Bitcoin Core 采用。",
    "citations": [
      {
        "title": "Majority is not Enough: Bitcoin Mining is Vulnerable",
        "publisher": "Ittay Eyal, Emin Gün Sirer (arXiv:1311.0243; FC 2014)",
        "url": "https://arxiv.org/abs/1311.0243",
        "accessed": "2026-11-13",
        "note": "Abstract 与 Section 1 Introduction：自私挖矿的核心思想是矿池将发现的区块保密、有意分叉，诚实节点继续在公开链上挖矿，矿池在私有分支上挖矿；当公开分支长度逼近私有分支时公布私有区块；诚实矿工浪费更多资源，矿池收益超过其算力份额；对连接良好的矿池阈值接近零，阈值上界为 1/3；提出的向后兼容修改可实现 1/4 阈值。Section 3 给出 Selfish-Mine 算法；Section 6 Fixing the Bitcoin Protocol：遇到等长竞争分支时应传播全部分支并均匀随机选择其一挖矿。"
      },
      {
        "title": "Selfish mining",
        "publisher": "Bitcoin Wiki",
        "url": "https://en.bitcoin.it/wiki/Selfish_mining",
        "accessed": "2026-11-13",
        "note": "正文：自私挖矿由 Eyal 与 Sirer 在 2013 年描述，是对中本聪共识的激励攻击而非密码学破解；攻击者胜出竞争的概率取决于连接性（论文中的参数 γ）；任何此类策略在超过 1/3 算力时都无法被消除；随机选择等工作量链尖的对策可将阈值提升至 1/4，但 Bitcoin Core 仍采用先见到的区块，该修正未部署；自私挖矿不同于多数攻击。"
      }
    ],
    "examples": [
      {
        "en": "The key idea behind this strategy, called Selfish Mining, is for a pool to keep its discovered blocks private, thereby intentionally forking the chain.",
        "zh": "这一被称为自私挖矿的策略，其核心思想是矿池将自己发现的区块保密，从而有意地让链分叉。",
        "context": "Majority is not Enough 论文 Section 1 Introduction。"
      },
      {
        "en": "The protocol will never be safe against attacks by a selfish mining pool that commands more than 33% of the total mining power of the network.",
        "zh": "对于掌握全网总算力 33% 以上的自私挖矿矿池，该协议永远无法抵御其攻击。",
        "context": "Majority is not Enough 论文 Section 1 Introduction。"
      }
    ],
    "related_terms": [
      "mining pool",
      "incentive compatibility",
      "fork",
      "longest chain",
      "51% attack",
      "honest node"
    ],
    "tags": [
      "mining",
      "attack",
      "incentives",
      "selfish-mining",
      "paper"
    ]
  },
  {
    "id": "incentive-compatibility",
    "order": 69,
    "term": "incentive compatibility",
    "term_zh": "激励相容",
    "aliases": [
      "incentive-compatible",
      "incentive compatible",
      "IC"
    ],
    "part_of_speech": "noun",
    "category": "Consensus / 共识",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A protocol is incentive-compatible when following it as prescribed is the best strategy for every rational participant, so that no one can gain by deviating. In game theory and economics, a mechanism is called incentive-compatible if every participant can achieve their own best outcome by reporting their true preferences. For Bitcoin, Eyal and Sirer state the conventional assumption as: the best strategy of a rational minority pool is to be honest, and a minority of colluding miners cannot earn disproportionate benefits by deviating from the protocol; their selfish mining strategy shows that Bitcoin mining, as prescribed and implemented, is not incentive-compatible.",
    "definition_zh": "当按规定执行协议对每个理性参与者都是最优策略、任何人都无法通过偏离协议获益时，该协议就是激励相容的。在博弈论和经济学中，若每个参与者都能通过如实报告自己的真实偏好来获得对自己最好的结果，该机制就被称为激励相容。对于比特币，Eyal 与 Sirer 把传统假设表述为：理性的少数派矿池的最佳策略是诚实，少数合谋矿工无法通过偏离协议获得不成比例的收益；他们的自私挖矿策略表明，按规定和实现的比特币挖矿并不是激励相容的。",
    "notes_zh": "激励相容关注的是“理性参与者是否愿意遵守协议”，不同于“诚实多数”这类安全假设：即便多数矿工最初诚实，协议若不激励相容，理性矿工也可能转向偏离策略。该概念源自机制设计，归功于经济学家 Leonid Hurwicz。",
    "citations": [
      {
        "title": "Majority is not Enough: Bitcoin Mining is Vulnerable",
        "publisher": "Ittay Eyal, Emin Gün Sirer (arXiv:1311.0243; FC 2014)",
        "url": "https://arxiv.org/abs/1311.0243",
        "accessed": "2026-11-13",
        "note": "Section 1 Introduction：传统观点长期认为比特币协议是激励相容的，即理性的少数派矿池的最佳策略是诚实，少数合谋矿工无法通过偏离协议获得不成比例的收益；本文表明按规定和实现的比特币协议并非激励相容。Section 3.1：假设矿工是理性的，即试图最大化收益并可能为此偏离协议。Section 9 Conclusion：比特币的挖矿算法不是激励相容的。"
      },
      {
        "title": "Incentive compatibility",
        "publisher": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Incentive_compatibility",
        "accessed": "2026-11-13",
        "note": "导语：在博弈论和经济学中，若每个参与者都能通过报告真实偏好获得自己的最佳结果，则该机制称为激励相容（IC）；该概念归功于经济学家 Leonid Hurwicz；包括占优策略激励相容（DSIC）和贝叶斯纳什激励相容（BNIC）等不同强度。"
      }
    ],
    "examples": [
      {
        "en": "In this paper, we show that the conventional wisdom is wrong: the Bitcoin protocol, as prescribed and implemented, is not incentive-compatible.",
        "zh": "在本文中，我们证明传统观点是错误的：按规定和实现的比特币协议并不是激励相容的。",
        "context": "Majority is not Enough 论文 Section 1 Introduction。"
      },
      {
        "en": "A recent survey identifies incentive-compatibility as a critical property of the system.",
        "zh": "一篇近期综述将激励相容视为该系统的一项关键属性。",
        "context": "Majority is not Enough 论文 Section 7 Related Work。"
      }
    ],
    "related_terms": [
      "incentive",
      "selfish mining",
      "honest node",
      "mining pool"
    ],
    "tags": [
      "game-theory",
      "incentives",
      "consensus",
      "selfish-mining",
      "paper"
    ]
  },
  {
    "id": "block-withholding-attack",
    "order": 70,
    "term": "block withholding attack",
    "term_zh": "扣块攻击",
    "aliases": [
      "block withholding",
      "BWH attack",
      "sabotage attack"
    ],
    "part_of_speech": "noun",
    "category": "Mining / 挖矿",
    "level": "intermediate",
    "status": "draft",
    "definition_en": "A block withholding attack is an attack on a mining pool in which a pool member submits its ordinary shares but never publishes the valid blocks it finds, decreasing the pool's revenue. This is possible because miners can tell whether a share they have found is also a valid block and can refrain from or delay submitting it. In the simplest form (sabotage) the attacker gains nothing directly and only harms the pool operator or the other participants. Eyal and Sirer stress that it is unrelated to selfish mining, which is an attack by a pool on the whole system rather than by a member on its own pool.",
    "definition_zh": "扣块攻击是针对矿池的一种攻击：矿池成员照常提交普通份额（share），却从不公布自己找到的有效区块，从而降低矿池的收益。之所以可行，是因为矿工能够判断自己找到的份额是否同时也是有效区块，并据此不提交或延迟提交。最简单的形式（破坏型）中，攻击者自己没有直接收益，只会损害矿池运营者或其他参与者。Eyal 与 Sirer 强调，它与自私挖矿无关：自私挖矿是矿池对整个系统的攻击，而扣块攻击是成员对自己所在矿池的攻击。",
    "notes_zh": "名称相似但对象不同：扣块攻击“扣”的是矿池成员不交给矿池的区块，受害者是矿池；自私挖矿“藏”的是矿池暂不公布给全网的区块，受害者是其他诚实矿工。Rosenfeld 还描述了可获利的“伺机”（lie in wait）变体。",
    "citations": [
      {
        "title": "Majority is not Enough: Bitcoin Mining is Vulnerable",
        "publisher": "Ittay Eyal, Emin Gün Sirer (arXiv:1311.0243; FC 2014)",
        "url": "https://arxiv.org/abs/1311.0243",
        "accessed": "2026-11-13",
        "note": "Section 7 Related Work：在扣块攻击中，矿池成员从不公布其找到的区块，从而降低矿池收益；虽然听起来与 Selfish-Mine 相似，但二者无关，本文处理的是矿池对系统的攻击。"
      },
      {
        "title": "Analysis of Bitcoin Pooled Mining Reward Systems",
        "publisher": "Meni Rosenfeld (arXiv:1112.4980)",
        "url": "https://arxiv.org/abs/1112.4980",
        "accessed": "2026-11-13",
        "note": "Section 6.2 Block withholding：在现有协议下，矿工能判断找到的份额是否为有效区块，并可不提交或延迟提交区块；由此可实施两种攻击：破坏（sabotage，攻击者从不提交任何区块，对自己无直接好处，只损害矿池运营者或参与者）与伺机（lie in wait，推迟提交区块以获利）；6.2.3 节提出“不可辨识份额”（oblivious shares）作为解决方案。"
      }
    ],
    "examples": [
      {
        "en": "In a block withholding attack, a pool member decreases the pool revenue by never publishing blocks it finds.",
        "zh": "在扣块攻击中，矿池成员通过从不公布自己找到的区块来降低矿池收益。",
        "context": "Majority is not Enough 论文 Section 7 Related Work。"
      },
      {
        "en": "The simpler attack is sabotage, where the attacker never submits any blocks. This has no direct benefit for the attacker, only causing harm to the pool operator or participants.",
        "zh": "较简单的攻击是破坏型：攻击者从不提交任何区块。这对攻击者没有直接好处，只会损害矿池运营者或参与者。",
        "context": "Rosenfeld《Analysis of Bitcoin Pooled Mining Reward Systems》Section 6.2。"
      }
    ],
    "related_terms": [
      "mining pool",
      "selfish mining",
      "miner",
      "mining reward"
    ],
    "tags": [
      "mining",
      "attack",
      "pool",
      "selfish-mining",
      "paper"
    ]
  }
];
