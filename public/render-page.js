(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.keys"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("lodash/chunk"), require("lodash/defaults"), require("lodash/findIndex"), require("lodash/mapValues"), require("lodash/omit"), require("lodash/range"), require("lodash/sortBy"), require("lodash/transform"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.keys", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "lodash/chunk", "lodash/defaults", "lodash/findIndex", "lodash/mapValues", "lodash/omit", "lodash/range", "lodash/sortBy", "lodash/transform", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.keys"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("lodash/chunk"), require("lodash/defaults"), require("lodash/findIndex"), require("lodash/mapValues"), require("lodash/omit"), require("lodash/range"), require("lodash/sortBy"), require("lodash/transform"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.keys"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["lodash/chunk"], root["lodash/defaults"], root["lodash/findIndex"], root["lodash/mapValues"], root["lodash/omit"], root["lodash/range"], root["lodash/sortBy"], root["lodash/transform"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_keys__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_chunk__, __WEBPACK_EXTERNAL_MODULE_lodash_defaults__, __WEBPACK_EXTERNAL_MODULE_lodash_findIndex__, __WEBPACK_EXTERNAL_MODULE_lodash_mapValues__, __WEBPACK_EXTERNAL_MODULE_lodash_omit__, __WEBPACK_EXTERNAL_MODULE_lodash_range__, __WEBPACK_EXTERNAL_MODULE_lodash_sortBy__, __WEBPACK_EXTERNAL_MODULE_lodash_transform__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {object} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {string} $0.pathname Path of page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/Layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {object} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-templates-about-page-js","jsonName":"about-f34","path":"/about/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel-94c","path":"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex-19c","path":"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week-850","path":"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-2019-01-20-new-blog-from-xins-localhost-247","path":"/blog/2019-01-20-new-blog-from-xins-localhost/"},{"componentChunkName":"component---src-templates-blog-post-js","jsonName":"blog-2019-01-21-chain-build-2df","path":"/blog/2019-01-21-chain-build/"},{"componentChunkName":"component---src-pages-calendar-index-js","jsonName":"calendar-f13","path":"/calendar/"},{"componentChunkName":"component---src-pages-calendar-example-control-slot-js","jsonName":"calendar-example-control-slot-4ca","path":"/calendar/ExampleControlSlot/"},{"componentChunkName":"component---src-pages-calendar-events-js","jsonName":"calendar-events-451","path":"/calendar/events/"},{"componentChunkName":"component---src-pages-calendar-selectable-js","jsonName":"calendar-selectable-a21","path":"/calendar/selectable/"},{"componentChunkName":"component---src-pages-contact-index-js","jsonName":"contact-26a","path":"/contact/"},{"componentChunkName":"component---src-pages-contact-examples-js","jsonName":"contact-examples-142","path":"/contact/examples/"},{"componentChunkName":"component---src-pages-contact-file-upload-js","jsonName":"contact-file-upload-b1a","path":"/contact/file-upload/"},{"componentChunkName":"component---src-pages-contact-thanks-js","jsonName":"contact-thanks-367","path":"/contact/thanks/"},{"componentChunkName":"component---src-templates-product-page-js","jsonName":"products-6ef","path":"/products/"},{"componentChunkName":"component---src-pages-tags-index-js","jsonName":"tags-275","path":"/tags/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-brewing-d36","path":"/tags/brewing/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-chemex-13a","path":"/tags/chemex/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-flavor-980","path":"/tags/flavor/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-green-beans-dce","path":"/tags/green-beans/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-jamaica-ed8","path":"/tags/jamaica/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-tasting-3e1","path":"/tags/tasting/"},{"componentChunkName":"component---src-templates-tags-js","jsonName":"tags-test-7c5","path":"/tags/test/"}],"dataPaths":{"404-22d":"44/path---404-22-d-bce-NZuapzHg3X9TaN1iIixfv1W23E","404-html-516":"164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E","about-f34":"844/path---about-f-34-4c2-h1Krs1nABqPgCYQJS2V9gPPq3qA","blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel-94c":"553/path---blog-2016-12-17-making-sense-of-the-scaas-new-flavor-wheel-94-c-8dd-hCk4CnqHqpCBXHbsWXeihFQY","blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex-19c":"74/path---blog-2017-01-04-a-beginners-guide-to-brewing-with-chemex-19-c-fb5-lrtERNpkV32RGN0eBfJkKyxawg","blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week-850":"375/path---blog-2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week-850-fd3-rlR1S43kOGSCqtjDQR2rsRweBFE","blog-2019-01-20-new-blog-from-xins-localhost-247":"309/path---blog-2019-01-20-new-blog-from-xins-localhost-247-491-ZveAISfKr3sWUC0Qv7poiC8L3s","blog-2019-01-21-chain-build-2df":"897/path---blog-2019-01-21-chain-build-2-df-94a-jTFPj0eu8lQQM4HPFwTqF6CC78","calendar-events-451":"480/path---calendar-events-451-e98-NZuapzHg3X9TaN1iIixfv1W23E","calendar-example-control-slot-4ca":"767/path---calendar-example-control-slot-4-ca-c10-NZuapzHg3X9TaN1iIixfv1W23E","calendar-f13":"337/path---calendar-f-13-8fd-NZuapzHg3X9TaN1iIixfv1W23E","calendar-selectable-a21":"963/path---calendar-selectable-a-21-fc2-NZuapzHg3X9TaN1iIixfv1W23E","calendar-selectable-cb4":"602/path---calendar-selectable-cb-4-3d9-NZuapzHg3X9TaN1iIixfv1W23E","contact-26a":"686/path---contact-26-a-cd9-NZuapzHg3X9TaN1iIixfv1W23E","contact-examples-142":"431/path---contact-examples-142-f5a-NZuapzHg3X9TaN1iIixfv1W23E","contact-file-upload-b1a":"275/path---contact-file-upload-b-1-a-f7d-NZuapzHg3X9TaN1iIixfv1W23E","contact-thanks-367":"525/path---contact-thanks-367-a2f-NZuapzHg3X9TaN1iIixfv1W23E","dev-404-page-5f9":"920/path---dev-404-page-5-f-9-fab-NZuapzHg3X9TaN1iIixfv1W23E","index":"852/path---index-6a9-GAAP2P4dkwPHSnkmv4JayFH3gc","products-6ef":"401/path---products-6-ef-42b-BsGORgozZ6lNbJUVLfibDDnbuI","sq--src-components-layout-js":1529889140,"tags-275":"54/path---tags-275-fc0-IRoxBpED4Fg4mA6ujExcA9Y40ek","tags-brewing-d36":"562/path---tags-brewing-d-36-21b-2sGR0i5ZWWeFUFWok0cV9UuvlO8","tags-chemex-13a":"805/path---tags-chemex-13-a-177-60mleDpA5wNDVK0rPUsvpwhcl4","tags-flavor-980":"136/path---tags-flavor-980-19d-11xIA45iboOue9splzo0uc0NY5o","tags-green-beans-dce":"146/path---tags-green-beans-dce-340-AdP839E5Dg9QKXfCdJYDDbwriCo","tags-jamaica-ed8":"132/path---tags-jamaica-ed-8-e41-Tk8fQOXJowlz2POfyMnFEpGpb1o","tags-tasting-3e1":"214/path---tags-tasting-3-e-1-687-7G62MZeMxmmVmi2XOyk3sPNPI","tags-test-7c5":"825/path---tags-test-7-c-5-3e3-RymmY16d5fBHldKj3fg3cfoGMzc"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", this.props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/parse-path.js":
/*!******************************!*\
  !*** ./.cache/parse-path.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__);













var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = "../public/" + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(process.cwd() + "/public/static/d/" + dataPaths[page.jsonName] + ".json"));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-templates-about-page-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/about-page.js */ "./src/templates/about-page.js"))),
  "component---src-templates-product-page-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/product-page.js */ "./src/templates/product-page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/blog-post.js */ "./src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/tags.js */ "./src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-calendar-events-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/calendar/events.js */ "./src/pages/calendar/events.js"))),
  "component---src-pages-calendar-example-control-slot-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/calendar/ExampleControlSlot.js */ "./src/pages/calendar/ExampleControlSlot.js"))),
  "component---src-pages-calendar-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/calendar/index.js */ "./src/pages/calendar/index.js"))),
  "component---src-pages-calendar-selectable-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/calendar/selectable.js */ "./src/pages/calendar/selectable.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/examples.js */ "./src/pages/contact/examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/file-upload.js */ "./src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/index.js */ "./src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact/thanks.js */ "./src/pages/contact/thanks.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/tags/index.js */ "./src/pages/tags/index.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/date-arithmetic/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-arithmetic/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var MILI    = 'milliseconds'
  , SECONDS = 'seconds'
  , MINUTES = 'minutes'
  , HOURS   = 'hours'
  , DAY     = 'day'
  , WEEK    = 'week'
  , MONTH   = 'month'
  , YEAR    = 'year'
  , DECADE  = 'decade'
  , CENTURY = 'century';

var dates = module.exports = {

  add: function(date, num, unit) {
    date = new Date(date)

    switch (unit){
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case YEAR:
        return dates[unit](date, dates[unit](date) + num)
      case DAY:
        return dates.date(date, dates.date(date) + num)
      case WEEK:
        return dates.date(date, dates.date(date) + (7 * num)) 
      case MONTH:
        return monthMath(date, num)
      case DECADE:
        return dates.year(date, dates.year(date) + (num * 10))
      case CENTURY:
        return dates.year(date, dates.year(date) + (num * 100))
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  },

  subtract: function(date, num, unit) {
    return dates.add(date, -num, unit)
  },

  startOf: function(date, unit, firstOfWeek) {
    date = new Date(date)

    switch (unit) {
      case 'century':
      case 'decade':
      case 'year':
          date = dates.month(date, 0);
      case 'month':
          date = dates.date(date, 1);
      case 'week':
      case 'day':
          date = dates.hours(date, 0);
      case 'hours':
          date = dates.minutes(date, 0);
      case 'minutes':
          date = dates.seconds(date, 0);
      case 'seconds':
          date = dates.milliseconds(date, 0);
    }

    if (unit === DECADE) 
      date = dates.subtract(date, dates.year(date) % 10, 'year')
    
    if (unit === CENTURY) 
      date = dates.subtract(date, dates.year(date) % 100, 'year')

    if (unit === WEEK) 
      date = dates.weekday(date, 0, firstOfWeek);

    return date
  },


  endOf: function(date, unit, firstOfWeek){
    date = new Date(date)
    date = dates.startOf(date, unit, firstOfWeek)
    date = dates.add(date, 1, unit)
    date = dates.subtract(date, 1, MILI)
    return date
  },

  eq:  createComparer(function(a, b){ return a === b }),
  neq: createComparer(function(a, b){ return a !== b }),
  gt:  createComparer(function(a, b){ return a > b }),
  gte: createComparer(function(a, b){ return a >= b }),
  lt:  createComparer(function(a, b){ return a < b }),
  lte: createComparer(function(a, b){ return a <= b }),

  min: function(){
    return new Date(Math.min.apply(Math, arguments))
  },

  max: function(){
    return new Date(Math.max.apply(Math, arguments))
  },
  
  inRange: function(day, min, max, unit){
    unit = unit || 'day'

    return (!min || dates.gte(day, min, unit))
        && (!max || dates.lte(day, max, unit))
  },

  milliseconds:   createAccessor('Milliseconds'),
  seconds:        createAccessor('Seconds'),
  minutes:        createAccessor('Minutes'),
  hours:          createAccessor('Hours'),
  day:            createAccessor('Day'),
  date:           createAccessor('Date'),
  month:          createAccessor('Month'),
  year:           createAccessor('FullYear'),

  decade: function (date, val) {
    return val === undefined 
      ? dates.year(dates.startOf(date, DECADE))
      : dates.add(date, val + 10, YEAR);
  },

  century: function (date, val) {
    return val === undefined 
      ? dates.year(dates.startOf(date, CENTURY))
      : dates.add(date, val + 100, YEAR);
  },

  weekday: function (date, val, firstDay) {
      var weekday = (dates.day(date) + 7 - (firstDay || 0) ) % 7;

      return val === undefined 
        ? weekday 
        : dates.add(date, val - weekday, DAY);
  },

  diff: function (date1, date2, unit, asFloat) {
    var dividend, divisor, result;

    switch (unit) {
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case DAY:
      case WEEK:
        dividend = date2.getTime() - date1.getTime(); break;
      case MONTH:
      case YEAR:
      case DECADE:
      case CENTURY:
        dividend = (dates.year(date2) - dates.year(date1)) * 12 + dates.month(date2) - dates.month(date1); break;
      default:
        throw new TypeError('Invalid units: "' + unit + '"');
    }

    switch (unit) {
      case MILI:
          divisor = 1; break;
      case SECONDS:
          divisor = 1000; break;
      case MINUTES:
          divisor = 1000 * 60; break;
      case HOURS:
          divisor = 1000 * 60 * 60; break;
      case DAY:
          divisor = 1000 * 60 * 60 * 24; break;
      case WEEK:
          divisor = 1000 * 60 * 60 * 24 * 7; break;
      case MONTH:
          divisor = 1; break;
      case YEAR:
          divisor = 12; break;
      case DECADE:
          divisor = 120; break;
      case CENTURY:
          divisor = 1200; break;
      default:
        throw new TypeError('Invalid units: "' + unit + '"');
    }

    result = dividend / divisor;

    return asFloat ? result : absoluteFloor(result);
  }
};

function absoluteFloor(number) {
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function monthMath(date, val){
  var current = dates.month(date)
    , newMonth  = (current + val);

    date = dates.month(date, newMonth)

    while (newMonth < 0 ) newMonth = 12 + newMonth
      
    //month rollover
    if ( dates.month(date) !== ( newMonth % 12))
      date = dates.date(date, 0) //move to last of month

    return date
}

function createAccessor(method){
  return function(date, val){
    if (val === undefined)
      return date['get' + method]()

    date = new Date(date)
    date['set' + method](val)
    return date
  }
}

function createComparer(operator) {
  return function (a, b, unit) {
    return operator(+dates.startOf(a, unit), +dates.startOf(b, unit))
  };
}


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/class/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _addClass = _interopRequireDefault(__webpack_require__(/*! ./addClass */ "./node_modules/dom-helpers/class/addClass.js"));

exports.addClass = _addClass.default;

var _removeClass = _interopRequireDefault(__webpack_require__(/*! ./removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

exports.removeClass = _removeClass.default;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/events/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/events/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(__webpack_require__(/*! ../query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! ../query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/events/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _on = _interopRequireDefault(__webpack_require__(/*! ./on */ "./node_modules/dom-helpers/events/on.js"));

exports.on = _on.default;

var _off = _interopRequireDefault(__webpack_require__(/*! ./off */ "./node_modules/dom-helpers/events/off.js"));

exports.off = _off.default;

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ "./node_modules/dom-helpers/events/filter.js"));

exports.filter = _filter.default;

var _listen = _interopRequireDefault(__webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/events/listen.js"));

exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/events/listen.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/events/listen.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _on = _interopRequireDefault(__webpack_require__(/*! ./on */ "./node_modules/dom-helpers/events/on.js"));

var _off = _interopRequireDefault(__webpack_require__(/*! ./off */ "./node_modules/dom-helpers/events/off.js"));

var listen = function listen() {};

if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/off.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/events/off.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/on.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/events/on.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/ownerDocument.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/ownerDocument.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/closest.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/query/closest.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = closest;

var _matches = _interopRequireDefault(__webpack_require__(/*! ./matches */ "./node_modules/dom-helpers/query/matches.js"));

var isDoc = function isDoc(obj) {
  return obj != null && obj.nodeType === obj.DOCUMENT_NODE;
};

function closest(node, selector, context) {
  while (node && (isDoc(node) || !(0, _matches.default)(node, selector))) {
    node = node !== context && !isDoc(node) ? node.parentNode : undefined;
  }

  return node;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/contains.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/contains.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/height.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/query/height.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = height;

var _offset = _interopRequireDefault(__webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/query/offset.js"));

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function height(node, client) {
  var win = (0, _isWindow.default)(node);
  return win ? win.innerHeight : client ? node.clientHeight : (0, _offset.default)(node).height;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/isWindow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/matches.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/query/matches.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = matches;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! ./querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

var matchesCache;

function matches(node, selector) {
  if (!matchesCache && _inDOM.default) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesCache = nativeMatch ? function (node, selector) {
      return nativeMatch.call(node, selector);
    } : ie8MatchesSelector;
  }

  return matchesCache ? matchesCache(node, selector) : null;
}

function ie8MatchesSelector(node, selector) {
  var matches = (0, _querySelectorAll.default)(node.document || node.ownerDocument, selector),
      i = 0;

  while (matches[i] && matches[i] !== node) {
    i++;
  }

  return !!matches[i];
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offset.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/query/offset.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = offset;

var _contains = _interopRequireDefault(__webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/query/contains.js"));

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function offset(node) {
  var doc = (0, _ownerDocument.default)(node),
      win = (0, _isWindow.default)(doc),
      docElem = doc && doc.documentElement,
      box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  if (!doc) return; // Make sure it's not a disconnected DOM node

  if (!(0, _contains.default)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect(); // IE8 getBoundingClientRect doesn't support width & height

  box = {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: (box.width == null ? node.offsetWidth : box.width) || 0,
    height: (box.height == null ? node.offsetHeight : box.height) || 0
  };
  return box;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offsetParent.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/query/offsetParent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = offsetParent;

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ../ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument.default)(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style.default)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/position.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/position.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = position;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _offset = _interopRequireDefault(__webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/query/offset.js"));

var _offsetParent = _interopRequireDefault(__webpack_require__(/*! ./offsetParent */ "./node_modules/dom-helpers/query/offsetParent.js"));

var _scrollTop = _interopRequireDefault(__webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/query/scrollTop.js"));

var _scrollLeft = _interopRequireDefault(__webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/query/scrollLeft.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  },
      offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if ((0, _style.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent.default)(node);
    offset = (0, _offset.default)(node);
    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset.default)(offsetParent);
    parentOffset.top += parseInt((0, _style.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop.default)(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft.default)(offsetParent) || 0;
  } // Subtract parent offsets and node margins


  return (0, _extends2.default)({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style.default)(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style.default)(node, 'marginLeft'), 10) || 0)
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/querySelectorAll.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/query/querySelectorAll.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollLeft.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/query/scrollLeft.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollTop.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/query/scrollTop.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function scrollTop(node, val) {
  var win = (0, _isWindow.default)(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/width.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/query/width.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = width;

var _offset = _interopRequireDefault(__webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/query/offset.js"));

var _isWindow = _interopRequireDefault(__webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

function width(node, client) {
  var win = (0, _isWindow.default)(node);
  return win ? win.innerWidth : client ? node.clientWidth : (0, _offset.default)(node).width;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/style/getComputedStyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/style/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(/*! ../util/hyphenateStyle */ "./node_modules/dom-helpers/util/hyphenateStyle.js"));

var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/style/getComputedStyle.js"));

var _removeStyle = _interopRequireDefault(__webpack_require__(/*! ./removeStyle */ "./node_modules/dom-helpers/style/removeStyle.js"));

var _properties = __webpack_require__(/*! ../transition/properties */ "./node_modules/dom-helpers/transition/properties.js");

var _isTransform = _interopRequireDefault(__webpack_require__(/*! ../transition/isTransform */ "./node_modules/dom-helpers/transition/isTransform.js"));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/style/removeStyle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/transition/isTransform.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/transition/properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelize.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelizeStyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(__webpack_require__(/*! ./camelize */ "./node_modules/dom-helpers/util/camelize.js"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenateStyle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/util/hyphenate.js"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/util/inDOM.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/requestAnimationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/dom-helpers/util/requestAnimationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/scrollbarSize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);

  if (convertedProps.resolutions) {
    convertedProps.fixed = convertedProps.resolutions;
    delete convertedProps.resolutions;
  }

  if (convertedProps.sizes) {
    convertedProps.fluid = convertedProps.sizes;
    delete convertedProps.sizes;
  }

  return convertedProps;
}; // Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.


var imageCache = {};

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  return imageCache[src] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;
  imageCache[src] = true;
};

var io;
var listeners = [];

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        listeners.forEach(function (l) {
          if (l[0] === entry.target) {
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(l[0]);
              l[1]();
            }
          }
        });
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  getIO().observe(el);
  listeners.push([el, cb]);
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSetWebp = props.srcSetWebp ? "<source type='image/webp' srcSet=\"" + props.srcSetWebp + "\" " + sizes + "/>" : "";
  var srcSet = props.srcSet ? "<source srcSet=\"" + props.srcSet + "\" " + sizes + "/>" : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var opacity = props.opacity ? props.opacity : "1";
  var transitionDelay = props.transitionDelay ? props.transitionDelay : "0.5s";
  return "<picture>" + srcSetWebp + srcSet + "<img " + width + height + src + alt + title + "style=\"position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:" + transitionDelay + ";opacity:" + opacity + ";width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
};

var Img = _react.default.forwardRef(function (props, ref) {
  var style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["style", "onLoad", "onError"]);
  return _react.default.createElement("img", (0, _extends2.default)({}, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // default settings for browser without Intersection Observer available

    var isVisible = true;
    var imgLoaded = false;
    var IOSupported = false;
    var fadeIn = props.fadeIn; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    var seenBefore = inImageCache(props); // browser with Intersection Observer available

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    } // Never render image during SSR


    if (typeof window === "undefined") {
      isVisible = false;
    } // Force render for critical images


    if (props.critical) {
      isVisible = true;
      IOSupported = false;
    }

    var hasNoScript = !(_this.props.critical && !_this.props.fadeIn);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore
    };
    _this.imageRef = _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.props.critical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, function () {
        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: inImageCache(_this2.props)
          });
        }

        _this2.setState({
          isVisible: true,
          imgLoaded: false
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    this.props.onLoad && this.props.onLoad();
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        Tag = _convertProps.Tag;

    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1,
      transition: "opacity 0.5s",
      transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
    }, imgStyle, placeholderStyle);
    var imageStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded || this.state.fadeIn === false ? 1 : 0,
      transition: this.state.fadeIn === true ? "opacity 0.5s" : "none"
    }, imgStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName
    };

    if (fluid) {
      var image = fluid;
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.base64
      }, placeholderImageProps)), image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.35s",
          right: 0,
          left: 0
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: image.srcSetWebp,
        sizes: image.sizes
      }), _react.default.createElement("source", {
        srcSet: image.srcSet,
        sizes: image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        src: image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, image))
        }
      }));
    }

    if (fixed) {
      var _image = fixed;
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, _image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.base64
      }, placeholderImageProps)), _image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.25s",
          height: _image.height
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, _image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: _image.srcSetWebp,
        sizes: _image.sizes
      }), _react.default.createElement("source", {
        srcSet: _image.srcSet,
        sizes: _image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        src: _image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            width: _image.width,
            height: _image.height
          }, _image))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  critical: false,
  fadeIn: true,
  alt: "",
  Tag: "div"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: fixedObject,
  fluid: fluidObject,
  fadeIn: _propTypes.default.bool,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "ref", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});
var _default = GatsbyLink;
exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

exports.onRenderBody = function (_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.0.85","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@moocar/lokijs":"^1.0.1","@reach/router":"^1.1.1","address":"1.0.3","autoprefixer":"^8.6.5","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.5.2","babel-preset-gatsby":"^0.1.6","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"^2.0.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","domready":"^1.0.8","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","friendly-errors-webpack-plugin":"^1.6.1","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.4.8","gatsby-link":"^2.0.7","gatsby-plugin-page-creator":"^2.0.5","gatsby-react-router-scroll":"^2.0.2","glob":"^7.1.1","graphql":"^0.13.2","graphql-relay":"^0.5.5","graphql-skip-limit":"^2.0.4","graphql-tools":"^3.0.4","graphql-type-json":"^0.2.1","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parse-filepath":"^1.0.1","physical-cpu-count":"^2.0.0","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","relay-compiler":"1.5.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.0.2","type-of":"^2.0.1","url-loader":"^1.0.1","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"^4.12.0","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.3","cross-env":"^5.1.4","lerna":"^2.9.0","rimraf":"^2.6.1"},"engines":{"node":">6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^0.13.2"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"dfc34e11c947061f6ca94c91b2076a7c25e945e2"};

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index], index);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    undefined
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/componentOrElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
/*!**********************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/elementType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Agenda.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Agenda.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _class = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class */ "./node_modules/dom-helpers/class/index.js"));

var _width = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/width */ "./node_modules/dom-helpers/query/width.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _eventLevels = __webpack_require__(/*! ./utils/eventLevels */ "./node_modules/react-big-calendar/lib/utils/eventLevels.js");

var _selection = __webpack_require__(/*! ./utils/selection */ "./node_modules/react-big-calendar/lib/utils/selection.js");

var Agenda =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Agenda, _React$Component);

  function Agenda() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.renderDay = function (day, events, dayKey) {
      var _this$props = _this.props,
          selected = _this$props.selected,
          getters = _this$props.getters,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          _this$props$component = _this$props.components,
          Event = _this$props$component.event,
          AgendaDate = _this$props$component.date;
      events = events.filter(function (e) {
        return (0, _eventLevels.inRange)(e, _dates.default.startOf(day, 'day'), _dates.default.endOf(day, 'day'), accessors);
      });
      return events.map(function (event, idx) {
        var title = accessors.title(event);
        var end = accessors.end(event);
        var start = accessors.start(event);
        var userProps = getters.eventProp(event, start, end, (0, _selection.isSelected)(event, selected));
        var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
        var first = idx === 0 ? _react.default.createElement("td", {
          rowSpan: events.length,
          className: "rbc-agenda-date-cell"
        }, AgendaDate ? _react.default.createElement(AgendaDate, {
          day: day,
          label: dateLabel
        }) : dateLabel) : false;
        return _react.default.createElement("tr", {
          key: dayKey + '_' + idx,
          className: userProps.className,
          style: userProps.style
        }, first, _react.default.createElement("td", {
          className: "rbc-agenda-time-cell"
        }, _this.timeRangeLabel(day, event)), _react.default.createElement("td", {
          className: "rbc-agenda-event-cell"
        }, Event ? _react.default.createElement(Event, {
          event: event,
          title: title
        }) : title));
      }, []);
    };

    _this.timeRangeLabel = function (day, event) {
      var _this$props2 = _this.props,
          accessors = _this$props2.accessors,
          localizer = _this$props2.localizer,
          components = _this$props2.components;
      var labelClass = '',
          TimeComponent = components.time,
          label = localizer.messages.allDay;
      var end = accessors.end(event);
      var start = accessors.start(event);

      if (!accessors.allDay(event)) {
        if (_dates.default.eq(start, end, 'day')) {
          label = localizer.format({
            start: start,
            end: end
          }, 'agendaTimeRangeFormat');
        } else if (_dates.default.eq(day, start, 'day')) {
          label = localizer.format(start, 'agendaTimeFormat');
        } else if (_dates.default.eq(day, end, 'day')) {
          label = localizer.format(end, 'agendaTimeFormat');
        }
      }

      if (_dates.default.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
      if (_dates.default.lt(day, end, 'day')) labelClass += ' rbc-continues-after';
      return _react.default.createElement("span", {
        className: labelClass.trim()
      }, TimeComponent ? _react.default.createElement(TimeComponent, {
        event: event,
        day: day,
        label: label
      }) : label);
    };

    _this._adjustHeader = function () {
      if (!_this.refs.tbody) return;
      var header = _this.refs.header;
      var firstRow = _this.refs.tbody.firstChild;
      if (!firstRow) return;
      var isOverflowing = _this.refs.content.scrollHeight > _this.refs.content.clientHeight;
      var widths = _this._widths || [];
      _this._widths = [(0, _width.default)(firstRow.children[0]), (0, _width.default)(firstRow.children[1])];

      if (widths[0] !== _this._widths[0] || widths[1] !== _this._widths[1]) {
        _this.refs.dateCol.style.width = _this._widths[0] + 'px';
        _this.refs.timeCol.style.width = _this._widths[1] + 'px';
      }

      if (isOverflowing) {
        _class.default.addClass(header, 'rbc-header-overflowing');

        header.style.marginRight = (0, _scrollbarSize.default)() + 'px';
      } else {
        _class.default.removeClass(header, 'rbc-header-overflowing');
      }
    };

    return _this;
  }

  var _proto = Agenda.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._adjustHeader();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this._adjustHeader();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        length = _this$props3.length,
        date = _this$props3.date,
        events = _this$props3.events,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer;
    var messages = localizer.messages;

    var end = _dates.default.add(date, length, 'day');

    var range = _dates.default.range(date, end, 'day');

    events = events.filter(function (event) {
      return (0, _eventLevels.inRange)(event, date, end, accessors);
    });
    events.sort(function (a, b) {
      return +accessors.start(a) - +accessors.start(b);
    });
    return _react.default.createElement("div", {
      className: "rbc-agenda-view"
    }, events.length !== 0 ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("table", {
      ref: "header",
      className: "rbc-agenda-table"
    }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
      className: "rbc-header",
      ref: "dateCol"
    }, messages.date), _react.default.createElement("th", {
      className: "rbc-header",
      ref: "timeCol"
    }, messages.time), _react.default.createElement("th", {
      className: "rbc-header"
    }, messages.event)))), _react.default.createElement("div", {
      className: "rbc-agenda-content",
      ref: "content"
    }, _react.default.createElement("table", {
      className: "rbc-agenda-table"
    }, _react.default.createElement("tbody", {
      ref: "tbody"
    }, range.map(function (day, idx) {
      return _this2.renderDay(day, events, idx);
    }))))) : _react.default.createElement("span", {
      className: "rbc-agenda-empty"
    }, messages.noEventsInRange));
  };

  return Agenda;
}(_react.default.Component);

