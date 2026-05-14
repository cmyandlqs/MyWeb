import type { SiteCollection, SiteLang } from "./utils";

type Dictionary = {
  nav: {
    writing: string;
    projects: string;
    research: string;
    life: string;
    about: string;
    resume: string;
    languageSwitch: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  home: {
    focusTitle: string;
    focusDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    writingTitle: string;
    writingDescription: string;
    researchTitle: string;
    researchDescription: string;
    lifeTitle: string;
    lifeDescription: string;
  };
  collections: Record<
    SiteCollection,
    {
      title: string;
      description: string;
      empty: string;
    }
  >;
  labels: {
    latest: string;
    featured: string;
    currentFocus: string;
    readingTime: string;
    updatedAt: string;
    projectStatus: string;
    stack: string;
    links: string;
    noTranslation: string;
    backToList: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    identityTitle: string;
    identityBody: string;
    focusTitle: string;
    focusBody: string;
    buildingTitle: string;
    buildingBody: string;
    contactTitle: string;
    contactBody: string;
  };
  footer: string;
  currentFocus: string[];
};

export const ui: Record<SiteLang, Dictionary> = {
  "zh-CN": {
    nav: {
      writing: "文章",
      projects: "项目",
      research: "研究",
      life: "生活",
      about: "关于",
      resume: "简历",
      languageSwitch: "EN",
    },
    hero: {
      eyebrow: "Agent / LLM Research & Building",
      title: "你好，我是 sikm。",
      subtitle: "Agent / LLM 算法方向研究生",
      description:
        "我在这里长期沉淀关于 Agent、评测、RAG、工具调用和工程实践的文章、项目与研究笔记，也保留少量真实生活记录。",
      primaryCta: "阅读文章",
      secondaryCta: "查看项目",
    },
    home: {
      focusTitle: "当前关注",
      focusDescription: "几条正在持续推进的研究和工程主题。",
      projectsTitle: "精选项目",
      projectsDescription: "不是罗列仓库，而是展示问题、方法和结果。",
      writingTitle: "最新文章",
      writingDescription: "围绕 Agent 系统、评测、工具链与实现细节的写作沉淀。",
      researchTitle: "研究笔记",
      researchDescription: "论文阅读、实验观察和问题拆解。",
      lifeTitle: "生活记录",
      lifeDescription: "保持人的尺度，而不是只剩技术陈列。",
    },
    collections: {
      writing: {
        title: "文章",
        description: "围绕 Agent、LLM 系统、工程实践和设计思考的长期写作。",
        empty: "文章内容还在整理中。",
      },
      projects: {
        title: "项目",
        description: "展示项目背景、技术路径、关键难点与最终结果。",
        empty: "项目案例正在补充中。",
      },
      research: {
        title: "研究",
        description: "沉淀论文阅读、实验日志和研究问题。",
        empty: "研究笔记正在补充中。",
      },
      life: {
        title: "生活",
        description: "保留少量有结构的生活记录与阶段性复盘。",
        empty: "生活记录还在准备中。",
      },
    },
    labels: {
      latest: "最新",
      featured: "精选",
      currentFocus: "Current Focus",
      readingTime: "阅读时间",
      updatedAt: "更新于",
      projectStatus: "项目状态",
      stack: "技术栈",
      links: "相关链接",
      noTranslation: "该内容暂无对应英文版本，已回退到列表页。",
      backToList: "返回列表",
    },
    about: {
      eyebrow: "About",
      title: "把研究、写作与构建放在同一个长期工作台里。",
      lead:
        "MyWeb 不是一张静态简历，而是我持续记录如何学习、研究和构建 AI Agent 系统的公开主页。",
      identityTitle: "我是谁",
      identityBody:
        "目前的主要身份是 Agent / LLM 算法方向研究生，关注从想法验证到可交付系统之间的工程落差。",
      focusTitle: "我关注什么",
      focusBody:
        "重点包括 Agent 工作流、多智能体评测、工具调用稳定性、RAG / MCP 工程实践，以及部分目标检测和效率工具方向。",
      buildingTitle: "我在构建什么",
      buildingBody:
        "这里会逐步沉淀技术文章、项目案例、研究笔记和阶段性复盘，形成一套可回看的长期知识资产。",
      contactTitle: "联系方式",
      contactBody:
        "GitHub、邮箱与公开渠道将在正式上线前补充。当前版本先完成信息结构、内容系统和多语言框架。",
    },
    footer: "Built with Astro, MDX, Tailwind and a bias toward clear thinking.",
    currentFocus: [
      "LLM Agent Systems",
      "Multi-Agent Evaluation",
      "Tool Use Reliability",
      "RAG / MCP / Sandbox",
      "Object Detection Notes",
    ],
  },
  en: {
    nav: {
      writing: "Writing",
      projects: "Projects",
      research: "Research",
      life: "Life",
      about: "About",
      resume: "Resume",
      languageSwitch: "中文",
    },
    hero: {
      eyebrow: "Agent / LLM Research & Building",
      title: "Hi, I’m sikm.",
      subtitle: "Agent / LLM Algorithm Graduate Student",
      description:
        "This site is where I keep writing, project notes, research summaries, and a small amount of personal context around how I build AI systems.",
      primaryCta: "Read writing",
      secondaryCta: "View projects",
    },
    home: {
      focusTitle: "Current focus",
      focusDescription: "A few themes I am actively pushing forward.",
      projectsTitle: "Featured projects",
      projectsDescription: "Case studies that show problem framing, technical choices, and outcomes.",
      writingTitle: "Latest writing",
      writingDescription: "Ongoing notes on agent systems, evaluation, tooling, and implementation details.",
      researchTitle: "Research notes",
      researchDescription: "Paper reading, experiment observations, and question breakdowns.",
      lifeTitle: "Life notes",
      lifeDescription: "A small amount of human context beyond pure technical output.",
    },
    collections: {
      writing: {
        title: "Writing",
        description: "Long-form notes on agent systems, LLM engineering, and practical implementation.",
        empty: "Writing entries are still being prepared.",
      },
      projects: {
        title: "Projects",
        description: "Project case studies with context, technical path, and results.",
        empty: "Project entries are being expanded.",
      },
      research: {
        title: "Research",
        description: "Paper notes, experiment logs, and research questions in progress.",
        empty: "Research notes are still being collected.",
      },
      life: {
        title: "Life",
        description: "A restrained journal layer to keep the site personal.",
        empty: "Life notes are on the way.",
      },
    },
    labels: {
      latest: "Latest",
      featured: "Featured",
      currentFocus: "Current Focus",
      readingTime: "Reading time",
      updatedAt: "Updated",
      projectStatus: "Status",
      stack: "Stack",
      links: "Links",
      noTranslation: "This entry has no translation yet, so the switch falls back to the list page.",
      backToList: "Back to list",
    },
    about: {
      eyebrow: "About",
      title: "A long-term workspace for research, writing, and building.",
      lead:
        "MyWeb is not a static resume page. It is a public home for how I learn, research, and build AI agent systems over time.",
      identityTitle: "Who I am",
      identityBody:
        "I am currently working as an Agent / LLM graduate student, with a strong interest in turning ideas into robust, reviewable systems.",
      focusTitle: "What I focus on",
      focusBody:
        "The main areas include agent workflows, multi-agent evaluation, tool-use reliability, RAG / MCP engineering, plus selected notes on object detection and productivity tools.",
      buildingTitle: "What I am building here",
      buildingBody:
        "This site gradually turns project work, research notes, writing, and periodic reflection into a durable and searchable body of work.",
      contactTitle: "Contact",
      contactBody:
        "GitHub, email, and public contact channels will be added before the public launch. This iteration focuses on structure, content workflows, and bilingual delivery.",
    },
    footer: "Built with Astro, MDX, Tailwind, and a preference for calm engineering.",
    currentFocus: [
      "LLM Agent Systems",
      "Multi-Agent Evaluation",
      "Tool Use Reliability",
      "RAG / MCP / Sandbox",
      "Object Detection Notes",
    ],
  },
};
