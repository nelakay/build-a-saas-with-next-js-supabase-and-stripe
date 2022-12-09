"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.js?264b\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst productDetails = ({ product  })=>{\n    const { 0: videoUrl , 1: setVideoUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getPremiumContent = async ()=>{\n        const { data  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"premium_content\").select(\"video_url\").eq(\"id\", product.id).single();\n        setVideoUrl(data === null || data === void 0 ? void 0 : data.video_url);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPremiumContent();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"w-full max-w-3xl mx-auto py-16 px-8\",\n        __source: {\n            fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/pages/[id].js\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"text-3xl mb-6\",\n                __source: {\n                    fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/pages/[id].js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: product.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/pages/[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: product.description\n            }),\n            !!videoUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_player__WEBPACK_IMPORTED_MODULE_3___default()), {\n                url: videoUrl,\n                width: \"100%\",\n                __source: {\n                    fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/pages/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 22\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\nconst getStaticPaths = async ()=>{\n    const { data: products  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"product\").select(\"id\");\n    const paths = products.map(({ id  })=>({\n            params: {\n                id: id.toString()\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params: { id  }  })=>{\n    const { data: product  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"product\").select(\"*\").eq(\"id\", id).single();\n    return {\n        props: {\n            product\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0M7QUFDWjtBQUVoQyxLQUFLLENBQUNJLGNBQWMsSUFBSSxDQUFDLENBQUNDLE9BQU8sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN2QyxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJUCwrQ0FBUTtJQUV4QyxLQUFLLENBQUNRLGlCQUFpQixhQUFlLENBQUM7UUFDckMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNQLDBEQUNoQixDQUFDLENBQWlCLGtCQUN0QlMsTUFBTSxDQUFDLENBQVcsWUFDbEJDLEVBQUUsQ0FBQyxDQUFJLEtBQUVQLE9BQU8sQ0FBQ1EsRUFBRSxFQUNuQkMsTUFBTTtRQUVUUCxXQUFXLENBQUNFLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBRU0sU0FBUztJQUM3QixDQUFDO0lBRURkLGdEQUFTLEtBQU8sQ0FBQztRQUNmTyxpQkFBaUI7SUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hRLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXFDOzs7Ozs7OztpRkFDakRDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUFlOzs7Ozs7OzBCQUFFWixPQUFPLENBQUNjLEtBQUs7O2lGQUMzQ0MsQ0FBQzs7Ozs7OzswQkFBRWYsT0FBTyxDQUFDZ0IsV0FBVzs7Y0FDcEJmLFFBQVEseUVBQUtILHFEQUFLO2dCQUFDbUIsR0FBRyxFQUFFaEIsUUFBUTtnQkFBRWlCLEtBQUssRUFBQyxDQUFNOzs7Ozs7Ozs7O0FBR3ZELENBQUM7QUFFTSxLQUFLLENBQUNDLGNBQWMsYUFBZSxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxDQUFDLENBQUNmLElBQUksRUFBRWdCLFFBQVEsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDdkIsMERBQWEsQ0FBQyxDQUFTLFVBQUVTLE1BQU0sQ0FBQyxDQUFJO0lBRXJFLEtBQUssQ0FBQ2UsS0FBSyxHQUFHRCxRQUFRLENBQUNFLEdBQUcsRUFBRSxDQUFDLENBQUNkLEVBQUUsRUFBQyxDQUFDLElBQU0sQ0FBQztZQUN2Q2UsTUFBTSxFQUFFLENBQUM7Z0JBQ1BmLEVBQUUsRUFBRUEsRUFBRSxDQUFDZ0IsUUFBUTtZQUNqQixDQUFDO1FBQ0gsQ0FBQzs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOSCxLQUFLO1FBQ0xJLFFBQVEsRUFBRSxLQUFLO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLFVBQVUsQ0FBQyxDQUFDSCxNQUFNLEVBQUUsQ0FBQyxDQUFDZixFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzNELEtBQUssQ0FBQyxDQUFDLENBQUNKLElBQUksRUFBRUosT0FBTyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNILDBEQUN6QixDQUFDLENBQVMsVUFDZFMsTUFBTSxDQUFDLENBQUcsSUFDVkMsRUFBRSxDQUFDLENBQUksS0FBRUMsRUFBRSxFQUNYQyxNQUFNO0lBRVQsTUFBTSxDQUFDLENBQUM7UUFDTmtCLEtBQUssRUFBRSxDQUFDO1lBQ04zQixPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVELGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi91dGlscy9zdXBhYmFzZVwiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcblxuY29uc3QgcHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGdldFByZW1pdW1Db250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicHJlbWl1bV9jb250ZW50XCIpXG4gICAgICAuc2VsZWN0KFwidmlkZW9fdXJsXCIpXG4gICAgICAuZXEoXCJpZFwiLCBwcm9kdWN0LmlkKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgc2V0VmlkZW9VcmwoZGF0YT8udmlkZW9fdXJsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByZW1pdW1Db250ZW50KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTN4bCBteC1hdXRvIHB5LTE2IHB4LThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+e3Byb2R1Y3QudGl0bGV9PC9oMT5cbiAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIHshIXZpZGVvVXJsICYmIDxWaWRlbyB1cmw9e3ZpZGVvVXJsfSB3aWR0aD1cIjEwMCVcIiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBwcm9kdWN0cyB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2R1Y3RcIikuc2VsZWN0KFwiaWRcIik7XG5cbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHsgaWQgfSkgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGlkOiBpZC50b1N0cmluZygpLFxuICAgIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBpZCB9IH0pID0+IHtcbiAgY29uc3QgeyBkYXRhOiBwcm9kdWN0IH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwicHJvZHVjdFwiKVxuICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgLmVxKFwiaWRcIiwgaWQpXG4gICAgLnNpbmdsZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REZXRhaWxzO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3VwYWJhc2UiLCJWaWRlbyIsInByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsInZpZGVvVXJsIiwic2V0VmlkZW9VcmwiLCJnZXRQcmVtaXVtQ29udGVudCIsImRhdGEiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsInNpbmdsZSIsInZpZGVvX3VybCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJ3aWR0aCIsImdldFN0YXRpY1BhdGhzIiwicHJvZHVjdHMiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "./utils/supabase.js?264b":
/*!***************************!*\
  !*** ./utils/supabase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"getServiceSupabase\": () => (/* binding */ getServiceSupabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndWlka2ZhcWFianRmYnV6eGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNjIwOTUsImV4cCI6MTk4NTczODA5NX0.YKWdQ6_WRBFltg-l8UYpdcPSTu-2eTIso6wlPZ0_cPk\", process.env.SUPABASE_SERVICE_ROLE_KEY);\nconst getServiceSupabase = ()=>(0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", process.env.SUPABASE_SERVICE_KEY)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS5qcz8yNjRiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFFN0MsS0FBSyxDQUFDQyxRQUFRLEdBQUdELG1FQUFZLENBQ2xDRSwwQ0FBb0MsRUFDcENBLGtOQUFvQyxFQUNwQ0EsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHlCQUF5QjtBQUdoQyxLQUFLLENBQUNDLGtCQUFrQixPQUM3QlAsbUVBQVksQ0FDVkUsMENBQW9DLEVBQ3BDQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3VwYWJhc2UuanM/NDA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9LRVksXG4gIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlU3VwYWJhc2UgPSAoKSA9PlxuICBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZIiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsImdldFNlcnZpY2VTdXBhYmFzZSIsIlNVUEFCQVNFX1NFUlZJQ0VfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/supabase.js?264b\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();