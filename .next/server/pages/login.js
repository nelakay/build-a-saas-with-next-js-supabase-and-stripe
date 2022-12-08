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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./context/user.js":
/*!*************************!*\
  !*** ./context/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUser\": () => (/* binding */ useUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.js?264b\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst Provider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.user());\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserProfile = async ()=>{\n            const sessionUser = _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.user();\n            if (sessionUser) {\n                const { data: profile  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"profile\").select(\"*\").eq(\"id\", sessionUser.id).single();\n                setUser({\n                    ...sessionUser,\n                    ...profile\n                });\n                setIsLoading(false);\n            }\n        };\n        getUserProfile();\n        _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange(()=>{\n            getUserProfile();\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/api/set-supabase-cookie\", {\n            event: user ? \"SIGNED_IN\" : \"SIGNED_OUT\",\n            session: _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session()\n        });\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            const subscription = _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(`profile:id=eq.${user.id}`).on(\"UPDATE\", (payload)=>{\n                setUser({\n                    ...user,\n                    ...payload.new\n                });\n            }).subscribe();\n            return ()=>{\n                _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.removeSubscription(subscription);\n            };\n        }\n    }, [\n        user\n    ]);\n    const login = async ()=>{\n        await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signIn({\n            provider: \"github\"\n        });\n    };\n    const logout = async ()=>{\n        await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signOut();\n        setUser(null);\n        router.push(\"/\");\n    };\n    const exposed = {\n        user,\n        login,\n        logout,\n        isLoading\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: exposed,\n        __source: {\n            fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/context/user.js\",\n            lineNumber: 81,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: children\n    }));\n};\nconst useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87O0FBRS9DLGlFQUFlQyxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3VzZXIuanM/ZjYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi91dGlscy9zdXBhYmFzZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShzdXBhYmFzZS5hdXRoLnVzZXIoKSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRVc2VyUHJvZmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHNlc3Npb25Vc2VyID0gc3VwYWJhc2UuYXV0aC51c2VyKCk7XG5cbiAgICAgIGlmIChzZXNzaW9uVXNlcikge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHByb2ZpbGUgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oXCJwcm9maWxlXCIpXG4gICAgICAgICAgLnNlbGVjdChcIipcIilcbiAgICAgICAgICAuZXEoXCJpZFwiLCBzZXNzaW9uVXNlci5pZClcbiAgICAgICAgICAuc2luZ2xlKCk7XG5cbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgLi4uc2Vzc2lvblVzZXIsXG4gICAgICAgICAgLi4ucHJvZmlsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0VXNlclByb2ZpbGUoKTtcblxuICAgIHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKCkgPT4ge1xuICAgICAgZ2V0VXNlclByb2ZpbGUoKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MucG9zdChcIi9hcGkvc2V0LXN1cGFiYXNlLWNvb2tpZVwiLCB7XG4gICAgICBldmVudDogdXNlciA/IFwiU0lHTkVEX0lOXCIgOiBcIlNJR05FRF9PVVRcIixcbiAgICAgIHNlc3Npb246IHN1cGFiYXNlLmF1dGguc2Vzc2lvbigpLFxuICAgIH0pO1xuICB9LCBbdXNlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1cGFiYXNlXG4gICAgICAgIC5mcm9tKGBwcm9maWxlOmlkPWVxLiR7dXNlci5pZH1gKVxuICAgICAgICAub24oXCJVUERBVEVcIiwgKHBheWxvYWQpID0+IHtcbiAgICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgLi4ucGF5bG9hZC5uZXcgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3VwYWJhc2UucmVtb3ZlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25Jbih7XG4gICAgICBwcm92aWRlcjogXCJnaXRodWJcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgZXhwb3NlZCA9IHtcbiAgICB1c2VyLFxuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgICBpc0xvYWRpbmcsXG4gIH07XG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtleHBvc2VkfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInN1cGFiYXNlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiYXV0aCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsImdldFVzZXJQcm9maWxlIiwic2Vzc2lvblVzZXIiLCJkYXRhIiwicHJvZmlsZSIsImZyb20iLCJzZWxlY3QiLCJlcSIsImlkIiwic2luZ2xlIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJwb3N0IiwiZXZlbnQiLCJzZXNzaW9uIiwic3Vic2NyaXB0aW9uIiwib24iLCJwYXlsb2FkIiwibmV3Iiwic3Vic2NyaWJlIiwicmVtb3ZlU3Vic2NyaXB0aW9uIiwibG9naW4iLCJzaWduSW4iLCJwcm92aWRlciIsImxvZ291dCIsInNpZ25PdXQiLCJwdXNoIiwiZXhwb3NlZCIsInZhbHVlIiwidXNlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/user.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/user */ \"./context/user.js\");\n\n\n\nconst Login = ()=>{\n    const { login  } = (0,_context_user__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(login, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n        __source: {\n            fileName: \"/Users/nelagueye/Desktop/celeste-dec-2022/eh/pages/login.js\",\n            lineNumber: 9,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: \"Logging in\"\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1E7QUFFekMsS0FBSyxDQUFDRSxLQUFLLE9BQVMsQ0FBQztJQUNuQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxHQUFHRixzREFBTztJQUV6QkQsZ0RBQVMsQ0FBQ0csS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVuQixNQUFNLHNFQUFFQyxDQUFDOzs7Ozs7O2tCQUFDLENBQVU7O0FBQ3RCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiLi4vY29udGV4dC91c2VyXCI7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VVc2VyKCk7XG5cbiAgdXNlRWZmZWN0KGxvZ2luLCBbXSk7XG5cbiAgcmV0dXJuIDxwPkxvZ2dpbmcgaW48L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlVXNlciIsIkxvZ2luIiwibG9naW4iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "./utils/supabase.js?264b":
/*!***************************!*\
  !*** ./utils/supabase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"getServiceSupabase\": () => (/* binding */ getServiceSupabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndWlka2ZhcWFianRmYnV6eGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNjIwOTUsImV4cCI6MTk4NTczODA5NX0.YKWdQ6_WRBFltg-l8UYpdcPSTu-2eTIso6wlPZ0_cPk\");\nconst getServiceSupabase = ()=>(0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://dguidkfaqabjtfbuzxcz.supabase.co\", process.env.SUPABASE_SERVICE_KEY)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS5qcz8yNjRiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFFN0MsS0FBSyxDQUFDQyxRQUFRLEdBQUdELG1FQUFZLENBQ2xDRSwwQ0FBb0MsRUFDcENBLGtOQUFvQztBQUcvQixLQUFLLENBQUNJLGtCQUFrQixPQUM3Qk4sbUVBQVksQ0FDVkUsMENBQW9DLEVBQ3BDQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3VwYWJhc2UuanM/NDA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9LRVlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlU3VwYWJhc2UgPSAoKSA9PlxuICBjcmVhdGVDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfS0VZXG4gICk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfS0VZIiwiZ2V0U2VydmljZVN1cGFiYXNlIiwiU1VQQUJBU0VfU0VSVklDRV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/supabase.js?264b\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();