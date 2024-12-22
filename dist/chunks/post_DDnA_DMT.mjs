import { g as getCollection } from './_astro_content_B5kaoPdx.mjs';
import { d as getLangFromSlug } from './Footer_Bd3823Qz.mjs';

async function getAllPosts(filterHidden = false) {
  return await getCollection("blog", ({ data }) => {
    {
      if (filterHidden) {
        return !data.hide;
      }
      return !data.draft;
    }
  });
}
function sortMDByDate(posts, order = "descending") {
  const direction = order === "descending" ? 1 : -1;
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.pubDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.pubDate).valueOf();
    return (bDate - aDate) * direction;
  });
}
function sortMDByPinned(posts) {
  return posts.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
}
function filterByLanguage(posts, lang) {
  return posts.filter((post) => {
    const translationLang = getLangFromSlug(post.slug);
    return lang === translationLang;
  });
}
function getPostsByTag(tag, posts) {
  return posts.filter((post) => {
    if (post.data.tags) {
      return post.data.tags.includes(tag);
    }
    return false;
  });
}
function getPostsBySeries(series, posts) {
  return posts.filter((post) => {
    if (post.data.series) {
      return post.data.series.includes(series);
    }
    return false;
  });
}
function getSlugFromCollectionEntry(entry) {
  const [, ...slugs] = entry.slug.split("/");
  return slugs.length ? slugs.join("/") : entry.slug;
}

export { sortMDByPinned as a, getSlugFromCollectionEntry as b, getPostsBySeries as c, getPostsByTag as d, filterByLanguage as f, getAllPosts as g, sortMDByDate as s };
