/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_lGspZV8x.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center items-center h-80 border-dashed border border-accent " data-astro-cid-zetdm5md> <div class="flex-col gap-2 text-8xl p-4 h-min" data-astro-cid-zetdm5md> <span id="status-code" data-astro-cid-zetdm5md> 404</span> <div class="border-b-2 border-accent w-full border-solid blink mt-1" data-astro-cid-zetdm5md></div> </div> <span data-astro-cid-zetdm5md>Looks like you're lost! You sure you know where you're going?</span> </section> ` })} `;
}, "/home/dev/himanshugupta2077.github.io/src/pages/404.astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
