/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_lGspZV8x.mjs';
import { $ as $$PostPreviewA } from '../../../../chunks/PostPreviewA_DKwYy5rg.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_B5kaoPdx.mjs';
import { s as siteConfig } from '../../../../chunks/consts_IIOApUeL.mjs';
import 'reading-time';
import { f as filterByLanguage } from '../../../../chunks/post_DDnA_DMT.mjs';
import { a as getSupportedLanguages } from '../../../../chunks/Footer_Bd3823Qz.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const getStaticPaths = async ({ paginate }) => {
  const allProjects = await getCollection("project", ({ data }) => {
    return data.draft !== true ;
  });
  const sortedByDateProjects = allProjects.sort((a, b) => {
    const aDate = new Date(a.data.pubDate).valueOf();
    const bDate = new Date(b.data.pubDate).valueOf();
    return bDate - aDate;
  });
  const sortedByPinned = sortedByDateProjects.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
  return getSupportedLanguages().flatMap((lang) => {
    const projects = filterByLanguage(
      sortedByPinned,
      lang
    );
    return paginate(projects, {
      params: { lang },
      pageSize: siteConfig.settings.paginationSize
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2 class="title">Projects</h2> <ul role="list" class="space-y-2 sm:space-y-4"> ${page.data.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewA, { "post": p, "withDesc": true })}`)} </ul> </section> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/projects/pages/[page].astro", void 0);
const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/[lang]/projects/pages/[page].astro";
const $$url = "/[lang]/projects/pages/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
