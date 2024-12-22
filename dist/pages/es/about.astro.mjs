/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_lGspZV8x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "image": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title">Acerca de</h1> <p>
Hola, soy un tema Astro. Soy particularmente bueno para comenzar un blog
		o un portafolio.
</p> <div>
Me basé en otros dos temas:
<a class="cody-link" href="https://astro-theme-cactus.netlify.app" target="_blank" rel="noopener noreferrer">Astro Cactus</a>
y
<a class="cody-link" target="_blank" rel="noopener noreferrer" href="https://risotto.joeroe.io">Risotto</a>.
</div> <h2 class="title mt-4">
A continuación, se muestran mis características integradas:
</h2> <ul class="list-inside list-disc"> <li>Se ve genial en cualquier dispositivo</li> <li>Totalmente responsivo</li> <li>Viene con en modo claro y oscuro</li> <li>Fácil de personalizar y agregar contenido</li> <li>Construido con tailwindcss</li> <li>Fija publicaciones y proyectos</li> </ul> <p class="mt-4">
¡Clona o bifurca mi
<a class="cody-link inline-block" href="https://github.com/kirontoo/astro-theme-cody" target="_blank" rel="noopener noreferrer" aria-label="github repository">
repositorio
</a>
si te gusto!
</p> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/es/about.astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/es/about.astro";
const $$url = "/es/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
