# MyWeb

MyWeb 是一个面向 Agent / LLM 算法方向研究生的双语个人站点，用来长期沉淀：

* 技术文章
* 项目案例
* 研究笔记
* 少量生活记录

当前实现基于：

* Astro
* MDX
* Tailwind CSS 4
* 静态构建 / Cloudflare Pages 友好部署

## 目录

```text
MyWeb/
├── dev-docs/                # 项目说明与 PRD
├── public/
│   ├── images/              # 头像、封面、插图
│   └── resume/              # 中英文简历 PDF
├── src/
│   ├── components/          # 页面与内容组件
│   ├── content/             # writing / projects / research / life 内容
│   ├── i18n/                # UI 文案与语言工具
│   ├── layouts/             # 通用布局与详情页布局
│   ├── lib/                 # 内容读取与双语映射
│   ├── pages/               # 中英文页面路由
│   ├── styles/              # 全局样式
│   └── content.config.ts    # Astro 内容集合配置
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://localhost:4321
```

## 构建

```bash
npm run build
npm run preview
```

构建输出目录：

```text
dist/
```

## 内容约定

四类内容集合：

* `writing`
* `projects`
* `research`
* `life`

所有内容都要求：

* `lang`: `zh-CN` 或 `en`
* `translationKey`: 跨语言稳定配对键
* `routeSlug`: 页面路由 slug
* `publishedAt`
* `summary`

首页取数规则：

* `Featured Projects`：`featured: true`
* `Latest Writing`：按 `publishedAt` 倒序取最新 3 篇
* `Research Notes`：按 `publishedAt` 倒序取最新 2 篇
* `Life Notes`：按 `publishedAt` 倒序取最新 2 篇

## 当前状态

当前仓库已经具备：

* 中英文首页
* 中英文 About
* Writing / Projects / Research / Life 列表页
* 四类内容详情页
* 双语切换
* 简历 PDF 入口
* 示例内容与占位视觉素材
* `npm run build` 通过

后续建议优先补充：

1. 真实头像与项目封面
2. 正式中文 / 英文简历 PDF
3. 真实 GitHub / Email / 社交链接
4. 更完整的英文内容
5. SEO 细节，如 sitemap、robots、OG 图
