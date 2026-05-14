# MyWeb 项目沉淀文档

本文档包含两个产物：

1. **项目说明文档**：面向开发、部署、维护，说明 MyWeb 是什么、用什么技术、怎么组织、怎么上线。
2. **PRD 文档**：面向产品设计与需求确认，说明 MyWeb 要解决什么问题、包含哪些页面、功能和体验要求。

---

# 产物一：MyWeb 项目说明文档

## 1. 项目名称

**MyWeb**

## 2. 项目定位

MyWeb 是一个面向 Agent / LLM 算法方向研究生的个人网站，用于长期沉淀技术博客、研究笔记、项目案例和生活记录。

它不是传统意义上的静态简历页，而是一个长期更新的个人知识与作品主页。

核心目标：

* 展示个人技术方向与研究兴趣
* 持续发布 Agent / LLM / 多智能体 / RAG / 工具调用 / 目标检测等方向的技术文章
* 展示个人项目与工程实践
* 记录论文阅读、实验笔记和阶段性思考
* 保留少量生活记录，让网站具有个人气质
* 为实习、求职、合作、技术交流提供统一入口

一句话定位：

> MyWeb 是一个记录我如何学习、研究和构建 AI Agent 的个人主页。

---

## 3. 技术方案

第一版采用免费、轻量、静态优先的方案：

```text
Astro + Tailwind CSS + MDX + GitHub + Cloudflare Pages
```

### 3.1 技术栈说明

| 模块     | 方案               | 说明                       |
| ------ | ---------------- | ------------------------ |
| 前端框架   | Astro            | 适合内容型网站、博客、作品集、文档站       |
| 样式     | Tailwind CSS     | 快速构建统一 UI 风格             |
| 内容写作   | Markdown / MDX   | 用文件管理文章、项目、研究笔记          |
| 版本管理   | GitHub           | 管理代码、内容、图片资源             |
| 部署     | Cloudflare Pages | 免费静态部署，GitHub push 后自动构建 |
| 服务器    | 暂不需要             | 第一版不租服务器                 |
| 数据库    | 暂不需要             | 第一版不接数据库                 |
| 后台 CMS | 暂不需要             | 第一版本地写 Markdown / MDX    |

---

## 4. 为什么第一版不租服务器

MyWeb 第一版主要是：

* 首页展示
* 技术博客
* 项目展示
* 研究笔记
* 生活记录
* 头像与图片展示
* 中英文双语内容
* 简历下载入口

这些都可以通过静态站点完成。

因此第一版不需要：

* 云服务器
* Nginx
* Linux 运维
* 数据库
* 用户登录
* 后端 API
* 文件上传服务

上线流程是：

```text
本地写文章 / 放图片
→ GitHub 提交
→ Cloudflare Pages 自动构建
→ 网站自动上线
```

---

## 5. 图片与头像支持说明

### 5.1 是否支持上传头像？

支持。

第一版的“上传头像”不是指网站后台上传，而是指：

```text
把头像图片放入项目目录
通过代码或配置文件引用
在首页、About 页、文章作者信息等位置渲染
```

推荐路径：

```text
public/images/profile/avatar.png
```

使用方式：

```html
<img src="/images/profile/avatar.png" alt="sikm avatar" />
```

也可以使用 Astro 图片优化能力，把图片放在 `src/assets` 中，通过 Astro 的图片组件渲染。

推荐用于头像、封面图、项目截图等重要图片。

### 5.2 是否支持首页渲染图片？

支持。

首页可以渲染：

* 个人头像
* 项目封面图
* 技术架构图缩略图
* 博客封面图
* Life 照片
* 装饰性图片或图标

### 5.3 是否支持详情页渲染图片？

支持。

文章详情页 / 项目详情页 / 研究笔记详情页可以包含：

* Markdown 图片
* MDX 自定义图片组件
* 项目截图
* 架构图
* 论文图表
* 实验结果图
* UI 对比图
* 生活照片

Markdown 示例：