Agenda.propTypes = {
  events: _propTypes.default.array,
  date: _propTypes.default.instanceOf(Date),
  length: _propTypes.default.number.isRequired,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired
};
Agenda.defaultProps = {
  length: 30
};

Agenda.range = function (start, _ref) {
  var _ref$length = _ref.length,
      length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length;

  var end = _dates.default.add(start, length, 'day');

  return {
    start: start,
    end: end
  };
};

Agenda.navigate = function (date, action, _ref2) {
  var _ref2$length = _ref2.length,
      length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length;

  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -length, 'day');

    case _constants.navigate.NEXT:
      return _dates.default.add(date, length, 'day');

    default:
      return date;
  }
};

Agenda.title = function (start, _ref3) {
  var _ref3$length = _ref3.length,
      length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
      localizer = _ref3.localizer;

  var end = _dates.default.add(start, length, 'day');

  return localizer.format({
    start: start,
    end: end
  }, 'agendaHeaderFormat');
};

var _default = Agenda;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/BackgroundCells.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/BackgroundCells.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var _selection = __webpack_require__(/*! ./utils/selection */ "./node_modules/react-big-calendar/lib/utils/selection.js");

var _Selection = _interopRequireWildcard(__webpack_require__(/*! ./Selection */ "./node_modules/react-big-calendar/lib/Selection.js"));

var BackgroundCells =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BackgroundCells, _React$Component);

  function BackgroundCells(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.state = {
      selecting: false
    };
    return _this;
  }

  var _proto = BackgroundCells.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper;
    var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
    var current = getNow();
    return _react.default.createElement("div", {
      className: "rbc-row-bg"
    }, range.map(function (date, index) {
      var selected = selecting && index >= startIdx && index <= endIdx;

      var _getters$dayProp = getters.dayProp(date),
          className = _getters$dayProp.className,
          style = _getters$dayProp.style;

      return _react.default.createElement(Wrapper, {
        key: index,
        value: date,
        range: range
      }, _react.default.createElement("div", {
        style: style,
        className: (0, _classnames.default)('rbc-day-bg', className, selected && 'rbc-selected-cell', _dates.default.eq(date, current, 'day') && 'rbc-today', currentDate && _dates.default.month(currentDate) !== _dates.default.month(date) && 'rbc-off-range-bg')
      }));
    }));
  };

  _proto._selectable = function _selectable() {
    var _this2 = this;

    var node = (0, _reactDom.findDOMNode)(this);
    var selector = this._selector = new _Selection.default(this.props.container, {
      longPressThreshold: this.props.longPressThreshold
    });

    var selectorClicksHandler = function selectorClicksHandler(point, actionType) {
      if (!(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(_this2), point)) {
        var rowBox = (0, _Selection.getBoundsForNode)(node);
        var _this2$props = _this2.props,
            range = _this2$props.range,
            rtl = _this2$props.rtl;

        if ((0, _selection.pointInBox)(rowBox, point)) {
          var currentCell = (0, _selection.getSlotAtX)(rowBox, point.x, rtl, range.length);

          _this2._selectSlot({
            startIdx: currentCell,
            endIdx: currentCell,
            action: actionType,
            box: point
          });
        }
      }

      _this2._initial = {};

      _this2.setState({
        selecting: false
      });
    };

    selector.on('selecting', function (box) {
      var _this2$props2 = _this2.props,
          range = _this2$props2.range,
          rtl = _this2$props2.rtl;
      var startIdx = -1;
      var endIdx = -1;

      if (!_this2.state.selecting) {
        (0, _helpers.notify)(_this2.props.onSelectStart, [box]);
        _this2._initial = {
          x: box.x,
          y: box.y
        };
      }

      if (selector.isSelected(node)) {
        var nodeBox = (0, _Selection.getBoundsForNode)(node);

        var _dateCellSelection = (0, _selection.dateCellSelection)(_this2._initial, nodeBox, box, range.length, rtl);

        startIdx = _dateCellSelection.startIdx;
        endIdx = _dateCellSelection.endIdx;
      }

      _this2.setState({
        selecting: true,
        startIdx: startIdx,
        endIdx: endIdx
      });
    });
    selector.on('beforeSelect', function (box) {
      if (_this2.props.selectable !== 'ignoreEvents') return;
      return !(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(_this2), box);
    });
    selector.on('click', function (point) {
      return selectorClicksHandler(point, 'click');
    });
    selector.on('doubleClick', function (point) {
      return selectorClicksHandler(point, 'doubleClick');
    });
    selector.on('select', function (bounds) {
      _this2._selectSlot((0, _extends2.default)({}, _this2.state, {
        action: 'select',
        bounds: bounds
      }));

      _this2._initial = {};

      _this2.setState({
        selecting: false
      });

      (0, _helpers.notify)(_this2.props.onSelectEnd, [_this2.state]);
    });
  };

  _proto._teardownSelectable = function _teardownSelectable() {
    if (!this._selector) return;

    this._selector.teardown();

    this._selector = null;
  };

  _proto._selectSlot = function _selectSlot(_ref) {
    var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box;
    if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
      start: startIdx,
      end: endIdx,
      action: action,
      bounds: bounds,
      box: box
    });
  };

  return BackgroundCells;
}(_react.default.Component);

BackgroundCells.propTypes = {
  date: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  getters: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  container: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  rtl: _propTypes.default.bool,
  type: _propTypes.default.string
};
var _default = BackgroundCells;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/BackgroundWrapper.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/BackgroundWrapper.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _NoopWrapper = _interopRequireDefault(__webpack_require__(/*! ./NoopWrapper */ "./node_modules/react-big-calendar/lib/NoopWrapper.js"));

var _default = _NoopWrapper.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Calendar.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Calendar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _uncontrollable = _interopRequireDefault(__webpack_require__(/*! uncontrollable */ "./node_modules/react-big-calendar/node_modules/uncontrollable/lib/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes2 = __webpack_require__(/*! ./utils/propTypes */ "./node_modules/react-big-calendar/lib/utils/propTypes.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/react-big-calendar/node_modules/warning/warning.js"));

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _localizer = __webpack_require__(/*! ./localizer */ "./node_modules/react-big-calendar/lib/localizer.js");

var _messages = _interopRequireDefault(__webpack_require__(/*! ./utils/messages */ "./node_modules/react-big-calendar/lib/utils/messages.js"));

var _move = _interopRequireDefault(__webpack_require__(/*! ./utils/move */ "./node_modules/react-big-calendar/lib/utils/move.js"));

var _Views = _interopRequireDefault(__webpack_require__(/*! ./Views */ "./node_modules/react-big-calendar/lib/Views.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! ./Toolbar */ "./node_modules/react-big-calendar/lib/Toolbar.js"));

var _NoopWrapper = _interopRequireDefault(__webpack_require__(/*! ./NoopWrapper */ "./node_modules/react-big-calendar/lib/NoopWrapper.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! lodash/omit */ "lodash/omit"));

var _defaults = _interopRequireDefault(__webpack_require__(/*! lodash/defaults */ "lodash/defaults"));

var _transform = _interopRequireDefault(__webpack_require__(/*! lodash/transform */ "lodash/transform"));

var _mapValues = _interopRequireDefault(__webpack_require__(/*! lodash/mapValues */ "lodash/mapValues"));

var _accessors = __webpack_require__(/*! ./utils/accessors */ "./node_modules/react-big-calendar/lib/utils/accessors.js");

function viewNames(_views) {
  return !Array.isArray(_views) ? Object.keys(_views) : _views;
}

function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
/**
 * react-big-calendar is a full featured Calendar component for managing events and dates. It uses
 * modern `flexbox` for layout, making it super responsive and performant. Leaving most of the layout heavy lifting
 * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
 * height (feel free to adjust the styles to suit your specific needs).
 *
 * Big Calendar is unopiniated about editing and moving events, preferring to let you implement it in a way that makes
 * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
 * how to find the start and end datetimes and you can pass it whatever you want.
 *
 * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
 * which means that the event spans up to, but not including, the end date. In the case
 * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
 * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
 * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
 * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
 */


var Calendar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Calendar, _React$Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.getViews = function () {
      var views = _this.props.views;

      if (Array.isArray(views)) {
        return (0, _transform.default)(views, function (obj, name) {
          return obj[name] = _Views.default[name];
        }, {});
      }

      if (typeof views === 'object') {
        return (0, _mapValues.default)(views, function (value, key) {
          if (value === true) {
            return _Views.default[key];
          }

          return value;
        });
      }

      return _Views.default;
    };

    _this.getView = function () {
      var views = _this.getViews();

      return views[_this.props.view];
    };

    _this.getDrilldownView = function (date) {
      var _this$props = _this.props,
          view = _this$props.view,
          drilldownView = _this$props.drilldownView,
          getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(_this.getViews()));
    };

    _this.handleRangeChange = function (date, viewComponent, view) {
      var _this$props2 = _this.props,
          onRangeChange = _this$props2.onRangeChange,
          localizer = _this$props2.localizer;

      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date, {
            localizer: localizer
          }), view);
        } else {
           false ? undefined : void 0;
        }
      }
    };

    _this.handleNavigate = function (action, newDate) {
      var _this$props3 = _this.props,
          view = _this$props3.view,
          date = _this$props3.date,
          getNow = _this$props3.getNow,
          onNavigate = _this$props3.onNavigate,
          props = (0, _objectWithoutPropertiesLoose2.default)(_this$props3, ["view", "date", "getNow", "onNavigate"]);

      var ViewComponent = _this.getView();

      var today = getNow();
      date = (0, _move.default)(ViewComponent, (0, _extends2.default)({}, props, {
        action: action,
        date: newDate || date || today,
        today: today
      }));
      onNavigate(date, view, action);

      _this.handleRangeChange(date, ViewComponent);
    };

    _this.handleViewChange = function (view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }

      var views = _this.getViews();

      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views[view], view);
    };

    _this.handleSelectEvent = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    _this.handleDoubleClickEvent = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (0, _helpers.notify)(_this.props.onDoubleClickEvent, args);
    };

    _this.handleSelectSlot = function (slotInfo) {
      (0, _helpers.notify)(_this.props.onSelectSlot, slotInfo);
    };

    _this.handleDrillDown = function (date, view) {
      var onDrillDown = _this.props.onDrillDown;

      if (onDrillDown) {
        onDrillDown(date, view, _this.drilldownView);
        return;
      }

      if (view) _this.handleViewChange(view);

      _this.handleNavigate(_constants.navigate.DATE, date);
    };

    _this.state = {
      context: _this.getContext(_this.props)
    };
    return _this;
  }

  var _proto = Calendar.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      context: this.getContext(nextProps)
    });
  };

  _proto.getContext = function getContext(_ref2) {
    var startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats;
    var names = viewNames(views);
    var msgs = (0, _messages.default)(messages);
    return {
      viewNames: names,
      localizer: (0, _localizer.mergeWithDefaults)(localizer, culture, formats, msgs),
      getters: {
        eventProp: function eventProp() {
          return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
        },
        slotProp: function slotProp() {
          return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
        },
        dayProp: function dayProp() {
          return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
        }
      },
      components: (0, _defaults.default)(components[view] || {}, (0, _omit.default)(components, names), {
        eventWrapper: _NoopWrapper.default,
        eventContainerWrapper: _NoopWrapper.default,
        dayWrapper: _NoopWrapper.default,
        dateCellWrapper: _NoopWrapper.default,
        weekWrapper: _NoopWrapper.default,
        timeSlotWrapper: _NoopWrapper.default
      }),
      accessors: {
        start: (0, _accessors.wrapAccessor)(startAccessor),
        end: (0, _accessors.wrapAccessor)(endAccessor),
        allDay: (0, _accessors.wrapAccessor)(allDayAccessor),
        tooltip: (0, _accessors.wrapAccessor)(tooltipAccessor),
        title: (0, _accessors.wrapAccessor)(titleAccessor),
        resource: (0, _accessors.wrapAccessor)(resourceAccessor),
        resourceId: (0, _accessors.wrapAccessor)(resourceIdAccessor),
        resourceTitle: (0, _accessors.wrapAccessor)(resourceTitleAccessor)
      }
    };
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        _0 = _this$props4.components,
        _1 = _this$props4.formats,
        _2 = _this$props4.messages,
        _3 = _this$props4.culture,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props4, ["view", "toolbar", "events", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "components", "formats", "messages", "culture"]);
    current = current || getNow();
    var View = this.getView();
    var _this$state$context = this.state.context,
        accessors = _this$state$context.accessors,
        components = _this$state$context.components,
        getters = _this$state$context.getters,
        localizer = _this$state$context.localizer,
        viewNames = _this$state$context.viewNames;
    var CalToolbar = components.toolbar || _Toolbar.default;
    var label = View.title(current, {
      localizer: localizer,
      length: length
    });
    return _react.default.createElement("div", (0, _extends2.default)({}, elementProps, {
      className: (0, _classnames.default)(className, 'rbc-calendar', props.rtl && 'rbc-is-rtl'),
      style: style
    }), toolbar && _react.default.createElement(CalToolbar, {
      date: current,
      view: view,
      views: viewNames,
      label: label,
      onView: this.handleViewChange,
      onNavigate: this.handleNavigate,
      localizer: localizer
    }), _react.default.createElement(View, (0, _extends2.default)({
      ref: "view"
    }, props, {
      events: events,
      date: current,
      getNow: getNow,
      length: length,
      localizer: localizer,
      getters: getters,
      components: components,
      accessors: accessors,
      showMultiDayTimes: showMultiDayTimes,
      getDrilldownView: this.getDrilldownView,
      onNavigate: this.handleNavigate,
      onDrillDown: this.handleDrillDown,
      onSelectEvent: this.handleSelectEvent,
      onDoubleClickEvent: this.handleDoubleClickEvent,
      onSelectSlot: this.handleSelectSlot,
      onShowMore: this._showMore
    })));
  };
  /**
   *
   * @param date
   * @param viewComponent
   * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
   * parameter. It appears when range change on view changing. It could be handy
   * when you need to have both: range and view type at once, i.e. for manage rbc
   * state via url
   */


  return Calendar;
}(_react.default.Component);

Calendar.propTypes = {
  localizer: _propTypes.default.object.isRequired,

  /**
   * Props passed to main calendar `<div>`.
   *
   */
  elementProps: _propTypes.default.object,

  /**
   * The current date value of the calendar. Determines the visible view range.
   * If `date` is omitted then the result of `getNow` is used; otherwise the
   * current date is used.
   *
   * @controllable onNavigate
   */
  date: _propTypes.default.instanceOf(Date),

  /**
   * The current view of the calendar.
   *
   * @default 'month'
   * @controllable onView
   */
  view: _propTypes.default.string,

  /**
   * The initial view set for the Calendar.
   * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @default 'month'
   */
  defaultView: _propTypes.default.string,

  /**
   * An array of event objects to display on the calendar. Events objects
   * can be any shape, as long as the Calendar knows how to retrieve the
   * following details of the event:
   *
   *  - start time
   *  - end time
   *  - title
   *  - whether its an "all day" event or not
   *  - any resource the event may be related to
   *
   * Each of these properties can be customized or generated dynamically by
   * setting the various "accessor" props. Without any configuration the default
   * event should look like:
   *
   * ```js
   * Event {
   *   title: string,
   *   start: Date,
   *   end: Date,
   *   allDay?: boolean
   *   resource?: any,
   * }
   * ```
   */
  events: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Accessor for the event title, used to display event information. Should
   * resolve to a `renderable` value.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  titleAccessor: _propTypes2.accessor,

  /**
   * Accessor for the event tooltip. Should
   * resolve to a `renderable` value. Removes the tooltip if null.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  tooltipAccessor: _propTypes2.accessor,

  /**
   * Determines whether the event should be considered an "all day" event and ignore time.
   * Must resolve to a `boolean` value.
   *
   * ```js
   * string | (event: Object) => boolean
   * ```
   *
   * @type {(func|string)}
   */
  allDayAccessor: _propTypes2.accessor,

  /**
   * The start date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  startAccessor: _propTypes2.accessor,

  /**
   * The end date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  endAccessor: _propTypes2.accessor,

  /**
   * Returns the id of the `resource` that the event is a member of. This
   * id should match at least one resource in the `resources` array.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  resourceAccessor: _propTypes2.accessor,

  /**
   * An array of resource objects that map events to a specific resource.
   * Resource objects, like events, can be any shape or have any properties,
   * but should be uniquly identifiable via the `resourceIdAccessor`, as
   * well as a "title" or name as provided by the `resourceTitleAccessor` prop.
   */
  resources: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Provides a unique identifier for each resource in the `resources` array
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceIdAccessor: _propTypes2.accessor,

  /**
   * Provides a human readable name for the resource object, used in headers.
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceTitleAccessor: _propTypes2.accessor,

  /**
   * Determines the current date/time which is highlighted in the views.
   *
   * The value affects which day is shaded and which time is shown as
   * the current time. It also affects the date used by the Today button in
   * the toolbar.
   *
   * Providing a value here can be useful when you are implementing time zones
   * using the `startAccessor` and `endAccessor` properties.
   *
   * @type {func}
   * @default () => new Date()
   */
  getNow: _propTypes.default.func,

  /**
   * Callback fired when the `date` value changes.
   *
   * @controllable date
   */
  onNavigate: _propTypes.default.func,

  /**
   * Callback fired when the `view` value changes.
   *
   * @controllable view
   */
  onView: _propTypes.default.func,

  /**
   * Callback fired when date header, or the truncated events links are clicked
   *
   */
  onDrillDown: _propTypes.default.func,

  /**
   *
   * ```js
   * (dates: Date[] | { start: Date; end: Date }, view?: 'month'|'week'|'work_week'|'day'|'agenda') => void
   * ```
   *
   * Callback fired when the visible date range changes. Returns an Array of dates
   * or an object with start and end dates for BUILTIN views. Optionally new `view`
   * will be returned when callback called after view change.
   *
   * Custom views may return something different.
   */
  onRangeChange: _propTypes.default.func,

  /**
   * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
   *
   * ```js
   * (
   *   slotInfo: {
   *     start: Date,
   *     end: Date,
   *     slots: Array<Date>,
   *     action: "select" | "click" | "doubleClick",
   *     bounds: ?{ // For "select" action
   *       x: number,
   *       y: number,
   *       top: number,
   *       right: number,
   *       left: number,
   *       bottom: number,
   *     },
   *     box: ?{ // For "click" or "doubleClick" actions
   *       clientX: number,
   *       clientY: number,
   *       x: number,
   *       y: number,
   *     },
   *   }
   * ) => any
   * ```
   */
  onSelectSlot: _propTypes.default.func,

  /**
   * Callback fired when a calendar event is selected.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => any
   * ```
   *
   * @controllable selected
   */
  onSelectEvent: _propTypes.default.func,

  /**
   * Callback fired when a calendar event is clicked twice.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => void
   * ```
   */
  onDoubleClickEvent: _propTypes.default.func,

  /**
   * Callback fired when dragging a selection in the Time views.
   *
   * Returning `false` from the handler will prevent a selection.
   *
   * ```js
   * (range: { start: Date, end: Date }) => ?boolean
   * ```
   */
  onSelecting: _propTypes.default.func,

  /**
   * The selected event, if any.
   */
  selected: _propTypes.default.object,

  /**
   * An array of built-in view names to allow the calendar to display.
   * accepts either an array of builtin view names,
   *
   * ```jsx
   * views={['month', 'day', 'agenda']}
   * ```
   * or an object hash of the view name and the component (or boolean for builtin).
   *
   * ```jsx
   * views={{
   *   month: true,
   *   week: false,
   *   myweek: WorkWeekViewComponent,
   * }}
   * ```
   *
   * Custom views can be any React component, that implements the following
   * interface:
   *
   * ```js
   * interface View {
   *   static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
   *   static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
   * }
   * ```
   *
   * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @View
   ['month', 'week', 'day', 'agenda']
   */
  views: _propTypes2.views,

  /**
   * The string name of the destination view for drill-down actions, such
   * as clicking a date header, or the truncated events links. If
   * `getDrilldownView` is also specified it will be used instead.
   *
   * Set to `null` to disable drill-down actions.
   *
   * ```js
   * <BigCalendar
   *   drilldownView="agenda"
   * />
   * ```
   */
  drilldownView: _propTypes.default.string,

  /**
   * Functionally equivalent to `drilldownView`, but accepts a function
   * that can return a view name. It's useful for customizing the drill-down
   * actions depending on the target date and triggering view.
   *
   * Return `null` to disable drill-down actions.
   *
   * ```js
   * <BigCalendar
   *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
   *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
   *       return 'week'
   *
   *     return null;
   *   }}
   * />
   * ```
   */
  getDrilldownView: _propTypes.default.func,

  /**
   * Determines the end date from date prop in the agenda view
   * date prop + length (in number of days) = end date
   */
  length: _propTypes.default.number,

  /**
   * Determines whether the toolbar is displayed
   */
  toolbar: _propTypes.default.bool,

  /**
   * Show truncated events in an overlay when you click the "+_x_ more" link.
   */
  popup: _propTypes.default.bool,

  /**
   * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
   *
   * ```jsx
   * <BigCalendar popupOffset={30}/>
   * <BigCalendar popupOffset={{x: 30, y: 20}}/>
   * ```
   */
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })]),

  /**
   * Allows mouse selection of ranges of dates/times.
   *
   * The 'ignoreEvents' option prevents selection code from running when a
   * drag begins over an event. Useful when you want custom event click or drag
   * logic
   */
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),

  /**
   * Specifies the number of miliseconds the user must press and hold on the screen for a touch
   * to be considered a "long press." Long presses are used for time slot selection on touch
   * devices.
   *
   * @type {number}
   * @default 250
   */
  longPressThreshold: _propTypes.default.number,

  /**
   * Determines the selectable time increments in week and day views
   */
  step: _propTypes.default.number,

  /**
   * The number of slots per "section" in the time grid views. Adjust with `step`
   * to change the default of 1 hour long groups, with 30 minute slots.
   */
  timeslots: _propTypes.default.number,

  /**
   *Switch the calendar to a `right-to-left` read direction.
   */
  rtl: _propTypes.default.bool,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the event node.
   *
   * ```js
   * (
   * 	event: Object,
   * 	start: Date,
   * 	end: Date,
   * 	isSelected: boolean
   * ) => { className?: string, style?: Object }
   * ```
   */
  eventPropGetter: _propTypes.default.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the time-slot node. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date, resourceId: (number|string)) => { className?: string, style?: Object }
   * ```
   */
  slotPropGetter: _propTypes.default.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the day background. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date) => { className?: string, style?: Object }
   * ```
   */
  dayPropGetter: _propTypes.default.func,

  /**
   * Support to show multi-day events with specific start and end times in the
   * main time grid (rather than in the all day header).
   *
   * **Note: This may cause calendars with several events to look very busy in
   * the week and day views.**
   */
  showMultiDayTimes: _propTypes.default.bool,

  /**
   * Constrains the minimum _time_ of the Day and Week views.
   */
  min: _propTypes.default.instanceOf(Date),

  /**
   * Constrains the maximum _time_ of the Day and Week views.
   */
  max: _propTypes.default.instanceOf(Date),

  /**
   * Determines how far down the scroll pane is initially scrolled down.
   */
  scrollToTime: _propTypes.default.instanceOf(Date),

  /**
   * Specify a specific culture code for the Calendar.
   *
   * **Note: it's generally better to handle this globally via your i18n library.**
   */
  culture: _propTypes.default.string,

  /**
   * Localizer specific formats, tell the Calendar how to format and display dates.
   *
   * `format` types are dependent on the configured localizer; both Moment and Globalize
   * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
   *
   * ```jsx
   * let formats = {
   *   dateFormat: 'dd',
   *
   *   dayFormat: (date, , localizer) =>
   *     localizer.format(date, 'DDD', culture),
   *
   *   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
   *     localizer.format(start, { date: 'short' }, culture) + ' — ' +
   *     localizer.format(end, { date: 'short' }, culture)
   * }
   *
   * <Calendar formats={formats} />
   * ```
   *
   * All localizers accept a function of
   * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
   */
  formats: _propTypes.default.shape({
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat: _propTypes2.dateFormat,

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat: _propTypes2.dateFormat,

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat: _propTypes2.dateFormat,

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat: _propTypes2.dateFormat,

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat: _propTypes2.dateFormat,

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat: _propTypes2.dateRangeFormat,

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat: _propTypes2.dateFormat,

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat: _propTypes2.dateRangeFormat,

    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat: _propTypes2.dateRangeFormat,
    agendaDateFormat: _propTypes2.dateFormat,
    agendaTimeFormat: _propTypes2.dateFormat,
    agendaTimeRangeFormat: _propTypes2.dateRangeFormat,

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat: _propTypes2.dateRangeFormat,

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat: _propTypes2.dateFormat,

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat: _propTypes2.dateFormat
  }),

  /**
   * Customize how different sections of the calendar render by providing custom Components.
   * In particular the `Event` component can be specified for the entire calendar, or you can
   * provide an individual component for each view type.
   *
   * ```jsx
   * let components = {
   *   event: MyEvent, // used by each view (Month, Day, Week)
   *   eventWrapper: MyEventWrapper,
   *   eventContainerWrapper: MyEventContainerWrapper,
   *   dayWrapper: MyDayWrapper,
   *   dateCellWrapper: MyDateCellWrapper,
   *   timeSlotWrapper: MyTimeSlotWrapper,
   *   timeGutterHeader: MyTimeGutterWrapper,
   *   toolbar: MyToolbar,
   *   agenda: {
   *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
   *     time: MyAgendaTime,
   *     date: MyAgendaDate,
   *   },
   *   day: {
   *     header: MyDayHeader,
   *     event: MyDayEvent,
   *   },
   *   week: {
   *     header: MyWeekHeader,
   *     event: MyWeekEvent,
   *   },
   *   month: {
   *     header: MyMonthHeader,
   *     dateHeader: MyMonthDateHeader,
   *     event: MyMonthEvent,
   *   }
   * }
   * <Calendar components={components} />
   * ```
   */
  components: _propTypes.default.shape({
    event: _propTypes2.elementType,
    eventWrapper: _propTypes2.elementType,
    eventContainerWrapper: _propTypes2.elementType,
    dayWrapper: _propTypes2.elementType,
    dateCellWrapper: _propTypes2.elementType,
    timeSlotWrapper: _propTypes2.elementType,
    timeGutterHeader: _propTypes2.elementType,
    toolbar: _propTypes2.elementType,
    agenda: _propTypes.default.shape({
      date: _propTypes2.elementType,
      time: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    day: _propTypes.default.shape({
      header: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    week: _propTypes.default.shape({
      header: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    month: _propTypes.default.shape({
      header: _propTypes2.elementType,
      dateHeader: _propTypes2.elementType,
      event: _propTypes2.elementType
    })
  }),

  /**
   * String messages used throughout the component, override to provide localizations
   */
  messages: _propTypes.default.shape({
    allDay: _propTypes.default.node,
    previous: _propTypes.default.node,
    next: _propTypes.default.node,
    today: _propTypes.default.node,
    month: _propTypes.default.node,
    week: _propTypes.default.node,
    day: _propTypes.default.node,
    agenda: _propTypes.default.node,
    date: _propTypes.default.node,
    time: _propTypes.default.node,
    event: _propTypes.default.node,
    noEventsInRange: _propTypes.default.node,
    showMore: _propTypes.default.func
  })
};
Calendar.defaultProps = {
  elementProps: {},
  popup: false,
  toolbar: true,
  view: _constants.views.MONTH,
  views: [_constants.views.MONTH, _constants.views.WEEK, _constants.views.DAY, _constants.views.AGENDA],
  step: 30,
  length: 30,
  drilldownView: _constants.views.DAY,
  titleAccessor: 'title',
  tooltipAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end',
  resourceAccessor: 'resourceId',
  resourceIdAccessor: 'id',
  resourceTitleAccessor: 'title',
  longPressThreshold: 250,
  getNow: function getNow() {
    return new Date();
  }
};

var _default = (0, _uncontrollable.default)(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/DateContentRow.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/DateContentRow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _height = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/height */ "./node_modules/dom-helpers/query/height.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _BackgroundCells = _interopRequireDefault(__webpack_require__(/*! ./BackgroundCells */ "./node_modules/react-big-calendar/lib/BackgroundCells.js"));

var _EventRow = _interopRequireDefault(__webpack_require__(/*! ./EventRow */ "./node_modules/react-big-calendar/lib/EventRow.js"));

var _EventEndingRow = _interopRequireDefault(__webpack_require__(/*! ./EventEndingRow */ "./node_modules/react-big-calendar/lib/EventEndingRow.js"));

var DateSlotMetrics = _interopRequireWildcard(__webpack_require__(/*! ./utils/DateSlotMetrics */ "./node_modules/react-big-calendar/lib/utils/DateSlotMetrics.js"));

var propTypes = {
  date: _propTypes.default.instanceOf(Date),
  events: _propTypes.default.array.isRequired,
  range: _propTypes.default.array.isRequired,
  rtl: _propTypes.default.bool,
  resourceId: _propTypes.default.any,
  renderForMeasure: _propTypes.default.bool,
  renderHeader: _propTypes.default.func,
  container: _propTypes.default.func,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onShowMore: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  getNow: _propTypes.default.func.isRequired,
  isAllDay: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  minRows: _propTypes.default.number.isRequired,
  maxRows: _propTypes.default.number.isRequired
};
var defaultProps = {
  minRows: 0,
  maxRows: Infinity
};

var DateContentRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DateContentRow, _React$Component);

  function DateContentRow() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelectSlot = function (slot) {
      var _this$props = _this.props,
          range = _this$props.range,
          onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    };

    _this.handleShowMore = function (slot) {
      var _this$props2 = _this.props,
          range = _this$props2.range,
          onShowMore = _this$props2.onShowMore;

      var metrics = _this.slotMetrics(_this.props);

      var row = (0, _querySelectorAll.default)((0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))), '.rbc-row-bg')[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range[slot - 1], cell, slot);
    };

    _this.createHeadingRef = function (r) {
      _this.headingRow = r;
    };

    _this.createEventRef = function (r) {
      _this.eventRow = r;
    };

    _this.getContainer = function () {
      var container = _this.props.container;
      return container ? container() : (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    };

    _this.renderHeadingCell = function (date, index) {
      var _this$props3 = _this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow;
      return renderHeader({
        date: date,
        key: "header_" + index,
        className: (0, _classnames.default)('rbc-date-cell', _dates.default.eq(date, getNow(), 'day') && 'rbc-now')
      });
    };

    _this.renderDummy = function () {
      var _this$props4 = _this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        className: "rbc-row-content"
      }, renderHeader && _react.default.createElement("div", {
        className: "rbc-row",
        ref: _this.createHeadingRef
      }, range.map(_this.renderHeadingCell)), _react.default.createElement("div", {
        className: "rbc-row",
        ref: _this.createEventRef
      }, _react.default.createElement("div", {
        className: "rbc-row-segment"
      }, _react.default.createElement("div", {
        className: "rbc-event"
      }, _react.default.createElement("div", {
        className: "rbc-event-content"
      }, "\xA0"))))));
    };

    _this.slotMetrics = DateSlotMetrics.getSlotMetrics();
    return _this;
  }

  var _proto = DateContentRow.prototype;

  _proto.getRowLimit = function getRowLimit() {
    var eventHeight = (0, _height.default)(this.eventRow);
    var headingHeight = this.headingRow ? (0, _height.default)(this.headingRow) : 0;
    var eventSpace = (0, _height.default)((0, _reactDom.findDOMNode)(this)) - headingHeight;
    return Math.max(Math.floor(eventSpace / eventHeight), 1);
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        date = _this$props5.date,
        rtl = _this$props5.rtl,
        range = _this$props5.range,
        className = _this$props5.className,
        selected = _this$props5.selected,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        accessors = _this$props5.accessors,
        getters = _this$props5.getters,
        components = _this$props5.components,
        getNow = _this$props5.getNow,
        renderHeader = _this$props5.renderHeader,
        onSelect = _this$props5.onSelect,
        localizer = _this$props5.localizer,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        onDoubleClick = _this$props5.onDoubleClick,
        resourceId = _this$props5.resourceId,
        longPressThreshold = _this$props5.longPressThreshold,
        isAllDay = _this$props5.isAllDay;
    if (renderForMeasure) return this.renderDummy();
    var metrics = this.slotMetrics(this.props);
    var levels = metrics.levels,
        extra = metrics.extra;
    var WeekWrapper = components.weekWrapper;
    var eventRowProps = {
      selected: selected,
      accessors: accessors,
      getters: getters,
      localizer: localizer,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      resourceId: resourceId,
      slotMetrics: metrics
    };
    return _react.default.createElement("div", {
      className: className
    }, _react.default.createElement(_BackgroundCells.default, {
      date: date,
      getNow: getNow,
      rtl: rtl,
      range: range,
      selectable: selectable,
      container: this.getContainer,
      getters: getters,
      onSelectStart: onSelectStart,
      onSelectEnd: onSelectEnd,
      onSelectSlot: this.handleSelectSlot,
      components: components,
      longPressThreshold: longPressThreshold
    }), _react.default.createElement("div", {
      className: "rbc-row-content"
    }, renderHeader && _react.default.createElement("div", {
      className: "rbc-row ",
      ref: this.createHeadingRef
    }, range.map(this.renderHeadingCell)), _react.default.createElement(WeekWrapper, (0, _extends2.default)({
      isAllDay: isAllDay
    }, eventRowProps), levels.map(function (segs, idx) {
      return _react.default.createElement(_EventRow.default, (0, _extends2.default)({
        key: idx,
        segments: segs
      }, eventRowProps));
    }), !!extra.length && _react.default.createElement(_EventEndingRow.default, (0, _extends2.default)({
      segments: extra,
      onShowMore: this.handleShowMore
    }, eventRowProps)))));
  };

  return DateContentRow;
}(_react.default.Component);

