"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/server-side/ssr",{

/***/ "./pages/server-side/ssr/index.js":
/*!****************************************!*\
  !*** ./pages/server-side/ssr/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": function() { return /* binding */ get; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_REDUX_A2Z_WITH_NEXTJS_USE_RTK_QUERY_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_REDUX_A2Z_WITH_NEXTJS_USE_RTK_QUERY_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_REDUX_A2Z_WITH_NEXTJS_USE_RTK_QUERY_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _RTKQuery_api_applicationApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../RTKQuery/api/applicationApi */ \"./RTKQuery/api/applicationApi.js\");\n/* harmony import */ var _RTKQuery_store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../RTKQuery/store/index */ \"./RTKQuery/store/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar ServerSideHome = function(param) {\n    var isError = param.isError, isSuccess = param.isSuccess, error = param.error, data = param.data;\n    console.log(\"data 2:\", data);\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\",\n                    color: \"salmon\"\n                },\n                children: \"Something Wrong\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"NEXT JS WITH RTK QUERY (STATIC SITE GENERATION)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"0.5rem auto\",\n                    backgroundColor: \"lightgray\",\n                    padding: \"1rem\",\n                    borderRadius: \"0.3rem\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"create\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        style: {\n                            marginRight: \"0.5rem\",\n                            padding: \"5px\"\n                        },\n                        children: \"Go To Create Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"1.5rem auto\"\n                },\n                children: data === null || data === void 0 ? void 0 : data.map(function(cickter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            margin: \"0.5rem 0\",\n                            backgroundColor: \"lightgray\",\n                            padding: \"1rem\",\n                            borderRadius: \"0.3rem\",\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: cickter.avatar,\n                                alt: cickter.first_name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\",\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Name: \",\n                                    \"\".concat(cickter.first_name, \" \").concat(cickter.last_name)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Email: \",\n                                    cickter.email,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"details/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"update/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"Go To Update Page\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                style: {\n                                    marginRight: \"0.5rem\",\n                                    padding: \"5px\"\n                                },\n                                onClick: function() {\n                                    return deleteEngineerHandler(cickter.id);\n                                },\n                                children: \"Delete Cickter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, cickter.id, true, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\ssr\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = ServerSideHome;\nvar get = _RTKQuery_store_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getStaticProps(function(store) {\n    return function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(D_REDUX_A2Z_WITH_NEXTJS_USE_RTK_QUERY_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n            var ref, isLoading, isError, isSuccess, error, data;\n            return D_REDUX_A2Z_WITH_NEXTJS_USE_RTK_QUERY_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return store.dispatch(_RTKQuery_api_applicationApi__WEBPACK_IMPORTED_MODULE_3__.allCrickter.initiate());\n                    case 2:\n                        ref = _ctx.sent;\n                        isLoading = ref.isLoading;\n                        isError = ref.isError;\n                        isSuccess = ref.isSuccess;\n                        error = ref.error;\n                        data = ref.data;\n                        if (!isSuccess) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", {\n                            props: {\n                                isError: isError,\n                                isSuccess: isSuccess,\n                                error: null,\n                                data: data === null || data === void 0 ? void 0 : data.data\n                            }\n                        });\n                    case 12:\n                        return _ctx.abrupt(\"return\", {\n                            props: {\n                                isError: isError,\n                                isSuccess: isSuccess,\n                                error: error.error,\n                                data: null\n                            }\n                        });\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(context) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerSideHome);\nvar _c;\n$RefreshReg$(_c, \"ServerSideHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxHQUFrQixHQUV0RCxDQUYyQkEsU0FBUzt3QkFBRUMsS0FBSyxHQUFXLEdBRXRELENBRnNDQSxLQUFLO3dCQUFFQyxJQUFJLEdBQUssR0FFdEQsQ0FGNkNBLElBQUk7NEJBTzlDRixDQUFBQSxTQUFTOzs7O3FEQUNKOzRCQUNMMEMsS0FBSyxFQUFFO2dDQUNMM0MsT0FBTyxFQUFFQSxPQUFPO2dDQUNoQkMsU0FBUyxFQUFFQSxTQUFTO2dDQUNwQkMsS0FBSyxFQUFFLElBQUk7Z0NBQ1hDLElBQUksRUFBRUEsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVBLElBQUk7NkJBQ2pCO3lCQUNGOztxREFFTTs0QkFDTHdDLEtBQUssRUFBRTtnQ0FDTDNDLE9BQU8sRUFBRUEsT0FBTztnQ0FDaEJDLFNBQVMsRUFBRUEsU0FBUztnQ0FDcEJDLEtBQUssRUFBRUEsS0FBSyxDQUFDQSxLQUFLO2dDQUNsQkMsSUFBSSxFQUFFLElBQUk7NkJBQ1g7eUJBQ0Y7Ozs7OztTQUVKO3dCQTNCaUJvQyxPQUFPOzs7UUEyQnhCO0NBQUEsQ0FDRixDQUFDO0FBRUYsK0RBQWV4QyxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUvc3NyL2luZGV4LmpzP2UxNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgYWxsQ3JpY2t0ZXIsXHJcbiAgZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9SVEtRdWVyeS9hcGkvYXBwbGljYXRpb25BcGlcIjtcclxuaW1wb3J0IHN0b3JlV3JhcHBlciBmcm9tIFwiLi4vLi4vLi4vUlRLUXVlcnkvc3RvcmUvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFNlcnZlclNpZGVIb21lID0gKHsgaXNFcnJvciwgaXNTdWNjZXNzLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIDI6XCIsIGRhdGEpO1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcInNhbG1vblwiIH19PlxyXG4gICAgICAgICAgU29tZXRoaW5nIFdyb25nXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBORVhUIEpTIFdJVEggUlRLIFFVRVJZIChTVEFUSUMgU0lURSBHRU5FUkFUSU9OKVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW0gYXV0b1wiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJjcmVhdGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIEdvIFRvIENyZWF0ZSBQYWdlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjgwJVwiLCBtYXJnaW46IFwiMS41cmVtIGF1dG9cIiB9fT5cclxuICAgICAgICB7ZGF0YT8ubWFwKChjaWNrdGVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17Y2lja3Rlci5pZH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2NpY2t0ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgIGFsdD17Y2lja3Rlci5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIxMDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyPk5hbWU6IHtgJHtjaWNrdGVyLmZpcnN0X25hbWV9ICR7Y2lja3Rlci5sYXN0X25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICA8aDQ+RW1haWw6IHtjaWNrdGVyLmVtYWlsfSA8L2g0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgZGV0YWlscy8ke2NpY2t0ZXIuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2B1cGRhdGUvJHtjaWNrdGVyLmlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBHbyBUbyBVcGRhdGUgUGFnZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUVuZ2luZWVySGFuZGxlcihjaWNrdGVyLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZSBDaWNrdGVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXQgPSBzdG9yZVdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoXHJcbiAgKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGlzU3VjY2VzcywgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhbGxDcmlja3Rlci5pbml0aWF0ZSgpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGRvY3VtZW50YXRpb24gdGVsbCB1c2UgdGhpcyBsaW5lIGJ1dCB3aGVuIHVzZSB0aGlzIGxpbmUgdGhlbiBhbGwgcmVzdWx0cyhpc0xvYWRpbmcsIGlzRXJyb3IsIGlzU3VjY2VzcywgZXJyb3IsIGRhdGEpIGFyZSB1bmRlZmluZWRcclxuICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKGdldFJ1bm5pbmdPcGVyYXRpb25Qcm9taXNlcygpKTtcclxuXHJcbiAgICBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGlzRXJyb3I6IGlzRXJyb3IsXHJcbiAgICAgICAgICBpc1N1Y2Nlc3M6IGlzU3VjY2VzcyxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgZGF0YTogZGF0YT8uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXNFcnJvcjogaXNFcnJvcixcclxuICAgICAgICAgIGlzU3VjY2VzczogaXNTdWNjZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLmVycm9yLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsImFsbENyaWNrdGVyIiwiZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIiwic3RvcmVXcmFwcGVyIiwiU2VydmVyU2lkZUhvbWUiLCJpc0Vycm9yIiwiaXNTdWNjZXNzIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhyZWYiLCJwYXNzSHJlZiIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2lja3RlciIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsImZpcnN0X25hbWUiLCJoZWlnaHQiLCJsYXN0X25hbWUiLCJoNCIsImVtYWlsIiwiaWQiLCJvbkNsaWNrIiwiZGVsZXRlRW5naW5lZXJIYW5kbGVyIiwiZ2V0IiwiZ2V0U3RhdGljUHJvcHMiLCJzdG9yZSIsImNvbnRleHQiLCJpc0xvYWRpbmciLCJkaXNwYXRjaCIsImluaXRpYXRlIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/server-side/ssr/index.js\n"));

/***/ })

});