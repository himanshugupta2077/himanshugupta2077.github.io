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
  const tags = getUniqueWithCountByProperty(
    "tags",
    filteredByLang
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "All Tags" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="flex font-bold text-xl items-center mb-4"> <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h1> <ul> ${tags.map(([tag, count]) => renderTemplate`<li class="my-2"> <a class="cody-link"${addAttribute(`/${lang}/tags/${tag}`, "href")}>
#${tag} </a>
(${count})
</li>`)} </ul> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/tags/index.astro", void 0);
const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/tags/index.astro";
const $$url = "/[lang]/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
