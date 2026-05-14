import { getCollection, type CollectionEntry } from "astro:content";
import {
  getCollectionPath,
  getDetailPath,
  sortByPublishedAtDesc,
  type SiteCollection,
  type SiteLang,
} from "../../i18n/utils";

export async function getPublishedEntries<C extends SiteCollection>(
  collection: C,
  lang: SiteLang,
) {
  const entries = await getCollection(
    collection,
    ({ data }) => !data.draft && data.lang === lang,
  );

  return sortByPublishedAtDesc(entries);
}

export async function getLatestEntries<C extends SiteCollection>(
  collection: C,
  lang: SiteLang,
  count: number,
) {
  const entries = await getPublishedEntries(collection, lang);
  return entries.slice(0, count);
}

export async function getFeaturedProjects(lang: SiteLang) {
  const entries = await getCollection(
    "projects",
    ({ data }) => !data.draft && data.lang === lang && data.featured,
  );

  return sortByPublishedAtDesc(entries).slice(0, 3);
}

export async function getTranslatedEntry<C extends SiteCollection>(
  collection: C,
  entry: CollectionEntry<C>,
  targetLang: SiteLang,
) {
  const entries = await getCollection(
    collection,
    ({ data }) =>
      !data.draft &&
      data.lang === targetLang &&
      data.translationKey === entry.data.translationKey,
  );

  return entries[0];
}

export function getEntryPath<C extends SiteCollection>(
  collection: C,
  lang: SiteLang,
  entry: Pick<CollectionEntry<C>, "data">,
) {
  return getDetailPath(collection, lang, entry.data.routeSlug);
}

export function getFallbackTranslationPath(
  collection: SiteCollection,
  targetLang: SiteLang,
) {
  return getCollectionPath(collection, targetLang);
}
