import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_C_OL7ZpE.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/dev/himanshugupta2077.github.io/","adapterName":"","routes":[{"file":"file:///home/dev/himanshugupta2077.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/en/whoami/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en/whoami","isIndex":false,"type":"page","pattern":"^\\/en\\/whoami\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"whoami","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/whoami.astro","pathname":"/en/whoami","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/en/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/es/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/es/about","isIndex":false,"type":"page","pattern":"^\\/es\\/about\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/about.astro","pathname":"/es/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/es/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/dev/himanshugupta2077.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://himanshu-gupta.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/blog/pages/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/archive/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/projects/pages/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/[series]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/series/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/[lang]/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/en/whoami.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/es/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/dev/himanshugupta2077.github.io/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/projects/pages/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/series/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/layouts/Base.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/archive/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/series/[series]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/whoami@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/layouts/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/layouts/Project.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/blog/pages/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/blog/PostPreviewA.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/blog/PostPreviewB.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/dev/himanshugupta2077.github.io/src/components/TableOfContents.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/en/whoami@_@astro":"pages/en/whoami.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/about@_@astro":"pages/es/about.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/[lang]/archive/index@_@astro":"pages/_lang_/archive.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/pages/[page]@_@astro":"pages/_lang_/blog/pages/_page_.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/[slug]@_@astro":"pages/_lang_/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/projects/pages/[page]@_@astro":"pages/_lang_/projects/pages/_page_.astro.mjs","\u0000@astro-page:src/pages/[lang]/projects/[slug]@_@astro":"pages/_lang_/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/series/[series]/[...page]@_@astro":"pages/_lang_/series/_series_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[lang]/series/index@_@astro":"pages/_lang_/series.astro.mjs","\u0000@astro-page:src/pages/[lang]/tags/[tag]/[...page]@_@astro":"pages/_lang_/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[lang]/tags/index@_@astro":"pages/_lang_/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DXDxYs-f.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_BwLBlo08.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_DQ6y9xwo.mjs","/home/dev/himanshugupta2077.github.io/src/content/project/SafePass.md?astroContentCollectionEntry=true":"chunks/SafePass_BsHdJq0x.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_DE8HX0J6.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_DSiBYdlY.mjs","/home/dev/himanshugupta2077.github.io/src/content/project/SafePass.md?astroPropagatedAssets":"chunks/SafePass_CFCxknp_.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/first-post.md":"chunks/first-post_BZ7IOZ0j.mjs","/home/dev/himanshugupta2077.github.io/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_DPf25Nqy.mjs","/home/dev/himanshugupta2077.github.io/src/content/project/SafePass.md":"chunks/SafePass_Cj3-RRq_.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.DWBFCYtM.js","/astro/hoisted.js?q=0":"_astro/hoisted.-a8rPBSx.js","/astro/hoisted.js?q=2":"_astro/hoisted.DEvmU2-5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/dev/himanshugupta2077.github.io/dist/404.html","/file:///home/dev/himanshugupta2077.github.io/dist/en/whoami/index.html","/file:///home/dev/himanshugupta2077.github.io/dist/en/index.html","/file:///home/dev/himanshugupta2077.github.io/dist/es/about/index.html","/file:///home/dev/himanshugupta2077.github.io/dist/es/index.html","/file:///home/dev/himanshugupta2077.github.io/dist/rss.xml","/file:///home/dev/himanshugupta2077.github.io/dist/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"eUWoW5N4oAmTYUUoZJZfBLTnblwIdPz8WvVl7TZBubU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