```md
![LangGraph State Flow](/images/writing/langgraph-state-flow.png)
```

MDX 示例：

```mdx
<ImageWithCaption
  src="/images/projects/logagent-architecture.png"
  alt="LogAgent architecture"
  caption="LogAgent multi-agent diagnosis workflow"
/>
```

### 5.4 图片管理建议

第一版采用 Git 管理图片。

推荐目录：

```text
public/
  images/
    profile/
      avatar.png
    writing/
    projects/
    research/
    life/
```

命名规范：

```text
小写英文
使用短横线
避免中文文件名
避免空格
避免超大原图
```

示例：

```text
avatar.png
logagent-cover.png
rf-detr-architecture.png
langgraph-state-flow.png
life-2026-05-desk.jpg
```

图片尺寸建议：

| 类型      | 建议                |
| ------- | ----------------- |
| 头像      | 400x400 或 512x512 |
| 首页项目封面  | 1200x675          |
| 博客封面    | 1200x630          |
| 正文插图    | 宽度 800-1400px     |
| Life 照片 | 压缩后上传，避免超过 1-2MB  |

### 5.5 不支持什么上传？

第一版不支持访客上传图片。

也就是说，不做：

* 用户投稿图片
* 评论区上传图片
* 在线图床
* 后台文件管理系统

如果未来要支持真正的“网页后台上传”，需要引入：

* CMS
* 对象存储，如 Cloudflare R2 / Supabase Storage
* 后端 API
* 权限验证
* 防滥用机制

第一版不做，避免复杂化。

---

## 6. 双语支持说明

### 6.1 语言目标

MyWeb 支持两种语言：

```text
简体中文 zh-CN
英文 en
```

默认语言：

```text
简体中文 zh-CN
```

### 6.2 URL 设计

推荐方案：默认中文不加前缀，英文加 `/en` 前缀。

```text
/                    中文首页
/writing             中文文章列表
/projects            中文项目列表
/research            中文研究笔记
/life                中文生活记录
/about               中文关于页

/en                  英文首页
/en/writing          英文文章列表
/en/projects         英文项目列表
/en/research         英文研究笔记
/en/life             英文生活记录
/en/about            英文关于页
```

原因：

* 默认访问就是简体中文
* 国内访问者路径更自然
* 英文版本清晰隔离
* 后续 SEO 和分享更方便

### 6.3 内容组织方式

推荐内容分语言存放。

```text
src/content/
  writing/
    zh/
      langgraph-state-management.mdx
    en/
      langgraph-state-management.mdx
  projects/
    zh/
      logagent.mdx
    en/
      logagent.mdx
  research/
    zh/
    en/
  life/
    zh/
    en/
```

为了保证双语详情页之间的映射稳定，正文内容除 `slug` 外，还必须定义一个稳定的跨语言配对主键。

推荐 frontmatter 规则：

```yaml
---
title: "从 LangGraph 看 Agent 状态管理"
lang: "zh-CN"
translationKey: "langgraph-state-management"
draft: false
publishedAt: "2026-05-14"
---
```

英文版：

```yaml
---
title: "Understanding Agent State Management through LangGraph"
lang: "en"
translationKey: "langgraph-state-management"
draft: false
publishedAt: "2026-05-14"
---
```

说明：

* `translationKey` 是跨语言配对主键，必须稳定，不能依赖 URL
* `slug` 可以按各语言单独命名，但同一篇内容的 `translationKey` 必须一致
* 语言切换器优先通过 `collection + translationKey` 查找对应语言内容
* 如果目标语言不存在对应内容，则跳转到该语言的列表页
* `translation` URL 字段不再作为主映射依据，可不使用

也可以使用 frontmatter 标记语言：

```yaml
---
title: "从 LangGraph 看 Agent 状态管理"
lang: "zh-CN"
translationKey: "langgraph-state-management"
---
```

英文版：

```yaml
---
title: "Understanding Agent State Management through LangGraph"
lang: "en"
translationKey: "langgraph-state-management"
---
```

### 6.4 语言切换器

