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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ServerSideHome = function(param) {\n    var isError = param.isError, isSuccess = param.isSuccess, error = param.error, data = param.data;\n    console.log(\"data 2:\", data);\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\",\n                    color: \"salmon\"\n                },\n                children: \"Something Wrong\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"NEXT JS WITH RTK QUERY (SERVER SIDE DATA FETCHING)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"0.5rem auto\",\n                    backgroundColor: \"lightgray\",\n                    padding: \"1rem\",\n                    borderRadius: \"0.3rem\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"create\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginRight: \"0.5rem\",\n                            padding: \"5px\"\n                        },\n                        children: \"Go To Create Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"1.5rem auto\"\n                },\n                children: data === null || data === void 0 ? void 0 : data.map(function(cickter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            margin: \"0.5rem 0\",\n                            backgroundColor: \"lightgray\",\n                            padding: \"1rem\",\n                            borderRadius: \"0.3rem\",\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: cickter.avatar,\n                                alt: cickter.first_name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\",\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Name: \",\n                                    \"\".concat(cickter.first_name, \" \").concat(cickter.last_name)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Email: \",\n                                    cickter.email,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"details/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"update/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"Go To Update Page\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    marginRight: \"0.5rem\",\n                                    padding: \"5px\"\n                                },\n                                onClick: function() {\n                                    return deleteEngineerHandler(cickter.id);\n                                },\n                                children: \"Delete Cickter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, cickter.id, true, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = ServerSideHome;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerSideHome);\nvar _c;\n$RefreshReg$(_c, \"ServerSideHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFFBQU07b0NBQUNWLEtBQUssRUFBRTt3Q0FBRVcsV0FBVyxFQUFFLFFBQVE7d0NBQUVMLE9BQU8sRUFBRSxLQUFLO3FDQUFFOzhDQUFFLGNBRTFEOzs7Ozt5Q0FBUzs7Ozs7cUNBQ0o7MENBQ1AsOERBQUNuQixrREFBSTtnQ0FBQ3FCLElBQUksRUFBRSxTQUFRLENBQWEsT0FBWEssT0FBTyxDQUFDVSxFQUFFLENBQUU7Z0NBQUVkLFFBQVE7MENBQzFDLDRFQUFDQyxRQUFNO29DQUFDVixLQUFLLEVBQUU7d0NBQUVXLFdBQVcsRUFBRSxRQUFRO3dDQUFFTCxPQUFPLEVBQUUsS0FBSztxQ0FBRTs4Q0FBRSxtQkFFMUQ7Ozs7O3lDQUFTOzs7OztxQ0FDSjswQ0FDUCw4REFBQ0ksUUFBTTtnQ0FDTFYsS0FBSyxFQUFFO29DQUFFVyxXQUFXLEVBQUUsUUFBUTtvQ0FBRUwsT0FBTyxFQUFFLEtBQUs7aUNBQUU7Z0NBQ2hEa0IsT0FBTyxFQUFFOzJDQUFNQyxxQkFBcUIsQ0FBQ1osT0FBTyxDQUFDVSxFQUFFLENBQUM7aUNBQUE7MENBQ2pELGdCQUVEOzs7OztxQ0FBUzs7dUJBaENKVixPQUFPLENBQUNVLEVBQUU7Ozs7NkJBaUNYO2lCQUNQLENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUE1RUtsQyxLQUFBQSxjQUFjOztBQTRHcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXJ2ZXItc2lkZS9pbmRleC5qcz9kOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhbGxDcmlja3RlciB9IGZyb20gXCIuLi8uLi9SVEtRdWVyeS9hcGkvYXBwbGljYXRpb25BcGlcIjtcclxuaW1wb3J0IHN0b3JlV3JhcHBlciBmcm9tIFwiLi4vLi4vUlRLUXVlcnkvc3RvcmUvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFNlcnZlclNpZGVIb21lID0gKHsgaXNFcnJvciwgaXNTdWNjZXNzLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIDI6XCIsIGRhdGEpO1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcInNhbG1vblwiIH19PlxyXG4gICAgICAgICAgU29tZXRoaW5nIFdyb25nXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICBORVhUIEpTIFdJVEggUlRLIFFVRVJZIChTRVJWRVIgU0lERSBEQVRBIEZFVENISU5HKVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW0gYXV0b1wiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJjcmVhdGVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIEdvIFRvIENyZWF0ZSBQYWdlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjgwJVwiLCBtYXJnaW46IFwiMS41cmVtIGF1dG9cIiB9fT5cclxuICAgICAgICB7ZGF0YT8ubWFwKChjaWNrdGVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17Y2lja3Rlci5pZH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2NpY2t0ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgIGFsdD17Y2lja3Rlci5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIxMDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyPk5hbWU6IHtgJHtjaWNrdGVyLmZpcnN0X25hbWV9ICR7Y2lja3Rlci5sYXN0X25hbWV9YH08L2gyPlxyXG4gICAgICAgICAgICA8aDQ+RW1haWw6IHtjaWNrdGVyLmVtYWlsfSA8L2g0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgZGV0YWlscy8ke2NpY2t0ZXIuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2B1cGRhdGUvJHtjaWNrdGVyLmlkfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBHbyBUbyBVcGRhdGUgUGFnZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUVuZ2luZWVySGFuZGxlcihjaWNrdGVyLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZSBDaWNrdGVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHN0b3JlV3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcclxuICAoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IGlzTG9hZGluZywgaXNFcnJvciwgaXNTdWNjZXNzLCBlcnJvciwgZGF0YSB9ID0gc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIGFsbENyaWNrdGVyLmluaXRpYXRlKClcclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoKVxyXG5cclxuICAgIGlmIChpc1N1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXNFcnJvcjogaXNFcnJvcixcclxuICAgICAgICAgIGlzU3VjY2VzczogaXNTdWNjZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhPy5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBpc0Vycm9yOiBpc0Vycm9yLFxyXG4gICAgICAgICAgaXNTdWNjZXNzOiBpc1N1Y2Nlc3MsXHJcbiAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU2lkZUhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwiU2VydmVyU2lkZUhvbWUiLCJpc0Vycm9yIiwiaXNTdWNjZXNzIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhyZWYiLCJwYXNzSHJlZiIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY2lja3RlciIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsImZpcnN0X25hbWUiLCJoZWlnaHQiLCJsYXN0X25hbWUiLCJoNCIsImVtYWlsIiwiaWQiLCJvbkNsaWNrIiwiZGVsZXRlRW5naW5lZXJIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/server-side/index.js\n"));

/***/ })

});