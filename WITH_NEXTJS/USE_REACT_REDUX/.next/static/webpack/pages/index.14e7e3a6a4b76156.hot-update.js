"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_actionsTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/actionsTypes */ \"./store/actions/actionsTypes.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function(param) {\n    var data = param.data;\n    _s();\n    var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(store) {\n        return store;\n    });\n    console.log(\"application store ::\", store);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"REDUX WITH NEXT JS\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Data From Static Site Generation : \",\n                    data\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"5ilW2KbvJgah+YZGWDN+yWKc71U=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQWtDO0FBQ3FCO0FBQzdCO0FBQ3FCO0FBR1c7QUFFMUQsSUFBTU0sSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7SUFDbEIsSUFBTUMsS0FBSyxHQUFHUCx3REFBVyxDQUFDLFNBQUNPLEtBQUs7ZUFBS0EsS0FBSztLQUFBLENBQUM7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFRixLQUFLLENBQUMsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsU0FBUyxFQUFFLFFBQVE7U0FBRTs7MEJBQ2pDLDhEQUFDQyxJQUFFO2dCQUFDRixLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxRQUFRO2lCQUFFOzBCQUFFLG9CQUFrQjs7Ozs7cUJBQUs7MEJBQzNELDhEQUFDRSxJQUFFOztvQkFBQyxxQ0FBbUM7b0JBQUNSLElBQUk7Ozs7OztxQkFBTTs7Ozs7O2FBQzlDLENBQ047Q0FDSDtHQVZLRCxJQUFJOztRQUNNTCxvREFBVzs7O0FBRHJCSyxLQUFBQSxJQUFJOztBQTRCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZmV0Y2hBbGxVc2VycyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3VzZXJzQWN0aW9uXCI7XHJcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEdFVF9VU0VSUyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNUeXBlc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU2VsZWN0b3IoKHN0b3JlKSA9PiBzdG9yZSk7XHJcbiAgY29uc29sZS5sb2coXCJhcHBsaWNhdGlvbiBzdG9yZSA6OlwiLCBzdG9yZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5SRURVWCBXSVRIIE5FWFQgSlM8L2gyPlxyXG4gICAgICA8aDQ+RGF0YSBGcm9tIFN0YXRpYyBTaXRlIEdlbmVyYXRpb24gOiB7ZGF0YX08L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHN0b3JlV3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcclxuICAoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XHJcblxyXG4gICAgLy8gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBHRVRfVVNFUlMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG5cclxuICAgIGZldGNoQWxsVXNlcnMoc3RvKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGRhdGE6IFwiTXVubmFcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJheGlvcyIsInN0eWxlcyIsIkdFVF9VU0VSUyIsIkhvbWUiLCJkYXRhIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMiIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});