导航栏右侧加入语言切换入口：

```text
中 / EN
```

默认：

* 中文页面显示 `EN`，点击跳转英文对应页面
* 英文页面显示 `中文`，点击跳转中文对应页面

如果某篇文章没有对应翻译，则跳转到对应语言的列表页。

### 6.5 UI 文案管理

页面固定文案使用字典文件管理：

```text
src/i18n/
  ui.ts
```

示例：

```ts
export const ui = {
  'zh-CN': {
    navWriting: '文章',
    navProjects: '项目',
    navResearch: '研究',
    navLife: '生活',
    navAbout: '关于',
    navResume: '简历',
    heroTitle: '你好，我是 sikm。',
    heroSubtitle: 'Agent / LLM 算法方向研究生',
    readWriting: '阅读文章',
    viewProjects: '查看项目',
  },
  en: {
    navWriting: 'Writing',
    navProjects: 'Projects',
    navResearch: 'Research',
    navLife: 'Life',
    navAbout: 'About',
    navResume: 'Resume',
    heroTitle: "Hi, I’m sikm.",
    heroSubtitle: 'Agent / LLM Algorithm Graduate Student',
    readWriting: 'Read Writing',
    viewProjects: 'View Projects',
  },
};
```

---

## 7. UI 风格说明

整体风格参考 Claude App / Claude Code 网页的气质，但不复制其品牌、Logo 或具体页面。

### 7.1 视觉关键词

```text
warm minimal
calm
editorial
soft cards
large whitespace
subtle motion
readable typography
quiet engineering feeling
knowledge workspace
```

### 7.2 风格方向

MyWeb 应该像一个：

```text
安静、克制、有研究感的个人知识工作台
```

而不是：

```text
黑底霓虹 AI 官网
传统简历模板
花哨作品集页面
重动画视觉展示站
```

### 7.3 色彩规范

推荐浅色主题优先。

```css
:root {
  --background: #f7f4ed;
  --surface: #fffdf8;
  --surface-soft: #fbf7ef;
  --text-main: #2d2a26;
  --text-muted: #746f66;
  --text-subtle: #9a948a;
  --border: #e7ded1;
  --border-strong: #d8caba;
  --accent: #c86f4a;
  --accent-soft: #ead6c7;
  --accent-muted: #9b5b3f;
}
```

### 7.4 字体规范

推荐字体：

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang SC",
  "Microsoft YaHei",
  sans-serif;
```

代码字体：

```css
font-family:
  "JetBrains Mono",
  "SFMono-Regular",
  Consolas,
  "Liberation Mono",
  monospace;
```

要求：

* 正文 16px 左右
* 行高 1.7
* 标题不要过粗，建议 600-650
* 小字不低于 13px
* 中文阅读体验优先，英文也要自然

### 7.5 卡片与动效

卡片：

* 圆角 16-24px
* 1px 暖色边框
* 轻阴影
* hover 微微上浮 2px

动效：

* 页面进入 fade + translateY 8px
* hover transition 180ms
* 不使用大幅 parallax
* 不使用粒子背景
* 不使用强烈光效

---

## 8. 页面结构

第一版页面：

```text
/
/en

/writing
/writing/[slug]
/en/writing
/en/writing/[slug]

/projects
/projects/[slug]
/en/projects
/en/projects/[slug]

/research
/research/[slug]
/en/research
/en/research/[slug]

/life
/life/[slug]
/en/life
/en/life/[slug]

