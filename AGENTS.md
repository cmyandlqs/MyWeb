# MyWeb

## Project Purpose

MyWeb is a bilingual personal website for long-term writing and portfolio work around Agent / LLM research and engineering. It hosts three public content streams:

- `writing`: the public Blog stream for technical articles, paper notes, research notes, and engineering thoughts
- `projects`: project case studies
- `life`: a small amount of personal writing

The site is intended to be a durable personal knowledge and work homepage, not a one-off resume page.

## Stack

- Astro 6
- MDX
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript with `astro/tsconfigs/strict`
- Static-first deployment, intended for GitHub + Cloudflare Pages

Do not assume there is a backend, database, auth system, CMS, or upload service. The first version is file-driven and static.

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Astro CLI: `npm run astro`

Default dev URL: `http://localhost:4321`

Required Node.js version: `>=22.12.0`

## Current State

Implemented:

- Chinese and English home pages
- Chinese and English About pages
- Three public content channels: `writing`, `projects`, `life`
- Blog pages aggregate `writing` and the internal `research` content source
- List and detail pages for each public channel
- Chinese routes under `/` and English routes under `/en`
- Language switching based on `translationKey`
- Fallback to the target-language collection page when a translation is missing
- Home page data queries for featured projects and latest content
- Denser home layout with Projects and Blog presented in the same content band
- Placeholder avatar and cover images

Known next priorities:

- Replace placeholder profile and cover images with real assets
- Add more real blog, project, and life content
- Fill in GitHub / Email / social links
- Add basic SEO support such as sitemap, robots, and Open Graph metadata
- Continue mobile and visual polish

## Directory Map

```text
.
├── README.md                         # High-level project overview
├── dev-docs/
│   ├── MyWeb.md                      # Project notes and PRD
│   └── 内容发布流程.md                 # Content publishing workflow
├── public/
│   ├── favicon.*
│   └── images/                       # Profile, cover, and article images
├── src/
│   ├── components/
│   │   ├── about/                    # About page
│   │   ├── content/                  # Content cards and collection pages
│   │   ├── home/                     # Home page
│   │   ├── layout/                   # Header, Footer, Container
│   │   └── ui/                       # Basic UI components
│   ├── content/                      # MDX content source
│   │   ├── writing/{zh,en}/
│   │   ├── projects/{zh,en}/
│   │   ├── research/{zh,en}/          # Internal source now exposed through Blog
│   │   └── life/{zh,en}/
│   ├── i18n/                         # UI copy, languages, route helpers
│   ├── layouts/                      # BaseLayout, ArticleLayout, ProjectLayout
│   ├── lib/content/                  # Content queries and translation helpers
│   ├── pages/                        # Astro routes
│   ├── styles/global.css             # Global CSS and Tailwind entry
│   └── content.config.ts             # Astro content collection schemas
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Rules

Content collections are defined in `src/content.config.ts`.

- `writing`, `research`, and `life` use the shared article schema and may include `readTime`
- The public Blog route is `/writing`; it aggregates both `writing` and `research`
- `projects` adds `status`, `stack`, `repoUrl`, `demoUrl`, and `caseStudyUrl`
- Supported languages are `zh-CN` and `en`
- `draft: true` excludes content from public lists and homepage sections
- `routeSlug` controls the public URL
- `translationKey` pairs Chinese and English versions
- A content item may be published in only one language first

When adding content, follow `dev-docs/内容发布流程.md` and run `npm run build`.

## Routing

- Chinese home: `/`
- English home: `/en`
- Chinese collection example: `/writing`
- English collection example: `/en/writing`
- Chinese detail example: `/writing/agent-state-management`
- English detail example: `/en/writing/agent-state-management`
- Former `research` entries are generated under `/writing/{routeSlug}` and `/en/writing/{routeSlug}`

Language switching searches for a non-draft entry in the same collection with the same `translationKey` and the target language. If none exists, it falls back to the target-language collection page.

## Home Page Data

The home page is data-driven:

- Featured Projects: latest published `projects` entries with `featured: true`, max 3
- Latest Blog: latest published `writing` and `research` entries combined, max 6
- Life Notes: latest published `life` entries, max 3

Entries are sorted by `publishedAt` descending.

## Current TODO

- Recheck the mobile home page after the denser desktop layout.
- Consider migrating or renaming `src/content/research` into a more general blog source later.
- Add redirects from old `/research/*` paths before public launch if those URLs were ever shared.

## Agent Guidelines

- Read the relevant source files before editing.
- Preserve the static, file-driven architecture unless the user explicitly changes scope.
- Prefer existing components, layouts, i18n helpers, and content utilities over new abstractions.
- Keep slugs stable and English-like; avoid spaces and Chinese filenames for new image assets.
- For bilingual content, keep the same `translationKey` across languages.
- Do not commit secrets, `.env` files, build output, or large uncompressed images.
- If changing content schemas, route behavior, homepage data rules, or publishing workflow, update `README.md`, `dev-docs/内容发布流程.md`, `CLAUDE.md`, and this file together.
- Keep the UI restrained and content-focused: this is a personal writing and portfolio site, not a marketing landing page.
