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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ServerSideHome = function(param) {\n    var isError = param.isError, isSuccess = param.isSuccess, error = param.error, data = param.data;\n    var ref;\n    // console.log(\"isLoading :\", isLoading);\n    // console.log(\"isError :\", isError);\n    // console.log(\"isSuccess :\", isSuccess);\n    // console.log(\"error :\", error);\n    console.log(\"data :\", data);\n    // if (isError) {\n    //   return (\n    //     <div className={styles.container}>\n    //       <h2 style={{ textAlign: \"center\", color: \"salmon\" }}>\n    //         Something Wrong\n    //       </h2>\n    //     </div>\n    //   );\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"NEXT JS WITH RTK QUERY (SERVER SIDE DATA FETCHING)\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"0.5rem auto\",\n                    backgroundColor: \"lightgray\",\n                    padding: \"1rem\",\n                    borderRadius: \"0.3rem\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"create\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginRight: \"0.5rem\",\n                            padding: \"5px\"\n                        },\n                        children: \"Go To Create Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    margin: \"1.5rem auto\"\n                },\n                children: data === null || data === void 0 ? void 0 : (ref = data.data) === null || ref === void 0 ? void 0 : ref.map(function(cickter) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            margin: \"0.5rem 0\",\n                            backgroundColor: \"lightgray\",\n                            padding: \"1rem\",\n                            borderRadius: \"0.3rem\",\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: cickter.avatar,\n                                alt: cickter.first_name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\",\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"Name: \",\n                                    \"\".concat(cickter.first_name, \" \").concat(cickter.last_name)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: [\n                                    \"Email: \",\n                                    cickter.email,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"details/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"View Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"update/\".concat(cickter.id),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginRight: \"0.5rem\",\n                                        padding: \"5px\"\n                                    },\n                                    children: \"Go To Update Page\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    marginRight: \"0.5rem\",\n                                    padding: \"5px\"\n                                },\n                                onClick: function() {\n                                    return deleteEngineerHandler(cickter.id);\n                                },\n                                children: \"Delete Cickter\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, cickter.id, true, {\n                        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\server-side\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = ServerSideHome;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServerSideHome);\nvar _c;\n$RefreshReg$(_c, \"ServerSideHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1UsRUFBRSxDQUFFO2dDQUFFZCxRQUFROzBDQUMzQyw0RUFBQ0MsUUFBTTtvQ0FBQ1QsS0FBSyxFQUFFO3dDQUFFVSxXQUFXLEVBQUUsUUFBUTt3Q0FBRUwsT0FBTyxFQUFFLEtBQUs7cUNBQUU7OENBQUUsY0FFMUQ7Ozs7O3lDQUFTOzs7OztxQ0FDSjswQ0FDUCw4REFBQ2xCLGtEQUFJO2dDQUFDb0IsSUFBSSxFQUFFLFNBQVEsQ0FBYSxPQUFYSyxPQUFPLENBQUNVLEVBQUUsQ0FBRTtnQ0FBRWQsUUFBUTswQ0FDMUMsNEVBQUNDLFFBQU07b0NBQUNULEtBQUssRUFBRTt3Q0FBRVUsV0FBVyxFQUFFLFFBQVE7d0NBQUVMLE9BQU8sRUFBRSxLQUFLO3FDQUFFOzhDQUFFLG1CQUUxRDs7Ozs7eUNBQVM7Ozs7O3FDQUNKOzBDQUNQLDhEQUFDSSxRQUFNO2dDQUNMVCxLQUFLLEVBQUU7b0NBQUVVLFdBQVcsRUFBRSxRQUFRO29DQUFFTCxPQUFPLEVBQUUsS0FBSztpQ0FBRTtnQ0FDaERrQixPQUFPLEVBQUU7MkNBQU1DLHFCQUFxQixDQUFDWixPQUFPLENBQUNVLEVBQUUsQ0FBQztpQ0FBQTswQ0FDakQsZ0JBRUQ7Ozs7O3FDQUFTOzt1QkFoQ0pWLE9BQU8sQ0FBQ1UsRUFBRTs7Ozs2QkFpQ1g7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtBQWhGS2pDLEtBQUFBLGNBQWM7O0FBOEdwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZlci1zaWRlL2luZGV4LmpzP2Q5NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGFsbENyaWNrdGVyIH0gZnJvbSBcIi4uLy4uL1JUS1F1ZXJ5L2FwaS9hcHBsaWNhdGlvbkFwaVwiO1xyXG5pbXBvcnQgc3RvcmVXcmFwcGVyIGZyb20gXCIuLi8uLi9SVEtRdWVyeS9zdG9yZS9pbmRleFwiO1xyXG5cclxuY29uc3QgU2VydmVyU2lkZUhvbWUgPSAoeyBpc0Vycm9yLCBpc1N1Y2Nlc3MsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImlzTG9hZGluZyA6XCIsIGlzTG9hZGluZyk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJpc0Vycm9yIDpcIiwgaXNFcnJvcik7XHJcbiAgLy8gY29uc29sZS5sb2coXCJpc1N1Y2Nlc3MgOlwiLCBpc1N1Y2Nlc3MpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiZXJyb3IgOlwiLCBlcnJvcik7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhIDpcIiwgZGF0YSk7XHJcblxyXG4gIC8vIGlmIChpc0Vycm9yKSB7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgLy8gICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwic2FsbW9uXCIgfX0+XHJcbiAgLy8gICAgICAgICBTb21ldGhpbmcgV3JvbmdcclxuICAvLyAgICAgICA8L2gyPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIE5FWFQgSlMgV0lUSCBSVEsgUVVFUlkgKFNFUlZFUiBTSURFIERBVEEgRkVUQ0hJTkcpXHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbSBhdXRvXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmF5XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cImNyZWF0ZVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgR28gVG8gQ3JlYXRlIFBhZ2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiODAlXCIsIG1hcmdpbjogXCIxLjVyZW0gYXV0b1wiIH19PlxyXG4gICAgICAgIHtkYXRhPy5kYXRhPy5tYXAoKGNpY2t0ZXIpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtjaWNrdGVyLmlkfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMC41cmVtIDBcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmF5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuM3JlbVwiLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17Y2lja3Rlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgYWx0PXtjaWNrdGVyLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjEwMHB4XCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDI+TmFtZToge2Ake2NpY2t0ZXIuZmlyc3RfbmFtZX0gJHtjaWNrdGVyLmxhc3RfbmFtZX1gfTwvaDI+XHJcbiAgICAgICAgICAgIDxoND5FbWFpbDoge2NpY2t0ZXIuZW1haWx9IDwvaDQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BkZXRhaWxzLyR7Y2lja3Rlci5pZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLCBwYWRkaW5nOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YHVwZGF0ZS8ke2NpY2t0ZXIuaWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjVyZW1cIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIEdvIFRvIFVwZGF0ZSBQYWdlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlRW5naW5lZXJIYW5kbGVyKGNpY2t0ZXIuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsZXRlIENpY2t0ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gc3RvcmVXcmFwcGVyLmdldFN0YXRpY1Byb3BzKFxyXG4gIChzdG9yZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBpc0Vycm9yLCBpc1N1Y2Nlc3MsIGVycm9yLCBkYXRhIH0gPSBhd2FpdCBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgYWxsQ3JpY2t0ZXIuaW5pdGlhdGUoKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGlzRXJyb3I6IGlzRXJyb3IsXHJcbiAgICAgICAgICBpc1N1Y2Nlc3M6IGlzU3VjY2VzcyxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgZGF0YTogZGF0YT8uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXNFcnJvcjogaXNFcnJvcixcclxuICAgICAgICAgIGlzU3VjY2VzczogaXNTdWNjZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLmVycm9yLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsIlNlcnZlclNpZGVIb21lIiwiaXNFcnJvciIsImlzU3VjY2VzcyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInN0eWxlIiwidGV4dEFsaWduIiwid2lkdGgiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaHJlZiIsInBhc3NIcmVmIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJtYXAiLCJjaWNrdGVyIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwiZmlyc3RfbmFtZSIsImhlaWdodCIsImxhc3RfbmFtZSIsImg0IiwiZW1haWwiLCJpZCIsIm9uQ2xpY2siLCJkZWxldGVFbmdpbmVlckhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/server-side/index.js\n"));

/***/ })

});