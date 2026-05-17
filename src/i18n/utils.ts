export const SITE_NAME = "MyWeb";
export const DEFAULT_LANG = "zh-CN";
export const SUPPORTED_LANGS = [DEFAULT_LANG, "en"] as const;
export const PROFILE_AVATAR_SRC = "/images/profile/avatar.jpg";
export const GITHUB_URL = "https://github.com/cmyandlqs";
export const GITHUB_HANDLE = "cmyandlqs";
export const BILIBILI_URL = "https://space.bilibili.com/563285166?spm_id_from=333.337.0.0";

export type SiteLang = (typeof SUPPORTED_LANGS)[number];
export type SiteCollection = "writing" | "projects" | "research" | "life";

export const isEnglish = (lang: SiteLang) => lang === "en";

export const getLangPrefix = (lang: SiteLang) => (isEnglish(lang) ? "/en" : "");

export const getCollectionPath = (collection: SiteCollection, lang: SiteLang) =>
  `${getLangPrefix(lang)}/${collection}`;

export const getDetailPath = (
  collection: SiteCollection,
  lang: SiteLang,
  slug: string,
) => `${getCollectionPath(collection, lang)}/${slug}`;

export const getAboutPath = (lang: SiteLang) =>
  isEnglish(lang) ? "/en/about" : "/about";

export const getHomePath = (lang: SiteLang) => (isEnglish(lang) ? "/en" : "/");

export const getOppositeLang = (lang: SiteLang): SiteLang =>
  isEnglish(lang) ? DEFAULT_LANG : "en";

export const formatDate = (value: string, lang: SiteLang) =>
  new Intl.DateTimeFormat(isEnglish(lang) ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));

export const sortByPublishedAtDesc = <T extends { data: { publishedAt: string } }>(
  entries: T[],
) =>
  [...entries].sort(
    (left, right) =>
      new Date(right.data.publishedAt).getTime() -
      new Date(left.data.publishedAt).getTime(),
  );
