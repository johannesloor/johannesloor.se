// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-projects-tsx": () => import("./../src/pages/projects.tsx" /* webpackChunkName: "component---src-pages-projects-tsx" */),
  "component---src-templates-page-tsx": () => import("./../src/templates/page.tsx" /* webpackChunkName: "component---src-templates-page-tsx" */)
}

