import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, b as $$Header, c as $$Footer } from './Footer_Bd3823Qz.mjs';
import { s as siteConfig } from './consts_IIOApUeL.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const {
    title = siteConfig.title,
    description = siteConfig.description,
    image,
    articleDate
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "articleDate": articleDate })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="grid grid-cols-1 gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-4"> ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["sidebar"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}
</html</body></html>`;
}, "/home/dev/himanshugupta2077.github.io/src/layouts/Sidebar.astro", void 0);

export { $$Sidebar as $ };