DateContentRow.propTypes = propTypes;
DateContentRow.defaultProps = defaultProps;
var _default = DateContentRow;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/DateHeader.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/DateHeader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown;

  if (!drilldownView) {
    return _react.default.createElement("span", null, label);
  }

  return _react.default.createElement("a", {
    href: "#",
    onClick: onDrillDown
  }, label);
};

DateHeader.propTypes = {
  label: _propTypes.default.node,
  date: _propTypes.default.instanceOf(Date),
  drilldownView: _propTypes.default.string,
  onDrillDown: _propTypes.default.func,
  isOffRange: _propTypes.default.bool
};
var _default = DateHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Day.js":
/*!****************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Day.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _TimeGrid = _interopRequireDefault(__webpack_require__(/*! ./TimeGrid */ "./node_modules/react-big-calendar/lib/TimeGrid.js"));

var Day =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Day, _React$Component);

  function Day() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Day.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["date"]);
    var range = Day.range(date);
    return _react.default.createElement(_TimeGrid.default, (0, _extends2.default)({}, props, {
      range: range,
      eventOffset: 10
    }));
  };

  return Day;
}(_react.default.Component);

Day.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired
};

Day.range = function (date) {
  return [_dates.default.startOf(date, 'day')];
};

Day.navigate = function (date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'day');

    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'day');

    default:
      return date;
  }
};

Day.title = function (date, _ref) {
  var localizer = _ref.localizer;
  return localizer.format(date, 'dayHeaderFormat');
};

var _default = Day;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/DayColumn.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/DayColumn.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Selection = _interopRequireWildcard(__webpack_require__(/*! ./Selection */ "./node_modules/react-big-calendar/lib/Selection.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var TimeSlotUtils = _interopRequireWildcard(__webpack_require__(/*! ./utils/TimeSlots */ "./node_modules/react-big-calendar/lib/utils/TimeSlots.js"));

var _selection = __webpack_require__(/*! ./utils/selection */ "./node_modules/react-big-calendar/lib/utils/selection.js");

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var DayEventLayout = _interopRequireWildcard(__webpack_require__(/*! ./utils/DayEventLayout */ "./node_modules/react-big-calendar/lib/utils/DayEventLayout.js"));

var _TimeSlotGroup = _interopRequireDefault(__webpack_require__(/*! ./TimeSlotGroup */ "./node_modules/react-big-calendar/lib/TimeSlotGroup.js"));

var _TimeGridEvent = _interopRequireDefault(__webpack_require__(/*! ./TimeGridEvent */ "./node_modules/react-big-calendar/lib/TimeGridEvent.js"));

var DayColumn =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DayColumn, _React$Component);

  function DayColumn() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;

    _this.renderEvents = function () {
      var _this$props = _this.props,
          events = _this$props.events,
          isRtl = _this$props.rtl,
          selected = _this$props.selected,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          getters = _this$props.getters,
          components = _this$props.components,
          step = _this$props.step,
          timeslots = _this$props.timeslots;

      var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
          slotMetrics = _assertThisInitialize.slotMetrics;

      var messages = localizer.messages;
      var styledEvents = DayEventLayout.getStyledEvents({
        events: events,
        accessors: accessors,
        slotMetrics: slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2)
      });
      return styledEvents.map(function (_ref, idx) {
        var _React$createElement;

        var event = _ref.event,
            style = _ref.style;
        var end = accessors.end(event);
        var start = accessors.start(event);
        var format = 'eventTimeRangeFormat';
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
        if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
          start: start,
          end: end
        }, format);
        var continuesEarlier = startsBeforeDay || slotMetrics.startsBefore(start);
        var continuesLater = startsAfterDay || slotMetrics.startsAfter(end);
        return _react.default.createElement(_TimeGridEvent.default, (_React$createElement = {
          style: style,
          event: event,
          label: label,
          key: 'evt_' + idx,
          getters: getters,
          isRtl: isRtl
        }, _React$createElement["getters"] = getters, _React$createElement.components = components, _React$createElement.continuesEarlier = continuesEarlier, _React$createElement.continuesLater = continuesLater, _React$createElement.accessors = accessors, _React$createElement.selected = (0, _selection.isSelected)(event, selected), _React$createElement.onClick = function onClick(e) {
          return _this._select(event, e);
        }, _React$createElement.onDoubleClick = function onDoubleClick(e) {
          return _this._doubleClick(event, e);
        }, _React$createElement));
      });
    };

    _this._selectable = function () {
      var node = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      var selector = _this._selector = new _Selection.default(function () {
        return (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      }, {
        longPressThreshold: _this.props.longPressThreshold
      });

      var maybeSelect = function maybeSelect(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate,
            end = state.endDate;

        if (onSelecting) {
          if (_dates.default.eq(current.startDate, start, 'minutes') && _dates.default.eq(current.endDate, end, 'minutes') || onSelecting({
            start: start,
            end: end
          }) === false) return;
        }

        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };

      var selectionState = function selectionState(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, (0, _Selection.getBoundsForNode)(node));

        if (!_this.state.selecting) _this._initialSlot = currentSlot;
        var initialSlot = _this._initialSlot;
        if (initialSlot === currentSlot) currentSlot = _this.slotMetrics.nextSlot(initialSlot);

        var selectRange = _this.slotMetrics.getRange(_dates.default.min(initialSlot, currentSlot), _dates.default.max(initialSlot, currentSlot));

        return (0, _extends2.default)({}, selectRange, {
          selecting: true,
          top: selectRange.top + "%",
          height: selectRange.height + "%"
        });
      };

      var selectorClicksHandler = function selectorClicksHandler(box, actionType) {
        if (!(0, _Selection.isEvent)((0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))), box)) {
          var _selectionState = selectionState(box),
              startDate = _selectionState.startDate,
              endDate = _selectionState.endDate;

          _this._selectSlot({
            startDate: startDate,
            endDate: endDate,
            action: actionType,
            box: box
          });
        }

        _this.setState({
          selecting: false
        });
      };

      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('beforeSelect', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !(0, _Selection.isEvent)((0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))), box);
      });
      selector.on('click', function (box) {
        return selectorClicksHandler(box, 'click');
      });
      selector.on('doubleClick', function (box) {
        return selectorClicksHandler(box, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        if (_this.state.selecting) {
          _this._selectSlot((0, _extends2.default)({}, _this.state, {
            action: 'select',
            bounds: bounds
          }));

          _this.setState({
            selecting: false
          });
        }
      });
      selector.on('reset', function () {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };

    _this._teardownSelectable = function () {
      if (!_this._selector) return;

      _this._selector.teardown();

      _this._selector = null;
    };

    _this._selectSlot = function (_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate,
          action = _ref2.action,
          bounds = _ref2.bounds,
          box = _ref2.box;
      var current = startDate,
          slots = [];

      while (_dates.default.lte(current, endDate)) {
        slots.push(current);
        current = _dates.default.add(current, _this.props.step, 'minutes');
      }

      (0, _helpers.notify)(_this.props.onSelectSlot, {
        slots: slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action: action,
        bounds: bounds,
        box: box
      });
    };

    _this._select = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    _this._doubleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (0, _helpers.notify)(_this.props.onDoubleClickEvent, args);
    };

    _this.slotMetrics = TimeSlotUtils.getSlotMetrics(_this.props);
    return _this;
  }

  var _proto = DayColumn.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();

    if (this.props.isNow) {
      this.setTimeIndicatorPositionUpdateInterval();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();

    this.clearTimeIndicatorInterval();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
    this.slotMetrics = this.slotMetrics.update(nextProps);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.isNow !== this.props.isNow) {
      this.clearTimeIndicatorInterval();

      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval(prevState.timeIndicatorPosition === this.state.timeIndicatorPosition);
      }
    }
  };

  /**
   * @param tail {Boolean} - whether `positionTimeIndicator` call should be
   *   deferred or called upon setting interval (`true` - if deferred);
   */
  _proto.setTimeIndicatorPositionUpdateInterval = function setTimeIndicatorPositionUpdateInterval(tail) {
    var _this2 = this;

    if (tail === void 0) {
      tail = false;
    }

    if (!this.intervalTriggered && !tail) {
      this.positionTimeIndicator();
    }

    this._timeIndicatorTimeout = window.setTimeout(function () {
      _this2.intervalTriggered = true;

      _this2.positionTimeIndicator();

      _this2.setTimeIndicatorPositionUpdateInterval();
    }, 60000);
  };

  _proto.clearTimeIndicatorInterval = function clearTimeIndicatorInterval() {
    this.intervalTriggered = false;
    window.clearTimeout(this._timeIndicatorTimeout);
  };

  _proto.positionTimeIndicator = function positionTimeIndicator() {
    var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        getNow = _this$props2.getNow;
    var current = getNow();

    if (current >= min && current <= max) {
      var _this$slotMetrics$get = this.slotMetrics.getRange(current, current),
          top = _this$slotMetrics$get.top;

      this.setState({
        timeIndicatorPosition: top
      });
    } else {
      this.clearTimeIndicatorInterval();
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        max = _this$props3.max,
        rtl = _this$props3.rtl,
        isNow = _this$props3.isNow,
        resource = _this$props3.resource,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer,
        _this$props3$getters = _this$props3.getters,
        dayProp = _this$props3$getters.dayProp,
        getters = (0, _objectWithoutPropertiesLoose2.default)(_this$props3$getters, ["dayProp"]),
        _this$props3$componen = _this$props3.components,
        EventContainer = _this$props3$componen.eventContainerWrapper,
        components = (0, _objectWithoutPropertiesLoose2.default)(_this$props3$componen, ["eventContainerWrapper"]);
    var slotMetrics = this.slotMetrics;
    var _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    var selectDates = {
      start: startDate,
      end: endDate
    };

    var _dayProp = dayProp(max),
        className = _dayProp.className,
        style = _dayProp.style;

    return _react.default.createElement("div", {
      style: style,
      className: (0, _classnames.default)(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today', // WHY
      selecting && 'rbc-slot-selecting')
    }, slotMetrics.groups.map(function (grp, idx) {
      return _react.default.createElement(_TimeSlotGroup.default, {
        key: idx,
        group: grp,
        resource: resource,
        getters: getters,
        components: components
      });
    }), _react.default.createElement(EventContainer, {
      localizer: localizer,
      resource: resource,
      accessors: accessors,
      getters: getters,
      components: components,
      slotMetrics: slotMetrics
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-events-container', rtl && 'rtl')
    }, this.renderEvents())), selecting && _react.default.createElement("div", {
      className: "rbc-slot-selection",
      style: {
        top: top,
        height: height
      }
    }, _react.default.createElement("span", null, localizer.format(selectDates, 'selectRangeFormat'))), isNow && _react.default.createElement("div", {
      className: "rbc-current-time-indicator",
      style: {
        top: this.state.timeIndicatorPosition + "%"
      }
    }));
  };

  return DayColumn;
}(_react.default.Component);

DayColumn.propTypes = {
  events: _propTypes.default.array.isRequired,
  step: _propTypes.default.number.isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  getNow: _propTypes.default.func.isRequired,
  isNow: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  showMultiDayTimes: _propTypes.default.bool,
  culture: _propTypes.default.string,
  timeslots: _propTypes.default.number,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes.default.number,
  longPressThreshold: _propTypes.default.number,
  onSelecting: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEvent: _propTypes.default.func.isRequired,
  onDoubleClickEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dragThroughEvents: _propTypes.default.bool,
  resource: _propTypes.default.any
};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var _default = DayColumn;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/EventCell.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/EventCell.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var propTypes = {
  event: _propTypes.default.object.isRequired,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.instanceOf(Date),
  selected: _propTypes.default.bool,
  isAllDay: _propTypes.default.bool,
  continuesPrior: _propTypes.default.bool,
  continuesAfter: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func
};

var EventCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EventCell, _React$Component);

  function EventCell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventCell.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components"]);
    var title = accessors.title(event);
    var tooltip = accessors.tooltip(event);
    var end = accessors.end(event);
    var start = accessors.start(event);
    var allDay = accessors.allDay(event);
    var showAsAllDay = isAllDay || allDay || _dates.default.diff(start, _dates.default.ceil(end, 'day'), 'day') > 1;
    var userProps = getters.eventProp(event, start, end, selected);

    var content = _react.default.createElement("div", {
      className: "rbc-event-content",
      title: tooltip || undefined
    }, Event ? _react.default.createElement(Event, {
      event: event,
      title: title,
      isAllDay: allDay,
      localizer: localizer
    }) : title);

    return _react.default.createElement(EventWrapper, (0, _extends2.default)({}, this.props, {
      type: "date"
    }), _react.default.createElement("button", (0, _extends2.default)({}, props, {
      style: (0, _extends2.default)({}, userProps.style, style),
      className: (0, _classnames.default)('rbc-event', className, userProps.className, {
        'rbc-selected': selected,
        'rbc-event-allday': showAsAllDay,
        'rbc-event-continues-prior': continuesPrior,
        'rbc-event-continues-after': continuesAfter
      }),
      onClick: function onClick(e) {
        return onSelect && onSelect(event, e);
      },
      onDoubleClick: function onDoubleClick(e) {
        return _onDoubleClick && _onDoubleClick(event, e);
      }
    }), typeof children === 'function' ? children(content) : content));
  };

  return EventCell;
}(_react.default.Component);

EventCell.propTypes = propTypes;
var _default = EventCell;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/EventEndingRow.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/EventEndingRow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _EventRowMixin = _interopRequireDefault(__webpack_require__(/*! ./EventRowMixin */ "./node_modules/react-big-calendar/lib/EventRowMixin.js"));

var _eventLevels = __webpack_require__(/*! ./utils/eventLevels */ "./node_modules/react-big-calendar/lib/utils/eventLevels.js");

var _range = _interopRequireDefault(__webpack_require__(/*! lodash/range */ "lodash/range"));

var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};

var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function (seg) {
    return isSegmentInSlot(seg, slot);
  }).length;
};

var EventEndingRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EventEndingRow, _React$Component);

  function EventEndingRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventEndingRow.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
    var rowSegments = (0, _eventLevels.eventLevels)(segments).levels[0];
    var current = 1,
        lastEnd = 1,
        row = [];

    while (current <= slots) {
      var key = '_lvl_' + current;

      var _ref = rowSegments.filter(function (seg) {
        return isSegmentInSlot(seg, current);
      })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span; //eslint-disable-line


      if (!event) {
        current++;
        continue;
      }

      var gap = Math.max(0, left - lastEnd);

      if (this.canRenderSlotEvent(left, span)) {
        var content = _EventRowMixin.default.renderEvent(this.props, event);

        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
        lastEnd = current = right + 1;
      } else {
        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(_EventRowMixin.default.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        lastEnd = current = current + 1;
      }
    }

    return _react.default.createElement("div", {
      className: "rbc-row"
    }, row);
  };

  _proto.canRenderSlotEvent = function canRenderSlotEvent(slot, span) {
    var segments = this.props.segments;
    return (0, _range.default)(slot, slot + span).every(function (s) {
      var count = eventsInSlot(segments, s);
      return count === 1;
    });
  };

  _proto.renderShowMore = function renderShowMore(segments, slot) {
    var _this = this;

    var localizer = this.props.localizer;
    var count = eventsInSlot(segments, slot);
    return count ? _react.default.createElement("a", {
      key: 'sm_' + slot,
      href: "#",
      className: 'rbc-show-more',
      onClick: function onClick(e) {
        return _this.showMore(slot, e);
      }
    }, localizer.messages.showMore(count)) : false;
  };

  _proto.showMore = function showMore(slot, e) {
    e.preventDefault();
    this.props.onShowMore(slot);
  };

  return EventEndingRow;
}(_react.default.Component);

EventEndingRow.propTypes = (0, _extends2.default)({
  segments: _propTypes.default.array,
  slots: _propTypes.default.number,
  onShowMore: _propTypes.default.func
}, _EventRowMixin.default.propTypes);
EventEndingRow.defaultProps = (0, _extends2.default)({}, _EventRowMixin.default.defaultProps);
var _default = EventEndingRow;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/EventRow.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/EventRow.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _EventRowMixin = _interopRequireDefault(__webpack_require__(/*! ./EventRowMixin */ "./node_modules/react-big-calendar/lib/EventRowMixin.js"));

var EventRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EventRow, _React$Component);

  function EventRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventRow.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
    var lastEnd = 1;
    return _react.default.createElement("div", {
      className: (0, _classnames.default)(className, 'rbc-row')
    }, segments.reduce(function (row, _ref, li) {
      var event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
      var key = '_lvl_' + li;
      var gap = left - lastEnd;

      var content = _EventRowMixin.default.renderEvent(_this.props, event);

      if (gap) row.push(_EventRowMixin.default.renderSpan(slots, gap, key + "_gap"));
      row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
      lastEnd = right + 1;
      return row;
    }, []));
  };

  return EventRow;
}(_react.default.Component);

EventRow.propTypes = (0, _extends2.default)({
  segments: _propTypes.default.array
}, _EventRowMixin.default.propTypes);
EventRow.defaultProps = (0, _extends2.default)({}, _EventRowMixin.default.defaultProps);
var _default = EventRow;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/EventRowMixin.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/EventRowMixin.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _EventCell = _interopRequireDefault(__webpack_require__(/*! ./EventCell */ "./node_modules/react-big-calendar/lib/EventCell.js"));

var _selection = __webpack_require__(/*! ./utils/selection */ "./node_modules/react-big-calendar/lib/utils/selection.js");

/* eslint-disable react/prop-types */
var _default = {
  propTypes: {
    slotMetrics: _propTypes.default.object.isRequired,
    selected: _propTypes.default.object,
    isAllDay: _propTypes.default.bool,
    accessors: _propTypes.default.object.isRequired,
    localizer: _propTypes.default.object.isRequired,
    components: _propTypes.default.object.isRequired,
    getters: _propTypes.default.object.isRequired,
    onSelect: _propTypes.default.func,
    onDoubleClick: _propTypes.default.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected,
        _ = props.isAllDay,
        accessors = props.accessors,
        getters = props.getters,
        onSelect = props.onSelect,
        onDoubleClick = props.onDoubleClick,
        localizer = props.localizer,
        slotMetrics = props.slotMetrics,
        components = props.components;
    var continuesPrior = slotMetrics.continuesPrior(event);
    var continuesAfter = slotMetrics.continuesAfter(event);
    return _react.default.createElement(_EventCell.default, {
      event: event,
      getters: getters,
      localizer: localizer,
      accessors: accessors,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      selected: (0, _selection.isSelected)(event, selected)
    });
  },
  renderSpan: function renderSpan(slots, len, key, content) {
    if (content === void 0) {
      content = ' ';
    }

    var per = Math.abs(len) / slots * 100 + '%';
    return _react.default.createElement("div", {
      key: key,
      className: "rbc-row-segment" // IE10/11 need max-width. flex-basis doesn't respect box-sizing
      ,
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/EventWrapper.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/EventWrapper.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _NoopWrapper = _interopRequireDefault(__webpack_require__(/*! ./NoopWrapper */ "./node_modules/react-big-calendar/lib/NoopWrapper.js"));

var _default = _NoopWrapper.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Header.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Header.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var Header = function Header(_ref) {
  var label = _ref.label;
  return _react.default.createElement("span", null, label);
};

Header.propTypes = {
  label: _propTypes.default.node
};
var _default = Header;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Month.js":
/*!******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Month.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _chunk = _interopRequireDefault(__webpack_require__(/*! lodash/chunk */ "lodash/chunk"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var _position = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/position */ "./node_modules/dom-helpers/query/position.js"));

var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/requestAnimationFrame */ "./node_modules/dom-helpers/util/requestAnimationFrame.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! ./Popup */ "./node_modules/react-big-calendar/lib/Popup.js"));

var _Overlay = _interopRequireDefault(__webpack_require__(/*! react-overlays/lib/Overlay */ "./node_modules/react-overlays/lib/Overlay.js"));

var _DateContentRow = _interopRequireDefault(__webpack_require__(/*! ./DateContentRow */ "./node_modules/react-big-calendar/lib/DateContentRow.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./node_modules/react-big-calendar/lib/Header.js"));

var _DateHeader = _interopRequireDefault(__webpack_require__(/*! ./DateHeader */ "./node_modules/react-big-calendar/lib/DateHeader.js"));

var _eventLevels = __webpack_require__(/*! ./utils/eventLevels */ "./node_modules/react-big-calendar/lib/utils/eventLevels.js");

var eventsForWeek = function eventsForWeek(evts, start, end, accessors) {
  return evts.filter(function (e) {
    return (0, _eventLevels.inRange)(e, start, end, accessors);
  });
};

var propTypes = {
  events: _propTypes.default.array.isRequired,
  date: _propTypes.default.instanceOf(Date),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  step: _propTypes.default.number,
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onShowMore: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  popup: _propTypes.default.bool,
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })])
};

var MonthView =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(MonthView, _React$Component);

  function MonthView() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.getContainer = function () {
      return (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    };

    _this.renderWeek = function (week, weekIdx) {
      var _this$props = _this.props,
          events = _this$props.events,
          components = _this$props.components,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          selected = _this$props.selected,
          date = _this$props.date,
          localizer = _this$props.localizer,
          longPressThreshold = _this$props.longPressThreshold,
          accessors = _this$props.accessors,
          getters = _this$props.getters;
      var _this$state = _this.state,
          needLimitMeasure = _this$state.needLimitMeasure,
          rowLimit = _this$state.rowLimit;
      events = eventsForWeek(events, week[0], week[week.length - 1], accessors);
      events.sort(function (a, b) {
        return (0, _eventLevels.sortEvents)(a, b, accessors);
      });
      return _react.default.createElement(_DateContentRow.default, {
        key: weekIdx,
        ref: weekIdx === 0 ? 'slotRow' : undefined,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow,
        date: date,
        range: week,
        events: events,
        maxRows: rowLimit,
        selected: selected,
        selectable: selectable,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold: longPressThreshold,
        rtl: _this.props.rtl
      });
    };

    _this.readerDateHeading = function (_ref) {
      var date = _ref.date,
          className = _ref.className,
          props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["date", "className"]);
      var _this$props2 = _this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer;

      var isOffRange = _dates.default.month(date) !== _dates.default.month(currentDate);

      var isCurrent = _dates.default.eq(date, currentDate, 'day');

      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dateFormat');
      var DateHeaderComponent = _this.props.components.dateHeader || _DateHeader.default;
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current')
      }), _react.default.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date, drilldownView, e);
        }
      }));
    };

    _this.handleSelectSlot = function (range, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function () {
        return _this.selectDates(slotInfo);
      });
    };

    _this.handleHeadingClick = function (date, view, e) {
      e.preventDefault();

      _this.clearSelection();

      (0, _helpers.notify)(_this.props.onDrillDown, [date, view]);
    };

    _this.handleSelectEvent = function () {
      _this.clearSelection();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (0, _helpers.notify)(_this.props.onDoubleClickEvent, args);
    };

    _this.handleShowMore = function (events, date, cell, slot) {
      var _this$props3 = _this.props,
          popup = _this$props3.popup,
          onDrillDown = _this$props3.onDrillDown,
          onShowMore = _this$props3.onShowMore,
          getDrilldownView = _this$props3.getDrilldownView; //cancel any pending selections so only the event click goes through.

      _this.clearSelection();

      if (popup) {
        var position = (0, _position.default)(cell, (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))));

        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position
          }
        });
      } else {
        (0, _helpers.notify)(onDrillDown, [date, getDrilldownView(date) || _constants.views.DAY]);
      }

      (0, _helpers.notify)(onShowMore, [events, date, slot]);
    };

    _this._bgRows = [];
    _this._pendingSelection = [];
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
    return _this;
  }

  var _proto = MonthView.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
    var date = _ref2.date;
    this.setState({
      needLimitMeasure: !_dates.default.eq(date, this.props.date)
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var running;
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    window.addEventListener('resize', this._resizeListener = function () {
      if (!running) {
        (0, _requestAnimationFrame.default)(function () {
          running = false;

          _this2.setState({
            needLimitMeasure: true
          }); //eslint-disable-line

        });
      }
    }, false);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener, false);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = _dates.default.visibleDays(date, localizer),
        weeks = (0, _chunk.default)(month, 7);

    this._weekCount = weeks.length;
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-month-view', className)
    }, _react.default.createElement("div", {
      className: "rbc-row rbc-month-header"
    }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
  };

  _proto.renderHeaders = function renderHeaders(row) {
    var _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components;
    var first = row[0];
    var last = row[row.length - 1];
    var HeaderComponent = components.header || _Header.default;
    return _dates.default.range(first, last, 'day').map(function (day, idx) {
      return _react.default.createElement("div", {
        key: 'header_' + idx,
        className: "rbc-header"
      }, _react.default.createElement(HeaderComponent, {
        date: day,
        localizer: localizer,
        label: localizer.format(day, 'weekdayFormat')
      }));
    });
  };

  _proto.renderOverlay = function renderOverlay() {
    var _this3 = this;

    var overlay = this.state && this.state.overlay || {};
    var _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected;
    return _react.default.createElement(_Overlay.default, {
      rootClose: true,
      placement: "bottom",
      container: this,
      show: !!overlay.position,
      onHide: function onHide() {
        return _this3.setState({
          overlay: null
        });
      }
    }, _react.default.createElement(_Popup.default, {
      accessors: accessors,
      getters: getters,
      selected: selected,
      components: components,
      localizer: localizer,
      position: overlay.position,
      events: overlay.events,
      slotStart: overlay.date,
      slotEnd: overlay.end,
      onSelect: this.handleSelectEvent,
      onDoubleClick: this.handleDoubleClickEvent
    }));
  };

  _proto.measureRowLimit = function measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.refs.slotRow.getRowLimit()
    });
  };

  _proto.selectDates = function selectDates(slotInfo) {
    var slots = this._pendingSelection.slice();

    this._pendingSelection = [];
    slots.sort(function (a, b) {
      return +a - +b;
    });
    (0, _helpers.notify)(this.props.onSelectSlot, {
      slots: slots,
      start: slots[0],
      end: slots[slots.length - 1],
      action: slotInfo.action
    });
  };

  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };

  return MonthView;
}(_react.default.Component);

