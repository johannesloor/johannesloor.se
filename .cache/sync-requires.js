// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/johannes/Programmering/johannesloor.se/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/johannes/Programmering/johannesloor.se/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/johannes/Programmering/johannesloor.se/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/johannes/Programmering/johannesloor.se/src/pages/index.tsx")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/johannes/Programmering/johannesloor.se/src/pages/page-2.tsx"))
}

exports.json = {
  "layout-index.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/404.json"),
  "index.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/index.json"),
  "page-2.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/page-2.json"),
  "404-html.json": require("/Users/johannes/Programmering/johannesloor.se/.cache/json/404-html.json")
}