/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B5kaoPdx.mjs';
import { $ as $$Base } from '../../chunks/Base_lGspZV8x.mjs';
import 'reading-time';
import { f as filterByLanguage } from '../../chunks/post_DDnA_DMT.mjs';
import { a as getUniqueWithCountByProperty } from '../../chunks/frontmatter_B2LgIGvU.mjs';
import { a as getSupportedLanguages } from '../../chunks/Footer_Bd3823Qz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const getStaticPaths = () => {
  return getSupportedLanguages().map((lang) => ({ params: { lang } }));
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true ;
  });
  const { lang } = Astro2.params;
  const filteredByLang = filterByLanguage(posts, lang);
  const series = getUniqueWithCountByProperty(
    "series",
    filteredByLang
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Series" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title flex font-bold text-xl items-center mb-4">Series</h1> <ul> ${series.map(([s, count]) => renderTemplate`<li class="my-2"> <a class="cody-link"${addAttribute(`/${lang}/series/${s}`, "href")}>
#${s} </a>
(${count})
</li>`)} </ul> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/index.astro", void 0);
const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/index.astro";
const $$url = "/[lang]/series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
