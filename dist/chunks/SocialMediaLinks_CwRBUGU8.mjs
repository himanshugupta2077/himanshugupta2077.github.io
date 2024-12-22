import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './index_C3KBu71B.mjs';
import { S as SOCIAL_LINKS } from './consts_IIOApUeL.mjs';

const $$SocialMediaLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-4"> <ul class="flex flex-wrap flex-1 items-center gap-x-2 sm:flex-initial"> ${SOCIAL_LINKS.map(({ link, icon, friendlyName }) => renderTemplate`<li class="flex"> <a class="inline-block p-1 sm:hover:text-accent"${addAttribute(link, "href")} target="_blank"${addAttribute(`noopener noreferrer`, "rel")}${addAttribute(friendlyName, "title")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "name": icon, "aria-hidden": "true", "focusable": "false" })} <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "/home/dev/himanshugupta2077.github.io/src/components/SocialMediaLinks.astro", void 0);

export { $$SocialMediaLinks as $ };
