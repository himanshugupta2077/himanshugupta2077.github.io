import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, F as Fragment, m as maybeRenderHead, s as spreadAttributes, e as renderSlot } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
/* empty css                         */
import { s as siteConfig, a as SUPPORTED_LANGUAGES, D as DEFAULT_LANG, u as ui, N as NAV_LINKS } from './consts_IIOApUeL.mjs';
import 'clsx';
import 'reading-time';
import './_astro_content_B5kaoPdx.mjs';

const $$Astro$3 = createAstro("https://himanshu-gupta.com/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description,
    articleDate,
    image = "/blog-placeholder-1.jpg"
  } = Astro2.props;
  const titleSeparator = "|";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${siteTitle}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(siteConfig.profile.author, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteConfig.profile.author, "content")}><meta property="article:published_time"${addAttribute(articleDate, "content")}>` })}`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/dev/himanshugupta2077.github.io/src/components/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://himanshu-gupta.com/");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/dev/himanshugupta2077.github.io/src/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" class="transition-all relative" aria-label="toggle theme" data-astro-cid-x3pjskd3> <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-x3pjskd3> <path class="sun opacity-100 transition-all dark:scale-0 dark:opacity-0" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-x3pjskd3></path> <path class="moon opacity-0 transition-all dark:scale-100 dark:opacity-100" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-x3pjskd3></path> </svg> </button>  <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "/home/dev/himanshugupta2077.github.io/src/components/ThemeToggle.astro", void 0);

const nav = {
  "en": {
    "home": {
      text: "Home",
      slug: ""
    },
    "about": {
      text: "Whoami",
      slug: "whoami"
    },
    "blog": {
      text: "Blog",
      slug: "blog",
      route: "/blog/pages/1"
    },
    "projects": {
      text: "Projects",
      slug: "projects",
      route: "/projects/pages/1"
    },
    "archive": {
      text: "Archive",
      slug: "archive"
    },
    "tags": {
      text: "Tags",
      slug: "tags"
    },
    "series": {
      text: "Series",
      slug: "series"
    }
  },
  "es": {
    "home": {
      text: "Página Principal",
      slug: ""
    },
    "about": {
      text: "Acerca De",
      slug: "about"
    },
    "blog": {
      text: "Blog",
      slug: "blog",
      route: "/blog/pages/1"
    },
    "projects": {
      text: "Proyectos",
      slug: "projects",
      route: "/projects/pages/1"
    },
    "archive": {
      text: "Archivo",
      slug: "archive"
    },
    "tags": {
      text: "Etiquetas",
      slug: "tags"
    },
    "series": {
      text: "Serie",
      slug: "series"
    }
  }
};

function getSupportedLanguages() {
  return Object.keys(SUPPORTED_LANGUAGES);
}
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in SUPPORTED_LANGUAGES) {
    return lang;
  }
  return DEFAULT_LANG;
}
function getLangFromSlug(slug) {
  const [lang] = slug.split("/");
  if (lang in SUPPORTED_LANGUAGES) {
    return lang;
  }
  return DEFAULT_LANG;
}
function useNavTranslations(lang) {
  return function t(key) {
    return nav[lang][key] || nav[DEFAULT_LANG][key];
  };
}
function useUITranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[DEFAULT_LANG][key];
  };
}

const $$Astro$1 = createAstro("https://himanshu-gupta.com/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const url = new URL(Astro2.request.url);
  const lang = getLangFromUrl(Astro2.url);
  const t = useNavTranslations(lang);
  function buildNavLink(nav, entry) {
    if (entry.route) {
      return `/${lang}${entry.route}`;
    }
    return `/${lang}${nav != "home" ? `/${entry.slug}/` : "/"}`;
  }
  return renderTemplate`${maybeRenderHead()}<header class="group relative mb-8 flex justify-between items-center gap-4" id="main-header" data-astro-cid-3ef6ksr2> <div class="block" data-astro-cid-3ef6ksr2> <a class="title whitespace-nowrap"${addAttribute(`/${lang}/`, "href")}${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")} data-astro-cid-3ef6ksr2>${siteConfig.title}</a> </div> <nav class="mt-4 bg-surface/95 sm:bg-bgColor absolute hidden top-8 w-full sm:block sm:static sm:mt-0 group-[.menu-open]:z-50 group-[.menu-open]:flex group-[.menu-open]:bg-bgColor" id="navigation-menu" aria-label="main menu" data-astro-cid-3ef6ksr2> <div class="space-y-1 px-2 pb-3 pt-2 sm:flex sm:px-0 sm:py-0 sm:space-y-0 sm:space-x-2" data-astro-cid-3ef6ksr2> ${NAV_LINKS.map((nav) => {
    const translation = t(nav);
    return renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "block py-2 sm:py-0", "href": buildNavLink(nav, translation), "title": translation.text, "aria-current": url.pathname === translation.slug ? "page" : false, "data-astro-prefetch": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${translation.text}` })}`;
  })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "sm:hidden block py-2 sm:py-0", "href": "/tags", "title": "tags", "aria-current": url.pathname === "tags" ? "page" : false, "data-astro-prefetch": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("tags").text}` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "sm:hidden block py-2 sm:py-0", "href": "/series", "title": "series", "aria-current": url.pathname === "series" ? "page" : false, "data-astro-prefetch": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("series").text}` })} </div> </nav> <div class="flex gap-2 items-center justify-center" data-astro-cid-3ef6ksr2> <!-- <SelectLanguage class="sm:mr-2" /> --> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "nav-button", "nav-button", { "data-astro-cid-3ef6ksr2": true }, { "default": () => renderTemplate` <div class="sm:hidden" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>open main menu</span> <button class="group flex items-center justify-center" type="button" id="navigation-menu-btn" aria-label="Open main menu" aria-expanded="false" aria-haspopup="menu" data-astro-cid-3ef6ksr2> <!-- icon when menu is closed --> <svg class="transform transition-all duration-150 ease-out group-aria-expanded:scale-0 group-aria-expanded:opacity-0 h-6 w-6 block group-aria-expanded:hidden" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" data-astro-cid-3ef6ksr2></path> </svg> <!-- icon when menu is open --> <svg class="transform transition-all duration-150 ease-out h-6 w-6 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100 hidden group-aria-expanded:block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> ` })} </div> </header>  `;
}, "/home/dev/himanshugupta2077.github.io/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const lang = getLangFromUrl(Astro2.url);
  const t = useNavTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top font-semibold sm:flex-row sm:justify-between sm:text-xs text-textColor mb-8"> <div class="mr-2 sm:mr-0">
Copyright &copy; ${year}${" "} ${siteConfig.profile.author} </div> <nav aria-label="More on this site" class="sm:flex sm:divide-x sm:divide-accent"> ${NAV_LINKS.map((link) => {
    const translation = t(link);
    return renderTemplate`<a${addAttribute(`/${lang}/${translation.slug}`, "href")} class="px-2 py-0 hover:text-textColor hover:underline sm:px-4 sm:py-1 text-center"> ${translation.text} </a>`;
  })} </nav> </footer>`;
}, "/home/dev/himanshugupta2077.github.io/src/components/Footer.astro", void 0);

export { $$BaseHead as $, getSupportedLanguages as a, $$Header as b, $$Footer as c, getLangFromSlug as d, getLangFromUrl as g, useUITranslations as u };
