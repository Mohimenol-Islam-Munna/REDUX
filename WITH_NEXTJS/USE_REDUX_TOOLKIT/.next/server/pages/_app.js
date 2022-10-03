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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/munna/Desktop/Munna/REDUX/WITH_NEXTJS/USE_REDUX_TOOLKIT/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0s7QUFFcEMsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJLENBQUM7QUFDdEMsQ0FBQztBQUVELGlFQUFlSCx3REFBc0IsQ0FBQ0MsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVXcmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iXSwibmFtZXMiOlsic3RvcmVXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/userSlice */ \"./store/slices/userSlice.js\");\n\n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    user: _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        const nextState = {\n            ...state,\n            ...action.payload\n        };\n        return nextState;\n    } else {\n        return rootReducer(state, action);\n    }\n};\nconst store = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: reducer\n    });\nconst storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(store);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUU7QUFDUDtBQUNmO0FBRTdDLE1BQU1LLFdBQVcsR0FBR0osaUVBQWUsQ0FBQztJQUNsQ0ssSUFBSSxFQUFFRix5REFBVztDQUNsQixDQUFDO0FBRUYsTUFBTUcsT0FBTyxHQUFHLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO0lBQ2pDLElBQUlBLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLUix1REFBTyxFQUFFO1FBQzNCLE1BQU1TLFNBQVMsR0FBRztZQUNoQixHQUFHSCxLQUFLO1lBQ1IsR0FBR0MsTUFBTSxDQUFDRyxPQUFPO1NBQ2xCO1FBRUQsT0FBT0QsU0FBUyxDQUFDO0lBQ25CLE9BQU87UUFDTCxPQUFPTixXQUFXLENBQUNHLEtBQUssRUFBRUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNSSxLQUFLLEdBQUcsSUFDWmIsZ0VBQWMsQ0FBQztRQUNiTyxPQUFPLEVBQUVBLE9BQU87S0FDakIsQ0FBQztBQUVKLE1BQU1PLFlBQVksR0FBR1gsaUVBQWEsQ0FBQ1UsS0FBSyxDQUFDO0FBRXpDLGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcC8uL3N0b3JlL2luZGV4LmpzPzU2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyU2xpY2VcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyOiB1c2VyUmVkdWNlcixcbn0pO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3JlID0gKCkgPT5cbiAgY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHJlZHVjZXIsXG4gIH0pO1xuXG5jb25zdCBzdG9yZVdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKHN0b3JlKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVXcmFwcGVyO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiSFlEUkFURSIsImNyZWF0ZVdyYXBwZXIiLCJ1c2VyUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwidXNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwic3RvcmUiLCJzdG9yZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/slices/userSlice.js":
/*!***********************************!*\
  !*** ./store/slices/userSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetchAllUser\": () => (/* binding */ fetchAllUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    loading: false,\n    data: null,\n    error: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        fetchAllUser: (state, action)=>{\n            console.log(\"#### state ::\", state);\n            console.log(\"#### action ::\", action);\n            state.data = action.payload;\n        }\n    },\n    exptraReducers: (builder)=>{}\n});\nconst { fetchAllUser  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvdXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQsTUFBTUMsU0FBUyxHQUFHTCw2REFBVyxDQUFDO0lBQzVCTSxJQUFJLEVBQUUsTUFBTTtJQUNaTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNSQyxZQUFZLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRUgsS0FBSyxDQUFDLENBQUM7WUFDcENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFRixNQUFNLENBQUMsQ0FBQztZQUV0Q0QsS0FBSyxDQUFDTixJQUFJLEdBQUdPLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1FBQzlCLENBQUM7S0FDRjtJQUNEQyxjQUFjLEVBQUUsQ0FBQ0MsT0FBTyxHQUFLLENBQUMsQ0FBQztDQUNoQyxDQUFDO0FBRUssTUFBTSxFQUFFUCxZQUFZLEdBQUUsR0FBR0gsU0FBUyxDQUFDVyxPQUFPLENBQUM7QUFDbEQsaUVBQWVYLFNBQVMsQ0FBQ1ksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9zdG9yZS9zbGljZXMvdXNlclNsaWNlLmpzPzA4MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBkYXRhOiBudWxsLFxuICBlcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBmZXRjaEFsbFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIiMjIyMgc3RhdGUgOjpcIiwgc3RhdGUpO1xuICAgICAgY29uc29sZS5sb2coXCIjIyMjIGFjdGlvbiA6OlwiLCBhY3Rpb24pO1xuXG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbiAgZXhwdHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBmZXRjaEFsbFVzZXIgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZmV0Y2hBbGxVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImV4cHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/slices/userSlice.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();