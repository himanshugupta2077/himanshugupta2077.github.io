import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate } from './FormattedDate_rBgLbmDF.mjs';
import { $ as $$Icon } from './index_C3KBu71B.mjs';
import 'reading-time';
import { b as getSlugFromCollectionEntry } from './post_DDnA_DMT.mjs';
import { g as getLangFromUrl } from './Footer_Bd3823Qz.mjs';
/* empty css                          */

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$PostPreviewA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreviewA;
  const { post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const lang = getLangFromUrl(Astro2.url);
  const slug = getSlugFromCollectionEntry(post);
  const pinned = !!post.data.order;
  const urlBasePath = post.collection === "project" ? "projects" : post.collection;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-b4gyc6eq> <span data-astro-cid-b4gyc6eq> <a${addAttribute(`/${lang}/${urlBasePath}/${slug}`, "href")} class="post-item" data-astro-cid-b4gyc6eq> <h4 class="cody-link inline font-bold" data-astro-cid-b4gyc6eq>${post.data.title}</h4> </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 -ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false", "data-astro-cid-b4gyc6eq": true })}`} </span> <p class="date pr-2 mt-1" data-astro-cid-b4gyc6eq> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "data-astro-cid-b4gyc6eq": true })} </p> ${withDesc && renderTemplate`<p class="italic" data-astro-cid-b4gyc6eq>${post.data.description}</p>`} </li> `;
}, "/home/dev/himanshugupta2077.github.io/src/components/blog/PostPreviewA.astro", void 0);

export { $$PostPreviewA as $ };