/about
/en/about
```

导航栏中文默认：

```text
sikm
文章
项目
研究
生活
关于
简历 -> /resume/resume-zh.pdf
EN
```

英文导航：

```text
sikm
Writing
Projects
Research
Life
About
Resume -> /resume/resume-en.pdf
中文
```

---

## 9. 推荐项目目录

```text
MyWeb/
  public/
    images/
      profile/
        avatar.png
      writing/
      projects/
      research/
      life/
    resume/
      resume-zh.pdf
      resume-en.pdf
    favicon.svg
  src/
    assets/
    components/
      layout/
        Header.astro
        Footer.astro
        Container.astro
      ui/
        Button.astro
        Card.astro
        Badge.astro
        SectionTitle.astro
        LanguageSwitch.astro
        Avatar.astro
      content/
        ArticleCard.astro
        ProjectCard.astro
        ImageWithCaption.astro
    content/
      config.ts
      writing/
        zh/
        en/
      projects/
        zh/
        en/
      research/
        zh/
        en/
      life/
        zh/
        en/
    i18n/
      ui.ts
      utils.ts
    lib/
      content/
        translations.ts
    layouts/
      BaseLayout.astro
      ArticleLayout.astro
      ProjectLayout.astro
    pages/
      index.astro
      writing/
        index.astro
        [slug].astro
      projects/
        index.astro
        [slug].astro
      research/
        index.astro
        [slug].astro
      life/
        index.astro
        [slug].astro
      about.astro
      en/
        index.astro
        writing/
          index.astro
          [slug].astro
        projects/
          index.astro
          [slug].astro
        research/
          index.astro
          [slug].astro
        life/
          index.astro
          [slug].astro
        about.astro
    styles/
      global.css
  astro.config.mjs
  package.json
  tailwind.config.mjs
  tsconfig.json
  README.md
