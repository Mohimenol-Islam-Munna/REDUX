"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./RTKQuery/store/index.js":
/*!*********************************!*\
  !*** ./RTKQuery/store/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _api_applicationApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/applicationApi */ \"./RTKQuery/api/applicationApi.js\");\n\n\n\n\n\nvar store = function() {\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n        reducer: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, _api_applicationApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reducerPath, _api_applicationApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reducer),\n        middleware: function(getDefaultMiddleware) {\n            return getDefaultMiddleware().concat(_api_applicationApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].middleware);\n        },\n        devTools: true\n    });\n};\n// setupListeners(store.dispatch);  \nvar storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(store);\n/* harmony default export */ __webpack_exports__[\"default\"] = (storeWrapper);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SVEtRdWVyeS9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQWtEO0FBQ1k7QUFDWDtBQUNBO0FBRW5ELElBQU1JLEtBQUssR0FBRztXQUNaSixnRUFBYyxDQUFDO1FBQ2JLLE9BQU8sRUFDTCxxRkFBQ0YsdUVBQTBCLEVBQUdBLG1FQUFzQjtRQUV0REksVUFBVSxFQUFFLFNBQUNDLG9CQUFvQjttQkFDL0JBLG9CQUFvQixFQUFFLENBQUNDLE1BQU0sQ0FBQ04sc0VBQXlCLENBQUM7U0FBQTtRQUMxRE8sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0NBQUE7QUFFRixvQ0FBb0M7QUFFdEMsSUFBTUMsWUFBWSxHQUFHVCxpRUFBYSxDQUFDRSxLQUFLLENBQUM7QUFDekMsK0RBQWVPLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9SVEtRdWVyeS9zdG9yZS9pbmRleC5qcz9hZDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgYXBwbGljYXRpb25BcGkgZnJvbSBcIi4uL2FwaS9hcHBsaWNhdGlvbkFwaVwiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSAoKSA9PlxyXG4gIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgW2FwcGxpY2F0aW9uQXBpLnJlZHVjZXJQYXRoXTogYXBwbGljYXRpb25BcGkucmVkdWNlcixcclxuICAgIH0sXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGFwcGxpY2F0aW9uQXBpLm1pZGRsZXdhcmUpLFxyXG4gICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIC8vIHNldHVwTGlzdGVuZXJzKHN0b3JlLmRpc3BhdGNoKTsgIFxyXG5cclxuY29uc3Qgc3RvcmVXcmFwcGVyID0gY3JlYXRlV3JhcHBlcihzdG9yZSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2V0dXBMaXN0ZW5lcnMiLCJjcmVhdGVXcmFwcGVyIiwiYXBwbGljYXRpb25BcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsImRldlRvb2xzIiwic3RvcmVXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./RTKQuery/store/index.js\n"));

/***/ })

});