import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="mt-4 flex items-center gap-x-4">${prevUrl && renderTemplate`<a class="me-auto sm:hover:text-accent"${addAttribute(prevUrl.url, "href")} data-astro-prefetch>${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="ms-auto sm:hover:text-accent"${addAttribute(nextUrl.url, "href")} data-astro-prefetch>${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "/home/dev/himanshugupta2077.github.io/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