```

---

## 10. 部署方案

### 10.1 GitHub

项目仓库名：

```text
MyWeb
```

本地开发：

```bash
cd MyWeb
pnpm create astro@latest .   # 在当前仓库根目录原地初始化，不再嵌套一层 MyWeb
pnpm astro add tailwind
pnpm astro add mdx
pnpm dev
```

如果当前目录中已经存在 `dev-docs/` 等非空文件，仍然以当前目录 `.` 为目标初始化，并保留 `dev-docs/` 作为项目文档目录。禁止再创建 `MyWeb/MyWeb` 这种二级嵌套结构。

构建：

```bash
pnpm build
pnpm preview
```

### 10.2 Cloudflare Pages

Cloudflare Pages 配置：

```text
Framework preset: Astro
Build command: pnpm build
Output directory: dist
Production branch: main
```

如果构建环境没有自动安装 pnpm，可使用：

```text
Build command: pnpm install && pnpm build
Output directory: dist
```

### 10.3 更新流程

```bash
git add .
git commit -m "update content"
git push
```

Cloudflare Pages 自动重新构建并上线。

---

## 11. 第一版上线范围

第一版必须完成：

* 中文首页
* 英文首页
* 中文 About
* 英文 About
* Writing 列表和详情
* Projects 列表和详情
* Research 列表和详情
* Life 列表和详情
* 头像展示
* 首页图片展示
* 项目 / 文章详情页图片展示
* 中英文语言切换
* GitHub + Cloudflare Pages 自动部署

第一版暂不做：

* 用户登录
* 评论系统
* 后台 CMS
* 在线上传图片
* 数据库
* 搜索服务
* 深色模式
* AI 聊天助手

---

# 产物二：MyWeb PRD 文档

## 1. 产品背景

用户是一名 Agent / LLM 算法方向研究生，需要一个长期可维护的个人网站。

当前需求不是单纯展示简历，而是建立一个公开的个人技术主页，帮助用户：

* 倒逼自己持续写作
* 系统沉淀博客和研究笔记
* 展示项目能力
* 记录生活和成长
* 服务求职、实习、合作与个人品牌建设

---

## 2. 产品目标

### 2.1 核心目标

构建一个具备 Claude / Claude Code 风格的个人主页 MyWeb。

它应当：

* 看起来专业、克制、有研究感
* 支持中文和英文两种语言
* 默认展示简体中文
* 支持头像和图片渲染
* 支持技术文章、项目、研究笔记、生活记录
* 不依赖服务器，使用免费静态部署方案快速上线

### 2.2 非目标

第一版不追求：

* 完整 CMS 后台
* 动态社区
* 用户系统
* 评论系统
* 在线图片上传
* 数据库驱动
* 强交互 Web App
* 炫酷视觉特效

---

## 3. 用户画像

### 3.1 站点所有者

身份：Agent / LLM 算法方向研究生。

关注内容：

* Agent 系统
* LLM 推理与工具调用
* Multi-Agent
* RAG
* MCP
* LangGraph / DeerFlow
* 目标检测 / RF-DETR
* 效率工具
* AI 产品与 UI 设计

使用目标：

* 写博客
* 记录论文
* 展示项目
* 沉淀简历素材
* 展示长期成长轨迹

### 3.2 访问者

主要访问者：

* 面试官 / HR
* 导师 / 同学
* 技术社区用户
* 潜在合作者
* 未来搜索文章的读者

访问者希望快速了解：

* 这个人是谁
* 研究方向是什么
* 做过哪些项目
* 有没有技术深度
* 能否联系到他
* 是否有英文展示能力

---

## 4. 信息架构

### 4.1 页面结构

```text
Home 首页
Writing 文章
Projects 项目
Research 研究
Life 生活
About 关于
Resume 简历资源入口
```

说明：

* `Resume` 在第一版中不是独立内容频道，不占用常规列表/详情页路由
* 中文导航中的 `简历` 直接指向 `/resume/resume-zh.pdf`
* 英文导航中的 `Resume` 直接指向 `/resume/resume-en.pdf`
* 打开方式为新标签页打开 PDF，并保留浏览器下载能力
* About 页面中也提供同一入口，避免导航和页面口径不一致

### 4.2 中文页面

```text
/                    首页
/writing             文章列表
/writing/[slug]      文章详情
/projects            项目列表
/projects/[slug]     项目详情
/research            研究列表
/research/[slug]     研究详情
/life                生活列表
/life/[slug]         生活详情
/about               关于
```

### 4.3 英文页面

```text
/en
/en/writing
/en/writing/[slug]
/en/projects
/en/projects/[slug]
/en/research
/en/research/[slug]
/en/life
/en/life/[slug]
/en/about
```

---

## 5. 核心功能需求

## 5.1 首页

### 目标

让访问者 5 秒内理解：

* 站点主人是谁
* 研究方向是什么
* 最近在关注什么
* 有哪些项目和文章可看

### 中文首页文案方向

主标题：

```text
你好，我是 sikm。
```

副标题：

```text
Agent / LLM 算法方向研究生
```

描述：

```text
我关注 LLM Agent、多智能体系统、工具调用、RAG 与智能工作流，也会在这里记录技术文章、研究笔记、项目实践和生活片段。
```

按钮：

```text
阅读文章
查看项目
```

### 英文首页文案方向

```text
Hi, I’m sikm.
Agent / LLM Algorithm Graduate Student.
I write about agents, LLM systems, research notes, and the tools I build.
```

按钮：

```text
Read Writing
View Projects
```

### 首页模块

* 顶部导航
* Hero 介绍区
* 头像展示区
* Current Focus 当前关注
* Featured Projects 精选项目
* Latest Writing 最新文章
* Research Notes 研究笔记
* Life Notes 生活记录
* Footer

### 首页内容取数规则

为了避免首页实现口径不一致，第一版约定如下：

* `Current Focus` 使用独立静态配置维护，不从文章自动推导
* `Featured Projects` 通过 `featured: true` frontmatter 显式标记，首页最多展示 3 个
* `Latest Writing` 按 `publishedAt` 倒序展示最新 3 篇已发布文章
* `Research Notes` 按 `publishedAt` 倒序展示最新 2 篇已发布研究笔记
* `Life Notes` 按 `publishedAt` 倒序展示最新 2 篇已发布生活记录
* 所有首页列表都需要先按当前语言过滤，再做排序和截断

推荐内容 frontmatter 最小字段：

```yaml
---
title: "示例标题"
lang: "zh-CN"
translationKey: "example-key"
publishedAt: "2026-05-14"
draft: false
featured: false
summary: "一句话摘要"
---
```

---

## 5.2 头像展示

### 需求

首页和 About 页面需要支持头像展示。

### 位置

* 首页 Hero 区域，可放在右侧或与 Current Focus 组合
* About 页面顶部个人介绍区域
* 可选：文章详情页作者信息区域

### 样式

* 圆形或大圆角方形头像
* 轻边框
* 柔和阴影
* 与暖白背景协调
* 不要强烈描边

### 默认策略

如果用户还没有头像：

* 使用 `public/images/profile/avatar.png` 占位
* 或使用带 initials 的抽象头像卡片

---

## 5.3 Writing 文章模块

### 目标

沉淀技术博客和工程思考。

### 内容类型

* Agent 系统分析
* LLM 工具调用
* LangGraph / DeerFlow 源码理解
* Multi-Agent 质量诊断
* RAG / MCP / Sandbox
* 目标检测研究笔记
* AI 产品与 UI 设计思考

### 列表页字段

* 标题
* 摘要
* 日期
* 阅读时间
* 标签
* 封面图，可选

### 详情页字段

* 标题
* 摘要
* 日期
* 标签
* 阅读时间
* 正文
* 图片
* 代码块
* 上一篇 / 下一篇，可选
* 对应语言切换

---

## 5.4 Projects 项目模块

### 目标

展示用户做过什么，而不是只放 GitHub 链接。

### 项目卡片字段

* 项目名称
* 一句话简介
* 项目状态
* 技术栈标签
* 项目封面图
* GitHub 链接，可选
* Demo 链接，可选
* Case Study 链接

### 项目状态

```text
Research
Prototype
In Progress
Shipped
Archived
```

### 项目详情页结构

```text
项目背景
为什么做
核心功能
技术架构
关键难点
我的贡献
结果与收获
下一步计划
```

### 首批项目建议

* LogAgent
* Prompt Capture Tool
* Template-driven Report Agent
* RF-DETR Notes
* Todo / Productivity App

---

## 5.5 Research 研究模块

### 目标

用于沉淀论文阅读、研究问题、实验记录。

### 内容类型

* Paper Notes
* Experiment Logs
* Research Ideas
* Object Detection Notes
* Agent Evaluation Notes

### 论文笔记模板

```text
论文标题
研究问题
核心方法
创新点
实验结果
优点
不足
和我当前工作的关系
可以延伸的方向
```

---

## 5.6 Life 生活模块

### 目标

让网站不只是技术展示柜，也有个人气质。

### 内容边界

适合写：

* 阶段性复盘
* 学习记录
* 做项目的感受
* 读书 / 游戏 / VFX / AI 创作片段
* 城市生活与观察

不建议：

* 太碎片化的朋友圈式内容
* 过度私人化内容
* 无结构流水账

### 风格

像 personal journal，而不是社交媒体动态。

---

## 5.7 About 页面

### 目标

让访问者理解用户的个人叙事。

### 页面结构

```text
我是谁
我关注什么
我正在构建什么
我写什么
我的项目方向
联系方式
简历入口
```

### 必备信息

* 身份
* 研究方向
* 技术兴趣
* GitHub
* Email
* Resume
* 可选：Bilibili / Zhihu / X / LinkedIn

---

## 5.8 双语功能

### 目标

支持简体中文和英文，默认简体中文。

### 需求

* 中文页面默认无语言前缀
* 英文页面使用 `/en`
* 导航支持语言切换
* 内容支持中文和英文独立维护
* 没有对应翻译时，跳转到对应语言列表页

### 默认语言

```text
zh-CN
```

### 支持语言

```text
zh-CN
English
```

---

## 5.9 图片渲染功能

### 目标

支持个人头像、首页图片、文章图片、项目截图、研究图表和生活图片。

### 需求

* 首页可渲染头像和项目封面
* 文章详情页可插入多张图片
* 项目详情页可插入架构图和截图
* Research 页面可插入论文图表和实验结果图
* Life 页面可插入生活图片
* 图片必须支持 alt 文本
* 图片样式要和整体 Claude 风格统一

### 图片组件

建议实现：

```text
Avatar.astro
ImageWithCaption.astro
ProjectCover.astro
ArticleCover.astro
```

---

## 6. UI / UX 需求

### 6.1 总体体验

* 页面要安静、克制、舒适
* 内容优先
* 信息层级清晰
* 不要过度装饰
* 中文阅读体验必须好
* 英文页面也要自然

### 6.2 导航栏

要求：

* sticky 顶部导航
* 半透明暖白背景
* backdrop blur
* 左侧 sikm logo
* 中间或右侧导航
* 右侧语言切换
* Resume 链接

中文导航：

```text
文章 / 项目 / 研究 / 生活 / 关于 / 简历 / EN
```

英文导航：

```text
Writing / Projects / Research / Life / About / Resume / 中文
```

### 6.3 卡片

卡片用于：

* 项目
* 文章
* 研究笔记
* Life Notes
* Current Focus

要求：

* 大圆角
* 轻边框
* 暖白背景
* hover 轻微上浮
* 不要厚重阴影

### 6.4 动效

允许：

* 页面进入 fadeUp
* 卡片 hover
* 按钮 hover
* 导航 hover

禁止：

* 粒子背景
* 强烈光效
* 大幅视差
* 自动滚动动画
* 影响阅读的动画

---

## 7. 内容需求

### 7.1 首次上线最小内容

首页：

* 中文 Hero
* 英文 Hero
* 头像
* 当前关注方向
* 精选项目 2-3 个
* 最新文章 2-3 篇

Writing：

* 至少 2 篇中文文章
* 英文可先放 1 篇或使用英文占位

Projects：

* 至少 2 个项目

Research：

* 至少 1 篇研究笔记

Life：

* 至少 1 篇生活记录

About：

* 中文完整版本
* 英文简短版本

---

## 8. 非功能需求

### 8.1 性能

* 首页首屏尽量轻量
* 图片需要压缩
* 避免不必要 JS
* 尽量使用静态生成

### 8.2 SEO

需要支持：

* 页面 title
* description
* Open Graph
* sitemap
* robots.txt
* favicon
* 语言 alternate 链接，后续可做

### 8.3 可维护性

* 内容通过 MDX 管理
* 页面组件化
* UI 文案集中管理
* 图片目录规范化
* 中英文内容结构清晰

### 8.4 部署

* GitHub push 自动部署
* Cloudflare Pages 免费托管
* 输出目录 `dist`
* 不依赖服务器

---

## 9. 验收标准

### 9.1 功能验收

* 中文首页可访问
* 英文首页可访问
* 默认访问 `/` 是中文
* 导航栏语言切换可用
* 首页头像正常展示
* 首页项目卡片正常展示
* 文章详情页图片正常展示
* 项目详情页图片正常展示
* Writing / Projects / Research / Life / About 页面可访问
* `pnpm build` 成功
* Cloudflare Pages 部署成功

### 9.2 视觉验收

* 整体接近 Claude / Claude Code 的温和、克制、暖白风格
* 字体大小舒适
* 中文显示自然
* 卡片不拥挤
* 留白充足
* 动效轻微不打扰
* 移动端不崩

### 9.3 内容验收

* 首页能说明用户身份和方向
* About 页面能说明个人背景和研究兴趣
* 至少有 2 篇文章
* 至少有 2 个项目
* 至少有 1 篇研究笔记
* 至少有 1 篇生活记录

---

## 10. 版本规划

### V0.1：基础静态站

* Astro 初始化
* Tailwind / MDX
* 基础布局
* 中文页面
* 首页 / Writing / Projects / About

### V0.2：双语与图片

* 英文页面
* 语言切换
* 头像组件
* 图片组件
* 项目封面
* 文章插图

### V0.3：内容完善

* Research 页面
* Life 页面
* 更多文章和项目
* 简历入口
* SEO 基础优化

### V1.0：正式上线版

* Cloudflare Pages 部署
* 自定义域名，可选
* 完整中文内容
* 英文核心内容
* 移动端适配
* 视觉细节打磨

---

## 11. 给 AI Code / Claude Code 的开发 Prompt

```text
你现在要开发一个名为 MyWeb 的个人网站。

