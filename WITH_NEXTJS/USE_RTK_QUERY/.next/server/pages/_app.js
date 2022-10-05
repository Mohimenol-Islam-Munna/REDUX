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

/***/ "./RTKQuery/api/applicationApi.js":
/*!****************************************!*\
  !*** ./RTKQuery/api/applicationApi.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allCrickter\": () => (/* binding */ allCrickter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getRunningOperationPromises\": () => (/* binding */ getRunningOperationPromises),\n/* harmony export */   \"useAllCrickterQuery\": () => (/* binding */ useAllCrickterQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst applicationApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"applicationApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://reqres.in\"\n    }),\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    tagTypes: [\n        \"Crickter\"\n    ],\n    endpoints: (builder)=>({\n            allCrickter: builder.query({\n                query: ()=>\"/api/users?page=2\",\n                transformResponse: (response, meta, arg)=>{\n                    return response;\n                },\n                providesTags: (result, error)=>{\n                    return [\n                        {\n                            type: \"Crickter\"\n                        }\n                    ];\n                }\n            })\n        })\n});\nconst { useAllCrickterQuery , util: { getRunningOperationPromises  } ,  } = applicationApi;\nconst { allCrickter  } = applicationApi.endpoints;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applicationApi);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SVEtRdWVyeS9hcGkvYXBwbGljYXRpb25BcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFDNUI7QUFFN0MsTUFBTUcsY0FBYyxHQUFHSCx1RUFBUyxDQUFDO0lBQy9CSSxXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCQyxTQUFTLEVBQUVKLDRFQUFjLENBQUM7UUFBRUssT0FBTyxFQUFFLG1CQUFtQjtLQUFFLENBQUM7SUFDM0RDLHNCQUFzQixFQUFDQyxNQUFNLEVBQUUsRUFBRUosV0FBVyxHQUFFLEVBQUU7UUFDOUMsSUFBSUksTUFBTSxDQUFDQyxJQUFJLEtBQUtQLHVEQUFPLEVBQUU7WUFDM0IsT0FBT00sTUFBTSxDQUFDRSxPQUFPLENBQUNOLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7SUFDRE8sUUFBUSxFQUFFO1FBQUMsVUFBVTtLQUFDO0lBQ3RCQyxTQUFTLEVBQUUsQ0FBQ0MsT0FBTyxHQUFLLENBQUM7WUFDdkJDLFdBQVcsRUFBRUQsT0FBTyxDQUFDRSxLQUFLLENBQUM7Z0JBQ3pCQSxLQUFLLEVBQUUsSUFBTSxtQkFBbUI7Z0JBQ2hDQyxpQkFBaUIsRUFBRSxDQUFDQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsR0FBRyxHQUFLO29CQUMxQyxPQUFPRixRQUFRLENBQUM7aUJBQ2pCO2dCQUNERyxZQUFZLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEdBQUs7b0JBQy9CLE9BQU87d0JBQUM7NEJBQUViLElBQUksRUFBRSxVQUFVO3lCQUFFO3FCQUFDLENBQUM7aUJBQy9CO2FBQ0YsQ0FBQztTQUNILENBQUM7Q0FDSCxDQUFDO0FBRUssTUFBTSxFQUNYYyxtQkFBbUIsR0FDbkJDLElBQUksRUFBRSxFQUFFQywyQkFBMkIsR0FBRSxLQUN0QyxHQUFHdEIsY0FBYyxDQUFDO0FBQ1osTUFBTSxFQUFFVyxXQUFXLEdBQUUsR0FBR1gsY0FBYyxDQUFDUyxTQUFTLENBQUM7QUFDeEQsaUVBQWVULGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9SVEtRdWVyeS9hcGkvYXBwbGljYXRpb25BcGkuanM/MzkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uQXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogXCJhcHBsaWNhdGlvbkFwaVwiLFxyXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBcImh0dHBzOi8vcmVxcmVzLmluXCIgfSksXHJcbiAgZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyhhY3Rpb24sIHsgcmVkdWNlclBhdGggfSkge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFtyZWR1Y2VyUGF0aF07XHJcbiAgICB9XHJcbiAgfSxcclxuICB0YWdUeXBlczogW1wiQ3JpY2t0ZXJcIl0sXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGFsbENyaWNrdGVyOiBidWlsZGVyLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6ICgpID0+IFwiL2FwaS91c2Vycz9wYWdlPTJcIixcclxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZSwgbWV0YSwgYXJnKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9LFxyXG4gICAgICBwcm92aWRlc1RhZ3M6IChyZXN1bHQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFt7IHR5cGU6IFwiQ3JpY2t0ZXJcIiB9XTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlQWxsQ3JpY2t0ZXJRdWVyeSxcclxuICB1dGlsOiB7IGdldFJ1bm5pbmdPcGVyYXRpb25Qcm9taXNlcyB9LFxyXG59ID0gYXBwbGljYXRpb25BcGk7XHJcbmV4cG9ydCBjb25zdCB7IGFsbENyaWNrdGVyIH0gPSBhcHBsaWNhdGlvbkFwaS5lbmRwb2ludHM7XHJcbmV4cG9ydCBkZWZhdWx0IGFwcGxpY2F0aW9uQXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJIWURSQVRFIiwiYXBwbGljYXRpb25BcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJleHRyYWN0UmVoeWRyYXRpb25JbmZvIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJhbGxDcmlja3RlciIsInF1ZXJ5IiwidHJhbnNmb3JtUmVzcG9uc2UiLCJyZXNwb25zZSIsIm1ldGEiLCJhcmciLCJwcm92aWRlc1RhZ3MiLCJyZXN1bHQiLCJlcnJvciIsInVzZUFsbENyaWNrdGVyUXVlcnkiLCJ1dGlsIiwiZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./RTKQuery/api/applicationApi.js\n");

