import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes } from './astro/server_C_OL7ZpE.mjs';
import 'reading-time';
import './_astro_content_B5kaoPdx.mjs';
import './consts_IIOApUeL.mjs';
import 'clsx';

const dateOptions = {
  locale: "en-GB",
  options: {
    day: "numeric",
    month: "short",
    year: "numeric"
  }
};
const dateFormat = new Intl.DateTimeFormat(
  dateOptions.locale,
  dateOptions.options
);
function getFormattedDate(date, options, locale) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(locale ?? dateOptions.locale, options);
  }
  return dateFormat.format(new Date(date));
}

const $$Astro = createAstro("https://himanshu-gupta.com/");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, locale, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions, locale);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}${addAttribute(postDate, "title")}> ${postDate} </time>`;
}, "/home/dev/himanshugupta2077.github.io/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
