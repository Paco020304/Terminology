# Terminology daily schedule

目标：每天北京时间 07:00 自动新增 5 个词条。

实现方式：

- GitHub Actions: `.github/workflows/daily-terms.yml`
- Cron: `0 23 * * *`（UTC）= 北京时间次日 07:00（UTC+8）
- 脚本：`scripts/add_daily_terms.py`
- 数据流：`data/term-queue.json` → `data/terms-data.js`

来源顺序见 `data/source-plan.json`：

1. 比特币白皮书剩余核心概念
2. 以太坊白皮书
3. 业界公认里程碑文章
4. 前沿论文

补队列：当 `data/term-queue.json` 少于 5 个词条时，需要继续按 source-plan 整理并写入队列；workflow 每天只会取队列前 5 个。
