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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _RTKQuery_api_applicationApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RTKQuery/api/applicationApi */ \"./RTKQuery/api/applicationApi.js\");\nvar _this = undefined;\n\n\n\n\nvar ServerSideHome = function(param) {\n    var data = param.data;\n    var ref;\n    // console.log(\"isLoading :\", isLoading);\n    // console.log(\"isError :\", isError);\n    // console.log(\"isSuccess :\", isSuccess);\n    // console.log(\"error :\", error);\n    console.log(\"data :\", data);\n    // if (isLoading) {\n    //   return (\n    //     <div className={styles.container}>\n    //       <h2 style={{ textAlign: \"center\" }}>Loading ...</h2>\n    //     </div>\n    //   );\n    // }\n    // if (isError) {\n    //   return (\n    //     <div className={styles.container}>\n    //       <h2 style={{ textAlign: \"center\", color: \"salmon\" }}>\n    //         Something Wrong\n    //       </h2>\n    //     </div>\n    //   );\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"NEXT JS WITH RTK QUERY (SERVER SIDE DATA FETCHING)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"0.5rem auto\",\n                    backgroundColor: \"lightgray\",\n                    padding: \"1rem\",\n                    borderRadius: \"0.3rem\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"create\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginRight: \"0.5rem\",\n                            padding: \"5px\"\n                        },\n                        children: \"Go To Create Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"1.5rem auto\"\n                },\n                children: data === null || data === void 0 ? void 0 : (ref = data.data) === null || ref === void 0 ? void 0 : ref.map(function(cickter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            margin: \"0.5rem 0\",\n                            backgroundColor: \"lightgray\",\n                            padding: \"1rem\",\n                            borderRadius: \"0.3rem\",\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: cickter.avatar,\n                                alt: cickter.first_name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\",\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Name: \",\n                                    \"\".concat(cickter.first_name, \" \").concat(cickter.last_name)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Email: \",\n                                    cickter.email,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"details/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"update/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"Go To Update Page\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    marginRight: \"0.5rem\",\n                                    padding: \"5px\"\n                                },\n                                onClick: function() {\n                                    return deleteEngineerHandler(cickter.id);\n                                },\n                                children: \"Delete Cickter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, cickter.id, true, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_c = ServerSideHome;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerSideHome);\nvar _c;\n$RefreshReg$(_c, \"ServerSideHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQWEsT0FBWEssT0FBTyxDQUFDVSxFQUFFLENBQUU7Z0NBQUVkLFFBQVE7MENBQzNDLDRFQUFDQyxRQUFNO29DQUFDVCxLQUFLLEVBQUU7d0NBQUVVLFdBQVcsRUFBRSxRQUFRO3dDQUFFTCxPQUFPLEVBQUUsS0FBSztxQ0FBRTs4Q0FBRSxjQUUxRDs7Ozs7eUNBQVM7Ozs7O3FDQUNKOzBDQUNQLDhEQUFDaEIsa0RBQUk7Z0NBQUNrQixJQUFJLEVBQUUsU0FBUSxDQUFhLE9BQVhLLE9BQU8sQ0FBQ1UsRUFBRSxDQUFFO2dDQUFFZCxRQUFROzBDQUMxQyw0RUFBQ0MsUUFBTTtvQ0FBQ1QsS0FBSyxFQUFFO3dDQUFFVSxXQUFXLEVBQUUsUUFBUTt3Q0FBRUwsT0FBTyxFQUFFLEtBQUs7cUNBQUU7OENBQUUsbUJBRTFEOzs7Ozt5Q0FBUzs7Ozs7cUNBQ0o7MENBQ1AsOERBQUNJLFFBQU07Z0NBQ0xULEtBQUssRUFBRTtvQ0FBRVUsV0FBVyxFQUFFLFFBQVE7b0NBQUVMLE9BQU8sRUFBRSxLQUFLO2lDQUFFO2dDQUNoRGtCLE9BQU8sRUFBRTsyQ0FBTUMscUJBQXFCLENBQUNaLE9BQU8sQ0FBQ1UsRUFBRSxDQUFDO2lDQUFBOzBDQUNqRCxnQkFFRDs7Ozs7cUNBQVM7O3VCQWhDSlYsT0FBTyxDQUFDVSxFQUFFOzs7OzZCQWlDWDtpQkFDUCxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBeEZLOUIsS0FBQUEsY0FBYzs7QUE0R3BCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUvaW5kZXguanM/ZDk2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWxsQ3JpY2t0ZXIgfSBmcm9tIFwiLi4vLi4vUlRLUXVlcnkvYXBpL2FwcGxpY2F0aW9uQXBpXCI7XHJcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uLy4uL1JUS1F1ZXJ5L3N0b3JlL2luZGV4XCI7XHJcblxyXG5jb25zdCBTZXJ2ZXJTaWRlSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiaXNMb2FkaW5nIDpcIiwgaXNMb2FkaW5nKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImlzRXJyb3IgOlwiLCBpc0Vycm9yKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImlzU3VjY2VzcyA6XCIsIGlzU3VjY2Vzcyk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJlcnJvciA6XCIsIGVycm9yKTtcclxuICBjb25zb2xlLmxvZyhcImRhdGEgOlwiLCBkYXRhKTtcclxuXHJcbiAgLy8gaWYgKGlzTG9hZGluZykge1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gIC8vICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+TG9hZGluZyAuLi48L2gyPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoaXNFcnJvcikge1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gIC8vICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcInNhbG1vblwiIH19PlxyXG4gIC8vICAgICAgICAgU29tZXRoaW5nIFdyb25nXHJcbiAgLy8gICAgICAgPC9oMj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBORVhUIEpTIFdJVEggUlRLIFFVRVJZIChTRVJWRVIgU0lERSBEQVRBIEZFVENISU5HKVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW0gYXV0b1wiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJjcmVhdGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIEdvIFRvIENyZWF0ZSBQYWdlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjgwJVwiLCBtYXJnaW46IFwiMS41cmVtIGF1dG9cIiB9fT5cclxuICAgICAgICB7ZGF0YT8uZGF0YT8ubWFwKChjaWNrdGVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17Y2lja3Rlci5pZH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2NpY2t0ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgIGFsdD17Y2lja3Rlci5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIxMDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyPk5hbWU6IHtgJHtjaWNrdGVyLmZpcnN0X25hbWV9ICR7Y2lja3Rlci5sYXN0X25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICA8aDQ+RW1haWw6IHtjaWNrdGVyLmVtYWlsfSA8L2g0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgZGV0YWlscy8ke2NpY2t0ZXIuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2B1cGRhdGUvJHtjaWNrdGVyLmlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBHbyBUbyBVcGRhdGUgUGFnZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUVuZ2luZWVySGFuZGxlcihjaWNrdGVyLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZSBDaWNrdGVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHN0b3JlV3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcclxuICAoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblxyXG5cclxuICAgIHN0YWxsQ3JpY2t0ZXIuaW5pdGlhdGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyByZXMgOjogXCIsIHJlcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsImFsbENyaWNrdGVyIiwiU2VydmVyU2lkZUhvbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJocmVmIiwicGFzc0hyZWYiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsIm1hcCIsImNpY2t0ZXIiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJmaXJzdF9uYW1lIiwiaGVpZ2h0IiwibGFzdF9uYW1lIiwiaDQiLCJlbWFpbCIsImlkIiwib25DbGljayIsImRlbGV0ZUVuZ2luZWVySGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/server-side/index.js\n"));

/***/ })

});