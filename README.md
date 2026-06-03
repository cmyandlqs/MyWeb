# MyWeb

MyWeb 是一个双语个人网站项目，面向 Agent / LLM 算法方向的长期内容沉淀。  
站点主要承载三类公开内容：

* Blog：技术文章、研究笔记、论文阅读和工程思考
* Projects：项目案例
* Life：少量生活记录

## 技术方案

当前采用静态优先方案：

* Astro
* MDX
* Tailwind CSS 4
* GitHub
* Cloudflare Pages

第一版不引入数据库、后端 API、登录系统和 CMS。

## 项目情况

当前仓库已经完成基础站点骨架，目标是先形成一个可持续维护、可继续填充内容的个人主页，而不是一次性展示页。

相关详细文档见：

* [dev-docs/MyWeb.md](D:\sikm\Desktop\PythonProject\MyWeb\dev-docs\MyWeb.md)
* [dev-docs/内容发布流程.md](D:\sikm\Desktop\PythonProject\MyWeb\dev-docs\内容发布流程.md)

## 开发进展

已完成：

* 中英文首页
* 中英文 About 页面
* Blog / Projects / Life 三个公开内容频道
* 三类内容的列表页与详情页
* 双语切换机制
* 基于 `translationKey` 的中英文内容配对规则
* 首页精选项目、最新博客和生活内容取数逻辑
* 原 Research 内容已合并到 Blog 入口
* 占位头像与封面图
* `npm run build` 构建通过

当前状态：

* 项目已经可以继续迭代开发
* 当前内容以示例内容和占位资源为主
* 视觉和信息架构已经基本定型

## 后续开发

下一阶段优先项：

1. 替换真实头像、项目封面
2. 补充真实博客、项目和生活内容
3. 补充 GitHub / Email / 社交链接
4. 增加 SEO 基础能力，如 sitemap、robots、OG 信息
5. 继续打磨移动端和视觉细节

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