项目定位：
MyWeb 是一个面向 Agent / LLM 算法方向研究生的个人研究与作品主页，用于展示技术博客、项目案例、研究笔记和生活记录。网站需要服务个人品牌、求职、技术沉淀和长期写作。

技术栈：
Astro + Tailwind CSS + MDX + TypeScript。部署方式为 GitHub + Cloudflare Pages 免费静态部署。不租服务器，不接数据库，不做登录系统，不做后台 CMS。

语言要求：
支持简体中文和英文。默认语言是简体中文。中文页面不加语言前缀，英文页面使用 /en 前缀。

页面结构：
- / 中文首页
- /en 英文首页
- /writing 和 /writing/[slug]
- /en/writing 和 /en/writing/[slug]
- /projects 和 /projects/[slug]
- /en/projects 和 /en/projects/[slug]
- /research 和 /research/[slug]
- /en/research 和 /en/research/[slug]
- /life 和 /life/[slug]
- /en/life 和 /en/life/[slug]
- /about
- /en/about

导航栏：
中文：sikm / 文章 / 项目 / 研究 / 生活 / 关于 / 简历 / EN
英文：sikm / Writing / Projects / Research / Life / About / Resume / 中文

图片要求：
支持头像、首页图片、项目封面、文章插图、项目详情页截图、研究图表和生活图片。请实现 Avatar、ImageWithCaption、ProjectCover、ArticleCover 等基础组件。图片第一版通过 public/images 目录管理，不做网页后台上传。

