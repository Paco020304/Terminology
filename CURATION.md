# 每日术语收录流程（Daily curation）

每天北京时间 07:00，Devin Automation 按本文件执行一次，向 `data/terms-data.js` 追加 **5 个**新词条，并直接推送到 `main`（GitHub Pages 自动更新）。

## 1. 来源路线图

路线图与进度保存在 `data/source-plan.json`，按 `phases` 顺序推进：

1. `bitcoin-whitepaper`：比特币白皮书剩余核心概念。
2. `classic-milestones`：业界公认的里程碑文章。以太坊白皮书最先，其余按发表时间从早到晚延续到当下。
3. `frontier-papers`：所有经典文章完成后，再从最前沿的论文中收录（IACR ePrint、arXiv cs.CR / cs.DC、IEEE S&P、USENIX Security、CCS、NDSS、FC、AFT 等）。

每个 source 有 `status`（`pending` / `in_progress` / `done`）、`candidate_terms`（提示，不是固定清单）和 `terms_added`（已收录的词条 id）。

## 2. 每次运行步骤

1. 读取 `data/source-plan.json` 和 `data/terms-data.js`。
2. **确定当前来源**：第一个 `in_progress` 的 source；没有则取下一个 `pending`（按 phase 顺序、再按 sources 数组顺序），并设为 `in_progress`。
3. **阅读原文**：打开 source 的 `url`，从原文挑出词条。`url` 为 `null` 时先找到官方链接并回填。
4. **选 5 个词**：
   - 必须是该来源提出、定义或核心依赖的概念，对新手有价值；优先 `candidate_terms`，也可补充原文中更重要的词。
   - 不得与已有词条重复（对比 `id`、`term`、`aliases`，忽略大小写）。
   - 当前来源剩余的好词不足 5 个时：把它标记为 `done`，转到下一个来源继续补足 5 个。phase 内所有 source 都 `done` 时，该 phase 标 `done`，下一 phase 标 `in_progress`。
   - `classic-milestones` 进行中如发现遗漏的公认里程碑文章，可按发表时间插入到尚未开始的位置。
5. **前沿阶段**（`frontier-papers`）：每次选 1–2 篇最近 30 天内发表、影响力或新颖性突出的论文，作为新 source 追加到该 phase（字段同上，`venue` 写 ePrint / arXiv / 会议名），从中挑出确有新意且不易过时的概念。
6. **写词条**：追加到 `window.TERMINOLOGY_TERMS` 数组末尾，字段格式与已有词条一致：
   - `id`：小写 kebab-case；`order`：接续当前最大值，连续递增。
   - `category`：优先复用已有分类；新分类用 `English / 中文` 格式（如 `Smart Contracts / 智能合约`、`Scaling / 扩容`、`Privacy / 隐私`、`DeFi / 去中心化金融`）。
   - `level`：`beginner` / `intermediate` / `advanced`；`status`：`draft`。
   - `definition_en` / `definition_zh`：严谨、可在引用中核实；中文忠实对应英文。
   - `notes_zh`：易混淆点或常见误解。
   - `citations`：至少 1 条，**第一条必须是当前来源原文**，`note` 写明出自哪一节；可补充 ethereum.org、Bitcoin Wiki、EIP/BIP 等权威资料；`accessed` 为当天北京日期。
   - `examples`：2 条中英对照例句，`context` 说明出处或场景。
   - `related_terms`、`tags`、`aliases`、`part_of_speech` 按需填写。
7. **更新进度**：把新词条 id 加入对应 source 的 `terms_added`，更新各 `status`。
8. **校验**：`python3 scripts/validate_terms.py` 必须输出 `OK`。
9. **提交**：提交信息格式 `Add terms 31-35: term a, term b, term c, term d, term e`，推送到 `main`。

## 3. 约束

- 只追加，不修改、不删除已有词条（除非是修复校验错误）。
- 不改 `index.html` / `app.js` / `styles.css`。
- 无法从原文或权威资料核实的定义不要写入。
