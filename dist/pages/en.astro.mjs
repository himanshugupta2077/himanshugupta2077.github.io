/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_OL7ZpE.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_lGspZV8x.mjs';
import { $ as $$SocialMediaLinks } from '../chunks/SocialMediaLinks_CwRBUGU8.mjs';
import 'reading-time';
import { g as getAllPosts, s as sortMDByDate, a as sortMDByPinned, f as filterByLanguage } from '../chunks/post_DDnA_DMT.mjs';
import '../chunks/consts_IIOApUeL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  filterByLanguage(allPostsByPinned, "en").slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Ethical Hacker</h1> <p class="mb-2">
Working as a Penetration tester at <a href="https://securityboat.net/" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">SecurityBoat</a>.
</p> <p class="mb-2">
Creator of <a href="https://github.com/himanshugupta2077/SafePass/" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">SafePass</a> and <a href="https://github.com/himanshugupta2077/PentestPilot/" style="text-decoration: underline;" target="_blank" rel="noopener noreferrer">PentestPilot</a>.
</p> <p class="mb-2">
Undertake freelance projects in my free time.
</p> </section> <section class="mt-8 sm:mt-16"> <h2 class="title">What I do?</h2> <p class="mb-2">
I perform penetration testing on Web applications, Mobile applications, API, Infrastructure, Thick Client Application and also perform Secure Code Review.
</p> </section>   <section class="mt-8 sm:mt-16"> <div> <span>You can find me on: </span> ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} </div> </section> ` })}`;
}, "/home/dev/himanshugupta2077.github.io/src/pages/en/index.astro", void 0);

const $$file = "/home/dev/himanshugupta2077.github.io/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
