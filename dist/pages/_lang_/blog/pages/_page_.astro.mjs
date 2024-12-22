/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Sidebar } from '../../../../chunks/Sidebar_BFqh62p1.mjs';
import { $ as $$PostPreviewA } from '../../../../chunks/PostPreviewA_DKwYy5rg.mjs';
import { $ as $$Pagination } from '../../../../chunks/Pagination_BkJJ5wu3.mjs';
import 'reading-time';
import { g as getUniqueTags } from '../../../../chunks/tags_DCeL84zo.mjs';
import { g as getAllPosts, s as sortMDByDate, a as sortMDByPinned, f as filterByLanguage } from '../../../../chunks/post_DDnA_DMT.mjs';
import { a as getSupportedLanguages } from '../../../../chunks/Footer_Bd3823Qz.mjs';
import { s as siteConfig } from '../../../../chunks/consts_IIOApUeL.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts(true);
  const allPostsByDate = sortMDByDate(allPosts);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  const tags = getUniqueTags(allPosts);
  return getSupportedLanguages().flatMap((lang) => {
    const filteredByLang = filterByLanguage(
      allPostsByPinned,
      lang
    );
    return paginate(filteredByLang, {
      params: { lang },
      props: { tags },
      pageSize: siteConfig.settings.paginationSize
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page, tags } = Astro2.props;
  const meta = {
    title: "Posts",
    description: "Read my collection of posts and the things that interest me"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        url: page.url.prev,
        text: `\u2190 Previous Posts`
      }
    },
    ...page.url.next && {
      nextUrl: {
        url: page.url.next,
        text: `Next Posts \u2192`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Sidebar, { ...meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="cody-bg"> <h1 class="title">Posts</h1> <ul class="flex flex-col gap-4"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": post, "withDesc": true })}`)} </ul> ${renderComponent($$result2, "Pagination", $$Pagination, { ...paginationProps })} </section> `, "sidebar": ($$result2) => renderTemplate`${!!tags.length && renderTemplate`<aside> <h2 class="flex font-semibold text-lg items-center mb-4"> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h2> <ul class="flex gap-2 flex-wrap mb-4"> ${tags.map((tag) => renderTemplate`<li class="tag"> <a${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`tag: ${tag}`, "aria-label")}> ${tag} </a> </li>`)} </ul> <a href="/tags" class="cody-link" aria-label="View all blog tags">
See more ->
</a> </aside>`}` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/pages/[page].astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/pages/[page].astro";
const $$url = "/[lang]/blog/pages/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