/***/ }),

/***/ "./RTKQuery/store/index.js":
/*!*********************************!*\
  !*** ./RTKQuery/store/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_applicationApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/applicationApi */ \"./RTKQuery/api/applicationApi.js\");\n\n\n\n\nconst store = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_api_applicationApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reducerPath]: _api_applicationApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reducer\n        },\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_applicationApi__WEBPACK_IMPORTED_MODULE_3__[\"default\"].middleware),\n        devTools: true\n    });\n// setupListeners(store.dispatch);  it's through error in next js\nconst storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(store);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SVEtRdWVyeS9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNZO0FBQ1g7QUFDQTtBQUVuRCxNQUFNSSxLQUFLLEdBQUcsSUFDWkosZ0VBQWMsQ0FBQztRQUNiSyxPQUFPLEVBQUU7WUFDUCxDQUFDRix1RUFBMEIsQ0FBQyxFQUFFQSxtRUFBc0I7U0FDckQ7UUFDREksVUFBVSxFQUFFLENBQUNDLG9CQUFvQixHQUMvQkEsb0JBQW9CLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDTixzRUFBeUIsQ0FBQztRQUMxRE8sUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0FBRUosaUVBQWlFO0FBRWpFLE1BQU1DLFlBQVksR0FBR1QsaUVBQWEsQ0FBQ0UsS0FBSyxDQUFDO0FBQ3pDLGlFQUFlTyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vUlRLUXVlcnkvc3RvcmUvaW5kZXguanM/YWQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNldHVwTGlzdGVuZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGFwcGxpY2F0aW9uQXBpIGZyb20gXCIuLi9hcGkvYXBwbGljYXRpb25BcGlcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gKCkgPT5cclxuICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgIFthcHBsaWNhdGlvbkFwaS5yZWR1Y2VyUGF0aF06IGFwcGxpY2F0aW9uQXBpLnJlZHVjZXIsXHJcbiAgICB9LFxyXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgICBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChhcHBsaWNhdGlvbkFwaS5taWRkbGV3YXJlKSxcclxuICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuLy8gc2V0dXBMaXN0ZW5lcnMoc3RvcmUuZGlzcGF0Y2gpOyAgaXQncyB0aHJvdWdoIGVycm9yIGluIG5leHQganNcclxuXHJcbmNvbnN0IHN0b3JlV3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoc3RvcmUpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVdyYXBwZXI7XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNldHVwTGlzdGVuZXJzIiwiY3JlYXRlV3JhcHBlciIsImFwcGxpY2F0aW9uQXBpIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiLCJkZXZUb29scyIsInN0b3JlV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./RTKQuery/store/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RTKQuery_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RTKQuery/store */ \"./RTKQuery/store/index.js\");\n\n\n\n\nfunction MyApp({ Component , ...rest }) {\n    const { store , props  } = _RTKQuery_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useWrappedStore(rest);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props.pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_RTK_QUERY\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDUTtBQUNNO0FBRTdDLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUUsR0FBR0MsSUFBSSxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRSxHQUFHTCx1RUFBNEIsQ0FBQ0csSUFBSSxDQUFDO0lBRTNELHFCQUNFLDhEQUFDSixpREFBUTtRQUFDSyxLQUFLLEVBQUVBLEtBQUs7a0JBQ3BCLDRFQUFDRixTQUFTO1lBQUUsR0FBR0csS0FBSyxDQUFDRSxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDekIsQ0FDWDtDQUNIO0FBRUQsaUVBQWVOLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uL1JUS1F1ZXJ5L3N0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XHJcbiAgY29uc3QgeyBzdG9yZSwgcHJvcHMgfSA9IHN0b3JlV3JhcHBlci51c2VXcmFwcGVkU3RvcmUocmVzdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHMucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmVXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJyZXN0Iiwic3RvcmUiLCJwcm9wcyIsInVzZVdyYXBwZWRTdG9yZSIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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