import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$BaseHead, b as $$Header, c as $$Footer } from './Footer_Bd3823Qz.mjs';
import { s as siteConfig, u as ui } from './consts_IIOApUeL.mjs';
import 'reading-time';
import './_astro_content_B5kaoPdx.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const lang = getLangFromUrl(Astro2.url);
  const {
    title = siteConfig.title,
    description = ui[lang]["site.description"].text,
    image
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang || Astro2.currentLocale, "lang")} class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section class="cody-bg"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/dev/himanshugupta2077.github.io/src/layouts/Base.astro", void 0);

export { $$Base as $ };
