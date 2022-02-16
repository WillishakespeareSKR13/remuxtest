var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_react = __toModule(require("@emotion/react"));
var import_create_instance = __toModule(require("@emotion/server/create-instance"));
var import_cache = __toModule(require("@emotion/cache"));
var key = "css";
var cache = (0, import_cache.default)({ key });
var { extractCriticalToChunks, constructStyleTagsFromChunks } = (0, import_create_instance.default)(cache);
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const chunks = extractCriticalToChunks(markup);
  const styles = constructStyleTagsFromChunks(chunks);
  const markupWithStyles = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markupWithStyles, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// src/styles/index.tsx
init_react();

// src/styles/_normalizer.tsx
init_react();
var import_react2 = __toModule(require("@emotion/react"));
var _NormalizerStyled = ({ scrollbarColor }) => /* @__PURE__ */ React.createElement(import_react2.Global, {
  styles: import_react2.css`
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
      }

      *:focus {
        outline: none;
      }
      :root {
        font-size: 16px;
      }
      html {
        width: 100%;
        overflow-x: hidden;
      }
      body {
        width: 100%;
      }
      #__next {
        width: 100%;
        overflow-x: hidden;
      }
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: none;
        overflow: auto;
      }

      img {
        border-style: none;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      [type='button'],
      [type='reset'],
      [type='submit'],
      button {
        -webkit-appearance: button;
        -webkit-tap-highlight-color: transparent;
      }
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${scrollbarColor || "#f0a58b"};
      }
    `
});
var normalizer_default = _NormalizerStyled;

// src/styles/_fonts.tsx
init_react();
var import_react3 = __toModule(require("@emotion/react"));
var _NormalizerStyled2 = () => /* @__PURE__ */ React.createElement(import_react3.Global, {
  styles: import_react3.css`
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxC7mw9c.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRzS7mw9c.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxi7mw9c.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRxy7mw9c.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_c5H3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gTD_u50.woff2)
          format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
          U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3g3D_u50.woff2)
          format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gbD_u50.woff2)
          format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
          U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gfD_u50.woff2)
          format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2)
          format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `
});
var fonts_default = _NormalizerStyled2;

