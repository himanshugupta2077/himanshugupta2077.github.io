/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, d as addAttribute, e as renderSlot } from '../../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Sidebar } from '../../../chunks/Sidebar_BFqh62p1.mjs';
import { $ as $$FormattedDate } from '../../../chunks/FormattedDate_rBgLbmDF.mjs';
import { $ as $$SocialMediaLinks } from '../../../chunks/SocialMediaLinks_CwRBUGU8.mjs';
import { $ as $$TableOfContents } from '../../../chunks/TableOfContents_CReXx9B4.mjs';
import { $ as $$Icon } from '../../../chunks/index_C3KBu71B.mjs';
/* empty css                                        */
import 'clsx';
import { s as siteConfig } from '../../../chunks/consts_IIOApUeL.mjs';
import 'reading-time';
import '../../../chunks/_astro_content_B5kaoPdx.mjs';
import { g as getLangFromUrl, u as useUITranslations, a as getSupportedLanguages } from '../../../chunks/Footer_Bd3823Qz.mjs';
import { g as getAllPosts, f as filterByLanguage, b as getSlugFromCollectionEntry } from '../../../chunks/post_DDnA_DMT.mjs';
export { renderers } from '../../../renderers.mjs';

const $$BackToTopBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top-btn" aria-label="back to top" class="z-50" data-astro-cid-xuhzuiaq> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-7 h-7 sm:w-5 s:h-6", "name": "carbon:arrow-up", "aria-hidden": "true", "focusable": "false", "data-astro-cid-xuhzuiaq": true })} </button>  `;
}, "/home/dev/himanshugupta2077.github.io/src/components/BackToTopBtn.astro", void 0);

const $$CopyBtn = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/dev/himanshugupta2077.github.io/src/components/CopyBtn.astro", void 0);

const $$Astro$1 = createAstro("https://himanshu-gupta.com/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const {
    slug,
    data: {
      title,
      description,
      pubDate,
      updatedDate,
      heroImage,
      ogImage,
      tags,
      series,
      draft
    }
  } = post;
  const { headings, remarkPluginFrontmatter } = post.render && await post.render();
  const { minutesRead } = remarkPluginFrontmatter;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useUITranslations(lang);
  const socialImage = ogImage ?? `/og-image/${slug}.png`;
  const dateTimeOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const articleDate = updatedDate?.toISOString() ?? pubDate.toISOString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Sidebar, { "title": title, "description": description, "image": socialImage, "articleDate": articleDate }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="cody-bg prose dark:prose-invert prose-cody text-textColor max-w-4xl"> <header class="space-y-2"> ${heroImage && renderTemplate`<div class="aspect-h-9 aspect-w-16 mb-6 w-full flex justify-center"> <img${addAttribute(heroImage.src, "src")}${addAttribute(heroImage.alt, "alt")} class="m-0"> </div>`} ${series && renderTemplate`<div class="md:sr-only not-sr-only"> <span>Part of series:</span> <a class="cody-link"${addAttribute(`/series/${series}`, "href")}> ${series} </a> </div>`} <div class="flex gap-2 items-center"> <h1 class="text-3xl my-0">${title}</h1> ${draft && renderTemplate`<span class="px-1 py-0 bg-red-200 text-red-600 text-sm font-semibold">
draft
</span>`} </div> <span class="font-semibold text-textColor flex gap-2 items-center"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate, "dateTimeOptions": dateTimeOptions })} <span>
/ ${minutesRead} </span> ${updatedDate && renderTemplate`<div class="italic px-2 bg-accent-2 w-fit text-sm font-normal"> ${translate("blog.lastUpdated").text}${" "} ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate, "dateTimeOptions": dateTimeOptions })} </div>`} </span> ${tags && renderTemplate`<ul class="not-prose flex gap-2 flex-wrap"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "carbon:tag-group", "aria-hidden": "true", "focusable": "false" })} ${tags.map((tag) => renderTemplate`<li class="tag"> <a${addAttribute(`/${lang}/tags/${tag}`, "href")}>${tag}</a> </li>`)} </ul>`} </header> <hr class="my-4"> <main class="prose-sm prose-headings:font-semibold prose-headings:ml-4 prose-headings:before:absolute prose-headings:before:-ms-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none prose-a:text-accent"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "BackToTopBtn", $$BackToTopBtn, {})} </article>  `, "sidebar": ($$result2) => renderTemplate`<aside class="hidden sm:block"> <div class="flex flex-col space-y-2"> <h2 class="font-semibold text-lg text-textColor"> ${siteConfig.profile.author} </h2> ${siteConfig.profile.description && renderTemplate`<p>${translate("profile.description").text}</p>`} ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} <span class="!my-4 text-accent" aria-hidden>---</span> <p> ${description} </p> ${series && renderTemplate`<div class="pt-2 hidden md:block"> <span>Part of series: </span> <br> <ul> <li> <a class="cody-link"${addAttribute(`/${lang}/series/${series}`, "href")}> ${series} </a> </li> </ul> </div>`} </div> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TableOfContents, { "headings": headings })}`} </aside>` })} ${renderComponent($$result, "CopyBtn", $$CopyBtn, {})}`;
}, "/home/dev/himanshugupta2077.github.io/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://himanshu-gupta.com/");
const getStaticPaths = async () => {
  const blogEntries = await getAllPosts();
  return getSupportedLanguages().flatMap((lang) => {
    const filteredByLanguage = filterByLanguage(
      blogEntries,
      lang
    );
    return filteredByLanguage.map((post) => {
      const slug = getSlugFromCollectionEntry(
        post
      );
      return {
        params: { lang, slug },
        props: { post }
      };
    });
  });
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "post": post }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/[slug].astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/[slug].astro";
const $$url = "/[lang]/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