UI 风格：
参考 Claude App / Claude Code 网页的气质，但不要复制任何品牌元素。整体要 warm minimal、calm、editorial、soft cards、large whitespace、subtle motion、readable typography、quiet engineering feeling。背景使用暖白 / 米色，卡片使用象牙白，强调色使用低饱和棕橙色。避免黑底霓虹、强渐变、粒子背景、重阴影和过度科技感。

色彩建议：
--background: #f7f4ed
--surface: #fffdf8
--surface-soft: #fbf7ef
--text-main: #2d2a26
--text-muted: #746f66
--border: #e7ded1
--accent: #c86f4a

首页结构：
中文首页：
- Hero：你好，我是 sikm。
- 副标题：Agent / LLM 算法方向研究生
- 简介：我关注 LLM Agent、多智能体系统、工具调用、RAG 与智能工作流，也会在这里记录技术文章、研究笔记、项目实践和生活片段。
- 按钮：阅读文章 / 查看项目
- 头像展示
- 当前关注：LLM Agent Systems、Multi-Agent Evaluation、Tool Use、RAG / MCP / Sandbox、Object Detection Research
- 精选项目
- 最新文章
- 研究笔记
- 生活记录

英文首页：
- Hero：Hi, I’m sikm.
- Subtitle：Agent / LLM Algorithm Graduate Student
- Description：I write about agents, LLM systems, research notes, and the tools I build.

内容系统：
使用 Astro content collections 管理 writing/projects/research/life 四类内容。内容支持 zh 和 en 两个语言目录。每篇内容使用 MDX 和 frontmatter。

请先搭建完整项目结构、全局样式、页面路由、基础组件、i18n 文案系统、content collections 和示例内容。确保 pnpm build 可以通过，输出目录为 dist，并适配 Cloudflare Pages。
```

---

## 12. 最终结论

MyWeb 第一版采用：

```text
Astro + Tailwind CSS + MDX + GitHub + Cloudflare Pages
```

支持：

```text
头像展示
首页图片
文章图片
项目截图
研究图表
生活照片
简体中文 / 英文双语
默认简体中文
免费部署
不租服务器
```

第一版不做：

```text
在线上传图片
用户登录
数据库
评论系统
后台 CMS
```

核心原则：

```text
先上线，先沉淀内容，先形成长期写作和项目展示入口。
```