MonthView.displayName = 'MonthView';
MonthView.propTypes = propTypes;

MonthView.range = function (date, _ref3) {
  var localizer = _ref3.localizer;

  var start = _dates.default.firstVisibleDay(date, localizer);

  var end = _dates.default.lastVisibleDay(date, localizer);

  return {
    start: start,
    end: end
  };
};

MonthView.navigate = function (date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'month');

    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'month');

    default:
      return date;
  }
};

MonthView.title = function (date, _ref4) {
  var localizer = _ref4.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};

var _default = MonthView;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/NoopWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/NoopWrapper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function NoopWrapper(props) {
  return props.children;
}

var _default = NoopWrapper;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Popup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Popup.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _offset = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/offset */ "./node_modules/dom-helpers/query/offset.js"));

var _scrollTop = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/scrollTop */ "./node_modules/dom-helpers/query/scrollTop.js"));

var _scrollLeft = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/scrollLeft */ "./node_modules/dom-helpers/query/scrollLeft.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _EventCell = _interopRequireDefault(__webpack_require__(/*! ./EventCell */ "./node_modules/react-big-calendar/lib/EventCell.js"));

var _selection = __webpack_require__(/*! ./utils/selection */ "./node_modules/react-big-calendar/lib/utils/selection.js");

var propTypes = {
  position: _propTypes.default.object,
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })]),
  events: _propTypes.default.array,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.number
};

var Popup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Popup, _React$Component);

  function Popup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props$popupOffs = this.props.popupOffset,
        popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
        _getOffset = (0, _offset.default)(this.refs.root),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + (0, _scrollTop.default)(window),
        viewRight = window.innerWidth + (0, _scrollLeft.default)(window),
        bottom = top + height,
        right = left + width;

    if (bottom > viewBottom || right > viewRight) {
      var topOffset, leftOffset;
      if (bottom > viewBottom) topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
      if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);
      this.setState({
        topOffset: topOffset,
        leftOffset: leftOffset
      }); //eslint-disable-line
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        events = _this$props.events,
        selected = _this$props.selected,
        getters = _this$props.getters,
        accessors = _this$props.accessors,
        components = _this$props.components,
        onSelect = _this$props.onSelect,
        onDoubleClick = _this$props.onDoubleClick,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        localizer = _this$props.localizer;
    var _this$props$position = this.props.position,
        left = _this$props$position.left,
        width = _this$props$position.width,
        top = _this$props$position.top,
        topOffset = (this.state || {}).topOffset || 0,
        leftOffset = (this.state || {}).leftOffset || 0;
    var style = {
      top: Math.max(0, top - topOffset),
      left: left - leftOffset,
      minWidth: width + width / 2
    };
    return _react.default.createElement("div", {
      ref: "root",
      style: style,
      className: "rbc-overlay"
    }, _react.default.createElement("div", {
      className: "rbc-overlay-header"
    }, localizer.format(slotStart, 'dayHeaderFormat')), events.map(function (event, idx) {
      return _react.default.createElement(_EventCell.default, {
        key: idx,
        type: "popup",
        event: event,
        getters: getters,
        onSelect: onSelect,
        accessors: accessors,
        components: components,
        onDoubleClick: onDoubleClick,
        continuesPrior: _dates.default.lt(accessors.end(event), slotStart, 'day'),
        continuesAfter: _dates.default.gte(accessors.start(event), slotEnd, 'day'),
        selected: (0, _selection.isSelected)(event, selected)
      });
    }));
  };

  return Popup;
}(_react.default.Component);

Popup.propTypes = propTypes;
var _default = Popup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Selection.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Selection.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getEventNodeFromPoint = getEventNodeFromPoint;
exports.isEvent = isEvent;
exports.objectsCollide = objectsCollide;
exports.getBoundsForNode = getBoundsForNode;
exports.default = void 0;

var _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _closest = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/closest */ "./node_modules/dom-helpers/query/closest.js"));

var _events = _interopRequireDefault(__webpack_require__(/*! dom-helpers/events */ "./node_modules/dom-helpers/events/index.js"));

function addEventListener(type, handler, target) {
  if (target === void 0) {
    target = document;
  }

  _events.default.on(target, type, handler, {
    passive: false
  });

  return {
    remove: function remove() {
      _events.default.off(target, type, handler);
    }
  };
}

function isOverContainer(container, x, y) {
  return !container || (0, _contains.default)(container, document.elementFromPoint(x, y));
}

function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return (0, _closest.default)(target, '.rbc-event', node);
}

function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}

function getEventCoordinates(e) {
  var target = e;

  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }

  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}

var clickTolerance = 5;
var clickInterval = 250;

var Selection =
/*#__PURE__*/
function () {
  function Selection(node, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$global = _ref2.global,
        global = _ref2$global === void 0 ? false : _ref2$global,
        _ref2$longPressThresh = _ref2.longPressThreshold,
        longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;

    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this); // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
    // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

    this._onTouchMoveWindowListener = addEventListener('touchmove', function () {}, window);
    this._onKeyDownListener = addEventListener('keydown', this._keyListener);
    this._onKeyUpListener = addEventListener('keyup', this._keyListener);

    this._addInitialEventListener();
  }

  var _proto = Selection.prototype;

  _proto.on = function on(type, handler) {
    var handlers = this._listeners[type] || (this._listeners[type] = []);
    handlers.push(handler);
    return {
      remove: function remove() {
        var idx = handlers.indexOf(handler);
        if (idx !== -1) handlers.splice(idx, 1);
      }
    };
  };

  _proto.emit = function emit(type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result;
    var handlers = this._listeners[type] || [];
    handlers.forEach(function (fn) {
      if (result === undefined) result = fn.apply(void 0, args);
    });
    return result;
  };

  _proto.teardown = function teardown() {
    this.listeners = Object.create(null);
    this._onTouchMoveWindowListener && this._onTouchMoveWindowListener.remove();
    this._onInitialEventListener && this._onInitialEventListener.remove();
    this._onEndListener && this._onEndListener.remove();
    this._onEscListener && this._onEscListener.remove();
    this._onMoveListener && this._onMoveListener.remove();
    this._onKeyUpListener && this._onKeyUpListener.remove();
    this._onKeyDownListener && this._onKeyDownListener.remove();
  };

  _proto.isSelected = function isSelected(node) {
    var box = this._selectRect;
    if (!box || !this.selecting) return false;
    return objectsCollide(box, getBoundsForNode(node));
  };

  _proto.filter = function filter(items) {
    var box = this._selectRect; //not selecting

    if (!box || !this.selecting) return [];
    return items.filter(this.isSelected, this);
  }; // Adds a listener that will call the handler only after the user has pressed on the screen
  // without moving their finger for 250ms.


  _proto._addLongPressListener = function _addLongPressListener(handler, initialEvent) {
    var _this = this;

    var timer = null;
    var touchMoveListener = null;
    var touchEndListener = null;

    var handleTouchStart = function handleTouchStart(initialEvent) {
      timer = setTimeout(function () {
        cleanup();
        handler(initialEvent);
      }, _this.longPressThreshold);
      touchMoveListener = addEventListener('touchmove', function () {
        return cleanup();
      });
      touchEndListener = addEventListener('touchend', function () {
        return cleanup();
      });
    };

    var touchStartListener = addEventListener('touchstart', handleTouchStart);

    var cleanup = function cleanup() {
      if (timer) {
        clearTimeout(timer);
      }

      if (touchMoveListener) {
        touchMoveListener.remove();
      }

      if (touchEndListener) {
        touchEndListener.remove();
      }

      timer = null;
      touchMoveListener = null;
      touchEndListener = null;
    };

    if (initialEvent) {
      handleTouchStart(initialEvent);
    }

    return {
      remove: function remove() {
        cleanup();
        touchStartListener.remove();
      }
    };
  }; // Listen for mousedown and touchstart events. When one is received, disable the other and setup
  // future event handling based on the type of event.


  _proto._addInitialEventListener = function _addInitialEventListener() {
    var _this2 = this;

    var mouseDownListener = addEventListener('mousedown', function (e) {
      _this2._onInitialEventListener.remove();

      _this2._handleInitialEvent(e);

      _this2._onInitialEventListener = addEventListener('mousedown', _this2._handleInitialEvent);
    });
    var touchStartListener = addEventListener('touchstart', function (e) {
      _this2._onInitialEventListener.remove();

      _this2._onInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
    });
    this._onInitialEventListener = {
      remove: function remove() {
        mouseDownListener.remove();
        touchStartListener.remove();
      }
    };
  };

  _proto._handleInitialEvent = function _handleInitialEvent(e) {
    var _getEventCoordinates = getEventCoordinates(e),
        clientX = _getEventCoordinates.clientX,
        clientY = _getEventCoordinates.clientY,
        pageX = _getEventCoordinates.pageX,
        pageY = _getEventCoordinates.pageY;

    var node = this.container(),
        collides,
        offsetData; // Right clicks

    if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;

    if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
      var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;

      offsetData = getBoundsForNode(node);
      collides = objectsCollide({
        top: offsetData.top - top,
        left: offsetData.left - left,
        bottom: offsetData.bottom + bottom,
        right: offsetData.right + right
      }, {
        top: pageY,
        left: pageX
      });
      if (!collides) return;
    }

    var result = this.emit('beforeSelect', this._initialEventData = {
      isTouch: /^touch/.test(e.type),
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    if (result === false) return;

    switch (e.type) {
      case 'mousedown':
        this._onEndListener = addEventListener('mouseup', this._handleTerminatingEvent);
        this._onEscListener = addEventListener('keydown', this._handleTerminatingEvent);
        this._onMoveListener = addEventListener('mousemove', this._handleMoveEvent);
        break;

      case 'touchstart':
        this._handleMoveEvent(e);

        this._onEndListener = addEventListener('touchend', this._handleTerminatingEvent);
        this._onMoveListener = addEventListener('touchmove', this._handleMoveEvent);
        break;

      default:
        break;
    }
  };

  _proto._handleTerminatingEvent = function _handleTerminatingEvent(e) {
    var _getEventCoordinates2 = getEventCoordinates(e),
        pageX = _getEventCoordinates2.pageX,
        pageY = _getEventCoordinates2.pageY;

    this.selecting = false;
    this._onEndListener && this._onEndListener.remove();
    this._onMoveListener && this._onMoveListener.remove();
    if (!this._initialEventData) return;
    var inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
    var bounds = this._selectRect;
    var click = this.isClick(pageX, pageY);
    this._initialEventData = null;

    if (e.key === 'Escape') {
      return this.emit('reset');
    }

    if (!inRoot) {
      return this.emit('reset');
    }

    if (click && inRoot) {
      return this._handleClickEvent(e);
    } // User drag-clicked in the Selectable area


    if (!click) return this.emit('select', bounds);
  };

  _proto._handleClickEvent = function _handleClickEvent(e) {
    var _getEventCoordinates3 = getEventCoordinates(e),
        pageX = _getEventCoordinates3.pageX,
        pageY = _getEventCoordinates3.pageY,
        clientX = _getEventCoordinates3.clientX,
        clientY = _getEventCoordinates3.clientY;

    var now = new Date().getTime();

    if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
      // Double click event
      this._lastClickData = null;
      return this.emit('doubleClick', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    } // Click event


    this._lastClickData = {
      timestamp: now
    };
    return this.emit('click', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
  };

  _proto._handleMoveEvent = function _handleMoveEvent(e) {
    if (this._initialEventData === null) {
      return;
    }

    var _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y;

    var _getEventCoordinates4 = getEventCoordinates(e),
        pageX = _getEventCoordinates4.pageX,
        pageY = _getEventCoordinates4.pageY;

    var w = Math.abs(x - pageX);
    var h = Math.abs(y - pageY);
    var left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting; // Prevent emitting selectStart event until mouse is moved.
    // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.

    if (!old && !(w || h)) {
      return;
    }

    this.selecting = true;
    this._selectRect = {
      top: top,
      left: left,
      x: pageX,
      y: pageY,
      right: left + w,
      bottom: top + h
    };

    if (!old) {
      this.emit('selectStart', this._initialEventData);
    }

    if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect);
    e.preventDefault();
  };

  _proto._keyListener = function _keyListener(e) {
    this.ctrl = e.metaKey || e.ctrlKey;
  };

  _proto.isClick = function isClick(pageX, pageY) {
    var _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch;
    return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
  };

  return Selection;
}();
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */


function normalizeDistance(distance) {
  if (distance === void 0) {
    distance = 0;
  }

  if (typeof distance !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */


function objectsCollide(nodeA, nodeB, tolerance) {
  if (tolerance === void 0) {
    tolerance = 0;
  }

  var _getBoundsForNode = getBoundsForNode(nodeA),
      aTop = _getBoundsForNode.top,
      aLeft = _getBoundsForNode.left,
      _getBoundsForNode$rig = _getBoundsForNode.right,
      aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
      _getBoundsForNode$bot = _getBoundsForNode.bottom,
      aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;

  var _getBoundsForNode2 = getBoundsForNode(nodeB),
      bTop = _getBoundsForNode2.top,
      bLeft = _getBoundsForNode2.left,
      _getBoundsForNode2$ri = _getBoundsForNode2.right,
      bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
      _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
      bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;

  return !( // 'a' bottom doesn't touch 'b' top
  aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */


function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(),
      left = rect.left + pageOffset('left'),
      top = rect.top + pageOffset('top');
  return {
    top: top,
    left: left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}

function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}

var _default = Selection;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/TimeGrid.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/TimeGrid.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/requestAnimationFrame */ "./node_modules/dom-helpers/util/requestAnimationFrame.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _DayColumn = _interopRequireDefault(__webpack_require__(/*! ./DayColumn */ "./node_modules/react-big-calendar/lib/DayColumn.js"));

var _TimeGutter = _interopRequireDefault(__webpack_require__(/*! ./TimeGutter */ "./node_modules/react-big-calendar/lib/TimeGutter.js"));

var _width = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/width */ "./node_modules/dom-helpers/query/width.js"));

var _TimeGridHeader = _interopRequireDefault(__webpack_require__(/*! ./TimeGridHeader */ "./node_modules/react-big-calendar/lib/TimeGridHeader.js"));

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var _eventLevels = __webpack_require__(/*! ./utils/eventLevels */ "./node_modules/react-big-calendar/lib/utils/eventLevels.js");

var _Resources = _interopRequireDefault(__webpack_require__(/*! ./utils/Resources */ "./node_modules/react-big-calendar/lib/utils/Resources.js"));

var TimeGrid =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(TimeGrid, _Component);

  function TimeGrid(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleScroll = function (e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };

    _this.handleResize = function () {
      _requestAnimationFrame.default.cancel(_this.rafHandle);

      _this.rafHandle = (0, _requestAnimationFrame.default)(_this.checkOverflow);
    };

    _this.gutterRef = function (ref) {
      _this.gutter = ref && (0, _reactDom.findDOMNode)(ref);
    };

    _this.handleSelectAlldayEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    _this.handleSelectAllDaySlot = function (slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      (0, _helpers.notify)(onSelectSlot, {
        slots: slots,
        start: slots[0],
        end: slots[slots.length - 1],
        action: slotInfo.action
      });
    };

    _this.checkOverflow = function () {
      if (_this._updatingOverflow) return;
      var isOverflowing = _this.refs.content.scrollHeight > _this.refs.content.clientHeight;

      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;

        _this.setState({
          isOverflowing: isOverflowing
        }, function () {
          _this._updatingOverflow = false;
        });
      }
    };

    _this.memoizedResources = (0, _memoizeOne.default)(function (resources, accessors) {
      return (0, _Resources.default)(resources, accessors);
    });
    _this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    _this.scrollRef = _react.default.createRef();
    return _this;
  }

  var _proto = TimeGrid.prototype;

  _proto.componentWillMount = function componentWillMount() {
    this.calculateScroll();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.checkOverflow();

    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll();
    window.addEventListener('resize', this.handleResize);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);

    _requestAnimationFrame.default.cancel(this.rafHandle);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll(); //this.checkOverflow()
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this$props = this.props,
        range = _this$props.range,
        scrollToTime = _this$props.scrollToTime; // When paginating, reset scroll

    if (!_dates.default.eq(nextProps.range[0], range[0], 'minute') || !_dates.default.eq(nextProps.scrollToTime, scrollToTime, 'minute')) {
      this.calculateScroll(nextProps);
    }
  };

  _proto.renderEvents = function renderEvents(range, events, now) {
    var _this2 = this;

    var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        components = _this$props2.components,
        accessors = _this$props2.accessors,
        localizer = _this$props2.localizer;
    var resources = this.memoizedResources(this.props.resources, accessors);
    var groupedEvents = resources.groupEvents(events);
    return resources.map(function (_ref, i) {
      var id = _ref[0],
          resource = _ref[1];
      return range.map(function (date, jj) {
        var daysEvents = (groupedEvents.get(id) || []).filter(function (event) {
          return _dates.default.inRange(date, accessors.start(event), accessors.end(event), 'day');
        });
        return _react.default.createElement(_DayColumn.default, (0, _extends2.default)({}, _this2.props, {
          localizer: localizer,
          min: _dates.default.merge(date, min),
          max: _dates.default.merge(date, max),
          resource: resource && id,
          components: components,
          isNow: _dates.default.eq(date, now, 'day'),
          key: i + '-' + jj,
          date: date,
          events: daysEvents
        }));
      });
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        events = _this$props3.events,
        range = _this$props3.range,
        width = _this$props3.width,
        selected = _this$props3.selected,
        getNow = _this$props3.getNow,
        resources = _this$props3.resources,
        components = _this$props3.components,
        accessors = _this$props3.accessors,
        getters = _this$props3.getters,
        localizer = _this$props3.localizer,
        min = _this$props3.min,
        max = _this$props3.max,
        showMultiDayTimes = _this$props3.showMultiDayTimes,
        longPressThreshold = _this$props3.longPressThreshold;
    width = width || this.state.gutterWidth;
    var start = range[0],
        end = range[range.length - 1];
    this.slots = range.length;
    var allDayEvents = [],
        rangeEvents = [];
    events.forEach(function (event) {
      if ((0, _eventLevels.inRange)(event, start, end, accessors)) {
        var eStart = accessors.start(event),
            eEnd = accessors.end(event);

        if (accessors.allDay(event) || _dates.default.isJustDate(eStart) && _dates.default.isJustDate(eEnd) || !showMultiDayTimes && !_dates.default.eq(eStart, eEnd, 'day')) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });
    allDayEvents.sort(function (a, b) {
      return (0, _eventLevels.sortEvents)(a, b, accessors);
    });
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-time-view', resources && 'rbc-time-view-resources')
    }, _react.default.createElement(_TimeGridHeader.default, {
      range: range,
      events: allDayEvents,
      width: width,
      getNow: getNow,
      localizer: localizer,
      selected: selected,
      resources: this.memoizedResources(resources, accessors),
      selectable: this.props.selectable,
      accessors: accessors,
      getters: getters,
      components: components,
      scrollRef: this.scrollRef,
      isOverflowing: this.state.isOverflowing,
      longPressThreshold: longPressThreshold,
      onSelectSlot: this.handleSelectAllDaySlot,
      onSelectEvent: this.handleSelectAlldayEvent,
      onDoubleClickEvent: this.props.onDoubleClickEvent,
      onDrillDown: this.props.onDrillDown,
      getDrilldownView: this.props.getDrilldownView
    }), _react.default.createElement("div", {
      ref: "content",
      className: "rbc-time-content",
      onScroll: this.handleScroll
    }, _react.default.createElement(_TimeGutter.default, {
      date: start,
      ref: this.gutterRef,
      localizer: localizer,
      min: _dates.default.merge(start, min),
      max: _dates.default.merge(start, max),
      step: this.props.step,
      getNow: this.props.getNow,
      timeslots: this.props.timeslots,
      components: components,
      className: "rbc-time-gutter"
    }), this.renderEvents(range, rangeEvents, getNow())));
  };

  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };

  _proto.measureGutter = function measureGutter() {
    var width = (0, _width.default)(this.gutter);

    if (width && this.state.gutterWidth !== width) {
      this.setState({
        gutterWidth: width
      });
    }
  };

  _proto.applyScroll = function applyScroll() {
    if (this._scrollRatio) {
      var content = this.refs.content;
      content.scrollTop = content.scrollHeight * this._scrollRatio; // Only do this once

      this._scrollRatio = null;
    }
  };

  _proto.calculateScroll = function calculateScroll(props) {
    if (props === void 0) {
      props = this.props;
    }

    var _props = props,
        min = _props.min,
        max = _props.max,
        scrollToTime = _props.scrollToTime;

    var diffMillis = scrollToTime - _dates.default.startOf(scrollToTime, 'day');

    var totalMillis = _dates.default.diff(max, min);

    this._scrollRatio = diffMillis / totalMillis;
  };

  return TimeGrid;
}(_react.Component);

exports.default = TimeGrid;
TimeGrid.propTypes = {
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.array,
  step: _propTypes.default.number,
  timeslots: _propTypes.default.number,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
  showMultiDayTimes: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired
};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: _dates.default.startOf(new Date(), 'day'),
  max: _dates.default.endOf(new Date(), 'day'),
  scrollToTime: _dates.default.startOf(new Date(), 'day')
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/TimeGridEvent.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/TimeGridEvent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  var _extends2;

  var style = props.style,
      className = props.className,
      event = props.event,
      accessors = props.accessors,
      isRtl = props.isRtl,
      selected = props.selected,
      label = props.label,
      continuesEarlier = props.continuesEarlier,
      continuesLater = props.continuesLater,
      getters = props.getters,
      onClick = props.onClick,
      onDoubleClick = props.onDoubleClick,
      _props$components = props.components,
      Event = _props$components.event,
      EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end = accessors.end(event);
  var start = accessors.start(event);
  var userProps = getters.eventProp(event, start, end, selected);
  var height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset;
  var inner = [_react.default.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), _react.default.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event ? _react.default.createElement(Event, {
    event: event,
    title: title
  }) : title)];
  return _react.default.createElement(EventWrapper, (0, _extends3.default)({
    type: "time"
  }, props), _react.default.createElement("div", {
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    style: (0, _extends3.default)({}, userProps.style, (_extends2 = {
      top: top + "%",
      height: height + "%"
    }, _extends2[isRtl ? 'right' : 'left'] = Math.max(0, xOffset) + "%", _extends2.width = width + "%", _extends2)),
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: (0, _classnames.default)('rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesEarlier,
      'rbc-event-continues-later': continuesLater
    })
  }, inner));
}

var _default = TimeGridEvent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/TimeGridHeader.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/TimeGridHeader.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _DateContentRow = _interopRequireDefault(__webpack_require__(/*! ./DateContentRow */ "./node_modules/react-big-calendar/lib/DateContentRow.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./node_modules/react-big-calendar/lib/Header.js"));

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./node_modules/react-big-calendar/lib/utils/helpers.js");

var TimeGridHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TimeGridHeader, _React$Component);

  function TimeGridHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      (0, _helpers.notify)(_this.props.onDrillDown, [date, view]);
    };

    _this.renderRow = function (resource) {
      var _this$props = _this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          range = _this$props.range,
          getters = _this$props.getters,
          localizer = _this$props.localizer,
          accessors = _this$props.accessors,
          components = _this$props.components;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function (event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return _react.default.createElement(_DateContentRow.default, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: eventsToDisplay,
        resourceId: resourceId,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this.props.onSelectEvent,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold
      });
    };

    return _this;
  }

  var _proto = TimeGridHeader.prototype;

  _proto.renderHeaderCells = function renderHeaderCells(range) {
    var _this2 = this;

    var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent = _this$props2$componen === void 0 ? _Header.default : _this$props2$componen;
    var today = getNow();
    return range.map(function (date, i) {
      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dayFormat');

      var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style;

      var header = _react.default.createElement(HeaderComponent, {
        date: date,
        label: label,
        localizer: localizer
      });

      return _react.default.createElement("div", {
        key: i,
        style: style,
        className: (0, _classnames.default)('rbc-header', className, _dates.default.eq(date, today, 'day') && 'rbc-today')
      }, drilldownView ? _react.default.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this2.handleHeaderClick(date, drilldownView, e);
        }
      }, header) : _react.default.createElement("span", null, header));
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        isOverflowing = _this$props3.isOverflowing,
        TimeGutterHeader = _this$props3.components.timeGutterHeader;
    var style = {};

    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = (0, _scrollbarSize.default)() + "px";
    }

    var groupedEvents = resources.groupEvents(events);
    return _react.default.createElement("div", {
      style: style,
      ref: scrollRef,
      className: (0, _classnames.default)('rbc-time-header', isOverflowing && 'rbc-overflowing')
    }, _react.default.createElement("div", {
      className: "rbc-label rbc-time-header-gutter",
      style: {
        width: width,
        minWidth: width,
        maxWidth: width
      }
    }, TimeGutterHeader && _react.default.createElement(TimeGutterHeader, null)), resources.map(function (_ref, idx) {
      var id = _ref[0],
          resource = _ref[1];
      return _react.default.createElement("div", {
        className: "rbc-time-header-content",
        key: id || idx
      }, resource && _react.default.createElement("div", {
        className: "rbc-row rbc-row-resource"
      }, _react.default.createElement("div", {
        key: "resource_" + idx,
        className: "rbc-header"
      }, accessors.resourceTitle(resource))), _react.default.createElement("div", {
        className: "rbc-row rbc-time-header-cell" + (range.length <= 1 ? ' rbc-time-header-cell-single-day' : '')
      }, _this3.renderHeaderCells(range)), _react.default.createElement(_DateContentRow.default, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: groupedEvents.get(id) || [],
        resourceId: resource && id,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this3.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this3.props.onSelectEvent,
        onDoubleClick: _this3.props.onDoubleClickEvent,
        onSelectSlot: _this3.props.onSelectSlot,
        longPressThreshold: _this3.props.longPressThreshold
      }));
    }));
  };

  return TimeGridHeader;
}(_react.default.Component);

TimeGridHeader.propTypes = {
  range: _propTypes.default.array.isRequired,
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.object,
  getNow: _propTypes.default.func.isRequired,
  isOverflowing: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  localizer: _propTypes.default.object.isRequired,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  scrollRef: _propTypes.default.any
};
var _default = TimeGridHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/TimeGutter.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/TimeGutter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var TimeSlotUtils = _interopRequireWildcard(__webpack_require__(/*! ./utils/TimeSlots */ "./node_modules/react-big-calendar/lib/utils/TimeSlots.js"));