// src/styles/index.tsx
var StylesGlobal = ({ children, scrollbarColor }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(normalizer_default, {
  scrollbarColor
}), /* @__PURE__ */ React.createElement(fonts_default, null), children);
var styles_default = StylesGlobal;

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(styles_default, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\routes\article\$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_js_cookie = __toModule(require("js-cookie"));
var import_remix5 = __toModule(require_remix());

// src/auth/_article.ts
init_react();
var import_graphql_request3 = __toModule(require("graphql-request"));

// src/apollo/query/articles.ts
init_react();
var import_client = __toModule(require("@apollo/client"));
var TAXONOMYBYPROJECT = import_client.gql`
  query taxonomiesByProject(
    $skip: Int
    $take: Int
    $filter: TaxonomyFilterInput
    $order: [TaxonomySortInput!]
  ) {
    taxonomiesByProject(
      skip: $skip
      take: $take
      filter: $filter
      order: $order
    ) {
      items {
        projectId
        name
        slug
        description
        termGroup
        photo
        parentId
        isPublic
        subCategories {
          projectId
          name
          slug
          description
          termGroup
          photo
          id
          createdAt
          updatedAt
        }

        id
        createdAt
        updatedAt
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;
var GETARTICLEBYID = import_client.gql`
  query articleById($id: UUID!, $viewed: Boolean!) {
    articleById(id: $id, viewed: $viewed) {
      id
      title
      projectId
      seoTitle
      content
      releaseDate
      resume
      photo
      slug
      structuredMarking
      imageAlt
      status
      releaseDate
      seoTitle
      seoKeywords
      seoDescription
      structuredMarking
      imageAlt
      author
      categories {
        id
        name
        termGroup
      }
      tags {
        id
        name
        termGroup
      }
    }
  }
`;
var ARTICLES = import_client.gql`
  query listArticles(
    $take: Int
    $skip: Int
    $filter: ArticleFilterInput
    $order: [ArticleSortInput!]
  ) {
    listArticles(take: $take, skip: $skip, filter: $filter, order: $order) {
      totalCount
      items {
        id
        title
        slug
        content
        photo
        projectId
        active
        seoTitle
        author
        seoDescription
        seoKeywords
        structuredMarking
        status
        views
        releaseDate
        imageAlt
        resume
        categories {
          id
          name
          termGroup
        }
        tags {
          id
          name
          termGroup
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

// src/config/index.ts
init_react();
var CONFIG = {
  GRAPHQL_URL: process.env.GRAPHQL_SERVER_URL ?? "https://gateway.staging.ixulabs.com/graphql/",
  GRAPHQL_URL_WS: "wss://chat-cs-service.staging.sites.kaliarq.com/graphql",
  SITE: process.env.SITE ?? ".sites.develop.kaliarq.com",
  APP_ENV: process.env.APP_ENV ?? "develop"
};
var config_default = CONFIG;

// src/routes/login/index.tsx
init_react();
var import_remix4 = __toModule(require_remix());
var import_graphql_request2 = __toModule(require("graphql-request"));
var import_styled = __toModule(require("@emotion/styled"));
var import_framer_motion = __toModule(require("framer-motion"));
var cookie = __toModule(require("cookie"));

// src/apollo/mutation/login.ts
init_react();
var import_client2 = __toModule(require("@apollo/client"));
var LOGIN = import_client2.gql`
  mutation loginMember($input: LoginMemberInput!) {
    loginMember(input: $input) {
      accessToken
      member {
        id
        email
        createdAt
        updatedAt
        email
        recoverToken
        recoverRegister
        isActive
        firstTime
        loginCount
        memberRoles {
          id
          role {
            id
            name
            codeName
          }
          roleId
        }
        memberProjects {
          id
          projectId
          project {
            name
            description
            logo
            tagLine
            url
          }
        }
        memberCompanies {
          companyId
          company {
            id
            name
          }
        }
        profile {
          id
          firstName
          lastName
          phone
          photo
          countryId
          country {
            name
            code
          }
        }
      }
    }
  }
`;
var RESETPASSWORD = import_client2.gql`
  mutation sendResetPasswordLink($input: SendResetPasswordLinkInput) {
    sendResetPasswordLink(input: $input) {
      email_status
      success
    }
  }
`;

// src/auth/_login.ts
init_react();
var import_remix3 = __toModule(require_remix());

// src/auth/__auth.ts
init_react();
var import_graphql_request = __toModule(require("graphql-request"));

// src/apollo/query/user.ts
init_react();
var import_client3 = __toModule(require("@apollo/client"));
var USER = import_client3.gql`
  query me {
    me {
      id
      email
      createdAt
      updatedAt
      email
      recoverToken
      recoverRegister
      isActive
      firstTime
      loginCount
      taxonomies {
        memberId
        taxonomyId
      }
      groups {
        id
        name
        description
        groupTaxonomies {
          taxonomy {
            id
            name
          }
        }
      }
      memberRoles {
        id
        role {
          id
          name
          codeName
        }
        roleId
      }
      memberProjects {
        id
        projectId
        project {
          name
          description
          logo
          tagLine
          url
        }
        memberProjectRoleProject {
          projectRoleId
          projectRole {
            name
            codeName
            projectId
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
        }
      }
      memberCompanies {
        companyId
        company {
          id
          name
        }
      }
      profile {
        id
        firstName
        lastName
        phone
        photo
        countryId
        country {
          name
          code
        }
      }
    }
  }
`;
var MEBYID = import_client3.gql`
  query meById($id: UUID!) {
    meById(id: $id) {
      id
      email
      createdAt
      updatedAt
      email
      recoverToken
      recoverRegister
      isActive
      firstTime
      loginCount
      taxonomies {
        memberId
        taxonomyId
      }
      groups {
        id
        name
        description
        groupTaxonomies {
          taxonomy {
            id
            name
          }
        }
      }
      memberRoles {
        id
        role {
          id
          name
          codeName
        }
        roleId
      }
      memberProjects {
        id
        projectId
        project {
          name
          description
          logo
          tagLine
          url
        }
        memberProjectRoleProject {
          projectRoleId
          projectRole {
            name
            codeName
            projectId
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
        }
      }
      memberCompanies {
        companyId
        company {
          id
          name
        }
      }
      profile {
        id
        firstName
        lastName
        phone
        photo
        countryId
        country {
          name
          code
        }
      }
    }
  }
`;
var LISTUSER = import_client3.gql`
  query listUser($skip: Int, $take: Int, $filter: MemberFilterInput) {
    listUsers(skip: $skip, take: $take, filter: $filter) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      items {
        id
        email
        profile {
          firstName
          lastName
          photo
        }
        memberProjects {
          memberProjectRoleProject {
            projectRole {
              name
            }
          }
        }
        memberRoles {
          id
          role {
            id
            name
            codeName
          }
          roleId
        }
      }
    }
  }
`;
var GETUSERBYID = import_client3.gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      userinprofile {
        picture
      }
    }
  }
`;

// src/auth/__auth.ts
var GraphQLME = async (request) => {
  const bearer = await createBearer.parse(request.headers.get("Cookie") ?? "");
  const graphQLClient = new import_graphql_request.GraphQLClient(config_default.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });
  const query = await graphQLClient.request(USER).catch(() => null);
  return (query == null ? void 0 : query.me) ?? null;
};

// src/auth/_login.ts
var getDestination = (destination) => {
  switch (destination) {
    case "owner":
      return "/";
    case "superadmin":
      return "/";
    case "partner":
      return "/";
    case "partneruser":
      return "/";
    default:
      return "/";
  }
};
var AuthLogin = async ({ request }) => {
  var _a, _b;
  const me = await GraphQLME(request);
  if (me) {
    const level = (_b = (_a = me.memberRoles) == null ? void 0 : _a[0]) == null ? void 0 : _b.role.codeName.replace(/'_'/g, "");
    return (0, import_remix3.redirect)(getDestination(level));
  }
  return {};
};
var login_default = AuthLogin;

// src/routes/login/index.tsx
var Wrapper = (0, import_styled.default)(import_framer_motion.motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  }
`;
var Input = (0, import_styled.default)(import_framer_motion.motion.input)`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
var Button = (0, import_styled.default)(import_framer_motion.motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #f0a58b;
  color: #fff;
  cursor: pointer;
`;
var createBearer = (0, import_remix4.createCookie)("bearer", {
  maxAge: 604800
});

// src/auth/_article.ts
var AuthArticle = async ({ request, params }) => {
  const me = await GraphQLME(request);
  const bearer = await createBearer.parse(request.headers.get("Cookie") ?? "");
  const graphQLClient = new import_graphql_request3.GraphQLClient(config_default.GRAPHQL_URL, {
    headers: {}
  });
  const query = await graphQLClient.request(GETARTICLEBYID, {
    id: params.id,
    viewed: false
  }).catch((e) => e.response.data);
  return {
    me: me ?? {},
    article: (query == null ? void 0 : query.articleById) ?? {}
  };
};
var article_default = AuthArticle;

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\routes\article\$id.tsx
var meta2 = ({ data }) => {
  const user = data;
  const { me, article } = user;
  return {
    title: `${article.title}`,
    description: `${article.content}`,
    image: `${article.photo}`
  };
};
var loader = async (data) => article_default(data);
function Index() {
  var _a;
  const data = (0, import_remix5.useLoaderData)();
  const { me, article } = data;
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4",
      display: "flex",
      flexDirection: "column"
    }
  }, me.id ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to ", (_a = me == null ? void 0 : me.profile) == null ? void 0 : _a.firstName), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      import_js_cookie.default.remove("bearer");
      window.location.reload();
    }
  }, "logout"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/`
  }, "regresar")) : /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/login`,
    style: {
      width: "300px"
    }
  }, "iniciar sesion"), /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      wordBreak: "break-word"
    }
  }, /* @__PURE__ */ React.createElement("h1", null, article.title), /* @__PURE__ */ React.createElement("img", {
    src: article.photo,
    alt: "",
    style: { width: "500px" }
  }), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: article.content }
  })));
}

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\routes\login\index.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  createBearer: () => createBearer2,
  default: () => login_default2,
  loader: () => loader2
});
init_react();
var import_remix6 = __toModule(require_remix());
var import_graphql_request4 = __toModule(require("graphql-request"));
var import_styled2 = __toModule(require("@emotion/styled"));
var import_framer_motion2 = __toModule(require("framer-motion"));
var cookie2 = __toModule(require("cookie"));
var Wrapper2 = (0, import_styled2.default)(import_framer_motion2.motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  }
`;
var Input2 = (0, import_styled2.default)(import_framer_motion2.motion.input)`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
var Button2 = (0, import_styled2.default)(import_framer_motion2.motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #f0a58b;
  color: #fff;
  cursor: pointer;
`;
var Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};
var AnimationButton = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 }
};
var loader2 = async (data) => login_default(data);
var createBearer2 = (0, import_remix6.createCookie)("bearer", {
  maxAge: 604800
});
var action = async (DataFunction) => {
  const { request } = DataFunction;
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const getCookie = request.headers.get("Cookie");
  const bearer = cookie2.parse(getCookie || "").bearer;
  const graphQLClient = new import_graphql_request4.GraphQLClient(config_default.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });
  const query = await graphQLClient.request(LOGIN, {
    input: {
      email: username,
      password
    }
  }).catch(() => null);
  if (query) {
    const { loginMember } = query;
    return (0, import_remix6.redirect)("/login", {
      headers: {
        "Set-Cookie": await createBearer2.serialize(loginMember.accessToken)
      }
    });
  }
  return (0, import_remix6.redirect)("/login");
};
var PageLogin = () => {
  const transition = (0, import_remix6.useTransition)();
  return /* @__PURE__ */ React.createElement(Wrapper2, null, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(Input2, __spreadProps(__spreadValues({}, Animation), {
    type: "text",
    placeholder: "Username",
    name: "username"
  })), /* @__PURE__ */ React.createElement(Input2, __spreadProps(__spreadValues({}, Animation), {
    type: "password",
    placeholder: "Password",
    name: "password"
  })), /* @__PURE__ */ React.createElement(Button2, __spreadProps(__spreadValues({}, AnimationButton), {
    type: "submit",
    disabled: !!transition.submission
  }), transition.state === "idle" ? "Login" : "Logging in...")));
};
var login_default2 = PageLogin;

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index2,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_graphql_request6 = __toModule(require("graphql-request"));
var import_js_cookie2 = __toModule(require("js-cookie"));
var cookie3 = __toModule(require("cookie"));
var import_remix7 = __toModule(require_remix());

// src/auth/_admin.ts
init_react();
var import_graphql_request5 = __toModule(require("graphql-request"));
var AuthAdmin = async ({ request }) => {
  var _a;
  const me = await GraphQLME(request);
  const bearer = await createBearer.parse(request.headers.get("Cookie") ?? "");
  const graphQLClient = new import_graphql_request5.GraphQLClient(config_default.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });
  const query = await graphQLClient.request(ARTICLES, {
    filter: {
      projectId: {
        eq: "b6341425-7c7b-45bd-939a-dc15db168d62"
      }
    },
    order: {
      createdAt: "DESC"
    }
  }).catch((e) => e.response.data);
  return {
    me: me ?? {},
    articles: ((_a = query == null ? void 0 : query.listArticles) == null ? void 0 : _a.items) ?? []
  };
};
var admin_default = AuthAdmin;

// src/apollo/mutation/articles.ts
init_react();
var import_client4 = __toModule(require("@apollo/client"));
var CREATEARTICLES = import_client4.gql`
  mutation createArticle($input: CreateArticleInput!) {
    createArticle(input: $input) {
      article {
        title
        slug
        releaseDate
        status
      }
    }
  }
`;
var UPDATEARTICLES = import_client4.gql`
  mutation updateArticle($input: UpdateArticleInput!) {
    updateArticle(input: $input) {
      article {
        id
        title
        releaseDate
      }
    }
  }
`;
var DELETEARTICLE = import_client4.gql`
  mutation deleteArticle($input: DeleteArticleInput!) {
    deleteArticle(input: $input) {
      article {
        id
      }
    }
  }
`;
var UPDATESTATUSARTICLES = import_client4.gql`
  mutation updateStatusArticle($input: UpdateStatusArticleInput!) {
    updateStatusArticle(input: $input) {
      article {
        title
        status
      }
    }
  }
`;
var CREATETAXONOMY = import_client4.gql`
  mutation createTaxonomy($input: CreateTaxonomyInput!) {
    createTaxonomy(input: $input) {
      taxonomy {
        id
        name
        slug
        termGroup
      }
    }
  }
`;
var DELETETAXONOMY = import_client4.gql`
  mutation deleteTaxonomy($input: DeleteTaxonomyInput!) {
    deleteTaxonomy(input: $input) {
      taxonomy {
        name
      }
    }
  }
`;
var UPDATETAXONOMY = import_client4.gql`
  mutation updateTaxonomy($input: UpdateTaxonomyInput!) {
    updateTaxonomy(input: $input) {
      taxonomy {
        id
        name
      }
    }
  }
`;

// route-module:C:\Users\willi\OneDrive\Escritorio\remuxtest\src\routes\index.tsx
var meta3 = ({ data }) => {
  var _a, _b, _c, _d, _e;
  const user = data;
  const { me } = user;
  return {
    title: `${(_a = me == null ? void 0 : me.profile) == null ? void 0 : _a.firstName} ${(_b = me == null ? void 0 : me.profile) == null ? void 0 : _b.lastName}`,
    description: `${(_c = me == null ? void 0 : me.profile) == null ? void 0 : _c.firstName} ${(_d = me == null ? void 0 : me.profile) == null ? void 0 : _d.lastName}`,
    image: `${(_e = me == null ? void 0 : me.profile) == null ? void 0 : _e.photo}`
  };
};
var loader3 = async (data) => admin_default(data);
var action2 = async (DataFunction) => {
  const { request } = DataFunction;
  const formData = await request.formData();
  const title = formData.get("username");
  const content = formData.get("password");
  const getCookie = request.headers.get("Cookie");
  const bearer = cookie3.parse(getCookie || "").bearer;
  const graphQLClient = new import_graphql_request6.GraphQLClient(config_default.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });
  await graphQLClient.request(CREATEARTICLES, {
    input: {
      projectId: "b6341425-7c7b-45bd-939a-dc15db168d62",
      categories: [],
      title: "",
      tags: [],
      photo: "",
      content: "",
      slug: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      structuredMarking: "",
      status: "PUBLISHED",
      releaseDate: "",
      imageAlt: ""
    }
  }).catch(() => null);
  return (0, import_remix7.redirect)("/login");
};
function Index2() {
  var _a;
  const transition = (0, import_remix7.useTransition)();
  const data = (0, import_remix7.useLoaderData)();
  const { me, articles } = data;
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, me.id ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to ", (_a = me == null ? void 0 : me.profile) == null ? void 0 : _a.firstName), /* @__PURE__ */ React.createElement("p", null, JSON.stringify(me)), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      import_js_cookie2.default.remove("bearer");
      window.location.reload();
    }
  }, "logout"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Agregar articulo"), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Titulo",
    name: "title"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Contenido",
    name: "content"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: !!transition.submission
  }, transition.state === "idle" ? "Crear Articulo" : "Creando Articulo...")))) : /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: `/login`,
    style: {
      width: "300px"
    }
  }, "iniciar sesion"), /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      wordBreak: "break-word",
      gap: "50px"
    }
  }, articles == null ? void 0 : articles.map((article) => /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: `/article/${article.id}`,
    key: article.id,
    style: {
      width: "300px"
    }
  }, /* @__PURE__ */ React.createElement("h1", null, article.title), /* @__PURE__ */ React.createElement("img", {
    src: article.photo,
    alt: "",
    style: { width: "100%" }
  }), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: article.content }
  })))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/article/$id": {
    id: "routes/article/$id",
    parentId: "root",
    path: "article/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vc3JjL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcd2lsbGlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxyZW11eHRlc3RcXHNyY1xccm9vdC50c3giLCAiLi4vLi4vc3JjL3N0eWxlcy9pbmRleC50c3giLCAiLi4vLi4vc3JjL3N0eWxlcy9fbm9ybWFsaXplci50c3giLCAiLi4vLi4vc3JjL3N0eWxlcy9fZm9udHMudHN4IiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXHdpbGxpXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xccmVtdXh0ZXN0XFxzcmNcXHJvdXRlc1xcYXJ0aWNsZVxcJGlkLnRzeCIsICIuLi8uLi9zcmMvYXV0aC9fYXJ0aWNsZS50cyIsICIuLi8uLi9zcmMvYXBvbGxvL3F1ZXJ5L2FydGljbGVzLnRzIiwgIi4uLy4uL3NyYy9jb25maWcvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3JvdXRlcy9sb2dpbi9pbmRleC50c3giLCAiLi4vLi4vc3JjL2Fwb2xsby9tdXRhdGlvbi9sb2dpbi50cyIsICIuLi8uLi9zcmMvYXV0aC9fbG9naW4udHMiLCAiLi4vLi4vc3JjL2F1dGgvX19hdXRoLnRzIiwgIi4uLy4uL3NyYy9hcG9sbG8vcXVlcnkvdXNlci50cyIsICJyb3V0ZS1tb2R1bGU6QzpcXFVzZXJzXFx3aWxsaVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXHJlbXV4dGVzdFxcc3JjXFxyb3V0ZXNcXGxvZ2luXFxpbmRleC50c3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcd2lsbGlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxyZW11eHRlc3RcXHNyY1xccm91dGVzXFxpbmRleC50c3giLCAiLi4vLi4vc3JjL2F1dGgvX2FkbWluLnRzIiwgIi4uLy4uL3NyYy9hcG9sbG8vbXV0YXRpb24vYXJ0aWNsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHdpbGxpXFxcXE9uZURyaXZlXFxcXEVzY3JpdG9yaW9cXFxccmVtdXh0ZXN0XFxcXHNyY1xcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHdpbGxpXFxcXE9uZURyaXZlXFxcXEVzY3JpdG9yaW9cXFxccmVtdXh0ZXN0XFxcXHNyY1xcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx3aWxsaVxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXHJlbXV4dGVzdFxcXFxzcmNcXFxccm91dGVzXFxcXGFydGljbGVcXFxcJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx3aWxsaVxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXHJlbXV4dGVzdFxcXFxzcmNcXFxccm91dGVzXFxcXGxvZ2luXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFx3aWxsaVxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXHJlbXV4dGVzdFxcXFxzcmNcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvYXJ0aWNsZS8kaWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hcnRpY2xlLyRpZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFydGljbGUvOmlkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmNvbnN0IGtleSA9ICdjc3MnO1xuY29uc3QgY2FjaGUgPSBjcmVhdGVDYWNoZSh7IGtleSB9KTtcbmNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MsIGNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3MgfSA9XG4gIGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG4gICAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcblxuICBjb25zdCBjaHVua3MgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhtYXJrdXApO1xuICBjb25zdCBzdHlsZXMgPSBjb25zdHJ1Y3RTdHlsZVRhZ3NGcm9tQ2h1bmtzKGNodW5rcyk7XG4gIGNvbnN0IG1hcmt1cFdpdGhTdHlsZXMgPSBtYXJrdXAucmVwbGFjZSgnX19TVFlMRVNfXycsIHN0eWxlcyk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXBXaXRoU3R5bGVzLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFN0eWxlc0dsb2JhbCBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnTmV3IFJlbWl4IEFwcCcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/ICdfX1NUWUxFU19fJyA6IG51bGx9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U3R5bGVzR2xvYmFsIC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm9ybWFsaXplclN0eWxlZCBmcm9tICcuL19ub3JtYWxpemVyJztcclxuaW1wb3J0IEZvbnRzU3R5bGVkIGZyb20gJy4vX2ZvbnRzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgc2Nyb2xsYmFyQ29sb3I/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZXNHbG9iYWw6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBzY3JvbGxiYXJDb2xvciB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxOb3JtYWxpemVyU3R5bGVkIHNjcm9sbGJhckNvbG9yPXtzY3JvbGxiYXJDb2xvcn0gLz5cclxuICAgIDxGb250c1N0eWxlZCAvPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVzR2xvYmFsO1xyXG4iLCAiaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzY3JvbGxiYXJDb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgX05vcm1hbGl6ZXJTdHlsZWQ6IEZDPFByb3BzPiA9ICh7IHNjcm9sbGJhckNvbG9yIH0pID0+IChcclxuICA8R2xvYmFsXHJcbiAgICBzdHlsZXM9e2Nzc2BcclxuICAgICAgKixcclxuICAgICAgKjo6YWZ0ZXIsXHJcbiAgICAgICo6OmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICo6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgOnJvb3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICBodG1sIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIGJsb2NrcXVvdGUsXHJcbiAgICAgIGRsLFxyXG4gICAgICBkZCxcclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyxcclxuICAgICAgaDQsXHJcbiAgICAgIGg1LFxyXG4gICAgICBoNixcclxuICAgICAgZmlndXJlLFxyXG4gICAgICBwLFxyXG4gICAgICBwcmUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyxcclxuICAgICAgaDQsXHJcbiAgICAgIGg1LFxyXG4gICAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvbCxcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24sXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uLFxyXG4gICAgICBpbnB1dCxcclxuICAgICAgb3B0Z3JvdXAsXHJcbiAgICAgIHNlbGVjdCxcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFt0eXBlPSdidXR0b24nXSxcclxuICAgICAgW3R5cGU9J3Jlc2V0J10sXHJcbiAgICAgIFt0eXBlPSdzdWJtaXQnXSxcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgIH1cclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtzY3JvbGxiYXJDb2xvciB8fCAnI2YwYTU4Yid9O1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfTm9ybWFsaXplclN0eWxlZDtcclxuIiwgImltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IF9Ob3JtYWxpemVyU3R5bGVkOiBGQyA9ICgpID0+IChcclxuICA8R2xvYmFsXHJcbiAgICBzdHlsZXM9e2Nzc2BcclxuICAgICAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVRaklnMV9pNnQ4a0NIS200NV9RcFJ4QzdtdzljLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRixcclxuICAgICAgICAgIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYyAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUWpJZzFfaTZ0OGtDSEttNDVfUXBSelM3bXc5Yy53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgICAgIH1cclxuICAgICAgLyogdmlldG5hbWVzZSAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUWpJZzFfaTZ0OGtDSEttNDVfUXBSeGk3bXc5Yy53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSxcclxuICAgICAgICAgIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbi1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVFqSWcxX2k2dDhrQ0hLbTQ1X1FwUnh5N213OWMud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICAgICAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4gKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVFqSWcxX2k2dDhrQ0hLbTQ1X1FwUnlTN20ud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsXHJcbiAgICAgICAgICBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLFxyXG4gICAgICAgICAgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGN5cmlsbGljLWV4dCAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYVpBM2dURF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLFxyXG4gICAgICAgICAgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGN5cmlsbGljICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9hWkEzZzNEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgICAgIH1cclxuICAgICAgLyogdmlldG5hbWVzZSAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYVpBM2diRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksXHJcbiAgICAgICAgICBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4tZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9hWkEzZ2ZEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQixcclxuICAgICAgICAgIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbiAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYVpBM2duRF9nLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LFxyXG4gICAgICAgICAgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MyxcclxuICAgICAgICAgIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYy1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2NKRDNnVERfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRixcclxuICAgICAgICAgIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYyAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfY0pEM2czRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIHZpZXRuYW1lc2UgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2NKRDNnYkRfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LFxyXG4gICAgICAgICAgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGxhdGluLWV4dCAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfY0pEM2dmRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICAgICAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4gKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2NKRDNnbkRfZy53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNixcclxuICAgICAgICAgIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsXHJcbiAgICAgICAgICBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XHJcbiAgICAgIH1cclxuICAgICAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVTaklnMV9pNnQ4a0NIS200NTlXUmh5emJpLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRixcclxuICAgICAgICAgIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYyAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVU2pJZzFfaTZ0OGtDSEttNDU5VzFoeXpiaS53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgICAgIH1cclxuICAgICAgLyogdmlldG5hbWVzZSAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVU2pJZzFfaTZ0OGtDSEttNDU5V1poeXpiaS53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSxcclxuICAgICAgICAgIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbi1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVNqSWcxX2k2dDhrQ0hLbTQ1OVdkaHl6Ymkud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICAgICAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4gKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVNqSWcxX2k2dDhrQ0hLbTQ1OVdsaHl3LndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LFxyXG4gICAgICAgICAgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MyxcclxuICAgICAgICAgIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYy1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X1pwQzNnVERfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRixcclxuICAgICAgICAgIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYyAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfWnBDM2czRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIHZpZXRuYW1lc2UgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X1pwQzNnYkRfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LFxyXG4gICAgICAgICAgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGxhdGluLWV4dCAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfWnBDM2dmRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICAgICAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4gKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X1pwQzNnbkRfZy53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNixcclxuICAgICAgICAgIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsXHJcbiAgICAgICAgICBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XHJcbiAgICAgIH1cclxuICAgICAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9iWkYzZ1REX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsXHJcbiAgICAgICAgICBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogY3lyaWxsaWMgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2JaRjNnM0RfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcclxuICAgICAgfVxyXG4gICAgICAvKiB2aWV0bmFtZXNlICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9iWkYzZ2JEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSxcclxuICAgICAgICAgIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbi1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2JaRjNnZkRfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLFxyXG4gICAgICAgICAgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGxhdGluICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9iWkYzZ25EX2cud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsXHJcbiAgICAgICAgICBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLFxyXG4gICAgICAgICAgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGN5cmlsbGljLWV4dCAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfZEpFM2dURF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLFxyXG4gICAgICAgICAgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGN5cmlsbGljICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9kSkUzZzNEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XHJcbiAgICAgIH1cclxuICAgICAgLyogdmlldG5hbWVzZSAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfZEpFM2diRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksXHJcbiAgICAgICAgICBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMUVBMC0xRUY5LCBVKzIwQUI7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4tZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9kSkUzZ2ZEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQixcclxuICAgICAgICAgIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbiAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfZEpFM2duRF9nLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LFxyXG4gICAgICAgICAgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MyxcclxuICAgICAgICAgIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYy1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2M1SDNnVERfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRixcclxuICAgICAgICAgIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcclxuICAgICAgfVxyXG4gICAgICAvKiBjeXJpbGxpYyAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYzVIM2czRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xyXG4gICAgICB9XHJcbiAgICAgIC8qIHZpZXRuYW1lc2UgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2M1SDNnYkRfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LFxyXG4gICAgICAgICAgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGxhdGluLWV4dCAqL1xyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTgvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYzVIM2dmRF91NTAud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsXHJcbiAgICAgICAgICBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogbGF0aW4gKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2M1SDNnbkRfZy53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNixcclxuICAgICAgICAgIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsXHJcbiAgICAgICAgICBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XHJcbiAgICAgIH1cclxuICAgICAgLyogY3lyaWxsaWMtZXh0ICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9lcEczZ1REX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsXHJcbiAgICAgICAgICBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XHJcbiAgICAgIH1cclxuICAgICAgLyogY3lyaWxsaWMgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2VwRzNnM0RfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcclxuICAgICAgfVxyXG4gICAgICAvKiB2aWV0bmFtZXNlICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9lcEczZ2JEX3U1MC53b2ZmMilcclxuICAgICAgICAgIGZvcm1hdCgnd29mZjInKTtcclxuICAgICAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSxcclxuICAgICAgICAgIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSsxRUEwLTFFRjksIFUrMjBBQjtcclxuICAgICAgfVxyXG4gICAgICAvKiBsYXRpbi1leHQgKi9cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE4L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2VwRzNnZkRfdTUwLndvZmYyKVxyXG4gICAgICAgICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLFxyXG4gICAgICAgICAgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGxhdGluICovXHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxOC9KVFVSaklnMV9pNnQ4a0NIS200NV9lcEczZ25EX2cud29mZjIpXHJcbiAgICAgICAgICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsXHJcbiAgICAgICAgICBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLFxyXG4gICAgICAgICAgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfTm9ybWFsaXplclN0eWxlZDtcclxuIiwgImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIExpbmsgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCBBdXRoQXJ0aWNsZSBmcm9tICd+L2F1dGgvX2FydGljbGUnO1xyXG5pbXBvcnQgeyBJQXJ0aWNsZSwgSU1lbWJlciB9IGZyb20gJ34vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBkYXRhIGFzIHVzZUxvYWRlckRhdGFUeXBlO1xyXG4gIGNvbnN0IHsgbWUsIGFydGljbGUgfSA9IHVzZXI7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBgJHthcnRpY2xlLnRpdGxlfWAsXHJcbiAgICBkZXNjcmlwdGlvbjogYCR7YXJ0aWNsZS5jb250ZW50fWAsXHJcbiAgICBpbWFnZTogYCR7YXJ0aWNsZS5waG90b31gXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoZGF0YSkgPT4gQXV0aEFydGljbGUoZGF0YSk7XHJcblxyXG50eXBlIHVzZUxvYWRlckRhdGFUeXBlID0ge1xyXG4gIG1lOiBJTWVtYmVyO1xyXG4gIGFydGljbGU6IElBcnRpY2xlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8dXNlTG9hZGVyRGF0YVR5cGU+KCk7XHJcbiAgY29uc3QgeyBtZSwgYXJ0aWNsZSB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7bWUuaWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHttZT8ucHJvZmlsZT8uZmlyc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnYmVhcmVyJyk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBsb2dvdXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvYH0+cmVncmVzYXI8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHRvPXtgL2xvZ2luYH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIGluaWNpYXIgc2VzaW9uXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnBob3RvfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogJzUwMHB4JyB9fSAvPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhcnRpY2xlLmNvbnRlbnQgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBBUlRJQ0xFUywgR0VUQVJUSUNMRUJZSUQgfSBmcm9tICd+L2Fwb2xsby9xdWVyeS9hcnRpY2xlcyc7XHJcbmltcG9ydCBDT05GSUcgZnJvbSAnfi9jb25maWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVCZWFyZXIgfSBmcm9tICd+L3JvdXRlcy9sb2dpbic7XHJcbmltcG9ydCB7IElRdWVyeUZpbHRlciB9IGZyb20gJ34vdHlwZXMnO1xyXG5pbXBvcnQgeyBHcmFwaFFMTUUgfSBmcm9tICcuL19fYXV0aCc7XHJcblxyXG5jb25zdCBBdXRoQXJ0aWNsZTogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IG1lID0gYXdhaXQgR3JhcGhRTE1FKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGJlYXJlciA9IGF3YWl0IGNyZWF0ZUJlYXJlci5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSA/PyAnJyk7XHJcbiAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KENPTkZJRy5HUkFQSFFMX1VSTCwge1xyXG4gICAgaGVhZGVyczoge31cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBncmFwaFFMQ2xpZW50XHJcbiAgICAucmVxdWVzdDxJUXVlcnlGaWx0ZXI8J2FydGljbGVCeUlkJz4+KEdFVEFSVElDTEVCWUlELCB7XHJcbiAgICAgIGlkOiBwYXJhbXMuaWQsXHJcbiAgICAgIHZpZXdlZDogZmFsc2VcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+IGUucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gIC8vIGlmICghbWUpIHtcclxuICAvLyAgIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJyk7XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWU6IG1lID8/IHt9LFxyXG4gICAgYXJ0aWNsZTogcXVlcnk/LmFydGljbGVCeUlkID8/IHt9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhBcnRpY2xlO1xyXG4iLCAiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBWE9OT01ZQllQUk9KRUNUID0gZ3FsYFxyXG4gIHF1ZXJ5IHRheG9ub21pZXNCeVByb2plY3QoXHJcbiAgICAkc2tpcDogSW50XHJcbiAgICAkdGFrZTogSW50XHJcbiAgICAkZmlsdGVyOiBUYXhvbm9teUZpbHRlcklucHV0XHJcbiAgICAkb3JkZXI6IFtUYXhvbm9teVNvcnRJbnB1dCFdXHJcbiAgKSB7XHJcbiAgICB0YXhvbm9taWVzQnlQcm9qZWN0KFxyXG4gICAgICBza2lwOiAkc2tpcFxyXG4gICAgICB0YWtlOiAkdGFrZVxyXG4gICAgICBmaWx0ZXI6ICRmaWx0ZXJcclxuICAgICAgb3JkZXI6ICRvcmRlclxyXG4gICAgKSB7XHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGVybUdyb3VwXHJcbiAgICAgICAgcGhvdG9cclxuICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgIGlzUHVibGljXHJcbiAgICAgICAgc3ViQ2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB0ZXJtR3JvdXBcclxuICAgICAgICAgIHBob3RvXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICB1cGRhdGVkQXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgIH1cclxuICAgICAgcGFnZUluZm8ge1xyXG4gICAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxDb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEdFVEFSVElDTEVCWUlEID0gZ3FsYFxyXG4gIHF1ZXJ5IGFydGljbGVCeUlkKCRpZDogVVVJRCEsICR2aWV3ZWQ6IEJvb2xlYW4hKSB7XHJcbiAgICBhcnRpY2xlQnlJZChpZDogJGlkLCB2aWV3ZWQ6ICR2aWV3ZWQpIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgcHJvamVjdElkXHJcbiAgICAgIHNlb1RpdGxlXHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgcmVsZWFzZURhdGVcclxuICAgICAgcmVzdW1lXHJcbiAgICAgIHBob3RvXHJcbiAgICAgIHNsdWdcclxuICAgICAgc3RydWN0dXJlZE1hcmtpbmdcclxuICAgICAgaW1hZ2VBbHRcclxuICAgICAgc3RhdHVzXHJcbiAgICAgIHJlbGVhc2VEYXRlXHJcbiAgICAgIHNlb1RpdGxlXHJcbiAgICAgIHNlb0tleXdvcmRzXHJcbiAgICAgIHNlb0Rlc2NyaXB0aW9uXHJcbiAgICAgIHN0cnVjdHVyZWRNYXJraW5nXHJcbiAgICAgIGltYWdlQWx0XHJcbiAgICAgIGF1dGhvclxyXG4gICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICB0ZXJtR3JvdXBcclxuICAgICAgfVxyXG4gICAgICB0YWdzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICB0ZXJtR3JvdXBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBUlRJQ0xFUyA9IGdxbGBcclxuICBxdWVyeSBsaXN0QXJ0aWNsZXMoXHJcbiAgICAkdGFrZTogSW50XHJcbiAgICAkc2tpcDogSW50XHJcbiAgICAkZmlsdGVyOiBBcnRpY2xlRmlsdGVySW5wdXRcclxuICAgICRvcmRlcjogW0FydGljbGVTb3J0SW5wdXQhXVxyXG4gICkge1xyXG4gICAgbGlzdEFydGljbGVzKHRha2U6ICR0YWtlLCBza2lwOiAkc2tpcCwgZmlsdGVyOiAkZmlsdGVyLCBvcmRlcjogJG9yZGVyKSB7XHJcbiAgICAgIHRvdGFsQ291bnRcclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBzbHVnXHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICAgIHBob3RvXHJcbiAgICAgICAgcHJvamVjdElkXHJcbiAgICAgICAgYWN0aXZlXHJcbiAgICAgICAgc2VvVGl0bGVcclxuICAgICAgICBhdXRob3JcclxuICAgICAgICBzZW9EZXNjcmlwdGlvblxyXG4gICAgICAgIHNlb0tleXdvcmRzXHJcbiAgICAgICAgc3RydWN0dXJlZE1hcmtpbmdcclxuICAgICAgICBzdGF0dXNcclxuICAgICAgICB2aWV3c1xyXG4gICAgICAgIHJlbGVhc2VEYXRlXHJcbiAgICAgICAgaW1hZ2VBbHRcclxuICAgICAgICByZXN1bWVcclxuICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB0ZXJtR3JvdXBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFncyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdGVybUdyb3VwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNQcmV2aW91c1BhZ2VcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCAiY29uc3QgQ09ORklHID0ge1xyXG4gIEdSQVBIUUxfVVJMOlxyXG4gICAgcHJvY2Vzcy5lbnYuR1JBUEhRTF9TRVJWRVJfVVJMID8/XHJcbiAgICAnaHR0cHM6Ly9nYXRld2F5LnN0YWdpbmcuaXh1bGFicy5jb20vZ3JhcGhxbC8nLFxyXG4gIEdSQVBIUUxfVVJMX1dTOiAnd3NzOi8vY2hhdC1jcy1zZXJ2aWNlLnN0YWdpbmcuc2l0ZXMua2FsaWFycS5jb20vZ3JhcGhxbCcsXHJcbiAgU0lURTogcHJvY2Vzcy5lbnYuU0lURSA/PyAnLnNpdGVzLmRldmVsb3Aua2FsaWFycS5jb20nLFxyXG4gIEFQUF9FTlY6IHByb2Nlc3MuZW52LkFQUF9FTlYgPz8gJ2RldmVsb3AnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XHJcbiIsICJpbXBvcnQge1xyXG4gIHJlZGlyZWN0LFxyXG4gIEZvcm0sXHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgTG9hZGVyRnVuY3Rpb24sXHJcbiAgdXNlVHJhbnNpdGlvbixcclxuICBjcmVhdGVDb29raWVcclxufSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSAnY29va2llJztcclxuaW1wb3J0IENPTkZJRyBmcm9tICd+L2NvbmZpZyc7XHJcbmltcG9ydCB7IExPR0lOIH0gZnJvbSAnfi9hcG9sbG8vbXV0YXRpb24vbG9naW4nO1xyXG5pbXBvcnQgQXV0aExvZ2luIGZyb20gJ34vYXV0aC9fbG9naW4nO1xyXG5pbXBvcnQgeyBJTXV0YXRpb25GaWx0ZXIgfSBmcm9tICd+L3R5cGVzJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZChtb3Rpb24uaW5wdXQpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChtb3Rpb24uYnV0dG9uKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYTU4YjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSB7XHJcbiAgd2hpbGVUYXA6IHsgc2NhbGU6IDAuOTgsIG9wYWNpdHk6IDAuOCB9XHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRpb25CdXR0b24gPSB7XHJcbiAgd2hpbGVIb3ZlcjogeyBzY2FsZTogMS4wMiwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4zIH0gfSxcclxuICB3aGlsZVRhcDogeyBzY2FsZTogMC45OCwgb3BhY2l0eTogMC44IH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKGRhdGEpID0+IEF1dGhMb2dpbihkYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCZWFyZXIgPSBjcmVhdGVDb29raWUoJ2JlYXJlcicsIHtcclxuICBtYXhBZ2U6IDYwNF84MDBcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jIChEYXRhRnVuY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHJlcXVlc3QgfSA9IERhdGFGdW5jdGlvbjtcclxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuXHJcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XHJcblxyXG4gIGNvbnN0IGdldENvb2tpZSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpO1xyXG4gIGNvbnN0IGJlYXJlciA9IGNvb2tpZS5wYXJzZShnZXRDb29raWUgfHwgJycpLmJlYXJlcjtcclxuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoQ09ORklHLkdSQVBIUUxfVVJMLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJ9YFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBxdWVyeSA9IGF3YWl0IGdyYXBoUUxDbGllbnRcclxuICAgIC5yZXF1ZXN0PElNdXRhdGlvbkZpbHRlcjwnbG9naW5NZW1iZXInPj4oTE9HSU4sIHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBlbWFpbDogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgaWYgKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCB7IGxvZ2luTWVtYmVyIH0gPSBxdWVyeTtcclxuICAgIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBjcmVhdGVCZWFyZXIuc2VyaWFsaXplKGxvZ2luTWVtYmVyLmFjY2Vzc1Rva2VuKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJyk7XHJcbn07XHJcblxyXG5jb25zdCBQYWdlTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHsuLi5BbmltYXRpb259XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHsuLi5BbmltYXRpb259XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgey4uLkFuaW1hdGlvbkJ1dHRvbn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyEhdHJhbnNpdGlvbi5zdWJtaXNzaW9ufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnaWRsZScgPyAnTG9naW4nIDogJ0xvZ2dpbmcgaW4uLi4nfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2dpbjtcclxuIiwgImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpbk1lbWJlcigkaW5wdXQ6IExvZ2luTWVtYmVySW5wdXQhKSB7XHJcbiAgICBsb2dpbk1lbWJlcihpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGFjY2Vzc1Rva2VuXHJcbiAgICAgIG1lbWJlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgcmVjb3ZlclRva2VuXHJcbiAgICAgICAgcmVjb3ZlclJlZ2lzdGVyXHJcbiAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICBmaXJzdFRpbWVcclxuICAgICAgICBsb2dpbkNvdW50XHJcbiAgICAgICAgbWVtYmVyUm9sZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHJvbGUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNvZGVOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb2xlSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtYmVyUHJvamVjdHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHByb2plY3RJZFxyXG4gICAgICAgICAgcHJvamVjdCB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgbG9nb1xyXG4gICAgICAgICAgICB0YWdMaW5lXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZW1iZXJDb21wYW5pZXMge1xyXG4gICAgICAgICAgY29tcGFueUlkXHJcbiAgICAgICAgICBjb21wYW55IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9maWxlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgcGhvdG9cclxuICAgICAgICAgIGNvdW50cnlJZFxyXG4gICAgICAgICAgY291bnRyeSB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVNFVFBBU1NXT1JEID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNlbmRSZXNldFBhc3N3b3JkTGluaygkaW5wdXQ6IFNlbmRSZXNldFBhc3N3b3JkTGlua0lucHV0KSB7XHJcbiAgICBzZW5kUmVzZXRQYXNzd29yZExpbmsoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBlbWFpbF9zdGF0dXNcclxuICAgICAgc3VjY2Vzc1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHsgR3JhcGhRTE1FIH0gZnJvbSAnLi9fX2F1dGgnO1xyXG5cclxuY29uc3QgZ2V0RGVzdGluYXRpb24gPSAoZGVzdGluYXRpb24/OiBzdHJpbmcpID0+IHtcclxuICBzd2l0Y2ggKGRlc3RpbmF0aW9uKSB7XHJcbiAgICBjYXNlICdvd25lcic6XHJcbiAgICAgIHJldHVybiAnLyc7XHJcbiAgICBjYXNlICdzdXBlcmFkbWluJzpcclxuICAgICAgcmV0dXJuICcvJztcclxuICAgIGNhc2UgJ3BhcnRuZXInOlxyXG4gICAgICByZXR1cm4gJy8nO1xyXG4gICAgY2FzZSAncGFydG5lcnVzZXInOlxyXG4gICAgICByZXR1cm4gJy8nO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcvJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBBdXRoTG9naW46IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgbWUgPSBhd2FpdCBHcmFwaFFMTUUocmVxdWVzdCk7XHJcbiAgaWYgKG1lKSB7XHJcbiAgICBjb25zdCBsZXZlbCA9IG1lLm1lbWJlclJvbGVzPy5bMF0/LnJvbGUuY29kZU5hbWUucmVwbGFjZSgvJ18nL2csICcnKTtcclxuICAgIHJldHVybiByZWRpcmVjdChnZXREZXN0aW5hdGlvbihsZXZlbCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aExvZ2luO1xyXG4iLCAiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBDT05GSUcgZnJvbSAnfi9jb25maWcnO1xyXG5pbXBvcnQgeyBVU0VSIH0gZnJvbSAnfi9hcG9sbG8vcXVlcnkvdXNlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUJlYXJlciB9IGZyb20gJ34vcm91dGVzL2xvZ2luJztcclxuaW1wb3J0IHsgSVF1ZXJ5RmlsdGVyIH0gZnJvbSAnfi90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhcGhRTE1FID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcclxuICBjb25zdCBiZWFyZXIgPSBhd2FpdCBjcmVhdGVCZWFyZXIucGFyc2UocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykgPz8gJycpO1xyXG5cclxuICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoQ09ORklHLkdSQVBIUUxfVVJMLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJ9YFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBxdWVyeSA9IGF3YWl0IGdyYXBoUUxDbGllbnRcclxuICAgIC5yZXF1ZXN0PElRdWVyeUZpbHRlcjwnbWUnPj4oVVNFUilcclxuICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuICByZXR1cm4gcXVlcnk/Lm1lID8/IG51bGw7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUiA9IGdxbGBcclxuICBxdWVyeSBtZSB7XHJcbiAgICBtZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICB1cGRhdGVkQXRcclxuICAgICAgZW1haWxcclxuICAgICAgcmVjb3ZlclRva2VuXHJcbiAgICAgIHJlY292ZXJSZWdpc3RlclxyXG4gICAgICBpc0FjdGl2ZVxyXG4gICAgICBmaXJzdFRpbWVcclxuICAgICAgbG9naW5Db3VudFxyXG4gICAgICB0YXhvbm9taWVzIHtcclxuICAgICAgICBtZW1iZXJJZFxyXG4gICAgICAgIHRheG9ub215SWRcclxuICAgICAgfVxyXG4gICAgICBncm91cHMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgZ3JvdXBUYXhvbm9taWVzIHtcclxuICAgICAgICAgIHRheG9ub215IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtZW1iZXJSb2xlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICByb2xlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjb2RlTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByb2xlSWRcclxuICAgICAgfVxyXG4gICAgICBtZW1iZXJQcm9qZWN0cyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICBwcm9qZWN0IHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBsb2dvXHJcbiAgICAgICAgICB0YWdMaW5lXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtYmVyUHJvamVjdFJvbGVQcm9qZWN0IHtcclxuICAgICAgICAgIHByb2plY3RSb2xlSWRcclxuICAgICAgICAgIHByb2plY3RSb2xlIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjb2RlTmFtZVxyXG4gICAgICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1lbWJlckNvbXBhbmllcyB7XHJcbiAgICAgICAgY29tcGFueUlkXHJcbiAgICAgICAgY29tcGFueSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwcm9maWxlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgcGhvbmVcclxuICAgICAgICBwaG90b1xyXG4gICAgICAgIGNvdW50cnlJZFxyXG4gICAgICAgIGNvdW50cnkge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNRUJZSUQgPSBncWxgXHJcbiAgcXVlcnkgbWVCeUlkKCRpZDogVVVJRCEpIHtcclxuICAgIG1lQnlJZChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICB1cGRhdGVkQXRcclxuICAgICAgZW1haWxcclxuICAgICAgcmVjb3ZlclRva2VuXHJcbiAgICAgIHJlY292ZXJSZWdpc3RlclxyXG4gICAgICBpc0FjdGl2ZVxyXG4gICAgICBmaXJzdFRpbWVcclxuICAgICAgbG9naW5Db3VudFxyXG4gICAgICB0YXhvbm9taWVzIHtcclxuICAgICAgICBtZW1iZXJJZFxyXG4gICAgICAgIHRheG9ub215SWRcclxuICAgICAgfVxyXG4gICAgICBncm91cHMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgZ3JvdXBUYXhvbm9taWVzIHtcclxuICAgICAgICAgIHRheG9ub215IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtZW1iZXJSb2xlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICByb2xlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjb2RlTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByb2xlSWRcclxuICAgICAgfVxyXG4gICAgICBtZW1iZXJQcm9qZWN0cyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICBwcm9qZWN0IHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBsb2dvXHJcbiAgICAgICAgICB0YWdMaW5lXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtYmVyUHJvamVjdFJvbGVQcm9qZWN0IHtcclxuICAgICAgICAgIHByb2plY3RSb2xlSWRcclxuICAgICAgICAgIHByb2plY3RSb2xlIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjb2RlTmFtZVxyXG4gICAgICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1lbWJlckNvbXBhbmllcyB7XHJcbiAgICAgICAgY29tcGFueUlkXHJcbiAgICAgICAgY29tcGFueSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwcm9maWxlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgcGhvbmVcclxuICAgICAgICBwaG90b1xyXG4gICAgICAgIGNvdW50cnlJZFxyXG4gICAgICAgIGNvdW50cnkge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUVVNFUiA9IGdxbGBcclxuICBxdWVyeSBsaXN0VXNlcigkc2tpcDogSW50LCAkdGFrZTogSW50LCAkZmlsdGVyOiBNZW1iZXJGaWx0ZXJJbnB1dCkge1xyXG4gICAgbGlzdFVzZXJzKHNraXA6ICRza2lwLCB0YWtlOiAkdGFrZSwgZmlsdGVyOiAkZmlsdGVyKSB7XHJcbiAgICAgIHBhZ2VJbmZvIHtcclxuICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgICB9XHJcbiAgICAgIHRvdGFsQ291bnRcclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBwcm9maWxlIHtcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIHBob3RvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbWJlclByb2plY3RzIHtcclxuICAgICAgICAgIG1lbWJlclByb2plY3RSb2xlUHJvamVjdCB7XHJcbiAgICAgICAgICAgIHByb2plY3RSb2xlIHtcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVtYmVyUm9sZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHJvbGUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNvZGVOYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb2xlSWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUVVNFUkJZSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0VXNlckJ5SWQoJGlkOiBJRCEpIHtcclxuICAgIGdldFVzZXJCeUlkKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgdXNlcmlucHJvZmlsZSB7XHJcbiAgICAgICAgcGljdHVyZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCAiaW1wb3J0IHtcclxuICByZWRpcmVjdCxcclxuICBGb3JtLFxyXG4gIEFjdGlvbkZ1bmN0aW9uLFxyXG4gIExvYWRlckZ1bmN0aW9uLFxyXG4gIHVzZVRyYW5zaXRpb24sXHJcbiAgY3JlYXRlQ29va2llXHJcbn0gZnJvbSAncmVtaXgnO1xyXG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCBDT05GSUcgZnJvbSAnfi9jb25maWcnO1xyXG5pbXBvcnQgeyBMT0dJTiB9IGZyb20gJ34vYXBvbGxvL211dGF0aW9uL2xvZ2luJztcclxuaW1wb3J0IEF1dGhMb2dpbiBmcm9tICd+L2F1dGgvX2xvZ2luJztcclxuaW1wb3J0IHsgSU11dGF0aW9uRmlsdGVyIH0gZnJvbSAnfi90eXBlcyc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQobW90aW9uLmlucHV0KWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQobW90aW9uLmJ1dHRvbilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGE1OGI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ge1xyXG4gIHdoaWxlVGFwOiB7IHNjYWxlOiAwLjk4LCBvcGFjaXR5OiAwLjggfVxyXG59O1xyXG5cclxuY29uc3QgQW5pbWF0aW9uQnV0dG9uID0ge1xyXG4gIHdoaWxlSG92ZXI6IHsgc2NhbGU6IDEuMDIsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9IH0sXHJcbiAgd2hpbGVUYXA6IHsgc2NhbGU6IDAuOTgsIG9wYWNpdHk6IDAuOCB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jIChkYXRhKSA9PiBBdXRoTG9naW4oZGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQmVhcmVyID0gY3JlYXRlQ29va2llKCdiZWFyZXInLCB7XHJcbiAgbWF4QWdlOiA2MDRfODAwXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoRGF0YUZ1bmN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyByZXF1ZXN0IH0gPSBEYXRhRnVuY3Rpb247XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpO1xyXG5cclxuICBjb25zdCBnZXRDb29raWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKTtcclxuICBjb25zdCBiZWFyZXIgPSBjb29raWUucGFyc2UoZ2V0Q29va2llIHx8ICcnKS5iZWFyZXI7XHJcbiAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KENPTkZJRy5HUkFQSFFMX1VSTCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YmVhcmVyfWBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBncmFwaFFMQ2xpZW50XHJcbiAgICAucmVxdWVzdDxJTXV0YXRpb25GaWx0ZXI8J2xvZ2luTWVtYmVyJz4+KExPR0lOLCB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgZW1haWw6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gIGlmIChxdWVyeSkge1xyXG4gICAgY29uc3QgeyBsb2dpbk1lbWJlciB9ID0gcXVlcnk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoJy9sb2dpbicsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdTZXQtQ29va2llJzogYXdhaXQgY3JlYXRlQmVhcmVyLnNlcmlhbGl6ZShsb2dpbk1lbWJlci5hY2Nlc3NUb2tlbilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVkaXJlY3QoJy9sb2dpbicpO1xyXG59O1xyXG5cclxuY29uc3QgUGFnZUxvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB7Li4uQW5pbWF0aW9ufVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB7Li4uQW5pbWF0aW9ufVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHsuLi5BbmltYXRpb25CdXR0b259XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXshIXRyYW5zaXRpb24uc3VibWlzc2lvbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gJ2lkbGUnID8gJ0xvZ2luJyA6ICdMb2dnaW5nIGluLi4uJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9naW47XHJcbiIsICJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSAnY29va2llJztcbmltcG9ydCB7XG4gIHVzZUxvYWRlckRhdGEsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIEFjdGlvbkZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgRm9ybSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgTGlua1xufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgQXV0aEFkbWluIGZyb20gJ34vYXV0aC9fYWRtaW4nO1xuaW1wb3J0IENPTkZJRyBmcm9tICd+L2NvbmZpZyc7XG5pbXBvcnQgeyBDUkVBVEVBUlRJQ0xFUyB9IGZyb20gJ34vYXBvbGxvL211dGF0aW9uL2FydGljbGVzJztcbmltcG9ydCB7XG4gIElBcnRpY2xlLFxuICBJQ3JlYXRlQXJ0aWNsZUlucHV0LFxuICBJTWVtYmVyLFxuICBJTXV0YXRpb25GaWx0ZXJcbn0gZnJvbSAnfi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGRhdGEgYXMgdXNlTG9hZGVyRGF0YVR5cGU7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZXI7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGAke21lPy5wcm9maWxlPy5maXJzdE5hbWV9ICR7bWU/LnByb2ZpbGU/Lmxhc3ROYW1lfWAsXG4gICAgZGVzY3JpcHRpb246IGAke21lPy5wcm9maWxlPy5maXJzdE5hbWV9ICR7bWU/LnByb2ZpbGU/Lmxhc3ROYW1lfWAsXG4gICAgaW1hZ2U6IGAke21lPy5wcm9maWxlPy5waG90b31gXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoZGF0YSkgPT4gQXV0aEFkbWluKGRhdGEpO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jIChEYXRhRnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyByZXF1ZXN0IH0gPSBEYXRhRnVuY3Rpb247XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xuICBjb25zdCBjb250ZW50ID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gIGNvbnN0IGdldENvb2tpZSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpO1xuICBjb25zdCBiZWFyZXIgPSBjb29raWUucGFyc2UoZ2V0Q29va2llIHx8ICcnKS5iZWFyZXI7XG4gIGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudChDT05GSUcuR1JBUEhRTF9VUkwsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YmVhcmVyfWBcbiAgICB9XG4gIH0pO1xuXG4gIGF3YWl0IGdyYXBoUUxDbGllbnRcbiAgICAucmVxdWVzdDxJTXV0YXRpb25GaWx0ZXI8J2xvZ2luTWVtYmVyJz4+KENSRUFURUFSVElDTEVTLCB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBwcm9qZWN0SWQ6ICdiNjM0MTQyNS03YzdiLTQ1YmQtOTM5YS1kYzE1ZGIxNjhkNjInLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgcGhvdG86ICcnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgc2x1ZzogJycsXG4gICAgICAgIHNlb1RpdGxlOiAnJyxcbiAgICAgICAgc2VvRGVzY3JpcHRpb246ICcnLFxuICAgICAgICBzZW9LZXl3b3JkczogJycsXG4gICAgICAgIHN0cnVjdHVyZWRNYXJraW5nOiAnJyxcbiAgICAgICAgc3RhdHVzOiAnUFVCTElTSEVEJyxcbiAgICAgICAgcmVsZWFzZURhdGU6ICcnLFxuICAgICAgICBpbWFnZUFsdDogJydcbiAgICAgIH0gYXMgSUNyZWF0ZUFydGljbGVJbnB1dFxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IG51bGwpO1xuXG4gIHJldHVybiByZWRpcmVjdCgnL2xvZ2luJyk7XG59O1xuXG50eXBlIHVzZUxvYWRlckRhdGFUeXBlID0ge1xuICBtZTogSU1lbWJlcjtcbiAgYXJ0aWNsZXM6IElBcnRpY2xlW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8dXNlTG9hZGVyRGF0YVR5cGU+KCk7XG4gIGNvbnN0IHsgbWUsIGFydGljbGVzIH0gPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsIGxpbmVIZWlnaHQ6ICcxLjQnIH19PlxuICAgICAge21lLmlkID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHttZT8ucHJvZmlsZT8uZmlyc3ROYW1lfTwvaDE+XG4gICAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KG1lKX08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZSgnYmVhcmVyJyk7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgbG9nb3V0XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkFncmVnYXIgYXJ0aWN1bG88L2gxPlxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdHVsb1wiIG5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29udGVuaWRvXCIgbmFtZT1cImNvbnRlbnRcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17ISF0cmFuc2l0aW9uLnN1Ym1pc3Npb259PlxuICAgICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnaWRsZSdcbiAgICAgICAgICAgICAgICAgID8gJ0NyZWFyIEFydGljdWxvJ1xuICAgICAgICAgICAgICAgICAgOiAnQ3JlYW5kbyBBcnRpY3Vsby4uLid9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e2AvbG9naW5gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBpbmljaWFyIHNlc2lvblxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgICAgIGdhcDogJzUwcHgnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHthcnRpY2xlcz8ubWFwKChhcnRpY2xlKSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXtgL2FydGljbGUvJHthcnRpY2xlLmlkfWB9XG4gICAgICAgICAgICBrZXk9e2FydGljbGUuaWR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzMwMHB4J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLnBob3RvfSBhbHQ9XCJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXJ0aWNsZS5jb250ZW50IH19IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XHJcbmltcG9ydCB7IEFSVElDTEVTIH0gZnJvbSAnfi9hcG9sbG8vcXVlcnkvYXJ0aWNsZXMnO1xyXG5pbXBvcnQgQ09ORklHIGZyb20gJ34vY29uZmlnJztcclxuaW1wb3J0IHsgY3JlYXRlQmVhcmVyIH0gZnJvbSAnfi9yb3V0ZXMvbG9naW4nO1xyXG5pbXBvcnQgeyBJUXVlcnlGaWx0ZXIgfSBmcm9tICd+L3R5cGVzJztcclxuaW1wb3J0IHsgR3JhcGhRTE1FIH0gZnJvbSAnLi9fX2F1dGgnO1xyXG5cclxuY29uc3QgQXV0aEFkbWluOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IG1lID0gYXdhaXQgR3JhcGhRTE1FKHJlcXVlc3QpO1xyXG4gIGNvbnN0IGJlYXJlciA9IGF3YWl0IGNyZWF0ZUJlYXJlci5wYXJzZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSA/PyAnJyk7XHJcbiAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KENPTkZJRy5HUkFQSFFMX1VSTCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YmVhcmVyfWBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBncmFwaFFMQ2xpZW50XHJcbiAgICAucmVxdWVzdDxJUXVlcnlGaWx0ZXI8J2xpc3RBcnRpY2xlcyc+PihBUlRJQ0xFUywge1xyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICBwcm9qZWN0SWQ6IHtcclxuICAgICAgICAgIGVxOiAnYjYzNDE0MjUtN2M3Yi00NWJkLTkzOWEtZGMxNWRiMTY4ZDYyJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXI6IHtcclxuICAgICAgICBjcmVhdGVkQXQ6ICdERVNDJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiBlLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAvLyBpZiAoIW1lKSB7XHJcbiAgLy8gICByZXR1cm4gcmVkaXJlY3QoJy9sb2dpbicpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1lOiBtZSA/PyB7fSxcclxuICAgIGFydGljbGVzOiBxdWVyeT8ubGlzdEFydGljbGVzPy5pdGVtcyA/PyBbXVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQWRtaW47XHJcbiIsICJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFQVJUSUNMRVMgPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlQXJ0aWNsZSgkaW5wdXQ6IENyZWF0ZUFydGljbGVJbnB1dCEpIHtcclxuICAgIGNyZWF0ZUFydGljbGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBhcnRpY2xlIHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICByZWxlYXNlRGF0ZVxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFQVJUSUNMRVMgPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlQXJ0aWNsZSgkaW5wdXQ6IFVwZGF0ZUFydGljbGVJbnB1dCEpIHtcclxuICAgIHVwZGF0ZUFydGljbGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBhcnRpY2xlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgcmVsZWFzZURhdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERFTEVURUFSVElDTEUgPSBncWxgXHJcbiAgbXV0YXRpb24gZGVsZXRlQXJ0aWNsZSgkaW5wdXQ6IERlbGV0ZUFydGljbGVJbnB1dCEpIHtcclxuICAgIGRlbGV0ZUFydGljbGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBhcnRpY2xlIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFU1RBVFVTQVJUSUNMRVMgPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU3RhdHVzQXJ0aWNsZSgkaW5wdXQ6IFVwZGF0ZVN0YXR1c0FydGljbGVJbnB1dCEpIHtcclxuICAgIHVwZGF0ZVN0YXR1c0FydGljbGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBhcnRpY2xlIHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURVRBWE9OT01ZID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVRheG9ub215KCRpbnB1dDogQ3JlYXRlVGF4b25vbXlJbnB1dCEpIHtcclxuICAgIGNyZWF0ZVRheG9ub215KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdGF4b25vbXkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICB0ZXJtR3JvdXBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERFTEVURVRBWE9OT01ZID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlbGV0ZVRheG9ub215KCRpbnB1dDogRGVsZXRlVGF4b25vbXlJbnB1dCEpIHtcclxuICAgIGRlbGV0ZVRheG9ub215KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdGF4b25vbXkge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFVQREFURVRBWE9OT01ZID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVRheG9ub215KCRpbnB1dDogVXBkYXRlVGF4b25vbXlJbnB1dCEpIHtcclxuICAgIHVwZGF0ZVRheG9ub215KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdGF4b25vbXkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWdHVSxrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFNeEMsSUFBTyxxQkFBUTs7O0FDL0dmO0FBQUEsb0JBQTRCO0FBRzVCLElBQU0scUJBQXdCLE1BQzVCLG9DQUFDLHNCQUFEO0FBQUEsRUFDRSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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
