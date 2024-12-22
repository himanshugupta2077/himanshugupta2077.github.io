/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_lGspZV8x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Whoami = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "image": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title">Hey, I am Himanshu Gupta and I like to solve technical problems.</h1>  ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/en/whoami.astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/en/whoami.astro";
const $$url = "/en/whoami";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Whoami,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
