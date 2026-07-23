---
layout: ../../layouts/PostLayout.astro
title: "从 /grill-me 到 /grill-with-docs：把对话沉淀为共享语言与架构决策"
description: "用 CONTEXT.md 保存共享语言，用 ADR 记录少数关键取舍，让一次对话成为可复用的代码库上下文"
pubDate: 2026-07-23
tags: ["MattPocockSkill"]
---

> Matt Pocock《I stopped using /grill-me for coding. Here’s what I use instead:》

> 好的需求访谈不应只改善一次会话，还应成为代码库可持续复用的上下文

原视频：[YouTube / 6BB6exR8Zd8](https://www.youtube.com/watch?v=6BB6exR8Zd8)

讲者：Matt Pocock  |  发布日期：2026-05-14  |  时长：15 分 16 秒

整理日期：2026-07-23

> **一句话结论**  
> `/grill-with-docs` 并没有放弃 `/grill-me` 的追问机制，而是在它外面增加一层持久化记忆：把已确认的领域术语写进 `CONTEXT.md`，把少数难以逆转、存在真实取舍且脱离上下文会令人意外的决定写成 ADR，让下一次会话、后续规格和生成的代码继续使用同一种语言。

## 执行摘要

Pocock 先肯定 `/grill-me` 的价值：它会沿着设计决策树持续采访用户，逐一解决前置决策，直到人和 Agent 建立共同理解。但他在长期使用中发现了一个结构性缺陷：访谈能在当前会话中对齐概念，却没有把对齐结果变成代码库资产。Agent 下次仍要重新询问“standalone video 是什么”，人也会重新用一大段话解释本可由一个领域术语表达的概念。[00:00](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=0s) [00:56](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=56s)

他的解决办法来自领域驱动设计（DDD）的 ubiquitous language：领域专家、开发者和代码对同一概念使用同一个名字。最初，他在 `/grill-me` 过程中额外调用一个 ubiquitous-language Skill；后来把二者合并为 `/grill-with-docs`。新 Skill 会读取已有的 `CONTEXT.md`，用现有词汇表挑战模糊或冲突的用词，并在术语达成一致时立即更新文档；对于词汇表无法表达的少数重大取舍，再用 ADR 保存“为什么”。[02:47](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=167s) [04:32](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=272s) [07:27](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=447s)

视频中的演示不是泛泛而谈。Pocock 要为内容管理应用增加 `Pitch`：先确定 `Pitch` 与 `Standalone Video` 的一对多关系，再处理“带 Pitch 的视频是否仍叫 Standalone Video”的术语冲突，随后讨论状态、空 Pitch、删除约束等会受这些词义影响的规则。Agent 最后把已确认的定义和关系写回 `CONTEXT.md`。Pocock 特别指出，这些名字会进入变量名、文件名、UI 和后续规划文档，因此早期对齐语言不是纯粹的文字润色。[08:25](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=505s)

讲者观察到三项收益：回复更简洁、Agent 的推理过程更容易贴近意图、代码更容易搜索和导航。不过，“减少 token、改善推理”是他的实践观察，不是视频中经过对照实验验证的定量结论。[12:24](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=744s)

最终规则很简单：有代码库时优先使用 `/grill-with-docs`；没有代码库、只需要通用采访时继续使用 `/grill-me`。后者仍适用于写作、个人访谈等非工程任务，并没有被淘汰。[13:26](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=806s)

## 一张表看懂变化

| 维度 | `/grill-me` | `/grill-with-docs` |
| --- | --- | --- |
| 核心动作 | 沿决策树持续追问，形成当前会话内的共同理解 | 保留同样的追问，再用领域文档约束和保存结果 |
| 上下文来源 | 用户回答、当前会话、代码探索 | 以上全部，加已有 `CONTEXT.md` 与 ADR |
| 主要产物 | 当前会话内的共同理解 | 共同理解 + 可复用词汇表 + 少量关键决策记录 |
| 最适合 | 无代码库的通用访谈、写作、个人问题 | 有代码库的功能设计、领域建模和架构讨论 |
| 主要局限 | 好的术语和决策随会话结束而消散 | 需要维护文档；过度讨论命名可能演变为 bike-shedding |

## 1. `/grill-me` 为什么有效，又为什么仍不够

视频开场，Pocock 把 `/grill-me` 的四句核心提示称为自己写过最有影响力的几句话之一。它让 LLM 不急着生成计划，而是持续采访用户，沿设计树逐支向下，并按依赖顺序解决决策。他展示的用户反馈认为，虽然前期问题变多，但实现阶段反而更接近“一次做对”；这些是支持者的使用轶事，不是成功率统计。[00:00](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=0s)

问题出现在重复使用时。视频用内容应用中的 `Pitch` 举例：Pocock 借用 MrBeast“先想包装，再做内容”的创作思路，把 `Pitch` 定义为视频正式制作前的包装设想，包括标题、描述和呈现方式；应用里又已有 Course、Lesson、Video、Standalone Video 等内部术语。开发者知道 Standalone Video 指 `lessonId = null`、不隶属于 Lesson 的 Video，Agent 却未必知道。[00:56](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=56s)

因此，普通 grilling 会反复遇到三类摩擦：

- Agent 需要重新询问本应稳定的领域术语；
- 人和 Agent 偶尔创造出很好的共同语言，却没有地方保存；
- 人自己使用冗长或含糊的表达时，Agent 未必会主动把它收敛为统一术语。

**我的归纳：** `/grill-me` 优化的是一次会话的“对齐过程”，但缺少跨会话的“状态载体”。视频真正要修补的不是提问质量，而是对齐结果的生命周期。

## 2. 用 ubiquitous language 建立最薄的持久化层

Pocock 从 Eric Evans 的《[Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.domainlanguage.com/)》（常被称为 DDD “Big Blue Book”）中借用 ubiquitous language。它要求领域专家、开发者和代码使用同一套词汇：业务人员说出某个区域或实体的名字，开发者能理解，代码中的结构也能直接对应。[02:47](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=167s)

他一开始在 grilling 过程中单独调用 ubiquitous-language Skill，边聊边整理术语。随后意识到，访谈与词汇沉淀本来就是同一条工作流，于是组合出 `/grill-with-docs`。[04:32](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=272s)

视频展示的文档策略是：

1. 在仓库中寻找 `CONTEXT.md`，先读已有的共同语言；
2. 对照词汇表指出术语冲突，逼迫模糊表达变得精确；
3. 用具体场景和代码交叉检查定义，而不是只在抽象层讨论；
4. 术语达成一致后及时更新文档，让下一轮问题建立在新状态上；
5. 大型 monorepo 可以按 DDD 的 bounded context 拆成多个语境，并用 context map 组织，而不必把全公司词汇塞进一个文件。

视频还展示了一个很小但重要的接线动作：在仓库级 `CLAUDE.md` 中放置领域文档指针，让进入仓库的 Agent 知道应先到哪里读取共享语言。词汇表负责保存知识，Agent 指令文件只负责告诉工具如何找到它，不必复制整份正文。

当前官方说明进一步明确：`CONTEXT.md` 应保持为词汇表，不应混入实现细节或完整规格；词汇应在确认时即时写入，而不是会话结束后批量补记。参见 [AI Hero 官方说明](https://www.aihero.dev/grill-with-docs)。

## 3. `CONTEXT.md` 与 ADR 分工：一个记录“是什么”，一个记录“为什么”

词汇表能说明实体和关系，却不能表达所有非显然决策。因此，Pocock 又加入 Architectural Decision Record（ADR）。[07:27](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=447s)

视频给 ADR 设置了很高的门槛。一个决定值得单独记录，通常同时具备：

- 难以逆转；
- 脱离背景看会令人意外；
- 存在真实取舍，且会对后续产生影响。

如果只是两个近似库之间的可替换选择，就没有必要制造 ADR。当前官方页面也强调 ADR 应保持稀少；多数会话只会改善词汇表，可能一个 ADR 都不产生。

**我的归纳：** 可以把文档边界理解为：

| 工件 | 回答的问题 | 不应承担 |
| --- | --- | --- |
| `CONTEXT.md` | “我们把这个领域概念叫什么，它与别的概念是什么关系？” | 实现方案、任务计划、完整需求规格 |
| ADR | “为什么在重大取舍中选择了这个难以逆转的方向？” | 每个可撤销的小决定、流水账 |
| Spec / PRD | “系统最终要呈现什么行为？” | 统一团队词义本身 |

## 4. 演示：`Pitch` 如何从模糊想法变成稳定领域模型

演示开始时，Agent 先读取已有 `CONTEXT.md`，识别出 Standalone Video 已有定义，再围绕新概念 `Pitch` 提问，而不是让 Pocock 重复解释全部背景。[08:25](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=505s)

这段对话依次暴露了几个会影响实现的决策：

1. **基数关系：** 一个 Pitch 对应一个还是多个 Standalone Video？Pocock 接受一对多。
2. **术语冲突：** 与 Pitch 关联后，视频是否仍属于 Standalone Video？这个答案会影响 UI 分区、查询方式和用户看到的名称。
3. **建模方向：** 他最后倾向于把 Pitch 视为 Standalone Video 的元数据关系，而不是发明一套完全独立的视频类别。
4. **状态语义：** `PitchStatus` 可以有 idle、scheduled、shipped 等状态，但初版允许手动自由切换，不急于加入自动状态机。
5. **空集合：** Pitch 可以暂时没有任何视频，因为它本来就是先创建包装想法，再选择最好的进入制作。
6. **删除规则：** 关系会进一步落到删除级联；Pocock 选择 `ON DELETE RESTRICT`，并说明自己的工作流通常偏向归档而非真正删除。

随后，他要求 Agent 把当前共识写回 `CONTEXT.md`。生成的 `Pitched Standalone Video`、`Unattached Standalone Video` 等名字仍显得别扭，说明文档化不会自动得到完美术语；它只是让问题显式、可继续修正。Pocock 也主动停止继续纠结命名，认为“足够好就先交付，未来仍可重构”。[约 10:30](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=630s)

**我的归纳：** 这段演示的重要之处，是语言决策逐步落到数据关系、状态、删除约束、UI 分组、变量名和文件名。领域语言不是代码之外的装饰，而是代码结构的输入。

## 5. 讲者总结的三项收益

### 5.1 回复更简洁

有了共同术语，Agent 不必每次重新展开定义，可以用一个 canonical term 指代完整概念，从而减少对话中的重复解释。[12:24](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=744s)

### 5.2 推理更贴近意图

Pocock 观察到，简洁的共同语言也会反映到 Agent 的 thinking trace 中，使其更少绕路、更接近用户意图。这里应保留证据边界：这是讲者的经验观察，视频没有提供基准测试或 token 数据。

### 5.3 代码更容易导航

规划文档、用户对话与代码使用同一套名字后，Agent 和人都可以直接搜索 `Pitch` 找到相关文件、变量和行为，不必先翻译多组近义词。Pocock 将其视为 DDD 对人类团队的传统收益在 AI 协作中的延伸。[约 13:00](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=780s)

## 6. `/grill-me` 没有死：按是否存在代码库选择

视频最后明确否定“新 Skill 完全取代旧 Skill”。`/grill-me` 仍适合没有代码库的通用访谈。Pocock 举了一个非工程案例：有人在为母亲写悼词时，让 Agent 持续追问相关回忆，从而找出更多故事。[13:26](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=806s)

他的最终经验法则是：

- **有代码库：** 使用 `/grill-with-docs`，让共同语言积累在仓库中；
- **没有代码库：** 使用 `/grill-me`，只做高质量访谈；
- **项目极早期：** 一旦已有可承载文档的仓库，反而更适合尽早使用 `/grill-with-docs`，因为这正是建立共同语言的阶段。

## 7. 对团队落地最有价值的启示

> 以下是基于视频的归纳建议，不是讲者给出的固定模板。

### 7.1 先做最小版本，不必复制整套体系

可以先在一个真实功能中试点：仓库根目录维护一个短 `CONTEXT.md`，只记录高频、容易混淆、会进入代码的领域术语；只有出现难逆转的真实取舍时才创建 ADR。

### 7.2 把文档更新放进对话闭环

不要等功能结束后再让 Agent“总结一下”。术语一旦确认就写入，后续问题才能立即以它为约束；否则最终总结仍可能遗漏关键转折。

### 7.3 建立停止条件，避免命名讨论无限延长

视频里的 `Pitched Standalone Video` 并不优雅，但 Pocock 选择先接受可工作的名字。一个实用停止条件是：团队能无歧义解释概念、关系和边界，代码可搜索，且没有已知的致命冲突；更好的命名可以在新证据出现后重构。

### 7.4 定期检查文档与代码是否漂移

视频强调“文档让对齐存活”，但没有展开文档过期治理。实际落地时，应在涉及领域词义或关键架构取舍的变更中同步检查 `CONTEXT.md` / ADR；否则持久化的旧结论会比一次性聊天更有误导性。

## 8. 不要误读这段视频

**不是 `/grill-me` 无效。** 新 Skill 保留了同一套 grilling 方法，只是给结果增加持久化载体。

**不是把所有上下文塞进一个文件。** 视频提到 bounded context；大型仓库应按语境拆分，而非维护一个无限增长的全局词典。

**不是所有决定都写 ADR。** 可逆、普通、没有真实取舍的选择不值得单独记录。

**不是命名越精细越好。** 术语需要足够准确，但视频也明确展示了停止 bike-shedding、先交付再重构。

**不是文档自动保证模型更聪明。** “更少 token、推理更对齐”是讲者经验；收益仍取决于词汇质量、文档是否及时更新以及 Agent 是否实际读取它们。

## 9. 版本提示：视频中的实现与当前仓库已继续演化

视频展示的是 2026-05-14 当时较完整的 `/grill-with-docs` 提示文本。当前 `mattpocock/skills` 主分支中的入口已经变成一个很薄的编排 Skill：运行 `/grilling`，同时使用 `/domain-modeling`；详细的词汇表与 ADR 规则下沉到了可复用的基础 Skill 中。参见 [当前 `SKILL.md`](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)。

这不推翻视频的思想，反而说明作者把“访谈原语”和“领域文档原语”进一步模块化了。阅读本文时，应区分视频当时展示的具体提示文本与今天仓库中的封装方式。

截至整理日，官方把它放在一条更完整的主链开头：

`grill-with-docs → to-spec → to-tickets → implement → code-review`

也就是说，`CONTEXT.md` 和 ADR 负责让语言与关键取舍稳定下来，后续 Spec、任务拆分和实现则各自承接不同职责。

## 结语

这段视频最值得带走的，不是一个新的 slash command，而是一个工程判断：**共享理解如果只存在于对话里，就不属于代码库。**

`/grill-me` 解决了“在写代码前问对问题”；`/grill-with-docs` 继续追问“这些答案如何让下一次工作更容易”。`CONTEXT.md` 保存团队如何命名世界，ADR 保存少数重大选择背后的理由。二者让 Agent 的上下文从一次性输入，变成可以审查、修正和复用的工程资产。

## 附录 A：视频回看地图

| 时间 | 官方章节 | 核心内容 |
| --- | --- | --- |
| [00:00](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=0s) | Intro | `/grill-me` 的四句提示、设计树式追问与用户反馈。 |
| [00:56](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=56s) | Where `/grill-me` Fails | `Pitch` / `Standalone Video` 示例；重复解释领域术语，访谈成果没有持久化。 |
| [02:47](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=167s) | `/ubiquitous-language` | 引入 DDD 的共同语言，让领域专家、开发者和代码使用相同词汇。 |
| [04:32](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=272s) | `/grill-with-docs` | 合并访谈与领域文档；读取、质疑并即时更新 `CONTEXT.md`。 |
| [07:27](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=447s) | ADRs | 只记录难逆转、令人意外且存在真实取舍的决定。 |
| [08:25](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=505s) | Demo | Pitch 基数、术语冲突、状态、空关系、删除约束与文档更新。 |
| [12:24](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=744s) | Benefits | 回复更简洁、推理更对齐、代码更易导航。 |
| [13:26](https://www.youtube.com/watch?v=6BB6exR8Zd8&t=806s) | Is `/grill-me` dead? | 有代码库用 docs，无代码库继续使用普通 grilling。 |

## 附录 B：资料来源与证据边界

1. **一手来源：** [YouTube 原视频](https://www.youtube.com/watch?v=6BB6exR8Zd8)。标题、频道、发布日期、15:16 时长、简介、官方章节，以及“英语自动生成”字幕轨道均由 YouTube 页面核验。
2. **一手来源：** [AI Hero：grill-with-docs 官方说明](https://www.aihero.dev/grill-with-docs)。用于核对当前推荐用法、`CONTEXT.md` / ADR 边界及工作流位置。
3. **一手来源：** [mattpocock/skills 当前 `grill-with-docs` 源码](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)。用于说明当前版本已经拆为 `/grilling` + `/domain-modeling` 编排。
4. **辅助转录：** [Rewiz 完整转录页](https://rewiz.app/channels/%40matt-pocock/i-stopped-using-grill-me-for-coding-heres-what-i-use-instead)。仅在 YouTube Transcript 面板加载异常时用于补全逐段讲述，并以原视频官方章节和官方源码交叉校对；它不是一手来源，自动转录中的拼写错误已按上下文谨慎校正。

*说明：正文中“视频认为 / Pocock 表示”是讲者主张；“我的归纳 / 落地建议”是整理者基于视频的推导。官方章节提供段落级时间边界，个别“约”时间点用于快速回看，不应当作逐字字幕的精确起始秒。*
