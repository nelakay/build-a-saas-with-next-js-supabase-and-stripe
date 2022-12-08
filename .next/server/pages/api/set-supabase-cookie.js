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
exports.id = "pages/api/set-supabase-cookie";
exports.ids = ["pages/api/set-supabase-cookie"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "./pages/api/set-supabase-cookie.js":
/*!******************************************!*\
  !*** ./pages/api/set-supabase-cookie.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/supabase */ \"./utils/supabase.js?6c1d\");\n\nconst handler = async (req, res)=>{\n    await _utils_supabase__WEBPACK_IMPORTED_MODULE_0__.supabase.auth.api.setAuthCookie(req, res);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2V0LXN1cGFiYXNlLWNvb2tpZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUUvQyxLQUFLLENBQUNDLE9BQU8sVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNuQyxLQUFLLENBQUNILDRFQUErQixDQUFDRSxHQUFHLEVBQUVDLEdBQUc7QUFDaEQsQ0FBQztBQUVELGlFQUFlRixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2V0LXN1cGFiYXNlLWNvb2tpZS5qcz85MGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3N1cGFiYXNlXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgYXdhaXQgc3VwYWJhc2UuYXV0aC5hcGkuc2V0QXV0aENvb2tpZShyZXEsIHJlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImF1dGgiLCJhcGkiLCJzZXRBdXRoQ29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/set-supabase-cookie.js\n");

/***/ }),

/***/ "./utils/supabase.js?6c1d":
/*!***************************!*\
  !*** ./utils/supabase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"getServiceSupabase\": () => (/* binding */ getServiceSupabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndWlka2ZhcWFianRmYnV6eGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNjIwOTUsImV4cCI6MTk4NTczODA5NX0.YKWdQ6_WRBFltg-l8UYpdcPSTu-2eTIso6wlPZ0_cPk\");\nconst getServiceSupabase = ()=>(0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", process.env.SUPABASE_SERVICE_KEY)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS5qcz82YzFkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFFN0MsS0FBSyxDQUFDQyxRQUFRLEdBQUdELG1FQUFZLENBQ2xDRSwwQ0FBb0MsRUFDcENBLGtOQUFvQztBQUcvQixLQUFLLENBQUNJLGtCQUFrQixPQUM3Qk4sbUVBQVksQ0FDVkUsMENBQW9DLEVBQ3BDQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3VwYWJhc2UuanM/NDA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9LRVlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlU3VwYWJhc2UgPSAoKSA9PlxuICBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZIiwiZ2V0U2VydmljZVN1cGFiYXNlIiwiU1VQQUJBU0VfU0VSVklDRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/supabase.js?6c1d\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/set-supabase-cookie.js"));
module.exports = __webpack_exports__;

})();