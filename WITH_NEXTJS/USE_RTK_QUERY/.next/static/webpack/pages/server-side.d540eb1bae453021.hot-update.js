"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/server-side",{

/***/ "./pages/server-side/index.js":
/*!************************************!*\
  !*** ./pages/server-side/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ServerSideHome = function(param) {\n    var isError = param.isError, isSuccess = param.isSuccess, error = param.error, data = param.data;\n    var ref;\n    // console.log(\"isLoading :\", isLoading);\n    // console.log(\"isError :\", isError);\n    // console.log(\"isSuccess :\", isSuccess);\n    // console.log(\"error :\", error);\n    console.log(\"data :\", data);\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\",\n                    color: \"salmon\"\n                },\n                children: \"Something Wrong\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"NEXT JS WITH RTK QUERY (SERVER SIDE DATA FETCHING)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"0.5rem auto\",\n                    backgroundColor: \"lightgray\",\n                    padding: \"1rem\",\n                    borderRadius: \"0.3rem\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"create\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginRight: \"0.5rem\",\n                            padding: \"5px\"\n                        },\n                        children: \"Go To Create Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"1.5rem auto\"\n                },\n                children: data === null || data === void 0 ? void 0 : (ref = data.data) === null || ref === void 0 ? void 0 : ref.map(function(cickter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            margin: \"0.5rem 0\",\n                            backgroundColor: \"lightgray\",\n                            padding: \"1rem\",\n                            borderRadius: \"0.3rem\",\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: cickter.avatar,\n                                alt: cickter.first_name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\",\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Name: \",\n                                    \"\".concat(cickter.first_name, \" \").concat(cickter.last_name)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Email: \",\n                                    cickter.email,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"details/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"update/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"Go To Update Page\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    marginRight: \"0.5rem\",\n                                    padding: \"5px\"\n                                },\n                                onClick: function() {\n                                    return deleteEngineerHandler(cickter.id);\n                                },\n                                children: \"Delete Cickter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, cickter.id, true, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = ServerSideHome;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerSideHome);\nvar _c;\n$RefreshReg$(_c, \"ServerSideHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDUyxLQUFLO29DQUFDLEdBQUM7Ozs7OztxQ0FBSzswQ0FDaEMsOERBQUNuQyxrREFBSTtnQ0FBQ3FCLElBQUksRUFBRSxVQUFTLENBQWEsT0FBWEssT0FBTyxDQUFDVSxFQUFFLENBQUU7Z0NBQUVkLFFBQVE7MENBQzNDLDRFQUFDQyxRQUFNO29DQUFDVixLQUFLLEVBQUU7d0NBQUVXLFdBQVcsRUFBRSxRQUFRO3dDQUFFTCxPQUFPLEVBQUUsS0FBSztxQ0FBRTs4Q0FBRSxjQUUxRDs7Ozs7eUNBQVM7Ozs7O3FDQUNKOzBDQUNQLDhEQUFDbkIsa0RBQUk7Z0NBQUNxQixJQUFJLEVBQUUsU0FBUSxDQUFhLE9BQVhLLE9BQU8sQ0FBQ1UsRUFBRSxDQUFFO2dDQUFFZCxRQUFROzBDQUMxQyw0RUFBQ0MsUUFBTTtvQ0FBQ1YsS0FBSyxFQUFFO3dDQUFFVyxXQUFXLEVBQUUsUUFBUTt3Q0FBRUwsT0FBTyxFQUFFLEtBQUs7cUNBQUU7OENBQUUsbUJBRTFEOzs7Ozt5Q0FBUzs7Ozs7cUNBQ0o7MENBQ1AsOERBQUNJLFFBQU07Z0NBQ0xWLEtBQUssRUFBRTtvQ0FBRVcsV0FBVyxFQUFFLFFBQVE7b0NBQUVMLE9BQU8sRUFBRSxLQUFLO2lDQUFFO2dDQUNoRGtCLE9BQU8sRUFBRTsyQ0FBTUMscUJBQXFCLENBQUNaLE9BQU8sQ0FBQ1UsRUFBRSxDQUFDO2lDQUFBOzBDQUNqRCxnQkFFRDs7Ozs7cUNBQVM7O3VCQWhDSlYsT0FBTyxDQUFDVSxFQUFFOzs7OzZCQWlDWDtpQkFDUCxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBaEZLbEMsS0FBQUEsY0FBYzs7QUE4R3BCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUvaW5kZXguanM/ZDk2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWxsQ3JpY2t0ZXIgfSBmcm9tIFwiLi4vLi4vUlRLUXVlcnkvYXBpL2FwcGxpY2F0aW9uQXBpXCI7XHJcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uLy4uL1JUS1F1ZXJ5L3N0b3JlL2luZGV4XCI7XHJcblxyXG5jb25zdCBTZXJ2ZXJTaWRlSG9tZSA9ICh7IGlzRXJyb3IsIGlzU3VjY2VzcywgZXJyb3IsIGRhdGEgfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiaXNMb2FkaW5nIDpcIiwgaXNMb2FkaW5nKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImlzRXJyb3IgOlwiLCBpc0Vycm9yKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImlzU3VjY2VzcyA6XCIsIGlzU3VjY2Vzcyk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJlcnJvciA6XCIsIGVycm9yKTtcclxuICBjb25zb2xlLmxvZyhcImRhdGEgOlwiLCBkYXRhKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJzYWxtb25cIiB9fT5cclxuICAgICAgICAgIFNvbWV0aGluZyBXcm9uZ1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgTkVYVCBKUyBXSVRIIFJUSyBRVUVSWSAoU0VSVkVSIFNJREUgREFUQSBGRVRDSElORylcclxuICAgICAgPC9oMj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMC41cmVtIGF1dG9cIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyYXlcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuM3JlbVwiLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPVwiY3JlYXRlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLCBwYWRkaW5nOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICBHbyBUbyBDcmVhdGUgUGFnZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4MCVcIiwgbWFyZ2luOiBcIjEuNXJlbSBhdXRvXCIgfX0+XHJcbiAgICAgICAge2RhdGE/LmRhdGE/Lm1hcCgoY2lja3RlcikgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2NpY2t0ZXIuaWR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW0gMFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyYXlcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtjaWNrdGVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICBhbHQ9e2NpY2t0ZXIuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMTAwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMj5OYW1lOiB7YCR7Y2lja3Rlci5maXJzdF9uYW1lfSAke2NpY2t0ZXIubGFzdF9uYW1lfWB9PC9oMj5cclxuICAgICAgICAgICAgPGg0PkVtYWlsOiB7Y2lja3Rlci5lbWFpbH0gPC9oND5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YGRldGFpbHMvJHtjaWNrdGVyLmlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgdXBkYXRlLyR7Y2lja3Rlci5pZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLCBwYWRkaW5nOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgR28gVG8gVXBkYXRlIFBhZ2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVFbmdpbmVlckhhbmRsZXIoY2lja3Rlci5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZWxldGUgQ2lja3RlclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBzdG9yZVdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoXHJcbiAgKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGlzU3VjY2VzcywgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBhbGxDcmlja3Rlci5pbml0aWF0ZSgpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChpc1N1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXNFcnJvcjogaXNFcnJvcixcclxuICAgICAgICAgIGlzU3VjY2VzczogaXNTdWNjZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhPy5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBpc0Vycm9yOiBpc0Vycm9yLFxyXG4gICAgICAgICAgaXNTdWNjZXNzOiBpc1N1Y2Nlc3MsXHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU2lkZUhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwiU2VydmVyU2lkZUhvbWUiLCJpc0Vycm9yIiwiaXNTdWNjZXNzIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhyZWYiLCJwYXNzSHJlZiIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2lja3RlciIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsImZpcnN0X25hbWUiLCJoZWlnaHQiLCJsYXN0X25hbWUiLCJoNCIsImVtYWlsIiwiaWQiLCJvbkNsaWNrIiwiZGVsZXRlRW5naW5lZXJIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/server-side/index.js\n"));

/***/ })

});