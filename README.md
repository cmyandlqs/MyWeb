# MyWeb

MyWeb 是一个双语个人网站项目，面向 Agent / LLM 算法方向的长期内容沉淀。
站点主要承载四类公开内容：

* **Blog**：技术文章、研究笔记、论文阅读和工程思考
* **Projects**：项目案例
* **Research**：研究笔记
* **Life**：少量生活记录

## 技术方案

当前采用静态优先方案：

* Astro 6.3
* MDX
* Tailwind CSS 4
* TypeScript
* GitHub
* Cloudflare Pages

第一版不引入数据库、后端 API、登录系统和 CMS。

## 在线访问

* **生产站点**：https://f57d8819.myweb-649.pages.dev/

## 项目情况

当前仓库已经完成基础站点骨架，目标是先形成一个可持续维护、可继续填充内容的个人主页，而不是一次性展示页。

相关详细文档见：

* [dev-docs/MyWeb.md](./dev-docs/MyWeb.md) — 项目说明与 PRD 文档
* [dev-docs/内容发布流程.md](./dev-docs/内容发布流程.md) — 内容发布规范

## 开发进展

已完成：

* 中英文首页
* 中英文 About 页面
* Blog / Projects / Research / Life 四个内容频道
* 四类内容的列表页与详情页
* 双语切换机制（默认中文，英文使用 `/en` 前缀）
* 基于 `translationKey` 的中英文内容配对规则
* 首页最新项目、博客、研究和生活内容取数逻辑
* 占位头像与封面图
* `npm run build` 构建通过
* Cloudflare Pages 自动部署

当前状态：

* 项目已经可以继续迭代开发
* 当前内容以示例内容和占位资源为主
* 视觉和信息架构已经基本定型

## 后续开发

下一阶段优先项：

1. 替换真实头像、项目封面
2. 补充真实博客、项目、研究和生活内容
3. 补充 GitHub / Email / 社交链接
4. 增加 SEO 基础能力，如 sitemap、robots、OG 信息
5. 继续打磨移动端和视觉细节
6. 考虑绑定自定义域名

## 本地开发

```bash
npm install
npm run dev
```

默认地址：

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

## 部署

项目使用 Cloudflare Pages 自动部署，配置如下：

| 设置项 | 值 |
|-------|---|
| Framework preset | Astro |
| Build command | `npm install && npm build` |
| Output directory | `dist` |
| Production branch | `main` |

推送代码后自动触发构建：

```bash
git add .
git commit -m "update content"
git push
```

## 许可

MIT