var _TimeSlotGroup = _interopRequireDefault(__webpack_require__(/*! ./TimeSlotGroup */ "./node_modules/react-big-calendar/lib/TimeSlotGroup.js"));

var TimeGutter =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(TimeGutter, _Component);

  function TimeGutter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.renderSlot = function (value, idx) {
      if (idx !== 0) return null;
      var _this$props = _this.props,
          localizer = _this$props.localizer,
          getNow = _this$props.getNow;

      var isNow = _this.slotMetrics.dateIsInGroup(getNow(), idx);

      return _react.default.createElement("span", {
        className: (0, _classnames.default)('rbc-label', isNow && 'rbc-now')
      }, localizer.format(value, 'timeGutterFormat'));
    };

    var _this$props2 = _this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        timeslots = _this$props2.timeslots,
        step = _this$props2.step;
    _this.slotMetrics = TimeSlotUtils.getSlotMetrics({
      min: min,
      max: max,
      timeslots: timeslots,
      step: step
    });
    return _this;
  }

  var _proto = TimeGutter.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var min = nextProps.min,
        max = nextProps.max,
        timeslots = nextProps.timeslots,
        step = nextProps.step;
    this.slotMetrics = this.slotMetrics.update({
      min: min,
      max: max,
      timeslots: timeslots,
      step: step
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        resource = _this$props3.resource,
        components = _this$props3.components;
    return _react.default.createElement("div", {
      className: "rbc-time-gutter rbc-time-column"
    }, this.slotMetrics.groups.map(function (grp, idx) {
      return _react.default.createElement(_TimeSlotGroup.default, {
        key: idx,
        group: grp,
        resource: resource,
        components: components,
        renderSlot: _this2.renderSlot
      });
    }));
  };

  return TimeGutter;
}(_react.Component);

exports.default = TimeGutter;
TimeGutter.propTypes = {
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  timeslots: _propTypes.default.number.isRequired,
  step: _propTypes.default.number.isRequired,
  getNow: _propTypes.default.func.isRequired,
  components: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  resource: _propTypes.default.string
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/TimeSlotGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/TimeSlotGroup.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _BackgroundWrapper = _interopRequireDefault(__webpack_require__(/*! ./BackgroundWrapper */ "./node_modules/react-big-calendar/lib/BackgroundWrapper.js"));

var TimeSlotGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(TimeSlotGroup, _Component);

  function TimeSlotGroup() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TimeSlotGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        renderSlot = _this$props.renderSlot,
        resource = _this$props.resource,
        group = _this$props.group,
        getters = _this$props.getters,
        _this$props$component = _this$props.components;
    _this$props$component = _this$props$component === void 0 ? {} : _this$props$component;
    var _this$props$component2 = _this$props$component.timeSlotWrapper,
        Wrapper = _this$props$component2 === void 0 ? _BackgroundWrapper.default : _this$props$component2;
    return _react.default.createElement("div", {
      className: "rbc-timeslot-group"
    }, group.map(function (value, idx) {
      var slotProps = getters ? getters.slotProp(value, resource) : {};
      return _react.default.createElement(Wrapper, {
        key: idx,
        value: value,
        resource: resource
      }, _react.default.createElement("div", (0, _extends2.default)({}, slotProps, {
        className: (0, _classnames.default)('rbc-time-slot', slotProps.className)
      }), renderSlot && renderSlot(value, idx)));
    }));
  };

  return TimeSlotGroup;
}(_react.Component);

exports.default = TimeSlotGroup;
TimeSlotGroup.propTypes = {
  renderSlot: _propTypes.default.func,
  group: _propTypes.default.array.isRequired,
  resource: _propTypes.default.any,
  components: _propTypes.default.object,
  getters: _propTypes.default.object
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Toolbar.js":
/*!********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Toolbar.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };

    _this.view = function (view) {
      _this.props.onView(view);
    };

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
    return _react.default.createElement("div", {
      className: "rbc-toolbar"
    }, _react.default.createElement("span", {
      className: "rbc-btn-group"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.TODAY)
    }, messages.today), _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS)
    }, messages.previous), _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.NEXT)
    }, messages.next)), _react.default.createElement("span", {
      className: "rbc-toolbar-label"
    }, label), _react.default.createElement("span", {
      className: "rbc-btn-group"
    }, this.viewNamesGroup(messages)));
  };

  _proto.viewNamesGroup = function viewNamesGroup(messages) {
    var _this2 = this;

    var viewNames = this.props.views;
    var view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(function (name) {
        return _react.default.createElement("button", {
          type: "button",
          key: name,
          className: (0, _classnames.default)({
            'rbc-active': view === name
          }),
          onClick: _this2.view.bind(null, name)
        }, messages[name]);
      });
    }
  };

  return Toolbar;
}(_react.default.Component);

Toolbar.propTypes = {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  localizer: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onView: _propTypes.default.func.isRequired
};
var _default = Toolbar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Views.js":
/*!******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Views.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _Month = _interopRequireDefault(__webpack_require__(/*! ./Month */ "./node_modules/react-big-calendar/lib/Month.js"));

var _Day = _interopRequireDefault(__webpack_require__(/*! ./Day */ "./node_modules/react-big-calendar/lib/Day.js"));

var _Week = _interopRequireDefault(__webpack_require__(/*! ./Week */ "./node_modules/react-big-calendar/lib/Week.js"));

var _WorkWeek = _interopRequireDefault(__webpack_require__(/*! ./WorkWeek */ "./node_modules/react-big-calendar/lib/WorkWeek.js"));

var _Agenda = _interopRequireDefault(__webpack_require__(/*! ./Agenda */ "./node_modules/react-big-calendar/lib/Agenda.js"));

var _VIEWS;

var VIEWS = (_VIEWS = {}, _VIEWS[_constants.views.MONTH] = _Month.default, _VIEWS[_constants.views.WEEK] = _Week.default, _VIEWS[_constants.views.WORK_WEEK] = _WorkWeek.default, _VIEWS[_constants.views.DAY] = _Day.default, _VIEWS[_constants.views.AGENDA] = _Agenda.default, _VIEWS);
var _default = VIEWS;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/Week.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/Week.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _TimeGrid = _interopRequireDefault(__webpack_require__(/*! ./TimeGrid */ "./node_modules/react-big-calendar/lib/TimeGrid.js"));

var Week =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Week, _React$Component);

  function Week() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Week.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["date"]);
    var range = Week.range(date, this.props);
    return _react.default.createElement(_TimeGrid.default, (0, _extends2.default)({}, props, {
      range: range,
      eventOffset: 15
    }));
  };

  return Week;
}(_react.default.Component);

Week.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired
};
Week.defaultProps = _TimeGrid.default.defaultProps;

Week.navigate = function (date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'week');

    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'week');

    default:
      return date;
  }
};

Week.range = function (date, _ref) {
  var localizer = _ref.localizer;
  var firstOfWeek = localizer.startOfWeek();

  var start = _dates.default.startOf(date, 'week', firstOfWeek);

  var end = _dates.default.endOf(date, 'week', firstOfWeek);

  return _dates.default.range(start, end);
};

Week.title = function (date, _ref2) {
  var localizer = _ref2.localizer;

  var _Week$range = Week.range(date, {
    localizer: localizer
  }),
      start = _Week$range[0],
      rest = _Week$range.slice(1);

  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

var _default = Week;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/WorkWeek.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/WorkWeek.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Week = _interopRequireDefault(__webpack_require__(/*! ./Week */ "./node_modules/react-big-calendar/lib/Week.js"));

var _TimeGrid = _interopRequireDefault(__webpack_require__(/*! ./TimeGrid */ "./node_modules/react-big-calendar/lib/TimeGrid.js"));

function workWeekRange(date, options) {
  return _Week.default.range(date, options).filter(function (d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}

var WorkWeek =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(WorkWeek, _React$Component);

  function WorkWeek() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = WorkWeek.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["date"]);
    var range = workWeekRange(date, this.props);
    return _react.default.createElement(_TimeGrid.default, (0, _extends2.default)({}, props, {
      range: range,
      eventOffset: 15
    }));
  };

  return WorkWeek;
}(_react.default.Component);

WorkWeek.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired
};
WorkWeek.defaultProps = _TimeGrid.default.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = _Week.default.navigate;

WorkWeek.title = function (date, _ref) {
  var localizer = _ref.localizer;

  var _workWeekRange = workWeekRange(date, {
    localizer: localizer
  }),
      start = _workWeekRange[0],
      rest = _workWeekRange.slice(1);

  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

var _default = WorkWeek;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _Calendar = _interopRequireDefault(__webpack_require__(/*! ./Calendar */ "./node_modules/react-big-calendar/lib/Calendar.js"));

var _EventWrapper = _interopRequireDefault(__webpack_require__(/*! ./EventWrapper */ "./node_modules/react-big-calendar/lib/EventWrapper.js"));

var _BackgroundWrapper = _interopRequireDefault(__webpack_require__(/*! ./BackgroundWrapper */ "./node_modules/react-big-calendar/lib/BackgroundWrapper.js"));

var _moment = _interopRequireDefault(__webpack_require__(/*! ./localizers/moment */ "./node_modules/react-big-calendar/lib/localizers/moment.js"));

var _globalize = _interopRequireDefault(__webpack_require__(/*! ./localizers/globalize */ "./node_modules/react-big-calendar/lib/localizers/globalize.js"));

var _move = _interopRequireDefault(__webpack_require__(/*! ./utils/move */ "./node_modules/react-big-calendar/lib/utils/move.js"));

var _constants = __webpack_require__(/*! ./utils/constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

(0, _extends2.default)(_Calendar.default, {
  globalizeLocalizer: _globalize.default,
  momentLocalizer: _moment.default,
  Views: _constants.views,
  Navigate: _constants.navigate,
  move: _move.default,
  components: {
    eventWrapper: _EventWrapper.default,
    dayWrapper: _BackgroundWrapper.default,
    dateCellWrapper: _BackgroundWrapper.default
  }
});
var _default = _Calendar.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/less/styles.less":
/*!**************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/less/styles.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/localizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/localizer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.mergeWithDefaults = mergeWithDefaults;
exports.DateLocalizer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js"));

var localePropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);

function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  !(result == null || typeof result === 'string') ?  false ? undefined : invariant(false) : void 0;
  return result;
}

var DateLocalizer = function DateLocalizer(spec) {
  var _this = this;

  !(typeof spec.format === 'function') ?  false ? undefined : invariant(false) : void 0;
  !(typeof spec.firstOfWeek === 'function') ?  false ? undefined : invariant(false) : void 0;
  this.propType = spec.propType || localePropType;
  this.startOfWeek = spec.firstOfWeek;
  this.formats = spec.formats;

  this.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
};

exports.DateLocalizer = DateLocalizer;

function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  var formats = (0, _extends2.default)({}, localizer.formats, formatOverrides);
  return (0, _extends2.default)({}, localizer, {
    messages: messages,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats[_format2] || _format2, culture);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/localizers/globalize.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/localizers/globalize.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _default;
exports.formats = void 0;

var _dates = _interopRequireDefault(__webpack_require__(/*! ../utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _oldGlobalize = _interopRequireDefault(__webpack_require__(/*! ./oldGlobalize */ "./node_modules/react-big-calendar/lib/localizers/oldGlobalize.js"));

var _localizer = __webpack_require__(/*! ../localizer */ "./node_modules/react-big-calendar/lib/localizer.js");

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/react-big-calendar/node_modules/warning/warning.js"));

var dateRangeFormat = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, {
    date: 'short'
  }, culture) + ' — ' + local.format(end, {
    date: 'short'
  }, culture);
};

var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, {
    time: 'short'
  }, culture) + ' — ' + local.format(end, {
    time: 'short'
  }, culture);
};

var timeRangeStartFormat = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, {
    time: 'short'
  }, culture) + ' — ';
};

var timeRangeEndFormat = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' — ' + local.format(end, {
    time: 'short'
  }, culture);
};

var weekRangeFormat = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' — ' + local.format(end, _dates.default.eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

var formats = {
  dateFormat: 'dd',
  dayFormat: 'eee dd/MM',
  weekdayFormat: 'eee',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: {
    time: 'short'
  },
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'eeee MMM dd',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'eee MMM dd',
  agendaTimeFormat: {
    time: 'short'
  },
  agendaTimeRangeFormat: timeRangeFormat
};
exports.formats = formats;

function _default(globalize) {
  var locale = function locale(culture) {
    return culture ? globalize(culture) : globalize;
  }; // return the first day of the week from the locale data. Defaults to 'world'
  // territory if no territory is derivable from CLDR.
  // Failing to use CLDR supplemental (not loaded?), revert to the original
  // method of getting first day of week.


  function firstOfWeek(culture) {
    try {
      var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      var cldr = locale(culture).cldr;
      var territory = cldr.attributes.territory;
      var weekData = cldr.get('supplemental').weekData;
      var firstDay = weekData.firstDay[territory || '001'];
      return days.indexOf(firstDay);
    } catch (e) {
       false ? undefined : void 0; // maybe cldr supplemental is not loaded? revert to original method

      var date = new Date(); //cldr-data doesn't seem to be zero based

      var localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
        raw: 'e'
      }), 10) - 1, 0);
      return Math.abs(date.getDay() - localeDay);
    }
  }

  if (!globalize.load) return (0, _oldGlobalize.default)(globalize);
  return new _localizer.DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats,
    format: function format(value, _format, culture) {
      _format = typeof _format === 'string' ? {
        raw: _format
      } : _format;
      return locale(culture).formatDate(value, _format);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/localizers/moment.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/localizers/moment.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _default;
exports.formats = void 0;

var _dates = _interopRequireDefault(__webpack_require__(/*! ../utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _localizer = __webpack_require__(/*! ../localizer */ "./node_modules/react-big-calendar/lib/localizer.js");

var dateRangeFormat = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, 'L', culture) + ' — ' + local.format(end, 'L', culture);
};

var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 'LT', culture) + ' — ' + local.format(end, 'LT', culture);
};

var timeRangeStartFormat = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 'LT', culture) + ' — ';
};

var timeRangeEndFormat = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' — ' + local.format(end, 'LT', culture);
};

var weekRangeFormat = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMMM DD', culture) + ' - ' + local.format(end, _dates.default.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};

var formats = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
};
exports.formats = formats;

function _default(moment) {
  var locale = function locale(m, c) {
    return c ? m.locale(c) : m;
  };

  return new _localizer.DateLocalizer({
    formats: formats,
    firstOfWeek: function firstOfWeek(culture) {
      var data = culture ? moment.localeData(culture) : moment.localeData();
      return data ? data.firstDayOfWeek() : 0;
    },
    format: function format(value, _format, culture) {
      return locale(moment(value), culture).format(_format);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/localizers/oldGlobalize.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/localizers/oldGlobalize.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _default;
exports.formats = void 0;

var _dates = _interopRequireDefault(__webpack_require__(/*! ../utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _localizer = __webpack_require__(/*! ../localizer */ "./node_modules/react-big-calendar/lib/localizer.js");

var dateRangeFormat = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, 'd', culture) + ' — ' + local.format(end, 'd', culture);
};

var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 't', culture) + ' — ' + local.format(end, 't', culture);
};

var timeRangeStartFormat = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 't', culture) + ' — ';
};

var timeRangeEndFormat = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' — ' + local.format(end, 't', culture);
};

var weekRangeFormat = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' - ' + local.format(end, _dates.default.eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

var formats = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat
};
exports.formats = formats;

function _default(globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }

  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }

  return new _localizer.DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats,
    format: function format(value, _format, culture) {
      return globalize.format(value, _format, culture);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/DateSlotMetrics.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/DateSlotMetrics.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getSlotMetrics = getSlotMetrics;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var _eventLevels2 = __webpack_require__(/*! ./eventLevels */ "./node_modules/react-big-calendar/lib/utils/eventLevels.js");

var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};

var isEqual = function isEqual(a, b) {
  return a.range === b.range && a.events === b.events;
};

function getSlotMetrics() {
  return (0, _memoizeOne.default)(function (options) {
    var range = options.range,
        events = options.events,
        maxRows = options.maxRows,
        minRows = options.minRows,
        accessors = options.accessors;

    var _endOfRange = (0, _eventLevels2.endOfRange)(range),
        first = _endOfRange.first,
        last = _endOfRange.last;

    var segments = events.map(function (evt) {
      return (0, _eventLevels2.eventSegments)(evt, range, accessors);
    });

    var _eventLevels = (0, _eventLevels2.eventLevels)(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra;

    while (levels.length < minRows) {
      levels.push([]);
    }

    return {
      first: first,
      last: last,
      levels: levels,
      extra: extra,
      range: range,
      slots: range.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics();
        return metrics((0, _extends2.default)({}, options, args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date) {
        return range.find(function (r) {
          return _dates.default.eq(r, date, 'day');
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function (seg) {
          return isSegmentInSlot(seg, slot);
        }).map(function (seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior(event) {
        return _dates.default.lt(accessors.start(event), first, 'day');
      },
      continuesAfter: function continuesAfter(event) {
        var eventEnd = accessors.end(event);

        var singleDayDuration = _dates.default.eq(accessors.start(event), eventEnd, 'minutes');

        return singleDayDuration ? _dates.default.gte(eventEnd, last, 'minutes') : _dates.default.gt(eventEnd, last, 'minutes');
      }
    };
  }, isEqual);
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/DayEventLayout.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/DayEventLayout.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getStyledEvents = getStyledEvents;

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _sortBy = _interopRequireDefault(__webpack_require__(/*! lodash/sortBy */ "lodash/sortBy"));

var Event =
/*#__PURE__*/
function () {
  function Event(data, _ref) {
    var accessors = _ref.accessors,
        slotMetrics = _ref.slotMetrics;

    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
        start = _slotMetrics$getRange.start,
        startDate = _slotMetrics$getRange.startDate,
        end = _slotMetrics$getRange.end,
        endDate = _slotMetrics$getRange.endDate,
        top = _slotMetrics$getRange.top,
        height = _slotMetrics$getRange.height;

    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height;
    this.data = data;
  }
  /**
   * The event's width without any overlap.
   */


  (0, _createClass2.default)(Event, [{
    key: "_width",
    get: function get() {
      // The container event's width is determined by the maximum number of
      // events in any of its rows.
      if (this.rows) {
        var columns = this.rows.reduce(function (max, row) {
          return Math.max(max, row.leaves.length + 1);
        }, // add itself
        0) + 1; // add the container

        return 100 / columns;
      }

      var availableWidth = 100 - this.container._width; // The row event's width is the space left by the container, divided
      // among itself and its leaves.

      if (this.leaves) {
        return availableWidth / (this.leaves.length + 1);
      } // The leaf event's width is determined by its row's width


      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */

  }, {
    key: "width",
    get: function get() {
      var noOverlap = this._width;
      var overlap = Math.min(100, this._width * 1.7); // Containers can always grow.

      if (this.rows) {
        return overlap;
      } // Rows can grow if they have leaves.


      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap;
      } // Leaves can grow unless they're the last item in a row.


      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      // Containers have no offset.
      if (this.rows) return 0; // Rows always start where their container ends.

      if (this.leaves) return this.container._width; // Leaves are spread out evenly on the space left by its row.

      var _this$row = this.row,
          leaves = _this$row.leaves,
          xOffset = _this$row.xOffset,
          _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
  return Event;
}();
/**
 * Return true if event a and b is considered to be on the same row.
 */


function onSameRow(a, b, minimumStartDifference) {
  return (// Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}

function sortByRender(events) {
  var sortedByTime = (0, _sortBy.default)(events, ['startMs', function (e) {
    return -e.endMs;
  }]);
  var sorted = [];

  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);

    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i]; // Still inside this event, look for next.

      if (event.endMs > test.startMs) continue; // We've found the first event of the next event group.
      // If that event is not right next to our current event, we have to
      // move it here.

      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      } // We've already found the next event group, so stop looking.


      break;
    }
  }

  return sorted;
}

function getStyledEvents(_ref2) {
  var events = _ref2.events,
      minimumStartDifference = _ref2.minimumStartDifference,
      slotMetrics = _ref2.slotMetrics,
      accessors = _ref2.accessors;
  // Create proxy events and order them so that we don't have
  // to fiddle with z-indexes.
  var proxies = events.map(function (event) {
    return new Event(event, {
      slotMetrics: slotMetrics,
      accessors: accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies); // Group overlapping events, while keeping order.
  // Every event is always one of: container, row or leaf.
  // Containers can contain rows, and rows can contain leaves.

  var containerEvents = [];

  var _loop = function _loop(i) {
    var event = eventsInRenderOrder[i]; // Check if this event can go into a container event.

    var container = containerEvents.find(function (c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    }); // Couldn't find a container — that means this event is a container.

    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return "continue";
    } // Found a container for the event.


    event.container = container; // Check if the event can be placed in an existing row.
    // Start looking from behind.

    var row = null;

    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }

    if (row) {
      // Found a row, so add it.
      row.leaves.push(event);
      event.row = row;
    } else {
      // Couldn't find a row – that means this event is a row.
      event.leaves = [];
      container.rows.push(event);
    }
  };

  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  } // Return the original events, along with their styles.


  return eventsInRenderOrder.map(function (event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: event.xOffset
      }
    };
  });
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/Resources.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/Resources.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = Resources;
exports.NONE = void 0;
var NONE = {};
exports.NONE = NONE;

function Resources(resources, accessors) {
  return {
    map: function map(fn) {
      if (!resources) return [fn([NONE, null], 0)];
      return resources.map(function (resource, idx) {
        return fn([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = new window.Map();

      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }

      events.forEach(function (event) {
        var id = accessors.resource(event) || NONE;
        var resourceEvents = eventsByResource.get(id) || [];
        resourceEvents.push(event);
        eventsByResource.set(id, resourceEvents);
      });
      return eventsByResource;
    }
  };
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/TimeSlots.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/TimeSlots.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getSlotMetrics = getSlotMetrics;

var _dates = _interopRequireDefault(__webpack_require__(/*! ./dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

var getDstOffset = function getDstOffset(start, end) {
  return start.getTimezoneOffset() - end.getTimezoneOffset();
};

var getKey = function getKey(min, max, step, slots) {
  return "" + +_dates.default.startOf(min, 'minutes') + ("" + +_dates.default.startOf(max, 'minutes')) + (step + "-" + slots);
};

function getSlotMetrics(_ref) {
  var start = _ref.min,
      end = _ref.max,
      step = _ref.step,
      timeslots = _ref.timeslots;
  var key = getKey(start, end, step, timeslots);
  var totalMin = 1 + _dates.default.diff(start, end, 'minutes') + getDstOffset(start, end);

  var minutesFromMidnight = _dates.default.diff(_dates.default.startOf(start, 'day'), start, 'minutes');

  var numGroups = Math.ceil(totalMin / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots); // Each slot date is created from "zero", instead of adding `step` to
  // the previous one, in order to avoid DST oddities

  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);

    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step; // A date with total minutes calculated from the start of the day

      slots[slotIdx] = groups[grp][slot] = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + minFromStart, 0, 0);
    }
  } // Necessary to be able to select up until the last timeslot in a day


  var lastSlotMinFromStart = slots.length * step;
  slots.push(new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + lastSlotMinFromStart, 0, 0));

  function positionFromDate(date) {
    var diff = _dates.default.diff(start, date, 'minutes') + getDstOffset(start, date);
    return Math.min(diff, totalMin);
  }

  return {
    groups: groups,
    update: function update(args) {
      if (getKey(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return _dates.default.inRange(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
    },
    nextSlot: function nextSlot(slot) {
      var next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)]; // in the case of the last slot we won't a long enough range so manually get it

      if (next === slot) next = _dates.default.add(slot, step, 'minutes');
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
    },
    closestSlotFromDate: function closestSlotFromDate(date, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      if (_dates.default.lt(date, start, 'minutes')) return slots[0];

      var diffMins = _dates.default.diff(start, date, 'minutes');

      return slots[(diffMins - diffMins % step) / step + offset];
    },
    startsBeforeDay: function startsBeforeDay(date) {
      return _dates.default.lt(date, start, 'day');
    },
    startsAfterDay: function startsAfterDay(date) {
      return _dates.default.gt(date, end, 'day');
    },
    startsBefore: function startsBefore(date) {
      return _dates.default.lt(_dates.default.merge(start, date), start, 'minutes');
    },
    startsAfter: function startsAfter(date) {
      return _dates.default.gt(_dates.default.merge(end, date), end, 'minutes');
    },
    getRange: function getRange(rangeStart, rangeEnd) {
      rangeStart = _dates.default.min(end, _dates.default.max(start, rangeStart));
      rangeEnd = _dates.default.min(end, _dates.default.max(start, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top = rangeStartMin / (step * numSlots) * 100;
      return {
        top: top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/accessors.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/accessors.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.accessor = accessor;
exports.wrapAccessor = void 0;

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && typeof data === 'object' && data != null && field in data) value = data[field];
  return value;
}

var wrapAccessor = function wrapAccessor(acc) {
  return function (data) {
    return accessor(data, acc);
  };
};

exports.wrapAccessor = wrapAccessor;

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/constants.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.views = exports.navigate = void 0;
var navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
exports.navigate = navigate;
var views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};
exports.views = views;

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/dates.js":
/*!************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/dates.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _dateArithmetic = _interopRequireDefault(__webpack_require__(/*! date-arithmetic */ "./node_modules/date-arithmetic/index.js"));

/* eslint no-fallthrough: off */
var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
var MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var dates = (0, _extends2.default)({}, _dateArithmetic.default, {
  monthsInYear: function monthsInYear(year) {
    var date = new Date(year, 0, 1);
    return MONTHS.map(function (i) {
      return dates.month(date, i);
    });
  },
  firstVisibleDay: function firstVisibleDay(date, localizer) {
    var firstOfMonth = dates.startOf(date, 'month');
    return dates.startOf(firstOfMonth, 'week', localizer.startOfWeek());
  },
  lastVisibleDay: function lastVisibleDay(date, localizer) {
    var endOfMonth = dates.endOf(date, 'month');
    return dates.endOf(endOfMonth, 'week', localizer.startOfWeek());
  },
  visibleDays: function visibleDays(date, localizer) {
    var current = dates.firstVisibleDay(date, localizer),
        last = dates.lastVisibleDay(date, localizer),
        days = [];

    while (dates.lte(current, last, 'day')) {
      days.push(current);
      current = dates.add(current, 1, 'day');
    }

    return days;
  },
  ceil: function ceil(date, unit) {
    var floor = dates.startOf(date, unit);
    return dates.eq(floor, date) ? floor : dates.add(floor, 1, unit);
  },
  range: function range(start, end, unit) {
    if (unit === void 0) {
      unit = 'day';
    }

    var current = start,
        days = [];

    while (dates.lte(current, end, unit)) {
      days.push(current);
      current = dates.add(current, 1, unit);
    }

    return days;
  },
  merge: function merge(date, time) {
    if (time == null && date == null) return null;
    if (time == null) time = new Date();
    if (date == null) date = new Date();
    date = dates.startOf(date, 'day');
    date = dates.hours(date, dates.hours(time));
    date = dates.minutes(date, dates.minutes(time));
    date = dates.seconds(date, dates.seconds(time));
    return dates.milliseconds(date, dates.milliseconds(time));
  },
  eqTime: function eqTime(dateA, dateB) {
    return dates.hours(dateA) === dates.hours(dateB) && dates.minutes(dateA) === dates.minutes(dateB) && dates.seconds(dateA) === dates.seconds(dateB);
  },
  isJustDate: function isJustDate(date) {
    return dates.hours(date) === 0 && dates.minutes(date) === 0 && dates.seconds(date) === 0 && dates.milliseconds(date) === 0;
  },
  duration: function duration(start, end, unit, firstOfWeek) {
    if (unit === 'day') unit = 'date';
    return Math.abs(dates[unit](start, undefined, firstOfWeek) - dates[unit](end, undefined, firstOfWeek));
  },
  diff: function diff(dateA, dateB, unit) {
    if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB); // the .round() handles an edge case
    // with DST where the total won't be exact
    // since one day in the range may be shorter/longer by an hour

    return Math.round(Math.abs(+dates.startOf(dateA, unit) / MILLI[unit] - +dates.startOf(dateB, unit) / MILLI[unit]));
  },
  total: function total(date, unit) {
    var ms = date.getTime(),
        div = 1;

    switch (unit) {
      case 'week':
        div *= 7;

      case 'day':
        div *= 24;

      case 'hours':
        div *= 60;

      case 'minutes':
        div *= 60;

      case 'seconds':
        div *= 1000;
    }

    return ms / div;
  },
  week: function week(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
  },
  today: function today() {
    return dates.startOf(new Date(), 'day');
  },
  yesterday: function yesterday() {
    return dates.add(dates.startOf(new Date(), 'day'), -1, 'day');
  },
  tomorrow: function tomorrow() {
    return dates.add(dates.startOf(new Date(), 'day'), 1, 'day');
  }
});
var _default = dates;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/eventLevels.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/eventLevels.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.endOfRange = endOfRange;
exports.eventSegments = eventSegments;
exports.eventLevels = eventLevels;
exports.inRange = inRange;
exports.segsOverlap = segsOverlap;
exports.sortEvents = sortEvents;

var _findIndex = _interopRequireDefault(__webpack_require__(/*! lodash/findIndex */ "lodash/findIndex"));

var _dates = _interopRequireDefault(__webpack_require__(/*! ./dates */ "./node_modules/react-big-calendar/lib/utils/dates.js"));

function endOfRange(dateRange, unit) {
  if (unit === void 0) {
    unit = 'day';
  }

  return {
    first: dateRange[0],
    last: _dates.default.add(dateRange[dateRange.length - 1], 1, unit)
  };
}

function eventSegments(event, range, accessors) {
  var _endOfRange = endOfRange(range),
      first = _endOfRange.first,
      last = _endOfRange.last;

  var slots = _dates.default.diff(first, last, 'day');

  var start = _dates.default.max(_dates.default.startOf(accessors.start(event), 'day'), first);

  var end = _dates.default.min(_dates.default.ceil(accessors.end(event), 'day'), last);

  var padding = (0, _findIndex.default)(range, function (x) {
    return _dates.default.eq(x, start, 'day');
  });

  var span = _dates.default.diff(start, end, 'day');

  span = Math.min(span, slots);
  span = Math.max(span, 1);
  return {
    event: event,
    span: span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}

function eventLevels(rowSegments, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }

  var i,
      j,
      seg,
      levels = [],
      extra = [];

  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];

    for (j = 0; j < levels.length; j++) {
      if (!segsOverlap(seg, levels[j])) break;
    }

    if (j >= limit) {
      extra.push(seg);
    } else {
      ;
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }

  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function (a, b) {
      return a.left - b.left;
    }); //eslint-disable-line
  }

  return {
    levels: levels,
    extra: extra
  };
}

function inRange(e, start, end, accessors) {
  var eStart = _dates.default.startOf(accessors.start(e), 'day');

  var eEnd = accessors.end(e);

  var startsBeforeEnd = _dates.default.lte(eStart, end, 'day'); // when the event is zero duration we need to handle a bit differently


  var endsAfterStart = !_dates.default.eq(eStart, eEnd, 'minutes') ? _dates.default.gt(eEnd, start, 'minutes') : _dates.default.gte(eEnd, start, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}

function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function (otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}

function sortEvents(evtA, evtB, accessors) {
  var startSort = +_dates.default.startOf(accessors.start(evtA), 'day') - +_dates.default.startOf(accessors.start(evtB), 'day');

  var durA = _dates.default.diff(accessors.start(evtA), _dates.default.ceil(accessors.end(evtA), 'day'), 'day');

  var durB = _dates.default.diff(accessors.start(evtB), _dates.default.ceil(accessors.end(evtB), 'day'), 'day');

  return startSort || // sort by start Day first
  Math.max(durB, 1) - Math.max(durA, 1) || // events spanning multiple days go first
  !!accessors.allDay(evtB) - !!accessors.allDay(evtA) || // then allDay single day events
  +accessors.start(evtA) - +accessors.start(evtB); // then sort by start time
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/helpers.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/helpers.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.notify = notify;
exports.instanceId = instanceId;
exports.isFirstFocusedRender = isFirstFocusedRender;
var idCount = 0;

function uniqueId(prefix) {
  return '' + ((prefix == null ? '' : prefix) + ++idCount);
}

function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}

function instanceId(component, suffix) {
  if (suffix === void 0) {
    suffix = '';
  }

  component.__id || (component.__id = uniqueId('rw_'));
  return (component.props.id || component.__id) + suffix;
}

function isFirstFocusedRender(component) {
  return component._firstFocus || component.state.focused && (component._firstFocus = true);
}

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/messages.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = messages;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return "+" + total + " more";
  }
};

function messages(msgs) {
  return (0, _extends2.default)({}, defaultMessages, msgs);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/move.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/move.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = moveDate;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var _Views = _interopRequireDefault(__webpack_require__(/*! ../Views */ "./node_modules/react-big-calendar/lib/Views.js"));

function moveDate(View, _ref) {
  var action = _ref.action,
      date = _ref.date,
      today = _ref.today,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["action", "date", "today"]);
  View = typeof View === 'string' ? _Views.default[View] : View;

  switch (action) {
    case _constants.navigate.TODAY:
      date = today || new Date();
      break;

    case _constants.navigate.DATE:
      break;

    default:
      !(View && typeof View.navigate === 'function') ?  false ? undefined : invariant(false) : void 0;
      date = View.navigate(date, action, props);
  }

  return date;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/propTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/propTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.views = exports.dateRangeFormat = exports.dateFormat = exports.accessor = exports.eventComponent = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js"));

exports.elementType = _elementType.default;

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-big-calendar/lib/utils/constants.js");

var eventComponent = _propTypes.default.oneOfType([_elementType.default, _propTypes.default.shape({
  month: _elementType.default,
  week: _elementType.default,
  day: _elementType.default,
  agenda: _elementType.default
})]);

exports.eventComponent = eventComponent;
var viewNames = Object.keys(_constants.views).map(function (k) {
  return _constants.views[k];
});

var accessor = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);

exports.accessor = accessor;
var dateFormat = _propTypes.default.any;
exports.dateFormat = dateFormat;
var dateRangeFormat = _propTypes.default.func;
/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 */

exports.dateRangeFormat = dateRangeFormat;

var views = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames)), (0, _all.default)(_propTypes.default.object, function (props, name) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var prop = props[name],
      err;
  Object.keys(prop).every(function (key) {
    var isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';
    return isBuiltinView || !(err = _elementType.default.apply(void 0, [prop, key].concat(args)));
  });
  return err || null;
})]);

exports.views = views;

/***/ }),

