/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_lGspZV8x.mjs';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate, c as getPostsBySeries, f as filterByLanguage } from '../../../../chunks/post_DDnA_DMT.mjs';
import { g as getUniqueByProperty } from '../../../../chunks/frontmatter_B2LgIGvU.mjs';
import { a as getSupportedLanguages } from '../../../../chunks/Footer_Bd3823Qz.mjs';
import { $ as $$PostPreviewA } from '../../../../chunks/PostPreviewA_DKwYy5rg.mjs';
import { $ as $$Pagination } from '../../../../chunks/Pagination_BkJJ5wu3.mjs';
import { s as siteConfig } from '../../../../chunks/consts_IIOApUeL.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts, "ascending");
  const uniqueSeries = getUniqueByProperty("series", allPostsByDate);
  return getSupportedLanguages().flatMap((lang) => {
    return uniqueSeries.flatMap((series) => {
      const postsFilteredBySeries = getPostsBySeries(
        series,
        allPostsByDate
      );
      const postsFilteredByLang = filterByLanguage(
        postsFilteredBySeries,
        lang
      );
      return paginate(postsFilteredByLang, {
        params: { lang, series },
        pageSize: siteConfig.settings.paginationSize
      });
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { series } = Astro2.params;
  const meta = {
    title: `Series: ${series}`,
    description: `View all posts with the series - ${series}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        url: page.url.prev,
        text: `\u2190 Previous in ${series}`
      }
    },
    ...page.url.next && {
      nextUrl: {
        url: page.url.next,
        text: `Next in ${series} \u2192`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": meta.title, "description": meta.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title flex items-center"> <a href="/series/" class="text-accent sm:hover:underline">Series</a> <span class="me-3 ms-2">→</span> <span>#${series}</span> </h1> <ul class="flex flex-col gap-4"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": post, "withDesc": true })}`)} </ul> ${renderComponent($$result2, "Pagination", $$Pagination, { ...paginationProps })} ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/[series]/[...page].astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/[series]/[...page].astro";
const $$url = "/[lang]/series/[series]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
