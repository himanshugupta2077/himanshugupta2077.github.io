/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_lGspZV8x.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_rBgLbmDF.mjs';
import { $ as $$Icon } from '../chunks/index_C3KBu71B.mjs';
import 'reading-time';
import { b as getSlugFromCollectionEntry, g as getAllPosts, s as sortMDByDate, a as sortMDByPinned, f as filterByLanguage } from '../chunks/post_DDnA_DMT.mjs';
import { g as getLangFromUrl } from '../chunks/Footer_Bd3823Qz.mjs';
import { $ as $$SocialMediaLinks } from '../chunks/SocialMediaLinks_CwRBUGU8.mjs';
import '../chunks/consts_IIOApUeL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://himanshu-gupta.com/");
const $$PostPreviewB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostPreviewB;
  const { post, withDesc = false } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const slug = getSlugFromCollectionEntry(post);
  const urlBasePath = post.collection === "project" ? "projects" : post.collection;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const pinned = !!post.data.order;
  return renderTemplate`${maybeRenderHead()}<li> <div class="flex flex-col gap-x-0 sm:flex-row sm:divide-x sm:divide-accent"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "class": "min-w-[125px] text-gray-600 dark:text-gray-400" })} <span class="sm:before:ml-4"> <a${addAttribute(`/${lang}/${urlBasePath}/${slug}`, "href")} class="cody-link" data-astro-prefetch> ${post.data.title} </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false" })}`} </span> </div> ${withDesc && renderTemplate`<p class="italic">${post.data.description}</p>`} </li>`;
}, "/home/dev/himanshugupta2077.github.io/src/components/blog/PostPreviewB.astro", void 0);

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  const filteredPostsByLanguage = filterByLanguage(allPostsByPinned, "es").slice(0, MAX_POSTS);
  const tech = [
    {
      title: "Astro",
      desc: "Crea sitios web r\xE1pidos, m\xE1s r\xE1pido.",
      href: "https://astro.build"
    },
    {
      title: "Astro Assets",
      desc: "Compatibilidad con activos optimizados integrados.",
      href: "https://docs.astro.build/en/guides/assets/"
    },
    {
      title: "Tailwind CSS",
      desc: "Crea sitios web modernos r\xE1pidamente sin tener que abandonar el HTML.",
      href: "https://tailwindcss.com"
    },
    {
      title: "Markdown",
      desc: "Lenguaje de marcado simple y f\xE1cil de usar.",
      href: "https://www.markdownguide.org/"
    },
    {
      title: "MDX",
      desc: "Markdown para la era de los componentes.",
      href: "https://mdxjs.com/"
    },
    {
      title: "Astro Icon",
      desc: "Un componente de \xEDcono f\xE1cil de usar para Astro.",
      href: "https://github.com/natemoo-re/astro-icon#readme"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World</h1> <p class="mb-4 sm:mb-8">
¡Hola a todos! Este es un tema para Astro. Pueden usarlo como blog
			personal o portafolio. Si quieren saber más sobre cómo
			personalizarlo y hacerlo suyo, hagan clic en el enlace del ícono de
			Github que aparece a continuación y los llevará al repositorio.
</p> <div> <span>Puedes encontrarme en:</span> ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} </div> </section> <section class="mt-8 sm:mt-16"> <h2 class="title">Posts</h2> <ul class="space-y-4 sm:space-y-2"> ${filteredPostsByLanguage.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewB, { "post": p })}`)} </ul> </section> <section class="mt-16 mb-4"> <h2 class="title">Technologies</h2> <ul class="space-y-4 sm:space-y-2"> ${tech.map(({ href, title, desc }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="cody-link inline-block"> ${title} </a>
: <p class="inline-block sm:mt-2">${desc}</p> </li>`)} </ul> </section> <hr> <section class=""> <p>Esto fue traducido usando Google Translate</p> </section> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/es/index.astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