/***/ "./node_modules/react-big-calendar/lib/utils/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-big-calendar/lib/utils/selection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isSelected = isSelected;
exports.slotWidth = slotWidth;
exports.getSlotAtX = getSlotAtX;
exports.pointInBox = pointInBox;
exports.dateCellSelection = dateCellSelection;

function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return [].concat(selected).indexOf(event) !== -1;
}

function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}

function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}

function pointInBox(box, _ref) {
  var x = _ref.x,
      y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}

function dateCellSelection(start, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots); // cell under the mouse

  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots); // Identify row as either the initial row
  // or the row under the current mouse point

  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y; // this row's position relative to the start point

  var isAboveStart = start.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom; // this row is between the current and start rows, so entirely selected

  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }

  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }

  if (isStartRow) {
    // select the cell under the initial point
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);

    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
    } else if (start.y < box.y) {
      // the current row is below start row
      // select cells to the right of the start cell
      endIdx = lastSlotIdx;
    } else {
      // select cells to the left of the start cell
      startIdx = 0;
    }
  }

  return {
    startIdx: startIdx,
    endIdx: endIdx
  };
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/uncontrollable/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/uncontrollable/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = uncontrollable;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js"));

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/react-big-calendar/node_modules/uncontrollable/lib/utils.js"));

