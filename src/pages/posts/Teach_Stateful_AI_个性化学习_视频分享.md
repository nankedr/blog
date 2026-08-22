---
layout: ../../layouts/PostLayout.astro
title: "/teach：用有状态 AI 工作区持续推进个性化学习"
description: "用 mission、可信资源、互动课程与学习记录保存跨会话状态，让 AI 教学持续对准学习者的下一步"
pubDate: 2026-08-22
tags: ["MattPocockSkill"]
---

> Matt Pocock《Learn anything with the /teach skill》一手资料解读

> 好的 AI 教师不只是生成一次答案，而是记住学习目的、已掌握内容与下一步合适的挑战

原视频：[YouTube / s5T5oQJcJ6U](https://www.youtube.com/watch?v=s5T5oQJcJ6U)

频道 / 讲者：[Matt Pocock](https://www.youtube.com/@mattpocockuk)  |  发布日期：2026-06-08  |  时长：13 分 04 秒（播放器记录 784 秒）

整理日期：2026-08-22

> **一句话结论**<br>
> `/teach` 把一个目录变成可持续的学习工作区：先用 mission 固定学习者真正想完成的事，再依据高可信资源生成短小、可交互的 HTML 课程，用学习记录和参考资料保存跨会话状态，据此把下一课放在学习者的“最近发展区”；终点不是让人依赖 Agent，而是让人获得知识和技能后进入真实社群，继续形成实践智慧。[02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s) [06:11](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=371s) [07:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=436s) [09:37](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=577s)

## 阅读说明

正文中的“视频认为 / Pocock 表示”是对视频的中文转述；“整理者归纳 / 落地建议”是基于演示的推导。逐字引语来自 YouTube 的 **English (auto-generated)** 字幕，保留英文并附中文直译。自动字幕不是人工校订稿，专名或口语不清处不会被当作逐字证据。“当前版本补充”来自作者官方仓库与官网，和 2026-06-08 视频中的设计严格分开。

## 执行摘要

Pocock 有十年教学经历，其中六年做声乐教练、四年教开发者。他想把自己的教学方法写进 Skill，于是在一次去伦敦的长途车程中做出 `/teach`，并以学习三阶魔方作为示例。他认为，好的教学天然是有状态的：教师要记住学习者为何学习、已经掌握什么、哪里卡住，以及接下来什么挑战最合适。[00:00](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=0s) [00:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=39s) [01:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=81s)

`/teach` 没有把“记忆”寄托在无限增长的聊天记录里，而是把状态拆成可检查的文件：mission 说明学习目的，resources 约束知识来源，HTML lessons 承载讲解和交互，learning records 保存已证明或自报的进度，reference documents 压缩术语和操作流程，notes 保存教学偏好。新会话先读取这些工件，再针对最新困难生成下一课。[02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s) [03:30](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=210s) [05:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=321s) [06:11](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=371s)

它的教学模型可概括为三层：知识来自高质量、高可信资料；技能通过与当前目标高度相关、带反馈的练习获得；智慧则要到真实社群中与其他学习者和实践者互动。Agent 的职责不是包办终身学习，而是帮助人走到能够独立实践和向社群求教的位置。[08:36](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=516s) [09:23](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=563s)

## 核心闭环

| 环节 | 工作区状态 / 行为 | 对下一步的作用 | 视频证据 |
| --- | --- | --- | --- |
| 明确目标 | `MISSION.md`：为什么学、什么算成功 | 排除与真实目标无关的内容 | [02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s) |
| 建立依据 | `RESOURCES.md`：一手、高可信资料 | 约束课程的知识来源，并随学习更新 | [03:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=186s) |
| 提供课程 | `lessons/*.html`：编号的单课 HTML | 用图示、简短说明和交互完成一个小目标 | [03:30](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=210s) |
| 获得反馈 | 测验、真实操作、学习者报告 | 判断知识是否转化为技能 | [03:54](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=234s) |
| 更新状态 | `learning-records/*.md` | 让后续会话知道学习者已经走到哪里 | [04:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=259s) |
| 压缩复用 | glossary、solve card 等参考材料 | 供后续课程引用，也方便学习者快速回看 | [05:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=321s) |
| 续接与调度 | 新会话读取工作区，以最近发展区选择下一课 | 聚焦当前瓶颈，而非重启固定大纲 | [06:11](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=371s) [07:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=436s) |
| 走向实践 | 推荐可交流、验证的社群 | 把知识和技能发展成实践智慧 | [09:23](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=563s) |

## 1. 为什么教学 Skill 必须有状态

Pocock 把无状态 Skill 定义为“不保留上一次运行的状态”：它不记得此前做过什么，也不在文件系统留下供以后继续的信息。有状态 Skill 则把笔记保存到本地文件系统或 MCP 服务，未来运行可以重新读取。[00:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=39s) [00:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=59s)

他用两个既有 Skill 作对照：`/grill-me` 只在当前会话里追问，属于无状态；`/grill-with-docs` 会保存 ADR 和词汇表，因此能随使用积累状态。两者没有绝对优劣，关键是任务是否需要跨运行连续性。[01:40](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=100s) [02:08](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=128s)

教学需要连续性：教师应知道学生学过什么、下一步能学什么，也应复用此前找到的优质材料。因此 Pocock 放弃“一次请求生成一份课程”的无状态设想，把 `/teach` 设计成多会话工作区。[01:08](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=68s) [01:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=81s)

**整理者归纳：** 核心不在“记得越多越好”，而在把记忆拆成职责清晰、可审查、可修改的外部状态。

## 2. 从安装到 mission：先定义成功，再开始出课

视频演示从作者的 skills 仓库安装 `/teach`，随后在一个空目录中通过 Coding Agent 启动它。第一个关键产物不是课程，而是 mission，因为若不了解学生为何学习，教师就无法有效选择内容。[02:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=139s) [02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s)

魔方案例的 mission 很具体：拿到一个被打乱的三阶魔方，至少独立复原一次；目标是完成这件事，而不是速度或理论。这个边界直接影响资料、练习和暂时不教的内容。[02:55](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=175s)

接着，Skill 搜索一手、高可信资源，并在首次运行建立资源清单，之后继续更新。视频能证明“工作流要求这么做”且画面中存在 `RESOURCES.md`，但没有逐条审计所有来源；因此“使用高可信资源”是设计约束，不是自动正确的保证。[03:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=186s)

## 3. HTML lessons：把讲解、操作与反馈放在一起

每课是 `lessons/` 中一个编号 HTML 文件。Pocock 选择 HTML 而非 Markdown，是因为浏览器可提供图示、提示、测验和更丰富的交互。第一课围绕魔方结构、记号与白色十字，只给当下需要的知识。[03:23](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=203s) [03:41](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=221s)

他特别强调反馈回路：测验是可用形式，但主要适合找不到更丰富反馈机制时。魔方这种动作技能最终要靠实际转动和复原来证明，而不仅是答对概念题。课程同时推动“知道”和“会做”；当 Pocock 报告自己能完成白色十字后，Agent 把进展写进学习记录，后续课程便从新的能力起点继续。[03:54](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=234s) [04:05](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=245s) [04:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=259s)

后段生成的“角块循环”专项课把算法重组为新的心智模型，并提供可点击步骤与 guided mode。这个案例展示了 HTML 的价值：同一页面既能解释，也能让学习者马上练习。[07:37](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=457s) [07:56](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=476s) [08:13](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=493s)

## 4. 学习记录、参考材料与教师笔记

`learning-records/` 保存学习者报告的关键进展，使新会话能够判断已掌握内容并定制下一课。视频中的“会做白色十字”来自学习者自报，说明系统能更新状态，但不等于独立评测已经验证能力。[04:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=259s) [04:36](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=276s)

参考材料承担长期检索：术语表保存 anatomy、notation、solving grip、daisy 等专门词汇，让后续课程可直接引用稳定术语；solve card 则把完整复原流程压缩到一个页面。`NOTES.md` 供 Agent 保存学习偏好、注意事项和内部备注。[05:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=321s) [05:38](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=338s) [05:49](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=349s) [06:02](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=362s)

**整理者归纳：** lesson 服务一次恰到好处的进步，reference 服务长期快速回看。二者分开，可以避免课程为“以后也能查”而不断膨胀。

## 5. 新会话如何接上旧进度

Pocock 模拟隔一段时间后回来。他告诉 Agent：自己基本能完成魔方，但角块循环仍未进入肌肉记忆。由于是空白上下文，Agent 先读取教学工作区、速查卡和已有课程，再诊断为“概念已理解，动作尚未自动化”，并参考旧课风格生成一节专项课。[06:11](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=371s) [06:30](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=390s) [06:41](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=401s)

他把这种关系比作一对一教师：学生报告当前困难，教师据此设计解决问题的课程。所有状态落到文件系统后，即使清空当前对话，再次运行 `/teach` 仍能读取继续教学所需的上下文。这里的“记忆”是显式文件的持久化与重读，不是模型参数变化。[06:54](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=414s) [08:26](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=506s)

## 6. 最近发展区：下一课既不能太容易，也不能太难

Pocock 对 zone of proximal development 的操作性解释是：始终在学习者“受到恰当挑战但不感到畏惧”的区域教学。每课要短小、紧凑，精确对准当前能力，使学习者既不无聊，也不被任务吓退。[07:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=436s)

魔方案例不是按预制大纲推进，而是根据学习记录和最新报告缩小问题：此前步骤已经能做，角块循环的概念也不陌生，缺的是肌肉记忆。因此下一课只训练一个算法和新的分块记忆方式。[06:41](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=401s) [07:10](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=430s) [07:37](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=457s)

**整理者归纳：** 自适应效果取决于状态质量。若学习者夸大掌握程度、记录过期，或 Agent 把“看过”误判成“会做”，下一课仍会落在错误难度。文件持久化解决跨会话遗忘，却不自动保证诊断正确。

## 7. 知识、技能、智慧：Agent 的能力边界

Skill 用三个概念组织教学：知识来自高质量、高可信来源；技能来自基于知识设计的相关互动课程；智慧来自与其他学习者和实践者互动。课程只应提供获得当前技能所需的知识。[08:36](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=516s) [08:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=539s)

当问题需要真实判断时，Agent 可以先尝试回答，但最终应引导学习者去合适社群验证。Pocock 的终点不是让用户依赖 Agent 学习一切，而是让人获得足够知识与技能，有信心走进现实世界继续实践。[09:23](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=563s) [09:37](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=577s)

## 8. 使用场景：onboarding 与兴趣学习

Pocock 设想用 `/teach` 帮新人熟悉代码库。传统文档难维护，也很难匹配不同新人的已有能力：有人熟悉技术栈却不了解业务领域，另一些人懂领域但不会 TypeScript。独立教学工作区可指向代码库，围绕个人差距生成学习路径。[10:04](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=604s) [10:17](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=617s) [10:30](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=630s)

“让员工以创纪录速度进入生产状态”是讲者的设想，视频没有提供周期、任务成功率或对照组。除魔方外，他还提到国际象棋开局、声乐和声、编程语言和人类语言；这些是可能用途，不是逐项验证的案例。[10:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=639s) [10:43](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=643s) [12:43](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=763s)

## 9. 开发者为何被称为 AI “first movers”

视频最后提出一个更大的观点：Pocock 认为当时 AI 在编程上比几乎所有其他任务都更擅长，因此开发者较早在一个 AI 真正擅长的领域中积累协作经验。他鼓励开发者把形成的工作方法与直觉封装成 Skills，再迁移到编码之外。[11:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=666s) [11:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=676s) [11:42](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=702s) [12:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=726s)

这是讲者判断，不是视频证明的跨任务排名；他自己也加了“有少数例外”等限定语。编码 Agent 的经验能否迁移到教育等领域，同样需要分别验证。

## 10. 可执行的落地建议

> 本节是整理者依据视频提炼的试点方案，不是讲者给出的固定模板。

可以从一个两周内能观察进展的小主题开始，不必一开始就设计完整课程：

1. **建独立目录并写 mission。** 用一句可观察结果描述成功，例如“能在不看答案的情况下，为本服务定位一次请求超时”，同时写明不追求的内容。
2. **先列资料，再生成课。** `RESOURCES.md` 至少写出来源、为什么可信、适用范围和待核验点；程序行为优先引用源码、规范和官方文档。
3. **每课只获得一个能力。** 一课对应一个可完成的小结果，HTML 的互动能力只服务反馈，不为展示效果而堆组件。
4. **用行为而非阅读量更新状态。** “看过鉴权文档”不是学习记录；“能解释 token 失效路径并在测试环境复现”才是可观察证据。
5. **新会话先复述状态。** 要求 Agent 在生成下一课前列出 mission、已掌握内容、当前缺口和选择该课的理由，及时发现误诊。
6. **安排真实任务和社群反馈。** 让代码、实物操作、导师评审或社区讨论承担最终检验，而不是只用选择题。
7. **两周后复盘四项指标。** 记录独立完成率、错误类型、复习后保持情况和人工纠错成本；若只是生成了很多漂亮页面，不算成功。

一个最小验收清单：

- 新会话不依赖旧聊天，也能说清目标和当前水平；
- 每个关键知识主张都能回到一手来源；
- 下一课说明为何处于当前最近发展区；
- 学习记录区分“接触过”与“展示过能力”；
- 参考资料比原课程更短、更适合快速检索；
- 至少有一种 Agent 之外的真实反馈机制。

## 11. 代表性引语

以下英文均为 **YouTube 自动字幕逐字引语**；中文是直译。

| 时间 | 英文字幕原文 | 中文直译 |
| --- | --- | --- |
| [00:08](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=8s) | “Wouldn't it be great if I could take everything I know about teaching and put it inside a skill so that anyone could learn anything.” | “如果我能把自己知道的一切教学知识放进一个 Skill，让任何人可以学习任何东西，岂不是很好？” |
| [01:38](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=98s) | “So, I decided that teach had to be a stateful skill.” | “所以，我决定 Teach 必须是一个有状态 Skill。” |
| [03:29](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=209s) | “HTML is just so much richer than markdown, it allows it to be so much more expressive, so much more interactive.” | “HTML 比 Markdown 丰富得多，它让内容可以更有表现力、互动性强得多。” |
| [07:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=441s) | “You should always teach someone in the area where they are perfectly challenged but not intimidated.” | “应始终在学习者受到恰当挑战、却不感到畏惧的区域教学。” |
| [09:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=579s) | “My idea with this teach skill is not to have you hooked onto the agent for learning everything.” | “我设计这个 Teach Skill，并不是要让你为了学习一切而依赖这个 Agent。” |
| [12:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=726s) | “You'll be able to take the skills that you are learning now, the instincts that you're building working with AI, and take them outside of coding domains.” | “你可以把现在学到的技能、与 AI 协作时形成的直觉，带到编码领域之外。” |

> **字幕歧义：** [02:22](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=142s) 附近自动字幕把画面中的 `mattpocock/skills` 识别成 “mapper.got skills”；[11:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=719s) 附近把 “Claude Code” 识别成 “Clo code”。约 [07:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=479s) 的魔方转动记号也有 prime 符号错乱，因此本文不逐字引用这些片段。

## 12. 术语表

| 术语 | 本文含义 | 视频证据 |
| --- | --- | --- |
| Stateful skill（有状态 Skill） | 把供以后继续使用的信息保存到本地文件系统或 MCP 服务 | [00:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=59s) |
| Stateless skill（无状态 Skill） | 不保留此前运行状态，也不写入帮助以后续接的文件 | [00:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=47s) |
| Mission（学习使命） | 为什么学、想取得什么具体结果；用于约束教学选择 | [02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s) |
| Learning record（学习记录） | 学习者关键进展的持久记录，供 Agent 判断下一步 | [04:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=259s) |
| Zone of proximal development（最近发展区） | “挑战恰到好处但不令人畏惧”的区域 | [07:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=436s) |
| Feedback loop（反馈回路） | 练习后获得反馈，让知识转化为可用技能；测验只是形式之一 | [03:54](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=234s) |
| Knowledge / Skills / Wisdom | 分别来自可信资料、相关互动练习、真实社群实践 | [08:59](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=539s) |
| Reference material（参考材料） | 从课程压缩出的长期检索材料，如术语表、算法和速查卡 | [05:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=321s) |

## 13. 当前版本补充：不要把后来变化倒推回视频

> 本节不是视频内容。证据来自作者的 [当前官方说明](https://www.aihero.dev/skills-teach)、[当前 `SKILL.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md) 和 GitHub 提交历史。

视频发布日的官方提交 [`2bf7005`](https://github.com/mattpocock/skills/commit/2bf70051928429983de3b5718d277150926f8c89) 是最接近视频时间的公开源码快照，但无法证明它就是录屏时精确签出的 SHA。该版本已包含 mission、resources、HTML lessons、reference、learning records、notes、最近发展区、反馈回路和社群边界。

视频发布后，官方 Skill 继续演化：

- 2026-06-10 增加 **fluency strength / storage strength** 区分，要求用检索练习、间隔与交错形成“适宜困难”；这是发布后提交 [`3b37863`](https://github.com/mattpocock/skills/commit/3b37863fc3ed47f0f7acb5417ac728aff36398db) 的内容，视频没有讲。
- 课程后来被要求互链、推荐一项优质一手来源，并进一步强调短小和可完成；相关提交为 [`e3d8b73`](https://github.com/mattpocock/skills/commit/e3d8b735ef92ec9554b07f11f408089d81289eed)、[`26ba8ae`](https://github.com/mattpocock/skills/commit/26ba8ae34bb3657e7dd85939fce8a5a166439f8b) 和 [`d752177`](https://github.com/mattpocock/skills/commit/d75217795ce77e7aa65898d6d4056263521ced22)。
- 2026-06-17 新增 `assets/`，让样式表、测验组件、模拟器和图表辅助代码跨课程复用；见 [`d20ee26`](https://github.com/mattpocock/skills/commit/d20ee2684e2a9442698ac3c1e0f2c5b68c4cf296) 与 [`aa024cb`](https://github.com/mattpocock/skills/commit/aa024cb1954fedbc8221967c080fa40b9867f994)。

当前官方工作区结构是：

```text
<独立主题目录>/
├── MISSION.md
├── RESOURCES.md
├── NOTES.md
├── lessons/*.html
├── reference/*.html
├── learning-records/*.md
└── assets/*
```

当前官方页面也明确记录了尚未解决的限制：没有正式的初始水平评估；“间隔 / 交错”是课程设计原则，却没有复习调度器、Anki 或日历集成；选择题正确答案位置存在偏差；相对路径含义可能让文件写入错误目录；`GLOSSARY-FORMAT.md` 存在但当前 `SKILL.md` 未链接，术语表不一定自动创建。生成课程仍须回到一手资料核验，尤其是带精确步骤和记号的程序性主题。

## 14. 证据边界与局限

1. **这是演示和个人案例，不是对照实验。** 视频没有样本量、前后测、长期保持率、迁移测试或对照组。“像真实教师”首先是 Pocock 的体验。[00:23](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=23s)
2. **有状态不等于状态正确。** 演示主要依据用户自报更新学习记录，没有展示如何识别误报、遗忘或冲突。[04:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=259s)
3. **HTML 更丰富不等于内容更可靠。** 浏览器能提供交互，但事实准确性、无障碍、生成脚本安全和视觉质量仍需检查。[03:29](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=209s)
4. **高可信来源是流程要求，不是事实担保。** Agent 仍可能选错来源、误读内容或生成错误引用；视频没有逐项审计魔方课程。[03:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=186s)
5. **onboarding 和 first-mover 是主张。** “更快成为高效员工”以及“开发者较早真正了解 AI”都没有在视频中量化验证。[10:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=639s) [11:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=676s)
6. **字幕存在歧义。** YouTube 只提供英语自动字幕，没有人工校订轨；本文已用视频画面、官方描述和官方源码校对专名，但未把不清楚的模型型号或魔方记号写成事实。
7. **范围限制。** 本文以视频、YouTube 官方元数据 / 自动字幕及作者官网、仓库为一手证据，没有对最近发展区等教育学概念另做学术文献综述。

## 15. 视频回看地图（官方章节）

以下标题和起点来自 YouTube 视频简介；中文列为内容转述。

| 时间 | 官方章节 | 内容转述 |
| --- | --- | --- |
| [00:00](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=0s) | Building a teach skill | 教学背景、创建 `/teach`、用它学习魔方。 |
| [00:39](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=39s) | Stateful vs stateless skills | 文件 / MCP 状态与一次性运行；两个 grilling Skill 对照。 |
| [02:19](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=139s) | Installing and running teach | 从仓库安装，在空目录启动教学工作区。 |
| [02:47](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=167s) | Mission and resources setup | 先明确学习目的，再建立并更新可信资源。 |
| [03:30](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=210s) | HTML lessons and interactive content | HTML 课件、图示、测验、反馈与学习记录。 |
| [05:21](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=321s) | Reference materials and glossary | 术语表、复原速查卡与 `NOTES.md`。 |
| [06:11](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=371s) | Continuing a learning session | 新会话读取工作区，诊断当前瓶颈。 |
| [07:16](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=436s) | Zone of proximal development | 恰当挑战、聚焦单一瓶颈、生成专项课。 |
| [08:36](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=516s) | Skill design and philosophy | 工作区结构，以及知识、技能、智慧。 |
| [10:04](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=604s) | Use cases for teach | 代码库 onboarding 与兴趣学习。 |
| [11:06](https://www.youtube.com/watch?v=s5T5oQJcJ6U&t=666s) | Developers as AI first movers | 把开发者的 AI 协作经验迁移到编码之外。 |

## 资料来源与获取说明

1. **YouTube 原视频与官方元数据：** [Learn anything with the /teach skill](https://www.youtube.com/watch?v=s5T5oQJcJ6U)。视频页内嵌元数据用于核对标题、频道、日期、时长、简介和 11 个章节；YouTube [oEmbed](https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds5T5oQJcJ6U&format=json) 交叉核验标题与作者。播放器给出 784 秒，页面结构化时长按 13:05 取整，本文采用播放器的 13:04。
2. **YouTube 自动字幕：** 页面仅列出 `English (auto-generated)`，没有人工英文字幕。通过只读客户端取得同一官方字幕轨的 JSON3 / VTT，并按时间轴逐段校对；提取工具不是内容来源。
3. **视频画面：** 抽查原视频流与官方 storyboard，核对仓库名、工作区文件树、mission、resources、HTML lessons、续课过程与 Skill 源码画面。
4. **作者一手资料：** [AI Hero 当前官方说明](https://www.aihero.dev/skills-teach)、[官方仓库当前目录](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach) 与 [视频发布日源码快照](https://github.com/mattpocock/skills/tree/2bf70051928429983de3b5718d277150926f8c89/skills/productivity/teach)，仅用于版本核对。
5. **访问问题：** YouTube 视频页、媒体流和字幕最终均可访问；直接请求 timed-text URL 曾返回空正文，Transcript API 曾返回 `FAILED_PRECONDITION`，改由官方页面暴露的字幕轨通过新版只读客户端成功取得完整 389 段字幕。未使用第三方摘要补齐内容。

## 结语

`/teach` 最值得借鉴的不是“让 AI 写漂亮课件”，而是把教学变成可持续、可审查的状态循环：mission 定方向，资源约束知识，课程制造当下进展，反馈与学习记录更新能力状态，参考材料压缩长期知识，最近发展区决定下一步，社群承担 Agent 无法替代的真实实践。答案可以在一轮对话里完成，学习却要在多轮实践中被观察、记录和重新校准。
