import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonSchema = z.object({
  title: z.string(),
  routeSlug: z.string(),
  summary: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  lang: z.enum(["zh-CN", "en"]),
  translationKey: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
});

const articleCollection = (base: string) =>
  defineCollection({
    loader: glob({
      base,
      pattern: "**/*.{md,mdx}",
      generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/u, ""),
    }),
    schema: commonSchema.extend({
      readTime: z.string().optional(),
    }),
  });

const projectCollection = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/u, ""),
  }),
  schema: commonSchema.extend({
    status: z.enum(["Research", "Prototype", "In Progress", "Shipped", "Archived"]),
    stack: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    caseStudyUrl: z.string().url().optional(),
  }),
});

export const collections = {
  writing: articleCollection("./src/content/writing"),
  projects: projectCollection,
  research: articleCollection("./src/content/research"),
  life: articleCollection("./src/content/life"),
};