var _jsxFileName = "src/index.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? undefined : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[Utils.defaultKey(key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!Utils.isProp(nextProps, key) && Utils.isProp(props, key)) {
          _this3._values[key] = nextProps[Utils.defaultKey(key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutProperties(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return _react.default.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(_react.default.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (_react.default.forwardRef) {
    WrappedComponent = _react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/uncontrollable/lib/utils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/uncontrollable/lib/utils.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.isProp = isProp;
exports.defaultKey = defaultKey;
exports.canAcceptRef = canAcceptRef;

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/warning/warning.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/warning/warning.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),ba=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=wa(c);la(d,b,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)xa(a,b[d],c[d]);else b&&xa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ca={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ea(a){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(za(a,Ba),Aa?t("95"):void 0,ha))throw a=ia,ha=!1,ia=null,a;}var Fa=Math.random().toString(36).slice(2),Ga="__reactInternalInstance$"+Fa,Ha="__reactEventHandlers$"+Fa;function Ia(a){if(a[Ga])return a[Ga];for(;!a[Ga];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ga];return 5===a.tag||6===a.tag?a:null}function Ja(a){a=a[Ga];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ka(a){if(5===a.tag||6===a.tag)return a.stateNode;t("33")}function La(a){return a[Ha]||null}function Ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Na(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Oa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ma(b);for(b=c.length;0<b--;)Na(c[b],"captured",a);for(b=0;b<c.length;b++)Na(c[b],"bubbled",a)}}function Pa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Qa(a){a&&a.dispatchConfig.registrationName&&Pa(a._targetInst,null,a)}
function Ra(a){za(a,Oa)}var Sa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ta(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ua={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Va={},Wa={};
Sa&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Xa(a){if(Va[a])return Va[a];if(!Ua[a])return a;var b=Ua[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Wa)return Va[a]=b[c];return a}
var Ya=Xa("animationend"),Za=Xa("animationiteration"),$a=Xa("animationstart"),ab=Xa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,eb=null,fb=null;
function gb(){if(fb)return fb;var a,b=eb,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return fb=e.slice(a,1<d?1-d:void 0)}function hb(){return!0}function ib(){return!1}
function z(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?hb:ib;this.isPropagationStopped=ib;return this}
n(z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=hb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=hb)},persist:function(){this.isPersistent=hb},isPersistent:ib,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ib;this._dispatchInstances=this._dispatchListeners=null}});z.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
z.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;jb(c);return c};jb(z);function kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function lb(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function jb(a){a.eventPool=[];a.getPooled=kb;a.release=lb}var mb=z.extend({data:null}),nb=z.extend({data:null}),ob=[9,13,27,32],pb=Sa&&"CompositionEvent"in window,qb=null;Sa&&"documentMode"in document&&(qb=document.documentMode);
var rb=Sa&&"TextEvent"in window&&!qb,sb=Sa&&(!pb||qb&&8<qb&&11>=qb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==ob.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function zb(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Ab(a,b){if(yb)return"compositionend"===a||!pb&&wb(a,b)?(a=gb(),fb=eb=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Bb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(pb)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=gb()):(cb=d,eb="value"in cb?cb.value:cb.textContent,yb=
!0)),e=mb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Ra(e),f=e):f=null;(a=rb?zb(a,c):Ab(a,c))?(b=nb.getPooled(ub.beforeInput,b,c,d),b.data=a,Ra(b)):b=null;return null===f?b:null===b?f:[f,b]}},Cb=null,Db=null,Eb=null;function Hb(a){if(a=va(a)){"function"!==typeof Cb?t("280"):void 0;var b=ua(a.stateNode);Cb(a.stateNode,a.type,b)}}function Ib(a){Db?Eb?Eb.push(a):Eb=[a]:Db=a}function Jb(){if(Db){var a=Db,b=Eb;Eb=Db=null;Hb(a);if(b)for(a=0;a<b.length;a++)Hb(b[a])}}
function Kb(a,b){return a(b)}function Lb(a,b,c){return a(b,c)}function Mb(){}var Nb=!1;function Ob(a,b){if(Nb)return a(b);Nb=!0;try{return Kb(a,b)}finally{if(Nb=!1,null!==Db||null!==Eb)Mb(),Jb()}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Sa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yb=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,Zb=D?Symbol.for("react.element"):60103,$b=D?Symbol.for("react.portal"):60106,ac=D?Symbol.for("react.fragment"):60107,bc=D?Symbol.for("react.strict_mode"):60108,cc=D?Symbol.for("react.profiler"):60114,dc=D?Symbol.for("react.provider"):60109,ec=D?Symbol.for("react.context"):60110,fc=D?Symbol.for("react.concurrent_mode"):60111,gc=D?Symbol.for("react.forward_ref"):60112,hc=D?Symbol.for("react.suspense"):
60113,ic=D?Symbol.for("react.memo"):60115,jc=D?Symbol.for("react.lazy"):60116,kc="function"===typeof Symbol&&Symbol.iterator;function lc(a){if(null===a||"object"!==typeof a)return null;a=kc&&a[kc]||a["@@iterator"];return"function"===typeof a?a:null}
function mc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fc:return"ConcurrentMode";case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ic:return mc(a.type);case jc:if(a=1===a._status?a._result:null)return mc(a)}return null}function nc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=mc(a.type);c=null;d&&(c=mc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(oc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function E(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new E(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new E(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new E(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new E(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new E(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){F[a]=new E(a,3,!0,a,null)});
["capture","download"].forEach(function(a){F[a]=new E(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){F[a]=new E(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){F[a]=new E(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);F[b]=new E(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});F.tabIndex=new E("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ac(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Cc(a,b){Bc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Dc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Dc(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ec(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Dc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Fc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Gc(a,b,c){a=z.getPooled(Fc.change,a,b,c);a.type="change";Ib(c);Ra(a);return a}var Jc=null,Kc=null;function Lc(a){Ea(a)}
function Mc(a){var b=Ka(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Sa&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){"value"===a.propertyName&&Mc(Kc)&&(a=Gc(Kc,a,Rb(a)),Ob(Lc,a))}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}
function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Fc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ka(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,g=Rc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Gc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Dc(e,"number",e.value)}},Wc=z.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ia(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=ed,h=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var m=null==f?e:Ka(f);e=null==b?e:Ka(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ma(g))l++;g=0;for(k=e;k;k=Ma(k))g++;for(;0<l-g;)b=Ma(b),l--;for(;0<g-l;)e=Ma(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ma(b);e=Ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ma(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ma(d)}for(d=0;d<b.length;d++)Pa(b[d],"bubbled",a);for(d=f.length;0<d--;)Pa(f[d],"captured",c);return[a,c]}},hd=Object.prototype.hasOwnProperty;function id(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function jd(a,b){if(id(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!hd.call(b,c[d])||!id(a[c[d]],b[c[d]]))return!1;return!0}function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?t("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}3!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var od=z.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=z.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=Wc.extend({relatedTarget:null});function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=Wc.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=dd.extend({dataTransfer:null}),wd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),xd=z.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[Ya,"animationEnd"],[Za,"animationIteration"],[$a,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ab,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case Ya:case Za:case $a:a=od;break;case ab:a=xd;break;case "scroll":a=Wc;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=z}b=a.getPooled(e,b,c,d);Ra(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
Fd=[];function Gd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ia(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ea(g)}}var Hd=!0;
function H(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!1)}function Kd(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!0)}function Id(a,b){Lb(Jd,a,b)}
function Jd(a,b){if(Hd){var c=Rb(b);c=Ia(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Ob(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}var Ld={},Md=0,Nd="_reactListenersID"+(""+Math.random()).slice(2);
function Od(a){Object.prototype.hasOwnProperty.call(a,Nd)||(a[Nd]=Md++,Ld[a[Nd]]={});return Ld[a[Nd]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Sa&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&jd(Zd,c)?null:(Zd=c,a=z.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ra(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ka(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=La;va=Ja;wa=Ka;Ca.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:be,BeforeInputEventPlugin:Bb});function de(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function ee(a,b){a=n({children:void 0},b);if(b=de(b.children))a.children=b;return a}function fe(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ge(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function he(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function ie(a,b){var c=yc(b.value),d=yc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function je(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var ke={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function le(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?le(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ne=void 0,oe=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==ke.svg||"innerHTML"in a)a.innerHTML=b;else{ne=ne||document.createElement("div");ne.innerHTML="<svg>"+b+"</svg>";for(b=ne.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(a){re.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qe[b]=qe[a]})});function se(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qe.hasOwnProperty(a)&&qe[a]?(""+b).trim():b+"px"}
function te(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=se(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ue=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ve(a,b){b&&(ue[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function we(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function xe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Kd("scroll",a);break;case "focus":case "blur":Kd("focus",a);Kd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Sb(e)&&Kd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&H(e,a)}c[e]=!0}}}function ye(){}var ze=null,Ae=null;
function Be(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ce(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var De="function"===typeof setTimeout?setTimeout:void 0,Ee="function"===typeof clearTimeout?clearTimeout:void 0;
function Fe(a,b,c,d,e){a[Ha]=e;"input"===c&&"radio"===e.type&&null!=e.name&&Bc(a,e);we(c,d);d=we(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?te(a,h):"dangerouslySetInnerHTML"===g?oe(a,h):"children"===g?pe(a,h):xc(a,g,h,d)}switch(c){case "input":Cc(a,e);break;case "textarea":ie(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?fe(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?fe(a,!!e.multiple,e.defaultValue,
!0):fe(a,!!e.multiple,e.multiple?[]:"",!1))}}function Ge(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function He(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Ie=[],Je=-1;function I(a){0>Je||(a.current=Ie[Je],Ie[Je]=null,Je--)}function J(a,b){Je++;Ie[Je]=a.current;a.current=b}var Ke={},K={current:Ke},L={current:!1},Le=Ke;
function Me(a,b){var c=a.type.contextTypes;if(!c)return Ke;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ne(a){I(L,a);I(K,a)}function Oe(a){I(L,a);I(K,a)}
function Pe(a,b,c){K.current!==Ke?t("168"):void 0;J(K,b,a);J(L,c,a)}function Qe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",mc(b)||"Unknown",e);return n({},c,d)}function Re(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Ke;Le=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Se(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Qe(a,b,Le),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Te=null,Ue=null;function Ve(a){return function(b){try{return a(b)}catch(c){}}}
function We(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Te=Ve(function(a){return b.onCommitFiberRoot(c,a)});Ue=Ve(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Xe(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Xe(a,b,c,d)}
function Ye(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ze(a){if("function"===typeof a)return Ye(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===ic)return 14}return 2}
function $e(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function af(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ye(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ac:return bf(c.children,e,f,b);case fc:return cf(c,e|3,f,b);case bc:return cf(c,e|2,f,b);case cc:return a=N(12,c,b,e|4),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=N(13,c,b,e),a.elementType=hc,a.type=hc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:g=10;break a;case ec:g=9;break a;case gc:g=11;break a;case ic:g=
14;break a;case jc:g=16;d=null;break a}t("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function bf(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function cf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?bc:fc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function df(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function ef(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function ff(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);gf(b,a)}
function hf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);gf(b,a)}function jf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}
function gf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var kf=!1;function lf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function mf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function of(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=lf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=lf(a.memoizedState),e=c.updateQueue=lf(c.memoizedState)):d=a.updateQueue=mf(e):null===e&&(e=c.updateQueue=mf(d));null===e||d===e?of(d,b):null===d.lastUpdate||null===e.lastUpdate?(of(d,b),of(e,b)):(of(d,b),e.lastUpdate=b)}
function qf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=lf(a.memoizedState):rf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function rf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=mf(b));return b}
function sf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:kf=!0}return d}
function tf(a,b,c,d,e){kf=!1;b=rf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(l=sf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var r=k.expirationTime;r<e?(null===m&&(m=k,null===g&&(f=l)),h<r&&(h=r)):(l=sf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=
32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function uf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);vf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;vf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function vf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function wf(a,b){return{value:a,source:b,stack:nc(b)}}var xf={current:null},yf=null,zf=null,Af=null;function Bf(a,b){var c=a.type._context;J(xf,c._currentValue,a);c._currentValue=b}function Cf(a){var b=xf.current;I(xf,a);a.type._context._currentValue=b}function Df(a){yf=a;Af=zf=null;a.firstContextDependency=null}
function Ef(a,b){if(Af!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Af=a,b=1073741823;b={context:a,observedBits:b,next:null};null===zf?(null===yf?t("293"):void 0,yf.firstContextDependency=zf=b):zf=zf.next=b}return a._currentValue}var Ff={},O={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?t("174"):void 0;return a}
function Jf(a,b){J(Hf,b,a);J(Gf,a,a);J(O,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:me(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=me(b,c)}I(O,a);J(O,b,a)}function Kf(a){I(O,a);I(Gf,a);I(Hf,a)}function Lf(a){If(Hf.current);var b=If(O.current);var c=me(b,a.type);b!==c&&(J(Gf,a,a),J(O,c,a))}function Mf(a){Gf.current===a&&(I(O,a),I(Gf,a))}
function P(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function Nf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Of=Xb.ReactCurrentOwner,Pf=(new aa.Component).refs;
function Qf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Vf={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Rf();d=Sf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Tf();pf(a,e);Uf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Rf();d=Sf(d,a);var e=nf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Tf();pf(a,e);Uf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Rf();c=Sf(c,a);var d=nf(c);d.tag=
2;void 0!==b&&null!==b&&(d.callback=b);Tf();pf(a,d);Uf(a,c)}};function Wf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function Xf(a,b,c){var d=!1,e=Ke;var f=b.contextType;"object"===typeof f&&null!==f?f=Of.currentDispatcher.readContext(f):(e=M(b)?Le:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Me(a,e):Ke);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Vf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Zf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Vf.enqueueReplaceState(b,b.state,null)}
function $f(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Pf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Of.currentDispatcher.readContext(f):(f=M(b)?Le:K.current,e.context=Me(a,f));f=a.updateQueue;null!==f&&(tf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Qf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Vf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(tf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var ag=Array.isArray;
function bg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?t("289"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Pf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("290",a)}return a}
function cg(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function dg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=$e(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=df(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=bg(a,b,c),d.return=a,d;d=af(c.type,c.key,c.props,null,a.mode,d);d.ref=bg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=ef(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,g){if(null===b||7!==b.tag)return b=bf(c,a.mode,d,g),b.return=a,b;b=e(b,c,d);b.return=a;return b}function r(a,b,c){if("string"===typeof b||"number"===typeof b)return b=df(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=af(b.type,b.key,b.props,null,a.mode,c),c.ref=bg(a,null,b),c.return=a,c;case $b:return b=ef(b,a.mode,c),b.return=a,b}if(ag(b)||
lc(b))return b=bf(b,a.mode,c,null),b.return=a,b;cg(a,b)}return null}function w(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(ag(c)||lc(c))return null!==e?null:m(a,b,c,d,null);cg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(ag(d)||lc(d))return a=a.get(c)||null,m(b,a,d,e,null);cg(b,d)}return null}function B(e,g,h,k){for(var l=null,q=null,m=g,u=g=0,p=null;null!==m&&u<h.length;u++){m.index>u?(p=m,m=null):p=m.sibling;var v=w(e,m,h[u],k);if(null===v){null===m&&(m=p);break}a&&
m&&null===v.alternate&&b(e,m);g=f(v,g,u);null===q?l=v:q.sibling=v;q=v;m=p}if(u===h.length)return c(e,m),l;if(null===m){for(;u<h.length;u++)if(m=r(e,h[u],k))g=f(m,g,u),null===q?l=m:q.sibling=m,q=m;return l}for(m=d(e,m);u<h.length;u++)if(p=y(m,e,u,h[u],k))a&&null!==p.alternate&&m.delete(null===p.key?u:p.key),g=f(p,g,u),null===q?l=p:q.sibling=p,q=p;a&&m.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=lc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;
for(var m=l=null,q=g,u=g=0,p=null,v=h.next();null!==q&&!v.done;u++,v=h.next()){q.index>u?(p=q,q=null):p=q.sibling;var A=w(e,q,v.value,k);if(null===A){q||(q=p);break}a&&q&&null===A.alternate&&b(e,q);g=f(A,g,u);null===m?l=A:m.sibling=A;m=A;q=p}if(v.done)return c(e,q),l;if(null===q){for(;!v.done;u++,v=h.next())v=r(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(q=d(e,q);!v.done;u++,v=h.next())v=y(q,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&q.delete(null===v.key?u:
v.key),g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,h);d.ref=bg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===ac?(d=bf(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=af(f.type,f.key,f.props,null,a.mode,h),h.ref=bg(a,d,f),h.return=a,a=h)}return g(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ef(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=df(f,a.mode,h),d.return=a,a=d),g(a);if(ag(f))return B(a,d,f,h);if(lc(f))return R(a,d,f,h);l&&cg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var eg=dg(!0),fg=dg(!1),gg=null,hg=null,ig=!1;
function jg(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function kg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function lg(a){if(ig){var b=hg;if(b){var c=b;if(!kg(a,b)){b=Ge(c);if(!b||!kg(a,b)){a.effectTag|=2;ig=!1;gg=a;return}jg(gg,c)}gg=a;hg=He(b)}else a.effectTag|=2,ig=!1,gg=a}}function mg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;gg=a}function ng(a){if(a!==gg)return!1;if(!ig)return mg(a),ig=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ce(b,a.memoizedProps))for(b=hg;b;)jg(a,b),b=Ge(b);mg(a);hg=gg?Ge(a.stateNode):null;return!0}function og(){hg=gg=null;ig=!1}var pg=Xb.ReactCurrentOwner;
function Q(a,b,c,d){b.child=null===a?fg(b,null,c,d):eg(b,a.child,c,d)}function qg(a,b,c,d,e){c=c.render;var f=b.ref;Df(b,e);d=c(d,f);b.effectTag|=1;Q(a,b,d,e);return b.child}
function rg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ye(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,sg(a,b,g,d,e,f);a=af(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return tg(a,b,f);b.effectTag|=1;a=$e(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function sg(a,b,c,d,e,f){return null!==a&&e<f&&jd(a.memoizedProps,d)&&a.ref===b.ref?tg(a,b,f):ug(a,b,c,d,f)}function vg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function ug(a,b,c,d,e){var f=M(c)?Le:K.current;f=Me(b,f);Df(b,e);c=c(d,f);b.effectTag|=1;Q(a,b,c,e);return b.child}
function wg(a,b,c,d,e){if(M(c)){var f=!0;Re(b)}else f=!1;Df(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Xf(b,c,d,e),$f(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Of.currentDispatcher.readContext(l):(l=M(c)?Le:K.current,l=Me(b,l));var m=c.getDerivedStateFromProps,r="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;r||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Zf(b,g,d,l);kf=!1;var w=b.memoizedState;k=g.state=w;var y=b.updateQueue;null!==y&&(tf(b,y,d,g,e),k=b.memoizedState);h!==d||w!==k||L.current||kf?("function"===typeof m&&(Qf(b,c,m,d),k=b.memoizedState),(h=kf||Wf(b,c,h,d,w,k,l))?(r||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:P(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=Of.currentDispatcher.readContext(l):(l=M(c)?Le:K.current,l=Me(b,l)),m=c.getDerivedStateFromProps,
(r="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Zf(b,g,d,l),kf=!1,k=b.memoizedState,w=g.state=k,y=b.updateQueue,null!==y&&(tf(b,y,d,g,e),w=b.memoizedState),h!==d||k!==w||L.current||kf?("function"===typeof m&&(Qf(b,c,m,d),w=b.memoizedState),(m=kf||Wf(b,c,h,d,k,w,l))?(r||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,w,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,w,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=w),g.props=d,g.state=w,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return xg(a,b,c,d,f,e)}
function xg(a,b,c,d,e,f){vg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Se(b,c,!1),tg(a,b,f);d=b.stateNode;pg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=eg(b,a.child,null,f),b.child=eg(b,null,h,f)):Q(a,b,h,f);b.memoizedState=d.state;e&&Se(b,c,!0);return b.child}function yg(a){var b=a.stateNode;b.pendingContext?Pe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Pe(a,b.context,!1);Jf(a,b.containerInfo)}
function zg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=bf(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=bf(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=fg(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=$e(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=$e(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=eg(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=bf(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=bf(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=eg(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function tg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=$e(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=$e(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Ag(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&d<c){switch(b.tag){case 3:yg(b);og();break;case 5:Lf(b);break;case 1:M(b.type)&&Re(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Bf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return zg(a,b,c);b=tg(a,b,c);return null!==b?b.sibling:null}}return tg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==
a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Me(b,K.current);Df(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(M(d)){var f=!0;Re(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Qf(b,d,g,a);e.updater=Vf;b.stateNode=e;e._reactInternalFiber=b;$f(b,d,a,c);b=xg(null,b,d,!0,f,c)}else b.tag=0,Q(null,b,e,c),b=b.child;
return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Nf(e);b.type=a;e=b.tag=Ze(a);f=P(a,f);g=void 0;switch(e){case 0:g=ug(null,b,a,f,c);break;case 1:g=wg(null,b,a,f,c);break;case 11:g=qg(null,b,a,f,c);break;case 14:g=rg(null,b,a,P(a.type,f),d,c);break;default:t("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),ug(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),wg(a,b,
d,e,c);case 3:yg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;tf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)og(),b=tg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)hg=He(b.stateNode.containerInfo),gg=b,e=ig=!0;e?(b.effectTag|=2,b.child=fg(b,null,d,c)):(Q(a,b,d,c),og());b=b.child}return b;case 5:return Lf(b),null===a&&lg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ce(d,e)?g=null:null!==
f&&Ce(d,f)&&(b.effectTag|=16),vg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=1,b=null):(Q(a,b,g,c),b=b.child),b;case 6:return null===a&&lg(b),null;case 13:return zg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=eg(b,null,d,c):Q(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),qg(a,b,d,e,c);case 7:return Q(a,b,b.pendingProps,c),b.child;case 8:return Q(a,b,b.pendingProps.children,c),b.child;case 12:return Q(a,b,b.pendingProps.children,
c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Bf(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=tg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(1===g.tag){var k=nf(c);k.tag=2;pf(g,k)}g.expirationTime<
c&&(g.expirationTime=c);k=g.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(l.childExpirationTime<c)l.childExpirationTime=c,null!==k&&k.childExpirationTime<c&&(k.childExpirationTime=c);else if(null!==k&&k.childExpirationTime<c)k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;
if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}Q(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Df(b,c),e=Ef(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,Q(a,b,d,c),b.child;case 14:return e=b.type,f=P(e,b.pendingProps),f=P(e.type,f),rg(a,b,e,f,d,c);case 15:return sg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=
!0,Re(b)):a=!1,Df(b,c),Xf(b,d,e,c),$f(b,d,e,c),xg(null,b,d,!0,a,c);default:t("156")}}function Bg(a){a.effectTag|=4}var Cg=void 0,Gg=void 0,Hg=void 0,Ig=void 0;Cg=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Gg=function(){};
Hg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(O.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=ee(g,f);d=ee(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=ge(g,f);d=ge(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ye)}ve(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&xe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Bg(b)}};Ig=function(a,b,c,d){c!==d&&Bg(b)};
var Jg="function"===typeof WeakSet?WeakSet:Set;function Kg(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=nc(c));null!==c&&mc(c.type);b=b.value;null!==a&&1===a.tag&&mc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Lg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Mg(a,c)}else b.current=null}
function Ng(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=se("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function Og(a){"function"===typeof Ue&&Ue(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d()}catch(f){Mg(e,f)}}c=c.next}while(c!==b)}break;case 1:Lg(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){Mg(a,f)}break;case 5:Lg(a);break;case 4:Pg(a)}}
function Qg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Rg(a){a:{for(var b=a.return;null!==b;){if(Qg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(pe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Qg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ye)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Pg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Og(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Og(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Sg(a,b){switch(b.tag){case 0:case 11:case 14:case 15:break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Fe(c,f,e,a,d,b)}break;case 6:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=Rf()));null!==a&&Ng(a,d);c=b.updateQueue;
if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new Jg);c.forEach(function(a){var c=Tg.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:t("163")}}var Ug="function"===typeof WeakMap?WeakMap:Map;function Vg(a,b,c){c=nf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Wg(d);Kg(a,b)};return c}
function Xg(a,b,c){c=nf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Yg?Yg=new Set([this]):Yg.add(this));var c=b.value,e=b.stack;Kg(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Zg(a){switch(a.tag){case 1:M(a.type)&&Ne(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Oe(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 4:return Kf(a),null;case 10:return Cf(a),null;default:return null}}
var $g={readContext:Ef},ah=Xb.ReactCurrentOwner,bh=1073741822,ch=0,dh=!1,S=null,T=null,U=0,eh=-1,fh=!1,V=null,gh=!1,hh=null,ih=null,Yg=null;function jh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ne(b);break;case 3:Kf(b);Oe(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Cf(b)}a=a.return}T=null;U=0;eh=-1;fh=!1;S=null}function Tf(){null!==ih&&(ba.unstable_cancelCallback(hh),ih())}
function kh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){S=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&Ne(b);break;case 3:Kf(b);Oe(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)ng(b),b.effectTag&=-3;Gg(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)Hg(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var k=If(O.current);if(ng(b)){g=b;e=g.stateNode;var l=g.type,m=g.memoizedProps,r=h;e[Ga]=g;e[Ha]=m;f=void 0;h=l;switch(h){case "iframe":case "object":H("load",e);break;case "video":case "audio":for(l=0;l<bb.length;l++)H(bb[l],e);break;case "source":H("error",e);break;case "img":case "image":case "link":H("error",e);H("load",e);break;case "form":H("reset",e);H("submit",e);break;case "details":H("toggle",e);break;case "input":Ac(e,m);H("invalid",e);xe(r,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};H("invalid",e);xe(r,"onChange");break;case "textarea":he(e,m),H("invalid",e),xe(r,"onChange")}ve(h,m);l=null;for(f in m)m.hasOwnProperty(f)&&(k=m[f],"children"===f?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(f)&&null!=k&&xe(r,f));switch(h){case "input":Vb(e);Ec(e,m,!0);break;case "textarea":Vb(e);je(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ye)}f=l;g.updateQueue=f;g=null!==f?!0:!1;g&&Bg(b)}else{m=b;e=f;r=g;l=9===h.nodeType?h:h.ownerDocument;k===ke.html&&(k=le(e));k===ke.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof r.is?l=l.createElement(e,{is:r.is}):(l=l.createElement(e),"select"===e&&r.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ga]=m;e[Ha]=g;Cg(e,b,!1,!1);r=e;l=f;m=g;var w=h,y=we(l,m);switch(l){case "iframe":case "object":H("load",
r);h=m;break;case "video":case "audio":for(h=0;h<bb.length;h++)H(bb[h],r);h=m;break;case "source":H("error",r);h=m;break;case "img":case "image":case "link":H("error",r);H("load",r);h=m;break;case "form":H("reset",r);H("submit",r);h=m;break;case "details":H("toggle",r);h=m;break;case "input":Ac(r,m);h=zc(r,m);H("invalid",r);xe(w,"onChange");break;case "option":h=ee(r,m);break;case "select":r._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});H("invalid",r);xe(w,"onChange");break;case "textarea":he(r,
m);h=ge(r,m);H("invalid",r);xe(w,"onChange");break;default:h=m}ve(l,h);k=void 0;var B=l,R=r,v=h;for(k in v)if(v.hasOwnProperty(k)){var q=v[k];"style"===k?te(R,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&oe(R,q)):"children"===k?"string"===typeof q?("textarea"!==B||""!==q)&&pe(R,q):"number"===typeof q&&pe(R,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=q&&xe(w,k):null!=q&&xc(R,k,q,y))}switch(l){case "input":Vb(r);
Ec(r,m,!1);break;case "textarea":Vb(r);je(r,m);break;case "option":null!=m.value&&r.setAttribute("value",""+yc(m.value));break;case "select":h=r;h.multiple=!!m.multiple;r=m.value;null!=r?fe(h,!!m.multiple,r,!1):null!=m.defaultValue&&fe(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(r.onclick=ye)}(g=Be(f,g))&&Bg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 6:e&&null!=b.stateNode?Ig(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?t("166"):void 0),e=If(Hf.current),If(O.current),ng(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Ga]=g,(g=f.nodeValue!==e)&&Bg(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Ga]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;S=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g!==f||0===(b.effectTag&1)&&g)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);Gg(b);break;case 10:Cf(b);break;case 9:break;case 14:break;case 17:M(b.type)&&Ne(b);break;default:t("156")}S=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==S)return S;null!==c&&0===(c.effectTag&1024)&&(null===
c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Zg(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function lh(a){var b=Ag(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=kh(a));ah.current=null;return b}
function mh(a,b){dh?t("243"):void 0;Tf();dh=!0;ah.currentDispatcher=$g;var c=a.nextExpirationTimeToWorkOn;if(c!==U||a!==T||null===S)jh(),T=a,U=c,S=$e(T.current,null,U),a.pendingCommitExpirationTime=0;var d=!1;do{try{if(b)for(;null!==S&&!nh();)S=lh(S);else for(;null!==S;)S=lh(S)}catch(B){if(Af=zf=yf=null,null===S)d=!0,Wg(B);else{null===S?t("271"):void 0;var e=S,f=e.return;if(null===f)d=!0,Wg(B);else{a:{var g=a,h=f,k=e,l=B;f=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===
typeof l&&"function"===typeof l.then){var m=l;l=h;var r=-1,w=-1;do{if(13===l.tag){var y=l.alternate;if(null!==y&&(y=y.memoizedState,null!==y)){w=10*(1073741822-y.timedOutAt);break}y=l.pendingProps.maxDuration;if("number"===typeof y)if(0>=y)r=0;else if(-1===r||y<r)r=y}l=l.return}while(null!==l);l=h;do{if(y=13===l.tag)y=void 0===l.memoizedProps.fallback?!1:null===l.memoizedState;if(y){h=l.updateQueue;null===h?l.updateQueue=new Set([m]):h.add(m);if(0===(l.mode&1)){l.effectTag|=64;k.effectTag&=-1957;
1===k.tag&&(null===k.alternate?k.tag=17:(f=nf(1073741823),f.tag=2,pf(k,f)));k.expirationTime=1073741823;break a}k=g.pingCache;null===k?(k=g.pingCache=new Ug,h=new Set,k.set(m,h)):(h=k.get(m),void 0===h&&(h=new Set,k.set(m,h)));h.has(f)||(h.add(f),k=oh.bind(null,g,m,f),m.then(k,k));-1===r?g=1073741823:(-1===w&&(w=10*(1073741822-jf(g,f))-5E3),g=w+r);0<=g&&eh<g&&(eh=g);l.effectTag|=2048;l.expirationTime=f;break a}l=l.return}while(null!==l);l=Error((mc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
nc(k))}fh=!0;l=wf(l,k);g=h;do{switch(g.tag){case 3:g.effectTag|=2048;g.expirationTime=f;f=Vg(g,l,f);qf(g,f);break a;case 1:if(m=l,r=g.type,w=g.stateNode,0===(g.effectTag&64)&&("function"===typeof r.getDerivedStateFromError||null!==w&&"function"===typeof w.componentDidCatch&&(null===Yg||!Yg.has(w)))){g.effectTag|=2048;g.expirationTime=f;f=Xg(g,m,f);qf(g,f);break a}}g=g.return}while(null!==g)}S=kh(e);continue}}}break}while(1);dh=!1;Af=zf=yf=ah.currentDispatcher=null;if(d)T=null,a.finishedWork=null;
else if(null!==S)a.finishedWork=null;else{d=a.current.alternate;null===d?t("281"):void 0;T=null;if(fh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<c||0!==f&&f<c||0!==g&&g<c){hf(a,c);ph(a,d,c,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;c=a.nextExpirationTimeToWorkOn=c;b=a.expirationTime=1073741823;ph(a,d,c,b,-1);return}}b&&-1!==eh?(hf(a,c),b=10*(1073741822-jf(a,c)),b<eh&&(eh=b),b=10*(1073741822-Rf()),b=eh-b,ph(a,d,c,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=
c,a.finishedWork=d)}}function Mg(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Yg||!Yg.has(d))){a=wf(b,a);a=Xg(c,a,1073741823);pf(c,a);Uf(c,1073741823);return}break;case 3:a=wf(b,a);a=Vg(c,a,1073741823);pf(c,a);Uf(c,1073741823);return}c=c.return}3===a.tag&&(c=wf(b,a),c=Vg(a,c,1073741823),pf(a,c),Uf(a,1073741823))}
function Sf(a,b){0!==ch?a=ch:dh?a=gh?1073741823:U:b.mode&1?(a=qh?1073741822-10*(((1073741822-a+15)/10|0)+1):1073741822-25*(((1073741822-a+500)/25|0)+1),null!==T&&a===U&&--a):a=1073741823;qh&&(0===rh||a<rh)&&(rh=a);return a}function oh(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==T&&U===c)T=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;gf(c,a);c=a.expirationTime;0!==c&&sh(a,c)}}
function Tg(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=Rf();b=Sf(b,a);a=th(a,b);null!==a&&(ff(a,b),b=a.expirationTime,0!==b&&sh(a,b))}
function th(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function Uf(a,b){a=th(a,b);null!==a&&(!dh&&0!==U&&b>U&&jh(),ff(a,b),dh&&!gh&&T===a||sh(a,a.expirationTime),uh>vh&&(uh=0,t("185")))}function wh(a,b,c,d,e){var f=ch;ch=1073741823;try{return a(b,c,d,e)}finally{ch=f}}var xh=null,W=null,yh=0,zh=void 0,X=!1,Ah=null,Y=0,rh=0,Bh=!1,Ch=null,Z=!1,Dh=!1,qh=!1,Eh=null,Fh=ba.unstable_now(),Gh=1073741822-(Fh/10|0),Hh=Gh,vh=50,uh=0,Ih=null;function Jh(){Gh=1073741822-((ba.unstable_now()-Fh)/10|0)}
function Kh(a,b){if(0!==yh){if(b<yh)return;null!==zh&&ba.unstable_cancelCallback(zh)}yh=b;a=ba.unstable_now()-Fh;zh=ba.unstable_scheduleCallback(Lh,{timeout:10*(1073741822-b)-a})}function ph(a,b,c,d,e){a.expirationTime=d;0!==e||nh()?0<e&&(a.timeoutHandle=De(Mh.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Mh(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Jh();Hh=Gh;Nh(a,c)}function Rf(){if(X)return Hh;Oh();if(0===Y||1===Y)Jh(),Hh=Gh;return Hh}
function sh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===W?(xh=W=a,a.nextScheduledRoot=a):(W=W.nextScheduledRoot=a,W.nextScheduledRoot=xh)):b>a.expirationTime&&(a.expirationTime=b);X||(Z?Dh&&(Ah=a,Y=1073741823,Ph(a,1073741823,!1)):1073741823===b?Qh(1073741823,!1):Kh(a,b))}
function Oh(){var a=0,b=null;if(null!==W)for(var c=W,d=xh;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===W?t("244"):void 0;if(d===d.nextScheduledRoot){xh=W=d.nextScheduledRoot=null;break}else if(d===xh)xh=e=d.nextScheduledRoot,W.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===W){W=c;W.nextScheduledRoot=xh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===W)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}Ah=b;Y=a}var Rh=!1;function nh(){return Rh?!0:ba.unstable_shouldYield()?Rh=!0:!1}function Lh(){try{if(!nh()&&null!==xh){Jh();var a=xh;do{var b=a.expirationTime;0!==b&&Gh<=b&&(a.nextExpirationTimeToWorkOn=Gh);a=a.nextScheduledRoot}while(a!==xh)}Qh(0,!0)}finally{Rh=!1}}
function Qh(a,b){Oh();if(b)for(Jh(),Hh=Gh;null!==Ah&&0!==Y&&a<=Y&&!(Rh&&Gh>Y);)Ph(Ah,Y,Gh>Y),Oh(),Jh(),Hh=Gh;else for(;null!==Ah&&0!==Y&&a<=Y;)Ph(Ah,Y,!1),Oh();b&&(yh=0,zh=null);0!==Y&&Kh(Ah,Y);uh=0;Ih=null;if(null!==Eh)for(a=Eh,Eh=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Bh||(Bh=!0,Ch=d)}}if(Bh)throw a=Ch,Ch=null,Bh=!1,a;}function Nh(a,b){X?t("253"):void 0;Ah=a;Y=b;Ph(a,b,!1);Qh(1073741823,!1)}
function Ph(a,b,c){X?t("245"):void 0;X=!0;if(c){var d=a.finishedWork;null!==d?Sh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),mh(a,c),d=a.finishedWork,null!==d&&(nh()?a.finishedWork=d:Sh(a,d,b)))}else d=a.finishedWork,null!==d?Sh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),mh(a,c),d=a.finishedWork,null!==d&&Sh(a,d,b));X=!1}
function Sh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===Eh?Eh=[d]:Eh.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===Ih?uh++:(Ih=a,uh=0);gh=dh=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
0):(d<a.latestPingedTime&&(a.latestPingedTime=0),e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?ff(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,ff(a,d)):d>e&&ff(a,d));gf(0,a);ah.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ze=Hd;e=Td();if(Ud(e)){if("selectionStart"in
e)var f={start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(db){f=null;break a}var l=0,m=-1,r=-1,w=0,y=0,B=e,R=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(r=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;R=B;B=v}for(;;){if(B===
e)break b;R===f&&++w===h&&(m=l);R===k&&++y===g&&(r=l);if(null!==(v=B.nextSibling))break;B=R;R=B.parentNode}B=v}f=-1===m||-1===r?null:{start:m,end:r}}else f=null}f=f||{start:0,end:0}}else f=null;Ae={focusedElem:e,selectionRange:f};Hd=!1;for(V=d;null!==V;){e=!1;f=void 0;try{for(;null!==V;){if(V.effectTag&256)a:{var q=V.alternate;h=V;switch(h.tag){case 0:case 11:case 15:break a;case 1:if(h.effectTag&256&&null!==q){var u=q.memoizedProps,A=q.memoizedState,Yf=h.stateNode,Vh=Yf.getSnapshotBeforeUpdate(h.elementType===
h.type?u:P(h.type,u),A);Yf.__reactInternalSnapshotBeforeUpdate=Vh}break a;case 3:case 5:case 6:case 4:case 17:break a;default:t("163")}}V=V.nextEffect}}catch(db){e=!0,f=db}e&&(null===V?t("178"):void 0,Mg(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){q=!1;u=void 0;try{for(;null!==V;){var x=V.effectTag;x&16&&pe(V.stateNode,"");if(x&128){var C=V.alternate;if(null!==C){var p=C.ref;null!==p&&("function"===typeof p?p(null):p.current=null)}}switch(x&14){case 2:Rg(V);V.effectTag&=-3;break;case 6:Rg(V);
V.effectTag&=-3;Sg(V.alternate,V);break;case 4:Sg(V.alternate,V);break;case 8:A=V;Pg(A);A.return=null;A.child=null;A.memoizedState=null;A.updateQueue=null;var G=A.alternate;null!==G&&(G.return=null,G.child=null,G.memoizedState=null,G.updateQueue=null)}V=V.nextEffect}}catch(db){q=!0,u=db}q&&(null===V?t("178"):void 0,Mg(V,u),null!==V&&(V=V.nextEffect))}p=Ae;C=Td();x=p.focusedElem;q=p.selectionRange;if(C!==x&&x&&x.ownerDocument&&Sd(x.ownerDocument.documentElement,x)){null!==q&&Ud(x)&&(C=q.start,p=q.end,
void 0===p&&(p=C),"selectionStart"in x?(x.selectionStart=C,x.selectionEnd=Math.min(p,x.value.length)):(p=(C=x.ownerDocument||document)&&C.defaultView||window,p.getSelection&&(p=p.getSelection(),u=x.textContent.length,G=Math.min(q.start,u),q=void 0===q.end?G:Math.min(q.end,u),!p.extend&&G>q&&(u=q,q=G,G=u),u=Rd(x,G),A=Rd(x,q),u&&A&&(1!==p.rangeCount||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==A.node||p.focusOffset!==A.offset)&&(C=C.createRange(),C.setStart(u.node,u.offset),p.removeAllRanges(),
G>q?(p.addRange(C),p.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),p.addRange(C))))));C=[];for(p=x;p=p.parentNode;)1===p.nodeType&&C.push({element:p,left:p.scrollLeft,top:p.scrollTop});"function"===typeof x.focus&&x.focus();for(x=0;x<C.length;x++)p=C[x],p.element.scrollLeft=p.left,p.element.scrollTop=p.top}Ae=null;Hd=!!ze;ze=null;a.current=b;for(V=d;null!==V;){d=!1;x=void 0;try{for(C=c;null!==V;){var Fb=V.effectTag;if(Fb&36){var Gb=V.alternate;p=V;G=C;switch(p.tag){case 0:case 11:case 15:break;
case 1:var Hc=p.stateNode;if(p.effectTag&4)if(null===Gb)Hc.componentDidMount();else{var ii=p.elementType===p.type?Gb.memoizedProps:P(p.type,Gb.memoizedProps);Hc.componentDidUpdate(ii,Gb.memoizedState,Hc.__reactInternalSnapshotBeforeUpdate)}var Dg=p.updateQueue;null!==Dg&&uf(p,Dg,Hc,G);break;case 3:var Eg=p.updateQueue;if(null!==Eg){q=null;if(null!==p.child)switch(p.child.tag){case 5:q=p.child.stateNode;break;case 1:q=p.child.stateNode}uf(p,Eg,q,G)}break;case 5:var ji=p.stateNode;null===Gb&&p.effectTag&
4&&Be(p.type,p.memoizedProps)&&ji.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:t("163")}}if(Fb&128){var Ic=V.ref;if(null!==Ic){var Fg=V.stateNode;switch(V.tag){case 5:var ce=Fg;break;default:ce=Fg}"function"===typeof Ic?Ic(ce):Ic.current=ce}}V=V.nextEffect}}catch(db){d=!0,x=db}d&&(null===V?t("178"):void 0,Mg(V,x),null!==V&&(V=V.nextEffect))}dh=gh=!1;"function"===typeof Te&&Te(b.stateNode);Fb=b.expirationTime;b=b.childExpirationTime;b=b>Fb?b:Fb;0===b&&(Yg=
null);a.expirationTime=b;a.finishedWork=null}function Wg(a){null===Ah?t("246"):void 0;Ah.expirationTime=0;Bh||(Bh=!0,Ch=a)}function Th(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||X||Qh(1073741823,!1)}}function Uh(a,b){if(Z&&!Dh){Dh=!0;try{return a(b)}finally{Dh=!1}}return a(b)}function Wh(a,b,c){if(qh)return a(b,c);Z||X||0===rh||(Qh(rh,!1),rh=0);var d=qh,e=Z;Z=qh=!0;try{return a(b,c)}finally{qh=d,(Z=e)||X||Qh(1073741823,!1)}}
function Xh(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===kd(c)&&1===c.tag?void 0:t("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);t("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=Qe(c,h,g);break a}}c=g}else c=Ke;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Tf();pf(f,e);Uf(f,d);return d}function Yh(a,b,c,d){var e=b.current,f=Rf();e=Sf(f,e);return Xh(a,b,c,e,d)}function Zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function $h(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Cb=function(a,b,c){switch(b){case "input":Cc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=La(d);e?void 0:t("90");Wb(d);Cc(d,e)}}}break;case "textarea":ie(a,c);break;case "select":b=c.value,null!=b&&fe(a,!!c.multiple,b,!1)}};
function ai(a){var b=1073741822-25*(((1073741822-Rf()+500)/25|0)+1);b>=bh&&(b=bh-1);this._expirationTime=bh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}ai.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new bi;Xh(a,b,null,c,d._onCommit);return d};
ai.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
ai.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Nh(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};ai.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function bi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}bi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
bi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function ci(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
ci.prototype.render=function(a,b){var c=this._internalRoot,d=new bi;b=void 0===b?null:b;null!==b&&d.then(b);Yh(a,c,null,d._onCommit);return d};ci.prototype.unmount=function(a){var b=this._internalRoot,c=new bi;a=void 0===a?null:a;null!==a&&c.then(a);Yh(null,b,null,c._onCommit);return c};ci.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new bi;c=void 0===c?null:c;null!==c&&e.then(c);Yh(b,d,a,e._onCommit);return e};
ci.prototype.createBatch=function(){var a=new ai(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function di(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Kb=Th;Lb=Wh;Mb=function(){X||0===rh||(Qh(rh,!1),rh=0)};
function ei(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ci(a,!1,b)}
function fi(a,b,c,d,e){di(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=ei(c,d);if("function"===typeof e){var h=e;e=function(){var a=Zh(f._internalRoot);h.call(a)}}Uh(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Zh(f._internalRoot)}
function gi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;di(b)?void 0:t("200");return $h(a,b,null,c)}
var ki={createPortal:gi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=nd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return fi(null,a,b,!0,c)},render:function(a,b,c){return fi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return fi(a,b,c,!1,d)},unmountComponentAtNode:function(a){di(a)?
void 0:t("40");return a._reactRootContainer?(Uh(function(){fi(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return gi.apply(void 0,arguments)},unstable_batchedUpdates:Th,unstable_interactiveUpdates:Wh,flushSync:function(a,b){X?t("187"):void 0;var c=Z;Z=!0;try{return wh(a,b)}finally{Z=c,Qh(1073741823,!1)}},unstable_createRoot:hi,unstable_flushControlled:function(a){var b=Z;Z=!0;try{wh(a)}finally{(Z=b)||X||Qh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ja,
Ka,La,Ca.injectEventPluginsByName,qa,Ra,function(a){za(a,Qa)},Ib,Jb,Jd,Ea]}};function hi(a,b){di(a)?void 0:t("299","unstable_createRoot");return new ci(a,!0,null!=b&&!0===b.hydrate)}(function(a){var b=a.findFiberByHostInstance;return We(n({},a,{overrideProps:null,findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ia,bundleType:0,version:"16.7.0",rendererPackageName:"react-dom"});
var li={default:ki},mi=li&&ki||li;module.exports=mi.default||mi;


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-overlays/lib/LegacyPortal.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/lib/LegacyPortal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);
        _this._overlayTarget = null;
      }
      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {
      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

      // Save reference for future access.
      if (overlay !== null) {
        _this._mountOverlayTarget();

        var initialRender = !_this._overlayInstance;

        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function () {
          if (initialRender && _this.props.onRendered) {
            _this.props.onRendered();
          }
        });
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();
        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._renderOverlay();
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Overlay.js":
/*!****************************************************!*\
  !*** ./node_modules/react-overlays/lib/Overlay.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js");

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Portal = __webpack_require__(/*! ./Portal */ "./node_modules/react-overlays/lib/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = __webpack_require__(/*! ./Position */ "./node_modules/react-overlays/lib/Position.js");

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = __webpack_require__(/*! ./RootCloseWrapper */ "./node_modules/react-overlays/lib/RootCloseWrapper.js");

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */
var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleHidden = function () {
      _this.setState({ exited: true });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = { exited: !props.show };
    _this.onHiddenListener = _this.handleHidden.bind(_this);
    return _this;
  }

  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        container = _props.container,
        containerPadding = _props.containerPadding,
        target = _props.target,
        placement = _props.placement,
        shouldUpdatePosition = _props.shouldUpdatePosition,
        rootClose = _props.rootClose,
        children = _props.children,
        Transition = _props.transition,
        props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']);

    // Don't un-render the overlay while it's transitioning out.


    var mountOverlay = props.show || Transition && !this.state.exited;
    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;

    // Position is be inner-most because it adds inline styles into the child,
    // which the other wrappers don't forward correctly.
    child = _react2.default.createElement(
      _Position2.default,
      { container: container, containerPadding: containerPadding, target: target, placement: placement, shouldUpdatePosition: shouldUpdatePosition },
      child
    );

    if (Transition) {
      var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered;

      // This animates the child node by injecting props, so it must precede
      // anything that adds a wrapping div.

      child = _react2.default.createElement(
        Transition,
        {
          'in': props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        child
      );
    }

    // This goes after everything else because it adds a wrapping div.
    if (rootClose) {
      child = _react2.default.createElement(
        _RootCloseWrapper2.default,
        { onRootClose: props.onHide },
        child
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      { container: container },
      child
    );
  };

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2.default.bool,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes2.default.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes2.default.func;
    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(undefined, [props].concat(args));
  },


  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType2.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2.default.func
});

exports.default = Overlay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Portal.js":
/*!***************************************************!*\
  !*** ./node_modules/react-overlays/lib/Portal.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _LegacyPortal = __webpack_require__(/*! ./LegacyPortal */ "./node_modules/react-overlays/lib/LegacyPortal.js");

var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setContainer = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      _this._portalContainerNode = (0, _getContainer2.default)(props.container, (0, _ownerDocument2.default)(_this).body);
    }, _this.getMountNode = function () {
      return _this._portalContainerNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this.setContainer();
    this.forceUpdate(this.props.onRendered);
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._portalContainerNode = null;
  };

  Portal.prototype.render = function render() {
    return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Position.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-overlays/lib/Position.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calculatePosition = __webpack_require__(/*! ./utils/calculatePosition */ "./node_modules/react-overlays/lib/utils/calculatePosition.js");

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getContainer = __webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Position component calculates the coordinates for its child, to position
 * it relative to a `target` component or node. Useful for creating callouts
 * and tooltips, the Position component injects a `style` props with `left` and
 * `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows
 * for giving your components a sense of directionality.
 */
var Position = function (_React$Component) {
  _inherits(Position, _React$Component);

  function Position(props, context) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.getTarget = function () {
      var target = _this.props.target;

      var targetElement = typeof target === 'function' ? target() : target;
      return targetElement && _reactDom2.default.findDOMNode(targetElement) || null;
    };

    _this.maybeUpdatePosition = function (placementChanged) {
      var target = _this.getTarget();

      if (!_this.props.shouldUpdatePosition && target === _this._lastTarget && !placementChanged) {
        return;
      }

      _this.updatePosition(target);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };

    _this._needsFlush = false;
    _this._lastTarget = null;
    return _this;
  }

  Position.prototype.componentDidMount = function componentDidMount() {
    this.updatePosition(this.getTarget());
  };

  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this._needsFlush = true;
  };

  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._needsFlush) {
      this._needsFlush = false;
      this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
    }
  };

  Position.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['children', 'className']);

    var _state = this.state,
        positionLeft = _state.positionLeft,
        positionTop = _state.positionTop,
        arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

    // These should not be forwarded to the child.


    delete props.target;
    delete props.container;
    delete props.containerPadding;
    delete props.shouldUpdatePosition;

    var child = _react2.default.Children.only(children);
    return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
      // FIXME: Don't forward `positionLeft` and `positionTop` via both props
      // and `props.style`.
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: (0, _classnames2.default)(className, child.props.className),
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  Position.prototype.updatePosition = function updatePosition(target) {
    this._lastTarget = target;

    if (!target) {
      this.setState({
        positionLeft: 0,
        positionTop: 0,
        arrowOffsetLeft: null,
        arrowOffsetTop: null
      });

      return;
    }

    var overlay = _reactDom2.default.findDOMNode(this);
    var container = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);

    this.setState((0, _calculatePosition2.default)(this.props.placement, overlay, target, container, this.props.containerPadding));
  };

  return Position;
}(_react2.default.Component);

Position.propTypes = {
  /**
   * A node, element, or function that returns either. The child will be
   * be positioned next to the `target` specified.
   */
  target: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * "offsetParent" of the component
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _propTypes2.default.number,
  /**
   * How to position the component relative to the target
   */
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Whether the position should be changed on each update
   */
  shouldUpdatePosition: _propTypes2.default.bool
};

Position.displayName = 'Position';

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};

exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/RootCloseWrapper.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-overlays/lib/RootCloseWrapper.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _contains = __webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = __webpack_require__(/*! ./utils/addEventListener */ "./node_modules/react-overlays/lib/utils/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = __webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escapeKeyCode = 27;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */

var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.addEventListeners = function () {
      var event = _this.props.event;

      var doc = (0, _ownerDocument2.default)(_this);

      // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.
      _this.documentMouseCaptureListener = (0, _addEventListener2.default)(doc, event, _this.handleMouseCapture, true);

      _this.documentMouseListener = (0, _addEventListener2.default)(doc, event, _this.handleMouse);

      _this.documentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this.handleKeyUp);
    };

    _this.removeEventListeners = function () {
      if (_this.documentMouseCaptureListener) {
        _this.documentMouseCaptureListener.remove();
      }

      if (_this.documentMouseListener) {
        _this.documentMouseListener.remove();
      }

      if (_this.documentKeyupListener) {
        _this.documentKeyupListener.remove();
      }
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2.default)(_reactDom2.default.findDOMNode(_this), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react2.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes2.default.func,
  /**
   * Children to render.
   */
  children: _propTypes2.default.element,
  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes2.default.oneOf(['click', 'mousedown'])
};

RootCloseWrapper.defaultProps = {
  event: 'click'
};

exports.default = RootCloseWrapper;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/addEventListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-overlays/lib/utils/addEventListener.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);

  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__(/*! dom-helpers/events/on */ "./node_modules/dom-helpers/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(/*! dom-helpers/events/off */ "./node_modules/dom-helpers/events/off.js");

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/calculatePosition.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-overlays/lib/utils/calculatePosition.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePosition;

var _offset = __webpack_require__(/*! dom-helpers/query/offset */ "./node_modules/dom-helpers/query/offset.js");

var _offset2 = _interopRequireDefault(_offset);

var _position = __webpack_require__(/*! dom-helpers/query/position */ "./node_modules/dom-helpers/query/position.js");

var _position2 = _interopRequireDefault(_position);

var _scrollTop = __webpack_require__(/*! dom-helpers/query/scrollTop */ "./node_modules/dom-helpers/query/scrollTop.js");

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _ownerDocument = __webpack_require__(/*! ./ownerDocument */ "./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainerDimensions(containerNode) {
  var width = void 0,
      height = void 0,
      scroll = void 0;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;

    scroll = (0, _scrollTop2.default)((0, _ownerDocument2.default)(containerNode).documentElement) || (0, _scrollTop2.default)(containerNode);
  } else {
    var _getOffset = (0, _offset2.default)(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;

    scroll = (0, _scrollTop2.default)(containerNode);
  }

  return { width: width, height: height, scroll: scroll };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  var _getOffset2 = (0, _offset2.default)(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

  var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);

    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
  }

  return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/getContainer.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-overlays/lib/utils/getContainer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/ownerDocument.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-overlays/lib/utils/ownerDocument.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-tackle-box/Slot.js":
/*!***********************************************!*\
  !*** ./node_modules/react-tackle-box/Slot.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = createSlot;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js"));

function createSlot() {
  var anchor = null;
  var instance = null;

  var set = function set(el) {
    anchor = el;
    instance && instance.forceUpdate();
  };

  var Outlet =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inheritsLoose2.default)(Outlet, _React$Component);

    function Outlet() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Outlet.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return false;
    };

    _proto.render = function render() {
      return _react.default.createElement("div", (0, _extends2.default)({
        ref: set
      }, this.props));
    };

    return Outlet;
  }(_react.default.Component);

  var Entry =
  /*#__PURE__*/
  function (_React$Component2) {
    (0, _inheritsLoose2.default)(Entry, _React$Component2);

    function Entry() {
      return _React$Component2.apply(this, arguments) || this;
    }

    var _proto2 = Entry.prototype;

    _proto2.componentDidMount = function componentDidMount() {
      !!instance ?  false ? undefined : invariant(false) : void 0;
      instance = this;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      instance = null;
    };

    _proto2.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          waitForOutlet = _this$props.waitForOutlet;
      var child = typeof children === 'function' ? children(!anchor) : children;
      if (anchor) return _reactDom.default.createPortal(child, anchor);
      return !waitForOutlet ? child : null;
    };

    return Entry;
  }(_react.default.Component);

  Entry.propTypes = {
    waitForOutlet: function waitForOutlet() {}
  };
  return {
    Entry: Entry,
    Outlet: Outlet
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.12.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=!1,h=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=c.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=h,Q=l;h=a;l=b;try{var g=d()}finally{h=e,l=Q}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,p());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function v(){if(-1===k&&null!==c&&1===c.priorityLevel){m=!0;try{do u();while(null!==c&&1===c.priorityLevel)}finally{m=!1,null!==c?p():n=!1}}}function t(a){m=!0;var b=f;f=a;try{if(a)for(;null!==c;){var d=exports.unstable_now();if(c.expirationTime<=d){do u();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do u();while(null!==c&&!w())}}finally{m=!1,f=b,null!==c?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var d=exports.unstable_now(),e=!1;if(0>=P-d)if(-1!==b&&b<=d)e=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(e)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var d=h,e=k;h=a;k=exports.unstable_now();try{return b()}finally{h=d,k=e,v()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(h){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:h,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,p();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,p());
b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=h;return function(){var d=h,e=k;h=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{h=d,k=e,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return h};
exports.unstable_shouldYield=function(){return!f&&(null!==c&&c.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==c&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return c};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/lib/rng.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __webpack_require__(/*! crypto */ "crypto");

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/static/d/1529889140.json":
/*!*****************************************!*\
  !*** ./public/static/d/1529889140.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Gatsby + Netlify CMS Starter","description":"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}};

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: HTMLContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLContent", function() { return HTMLContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var HTMLContent = function HTMLContent(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

var Content = function Content(_ref2) {
  var content = _ref2.content,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, content);
};

Content.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
HTMLContent.propTypes = Content.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Features.js":
/*!************************************!*\
  !*** ./src/components/Features.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");




var FeatureGrid = function FeatureGrid(_ref) {
  var gridItems = _ref.gridItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline"
  }, gridItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.text,
      className: "column is-6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "has-text-centered"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: '240px',
        display: 'inline-block'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageInfo: item
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.text)));
  }));
};

FeatureGrid.propTypes = {
  gridItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureGrid);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1529889140_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1529889140.json */ "./public/static/d/1529889140.json");
var _public_static_d_1529889140_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1529889140.json */ "./public/static/d/1529889140.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_5__);







var TemplateWrapper = function TemplateWrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "1529889140",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
        lang: "en"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, data.site.siteMetadata.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "description",
        content: data.site.siteMetadata.description
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-32x32.png",
        sizes: "32x32"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-16x16.png",
        sizes: "16x16"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/img/safari-pinned-tab.svg",
        color: "#ff4400"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: "#fff"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:type",
        content: "business.business"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:title",
        content: data.site.siteMetadata.title
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:url",
        content: "/"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:image",
        content: "/img/og-image.jpg"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children));
    },
    data: _public_static_d_1529889140_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TemplateWrapper);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/github-icon.svg */ "./src/img/github-icon.svg");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_5__);







var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Navbar, _React$Component);

  function Navbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Navbar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers

    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function (el) {
        el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = el.dataset.target;
          var $target = document.getElementById(target); // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"

          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
      className: "navbar is-transparent",
      role: "navigation",
      "aria-label": "main-navigation"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-brand"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/",
      className: "navbar-item",
      title: "Logo"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "Kaldi",
      style: {
        width: '88px'
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-burger burger",
      "data-target": "navMenu"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "navMenu",
      className: "navbar-menu"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-start has-text-centered"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "navbar-item",
      to: "/about"
    }, "About"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "navbar-item",
      to: "/products"
    }, "Products"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "navbar-item",
      to: "/contact"
    }, "Contact"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "navbar-item",
      to: "/contact/examples"
    }, "Form Examples"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "navbar-item",
      to: "/calendar"
    }, "Calendar")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-end has-text-centered"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "navbar-item",
      href: "https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Github"
    })))))));
  };

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/PreviewCompatibleImage.js":
/*!**************************************************!*\
  !*** ./src/components/PreviewCompatibleImage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_2__);




var PreviewCompatibleImage = function PreviewCompatibleImage(_ref) {
  var imageInfo = _ref.imageInfo;
  var imageStyle = {
    borderRadius: '5px'
  };
  var _imageInfo$alt = imageInfo.alt,
      alt = _imageInfo$alt === void 0 ? '' : _imageInfo$alt,
      childImageSharp = imageInfo.childImageSharp,
      image = imageInfo.image;

  if (!!image && !!image.childImageSharp) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: imageStyle,
      fluid: image.childImageSharp.fluid,
      alt: alt
    });
  }

  if (!!childImageSharp) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: imageStyle,
      fluid: childImageSharp.fluid,
      alt: alt
    });
  }

  if (!!image && typeof image === 'string') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: imageStyle,
    src: image,
    alt: alt
  });
  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    childImageSharp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PreviewCompatibleImage);

/***/ }),

/***/ "./src/components/Pricing.js":
/*!***********************************!*\
  !*** ./src/components/Pricing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Pricing = function Pricing(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, data.map(function (price) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: price.plan,
      className: "column"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "has-text-centered has-text-weight-semibold"
    }, price.plan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "is-size-1 has-text-weight-bold has-text-primary has-text-centered"
    }, "$", price.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "has-text-weight-semibold"
    }, price.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, price.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item,
        className: "is-size-5"
      }, item);
    }))));
  }));
};

Pricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    plan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);




var Testimonials = function Testimonials(_ref) {
  var testimonials = _ref.testimonials;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, testimonials.map(function (testimonial) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
      className: "message"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message-body"
    }, testimonial.quote, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", null, " \u2013 ", testimonial.author)));
  }));
};

Testimonials.propTypes = {
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./src/components/all.sass":
/*!*********************************!*\
  !*** ./src/components/all.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/img/github-icon.svg":
/*!*********************************!*\
  !*** ./src/img/github-icon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4K"

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");



var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness.")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/calendar/ExampleControlSlot.js":
/*!**************************************************!*\
  !*** ./src/pages/calendar/ExampleControlSlot.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_tackle_box_Slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-tackle-box/Slot */ "./node_modules/react-tackle-box/Slot.js");
/* harmony import */ var react_tackle_box_Slot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_tackle_box_Slot__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react_tackle_box_Slot__WEBPACK_IMPORTED_MODULE_0___default()());

/***/ }),

/***/ "./src/pages/calendar/events.js":
/*!**************************************!*\
  !*** ./src/pages/calendar/events.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  'title': 'All Day Event very long title',
  'bgColor': '#ff7f50',
  'allDay': true,
  'start': new Date(2015, 3, 0),
  'end': new Date(2015, 3, 1)
}, {
  'title': 'Long Event',
  'start': new Date(2015, 3, 7),
  'end': new Date(2015, 3, 10)
}, {
  'title': 'DTS STARTS',
  'bgColor': '#dc143c',
  'start': new Date(2016, 2, 13, 0, 0, 0),
  'end': new Date(2016, 2, 20, 0, 0, 0)
}, {
  'title': 'DTS ENDS',
  'bgColor': '#ff8c00',
  'start': new Date(2016, 10, 6, 0, 0, 0),
  'end': new Date(2016, 10, 13, 0, 0, 0)
}, {
  'title': 'Some Event',
  'bgColor': '#9932cc',
  'start': new Date(2015, 3, 9, 0, 0, 0),
  'end': new Date(2015, 3, 9, 0, 0, 0)
}, {
  'title': 'Conference',
  'bgColor': '#e9967a',
  'start': new Date(2015, 3, 11),
  'end': new Date(2015, 3, 13),
  desc: 'Big conference for important people'
}, {
  'title': 'Meeting',
  'bgColor': '#8fbc8f',
  'start': new Date(2015, 3, 12, 10, 30, 0, 0),
  'end': new Date(2015, 3, 12, 12, 30, 0, 0),
  desc: 'Pre-meeting meeting, to prepare for the meeting'
}, {
  'title': 'Lunch',
  'bgColor': '#cd5c5c',
  'start': new Date(2015, 3, 12, 12, 0, 0, 0),
  'end': new Date(2015, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch'
}, {
  'title': 'Happy Hour',
  'start': new Date(2015, 3, 12, 12, 0, 0, 0),
  'end': new Date(2015, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch happy hour'
}, {
  'title': 'Meeting',
  'bgColor': '#da70d6',
  'start': new Date(2015, 3, 12, 14, 0, 0, 0),
  'end': new Date(2015, 3, 12, 15, 0, 0, 0)
}, {
  'title': 'Happy Hour',
  'bgColor': '#eee8aa',
  'start': new Date(2015, 3, 17, 17, 0, 0, 0),
  'end': new Date(2015, 3, 17, 17, 30, 0, 0),
  desc: 'Most important meal of the day'
}, {
  'title': 'Dinner',
  'bgColor': '#98fb98',
  'start': new Date(2015, 3, 15, 20, 0, 0, 0),
  'end': new Date(2015, 3, 15, 21, 0, 0, 0)
}, {
  'title': 'Birthday Party',
  'bgColor': '#afeeee',
  'start': new Date(2015, 3, 13, 7, 0, 0),
  'end': new Date(2015, 3, 13, 10, 30, 0)
}, {
  'title': 'Birthday Party 2',
  'bgColor': '#db7093',
  'start': new Date(2015, 3, 13, 7, 0, 0),
  'end': new Date(2015, 3, 13, 10, 30, 0)
}, {
  'title': 'Birthday Party 3',
  'bgColor': '#cd853f',
  'start': new Date(2015, 3, 13, 7, 0, 0),
  'end': new Date(2015, 3, 13, 10, 30, 0)
}, {
  'title': 'Late Night Event',
  'bgColor': '#b0e0e6',
  'start': new Date(2015, 3, 17, 19, 30, 0),
  'end': new Date(2015, 3, 18, 2, 0, 0)
}, {
  'title': 'Multi-day Event',
  'start': new Date(2015, 3, 20, 19, 30, 0),
  'end': new Date(2015, 3, 22, 2, 0, 0)
}]);

/***/ }),

/***/ "./src/pages/calendar/index.js":
/*!*************************************!*\
  !*** ./src/pages/calendar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "core-js/modules/es6.object.keys");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectable */ "./src/pages/calendar/selectable.js");
/* harmony import */ var react_big_calendar_lib_less_styles_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-big-calendar/lib/less/styles.less */ "./node_modules/react-big-calendar/lib/less/styles.less");
/* harmony import */ var react_big_calendar_lib_less_styles_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_less_styles_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.less */ "./src/pages/calendar/styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _prism_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prism.less */ "./src/pages/calendar/prism.less");
/* harmony import */ var _prism_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_prism_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/lib/index.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events */ "./src/pages/calendar/events.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














var localizer = react_big_calendar__WEBPACK_IMPORTED_MODULE_11___default.a.momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_13___default.a);

function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
}

var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Index, _React$Component);

  function Index(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      isValidated: false
    };
    return _this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "app"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "examples"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "example"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "demo"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
      className: "callout"
    }, "Click an event to see more info, or drag the mouse over the calendar to select a date/time range."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_selectable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      localizer: localizer
    })))))));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);



/***/ }),

/***/ "./src/pages/calendar/prism.less":
/*!***************************************!*\
  !*** ./src/pages/calendar/prism.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/calendar/selectable.js":
/*!******************************************!*\
  !*** ./src/pages/calendar/selectable.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/lib/index.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/pages/calendar/events.js");
/* harmony import */ var _ExampleControlSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExampleControlSlot */ "./src/pages/calendar/ExampleControlSlot.js");





var propTypes = {};

var Selectable =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Selectable, _React$Component);

  function Selectable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (_ref) {
      var start = _ref.start,
          end = _ref.end;
      var title = window.prompt('New Event name');
      if (title) _this.setState({
        events: [].concat(_this.state.events, [{
          start: start,
          end: end,
          title: title
        }])
      });
    };

    _this.state = {
      events: _events__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    return _this;
  }

  var _proto = Selectable.prototype;

  _proto.render = function render() {
    var localizer = this.props.localizer;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExampleControlSlot__WEBPACK_IMPORTED_MODULE_4__["default"].Entry, {
      waitForOutlet: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Click an event to see more info, or drag the mouse over the calendar to select a date/time range.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      selectable: true,
      localizer: localizer,
      events: this.state.events,
      defaultView: react_big_calendar__WEBPACK_IMPORTED_MODULE_2___default.a.Views.WEEK,
      scrollToTime: new Date(1970, 1, 1, 6),
      defaultDate: new Date(2015, 3, 12),
      onSelectEvent: function onSelectEvent(event) {
        return alert(event.title);
      },
      onSelectSlot: this.handleSelect
    }));
  };

  return Selectable;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Selectable.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Selectable);

/***/ }),

/***/ "./src/pages/calendar/styles.less":
/*!****************************************!*\
  !*** ./src/pages/calendar/styles.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/contact/examples.js":
/*!***************************************!*\
  !*** ./src/pages/contact/examples.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");





var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Index, _React$Component);

  function Index() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hi people"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "This is an example site integrating Netlify\u2019s form handling with Gatsby"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      to: "/contact"
    }, "Basic contact form")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      to: "/contact/file-upload/"
    }, "Form with file upload"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Troubleshooting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Forms stop working after upgrading to Gatsby v2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "This can be caused by the offline-plugin. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232"
    }, "Workaround"), " is to use ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null, "?no-cache=1"), " in the POST url to prevent the service worker from handling form submissions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Adding reCAPTCHA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you are planning to add reCAPTCHA please go to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://github.com/imorente/gatsby-netlify-form-example"
    }, "imorente/gatsby-netlify-form-example"), " for a working example.")))));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/pages/contact/file-upload.js":
/*!******************************************!*\
  !*** ./src/pages/contact/file-upload.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "core-js/modules/es6.object.keys");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");










function encode(data) {
  var formData = new FormData();

  var _arr = Object.keys(data);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    formData.append(key, data[key]);
  }

  return formData;
}

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState));
    };

    _this.handleAttachment = function (e) {
      var _this$setState2;

      _this.setState((_this$setState2 = {}, _this$setState2[e.target.name] = e.target.files[0], _this$setState2));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = e.target;
      fetch("/", {
        method: "POST",
        body: encode(Object.assign({
          "form-name": form.getAttribute("name")
        }, _this.state))
      }).then(function () {
        return Object(gatsby_link__WEBPACK_IMPORTED_MODULE_7__["navigate"])(form.getAttribute("action"));
      }).catch(function (error) {
        return alert(error);
      });
    };

    _this.state = {};
    return _this;
  }

  var _proto = Contact.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "File Upload"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
      name: "file-upload",
      method: "post",
      action: "/contact/thanks/",
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "file-upload"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      hidden: true
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Don\u2019t fill this out:", " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      name: "bot-field",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label",
      htmlFor: "name"
    }, "Your name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "input",
      type: "text",
      name: "name",
      onChange: this.handleChange,
      id: "name",
      required: true
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "file"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "file-label"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "file-input",
      type: "file",
      name: "attachment",
      onChange: this.handleAttachment
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "file-cta"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "file-label"
    }, "Choose a file\u2026"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "button is-link",
      type: "submit"
    }, "Send")))))));
  };

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/pages/contact/index.js":
/*!************************************!*\
  !*** ./src/pages/contact/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "core-js/modules/es6.object.keys");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");










function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
}

var Index =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Index, _React$Component);

  function Index(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = e.target;
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode(Object.assign({
          "form-name": form.getAttribute("name")
        }, _this.state))
      }).then(function () {
        return Object(gatsby_link__WEBPACK_IMPORTED_MODULE_7__["navigate"])(form.getAttribute("action"));
      }).catch(function (error) {
        return alert(error);
      });
    };

    _this.state = {
      isValidated: false
    };
    return _this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
      name: "contact",
      method: "post",
      action: "/contact/thanks/",
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "contact"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      hidden: true
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Don\u2019t fill this out:", " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      name: "bot-field",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label",
      htmlFor: "name"
    }, "Your name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "input",
      type: "text",
      name: "name",
      onChange: this.handleChange,
      id: "name",
      required: true
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label",
      htmlFor: "email"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "input",
      type: "email",
      name: "email",
      onChange: this.handleChange,
      id: "email",
      required: true
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label",
      htmlFor: "message"
    }, "Message"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
      className: "textarea",
      name: "message",
      onChange: this.handleChange,
      id: "message",
      required: true
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "button is-link",
      type: "submit"
    }, "Send")))))));
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/pages/contact/thanks.js":
/*!*************************************!*\
  !*** ./src/pages/contact/thanks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Thank you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is a custom thank you page for form submissions")))));
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");






var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(IndexPage, _React$Component);

  function IndexPage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = IndexPage.prototype;

  _proto.render = function render() {
    var data = this.props.data;
    var posts = data.allMarkdownRemark.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "has-text-weight-bold is-size-2"
    }, "Latest Stories")), posts.map(function (_ref) {
      var post = _ref.node;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content",
        style: {
          border: '1px solid #333',
          padding: '2em 4em'
        },
        key: post.id
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "has-text-primary",
        to: post.fields.slug
      }, post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " \u2022 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, post.frontmatter.date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, post.excerpt, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "button is-small",
        to: post.fields.slug
      }, "Keep Reading \u2192")));
    }))));
  };

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    allMarkdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      edges: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
    })
  })
};
var pageQuery = "848929140";

/***/ }),

/***/ "./src/pages/tags/index.js":
/*!*********************************!*\
  !*** ./src/pages/tags/index.js ***!
  \*********************************/
/*! exports provided: default, tagPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPageQuery", function() { return tagPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");






var TagsPage = function TagsPage(_ref) {
  var _ref$data = _ref.data,
      group = _ref$data.allMarkdownRemark.group,
      title = _ref$data.site.siteMetadata.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Tags | " + title
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    style: {
      marginBottom: '6rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 is-bold-light"
  }, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist"
  }, group.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag.fieldValue
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["kebabCase"])(tag.fieldValue) + "/"
    }, tag.fieldValue, " (", tag.totalCount, ")"));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsPage);
var tagPageQuery = "3682505313";

/***/ }),

/***/ "./src/templates/about-page.js":
/*!*************************************!*\
  !*** ./src/templates/about-page.js ***!
  \*************************************/
/*! exports provided: AboutPageTemplate, default, aboutPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageTemplate", function() { return AboutPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutPageQuery", function() { return aboutPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");




var AboutPageTemplate = function AboutPageTemplate(_ref) {
  var title = _ref.title,
      content = _ref.content,
      contentComponent = _ref.contentComponent;
  var PageContent = contentComponent || _components_Content__WEBPACK_IMPORTED_MODULE_3__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "title is-size-3 has-text-weight-bold is-bold-light"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    className: "content",
    content: content
  }))))));
};
AboutPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var AboutPage = function AboutPage(_ref2) {
  var data = _ref2.data;
  var post = data.markdownRemark;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutPageTemplate, {
    contentComponent: _components_Content__WEBPACK_IMPORTED_MODULE_3__["HTMLContent"],
    title: post.frontmatter.title,
    content: post.html
  }));
};

AboutPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AboutPage);
var aboutPageQuery = "3047988929";

/***/ }),

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/*! exports provided: BlogPostTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostTemplate", function() { return BlogPostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");







var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      description = _ref.description,
      tags = _ref.tags,
      title = _ref.title,
      helmet = _ref.helmet;
  var PostContent = contentComponent || _components_Content__WEBPACK_IMPORTED_MODULE_6__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, helmet || '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent, {
    content: content
  }), tags && tags.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "4rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist"
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag + "tag"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag) + "/"
    }, tag));
  }))) : null))));
};
BlogPostTemplate.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  helmet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var BlogPost = function BlogPost(_ref2) {
  var data = _ref2.data;
  var post = data.markdownRemark;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogPostTemplate, {
    content: post.html,
    contentComponent: _components_Content__WEBPACK_IMPORTED_MODULE_6__["HTMLContent"],
    description: post.frontmatter.description,
    helmet: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      titleTemplate: "%s | Blog"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "" + post.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "" + post.frontmatter.description
    })),
    tags: post.frontmatter.tags,
    title: post.frontmatter.title
  }));
};

BlogPost.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlogPost);
var pageQuery = "1562462377";

/***/ }),

/***/ "./src/templates/product-page.js":
/*!***************************************!*\
  !*** ./src/templates/product-page.js ***!
  \***************************************/
/*! exports provided: ProductPageTemplate, default, productPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageTemplate", function() { return ProductPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productPageQuery", function() { return productPageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Testimonials */ "./src/components/Testimonials.js");
/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pricing */ "./src/components/Pricing.js");
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");







var ProductPageTemplate = function ProductPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      description = _ref.description,
      intro = _ref.intro,
      main = _ref.main,
      testimonials = _ref.testimonials,
      fullImage = _ref.fullImage,
      pricing = _ref.pricing;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image-container margin-top-0",
    style: {
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-weight-bold is-size-1",
    style: {
      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
      backgroundColor: '#f40',
      color: 'white',
      padding: '1rem'
    }
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gridItems: intro.blurbs
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-3"
  }, main.heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, main.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile is-ancestor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile is-vertical"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile is-parent is-vertical"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "tile is-child"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imageInfo: main.image1
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile is-parent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "tile is-child"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imageInfo: main.image2
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile is-parent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "tile is-child"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imageInfo: main.image3
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_4__["default"], {
    testimonials: testimonials
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image-container",
    style: {
      backgroundImage: "url(" + (fullImage.childImageSharp ? fullImage.childImageSharp.fluid.src : fullImage) + ")"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-weight-semibold is-size-2"
  }, pricing.heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, pricing.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pricing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: pricing.plans
  })))))));
};
ProductPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  }),
  main: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    image1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
    image2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
    image3: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
  }),
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  fullImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    plans: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var ProductPage = function ProductPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    description: frontmatter.description,
    intro: frontmatter.intro,
    main: frontmatter.main,
    testimonials: frontmatter.testimonials,
    fullImage: frontmatter.full_image,
    pricing: frontmatter.pricing
  }));
};

ProductPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);
var productPageQuery = "2855502059";

/***/ }),

/***/ "./src/templates/tags.js":
/*!*******************************!*\
  !*** ./src/templates/tags.js ***!
  \*******************************/
/*! exports provided: default, tagPageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagPageQuery", function() { return tagPageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");






var TagRoute =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TagRoute, _React$Component);

  function TagRoute() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TagRoute.prototype;

  _proto.render = function render() {
    var posts = this.props.data.allMarkdownRemark.edges;
    var postLinks = posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: post.node.fields.slug
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: post.node.fields.slug
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "is-size-2"
      }, post.node.frontmatter.title)));
    });
    var tag = this.props.pageContext.tag;
    var title = this.props.data.site.siteMetadata.title;
    var totalCount = this.props.data.allMarkdownRemark.totalCount;
    var tagHeader = totalCount + " post" + (totalCount === 1 ? '' : 's') + " tagged with \u201C" + tag + "\u201D";
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: tag + " | " + title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "columns"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "column is-10 is-offset-1",
      style: {
        marginBottom: '6rem'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "title is-size-4 is-bold-light"
    }, tagHeader), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "taglist"
    }, postLinks), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/tags/"
    }, "Browse all tags")))))));
  };

  return TagRoute;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TagRoute);
var tagPageQuery = "4202630850";

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.keys":
/*!**************************************************!*\
  !*** external "core-js/modules/es6.object.keys" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_keys__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/chunk":
/*!*******************************!*\
  !*** external "lodash/chunk" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_chunk__;

/***/ }),

/***/ "lodash/defaults":
/*!**********************************!*\
  !*** external "lodash/defaults" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_defaults__;

/***/ }),

/***/ "lodash/findIndex":
/*!***********************************!*\
  !*** external "lodash/findIndex" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_findIndex__;

/***/ }),

/***/ "lodash/mapValues":
/*!***********************************!*\
  !*** external "lodash/mapValues" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_mapValues__;

/***/ }),

/***/ "lodash/omit":
/*!******************************!*\
  !*** external "lodash/omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_omit__;

/***/ }),

/***/ "lodash/range":
/*!*******************************!*\
  !*** external "lodash/range" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_range__;

/***/ }),

/***/ "lodash/sortBy":
/*!********************************!*\
  !*** external "lodash/sortBy" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_sortBy__;

/***/ }),

/***/ "lodash/transform":
/*!***********************************!*\
  !*** external "lodash/transform" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_transform__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map