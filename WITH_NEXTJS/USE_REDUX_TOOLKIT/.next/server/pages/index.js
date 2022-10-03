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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/userAction */ \"./store/actions/userAction.js\");\n/* harmony import */ var _store_slices_userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/slices/userSlice */ \"./store/slices/userSlice.js\");\n/* harmony import */ var _store_slices_tasksSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/slices/tasksSlice */ \"./store/slices/tasksSlice.js\");\n\n\n\n\n\n\n\n\n// export const getStaticProps = storeWrapper.getStaticProps(\n//   (store) => async (context) => {\n//     // store.dispatch(userActionHandler());\n//     await store.dispatch(fetchAllUser(\"data go\"));\n//     return {\n//       props: {\n//         data: \"user\",\n//       },\n//     };\n//   }\n// );\nconst getStaticProps = _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getStaticProps((store)=>async ({ req , res  })=>{\n        await store.dispatch((0,_store_slices_tasksSlice__WEBPACK_IMPORTED_MODULE_6__.readTasks)({\n            req,\n            res\n        }));\n    });\nconst Home = ({ data  })=>{\n    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((store)=>store.tasks);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    console.log(\"application store ::\", store);\n    // useEffect(() => {\n    //   // dispatch(fetchAllUser(\"client side dispatch\"));\n    //   dispatch(userActionHandler());\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"NEXT JS WITH REDUX TOOLKIT\"\n        }, void 0, false, {\n            fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REDUX_TOOLKIT\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REDUX_TOOLKIT\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ007QUFFUTtBQUNuQjtBQUM0QjtBQUNQO0FBQ0Y7QUFFdkQsNkRBQTZEO0FBQzdELG9DQUFvQztBQUNwQyw4Q0FBOEM7QUFDOUMscURBQXFEO0FBRXJELGVBQWU7QUFDZixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsTUFBTTtBQUNOLEtBQUs7QUFFRSxNQUFNUyxjQUFjLEdBQUdKLDZEQUEyQixDQUN2RCxDQUFDSyxLQUFLLEdBQ0osT0FBTyxFQUFFQyxHQUFHLEdBQUVDLEdBQUcsR0FBRSxHQUFLO1FBQ3RCLE1BQU1GLEtBQUssQ0FBQ0csUUFBUSxDQUFDTCxtRUFBUyxDQUFDO1lBQUVHLEdBQUc7WUFBRUMsR0FBRztTQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FDSixDQUFDO0FBRUYsTUFBTUUsSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDekIsTUFBTUwsS0FBSyxHQUFHUCx3REFBVyxDQUFDLENBQUNPLEtBQUssR0FBS0EsS0FBSyxDQUFDTSxLQUFLLENBQUM7SUFDakQsTUFBTUgsUUFBUSxHQUFHVCx3REFBVyxFQUFFO0lBRTlCYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRVIsS0FBSyxDQUFDLENBQUM7SUFFM0Msb0JBQW9CO0lBQ3BCLHVEQUF1RDtJQUN2RCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUVWLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBRWxCLDBFQUFnQjtrQkFDOUIsNEVBQUNvQixJQUFFO1lBQUNDLEtBQUssRUFBRTtnQkFBRUMsU0FBUyxFQUFFLFFBQVE7YUFBRTtzQkFBRSw0QkFBMEI7Ozs7O3FCQUFLOzs7OztpQkFDL0QsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZVYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZVdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZXJBY3Rpb25IYW5kbGVyIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvblwiO1xyXG5pbXBvcnQgeyBmZXRjaEFsbFVzZXIgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZVwiO1xyXG5pbXBvcnQgeyByZWFkVGFza3MgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Rhc2tzU2xpY2VcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHN0b3JlV3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcclxuLy8gICAoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgICAvLyBzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9uSGFuZGxlcigpKTtcclxuLy8gICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGZldGNoQWxsVXNlcihcImRhdGEgZ29cIikpO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgZGF0YTogXCJ1c2VyXCIsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuLy8gKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHN0b3JlV3JhcHBlci5nZXRTdGF0aWNQcm9wcyhcclxuICAoc3RvcmUpID0+XHJcbiAgICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHJlYWRUYXNrcyh7IHJlcSwgcmVzIH0pKTtcclxuICAgIH1cclxuKTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdG9yZSkgPT4gc3RvcmUudGFza3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJhcHBsaWNhdGlvbiBzdG9yZSA6OlwiLCBzdG9yZSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvLyBkaXNwYXRjaChmZXRjaEFsbFVzZXIoXCJjbGllbnQgc2lkZSBkaXNwYXRjaFwiKSk7XHJcbiAgLy8gICBkaXNwYXRjaCh1c2VyQWN0aW9uSGFuZGxlcigpKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+TkVYVCBKUyBXSVRIIFJFRFVYIFRPT0xLSVQ8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInN0eWxlcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzdG9yZVdyYXBwZXIiLCJ1c2VyQWN0aW9uSGFuZGxlciIsImZldGNoQWxsVXNlciIsInJlYWRUYXNrcyIsImdldFN0YXRpY1Byb3BzIiwic3RvcmUiLCJyZXEiLCJyZXMiLCJkaXNwYXRjaCIsIkhvbWUiLCJkYXRhIiwidGFza3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJzdHlsZSIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./store/actions/userAction.js":
/*!*************************************!*\
  !*** ./store/actions/userAction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userActionHandler\": () => (/* binding */ userActionHandler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/userSlice */ \"./store/slices/userSlice.js\");\n\n\n\nconst userActionHandler = ()=>async (dispatch)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_1__.baseUrl}/api/users?page=2`);\n            dispatch((0,_slices_userSlice__WEBPACK_IMPORTED_MODULE_2__.fetchAllUser)(res.data));\n        } catch (err) {\n            console.log(\"@@@@@@ user data fetch error ::\", err);\n        }\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDSztBQUU1QyxNQUFNRyxpQkFBaUIsR0FBRyxJQUFNLE9BQU9DLFFBQVEsR0FBSztRQUN6RCxJQUFJO1lBQ0YsTUFBTUMsR0FBRyxHQUFHLE1BQU1MLGdEQUFTLENBQUMsQ0FBQyxFQUFFQyxtREFBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDMURHLFFBQVEsQ0FBQ0YsK0RBQVksQ0FBQ0csR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEVBQUUsT0FBT0MsR0FBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxFQUFFRixHQUFHLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24uanM/MTFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBmZXRjaEFsbFVzZXIgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXJTbGljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJBY3Rpb25IYW5kbGVyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvdXNlcnM/cGFnZT0yYCk7XHJcbiAgICBkaXNwYXRjaChmZXRjaEFsbFVzZXIocmVzLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQEBAQEBAIHVzZXIgZGF0YSBmZXRjaCBlcnJvciA6OlwiLCBlcnIpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVybCIsImZldGNoQWxsVXNlciIsInVzZXJBY3Rpb25IYW5kbGVyIiwiZGlzcGF0Y2giLCJyZXMiLCJnZXQiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/userAction.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/userSlice */ \"./store/slices/userSlice.js\");\n/* harmony import */ var _slices_tasksSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/tasksSlice */ \"./store/slices/tasksSlice.js\");\n\n\n\n\nconst store = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            user: _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reducer,\n            tasks: _slices_tasksSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        devTools: true\n    });\nconst storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(store);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ0M7QUFDTjtBQUNDO0FBRTlDLE1BQU1JLEtBQUssR0FBRyxJQUNaSixnRUFBYyxDQUFDO1FBQ2JLLE9BQU8sRUFBRTtZQUNQQyxJQUFJLEVBQUVKLGlFQUFtQjtZQUN6QkssS0FBSyxFQUFFSiwwREFBVztTQUNuQjtRQUNESyxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7QUFFSixNQUFNQyxZQUFZLEdBQUdSLGlFQUFhLENBQUNHLEtBQUssQ0FBQztBQUN6QyxpRUFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9zdG9yZS9pbmRleC5qcz81NmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyU2xpY2VcIjtcclxuaW1wb3J0IHRha3NSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy90YXNrc1NsaWNlXCI7XHJcblxyXG5jb25zdCBzdG9yZSA9ICgpID0+XHJcbiAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICB1c2VyOiB1c2VyUmVkdWNlci5yZWR1Y2VyLFxyXG4gICAgICB0YXNrczogdGFrc1JlZHVjZXIsXHJcbiAgICB9LFxyXG4gICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG5jb25zdCBzdG9yZVdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKHN0b3JlKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVXcmFwcGVyO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwidXNlclJlZHVjZXIiLCJ0YWtzUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInVzZXIiLCJ0YXNrcyIsImRldlRvb2xzIiwic3RvcmVXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/slices/tasksSlice.js":
/*!************************************!*\
  !*** ./store/slices/tasksSlice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"readTasks\": () => (/* binding */ readTasks)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ \"./utils/baseUrl.js\");\n\n\n\n\n// Read Tasks\nconst readTasks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/readTasks\", async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.baseUrl}/api/users?page=2`);\n        return response.data;\n    } catch (error) {\n        console.log(error.response.data);\n    }\n});\nconst tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tasks\",\n    initialState: {\n        tasks: [],\n        task2: [],\n        loading: null,\n        success: null,\n        message: null\n    },\n    reducers: {\n        getTasks: (state, { payload  })=>{\n            state.task2 = payload;\n        }\n    },\n    extraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, { payload  })=>{\n            return {\n                ...state,\n                ...payload.tasks\n            };\n        },\n        [readTasks.pending]: (state)=>{\n            state.loading = true;\n        },\n        [readTasks.fulfilled]: (state, { payload  })=>{\n            console.log(\"payload ::\", payload);\n            state.loading = false;\n            state.tasks = payload.data;\n            state.success = true;\n        },\n        [readTasks.rejected]: (state, { payload  })=>{\n            state.loading = false;\n            state.message = payload;\n        }\n    }\n});\nconst { getTasks  } = tasksSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvdGFza3NTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ3BCO0FBQ25CO0FBQ29CO0FBRTlDLGFBQWE7QUFDTixNQUFNSyxTQUFTLEdBQUdKLGtFQUFnQixDQUFDLGlCQUFpQixFQUFFLFVBQVk7SUFDdkUsSUFBSTtRQUNGLE1BQU1LLFFBQVEsR0FBRyxNQUFNSCxnREFBUyxDQUFDLENBQUMsRUFBRUMsbURBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9ELE9BQU9FLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDO0lBQ3ZCLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNILFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTUksVUFBVSxHQUFHWiw2REFBVyxDQUFDO0lBQzdCYSxJQUFJLEVBQUUsT0FBTztJQUNiQyxZQUFZLEVBQUU7UUFDWkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsT0FBTyxFQUFFLElBQUk7UUFDYkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNEQyxRQUFRLEVBQUU7UUFDUkMsUUFBUSxFQUFFLENBQUNDLEtBQUssRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBSztZQUNoQ0QsS0FBSyxDQUFDTixLQUFLLEdBQUdPLE9BQU8sQ0FBQztRQUN4QixDQUFDO0tBQ0Y7SUFDREMsYUFBYSxFQUFFO1FBQ2IsQ0FBQ3RCLHVEQUFPLENBQUMsRUFBRSxDQUFDb0IsS0FBSyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFLO1lBQ2pDLE9BQU87Z0JBQ0wsR0FBR0QsS0FBSztnQkFDUixHQUFHQyxPQUFPLENBQUNSLEtBQUs7YUFDakIsQ0FBQztRQUNKLENBQUM7UUFDRCxDQUFDVixTQUFTLENBQUNvQixPQUFPLENBQUMsRUFBRSxDQUFDSCxLQUFLLEdBQUs7WUFDOUJBLEtBQUssQ0FBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBQ0QsQ0FBQ1osU0FBUyxDQUFDcUIsU0FBUyxDQUFDLEVBQUUsQ0FBQ0osS0FBSyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFLO1lBQzdDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVZLE9BQU8sQ0FBQyxDQUFDO1lBRW5DRCxLQUFLLENBQUNMLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdEJLLEtBQUssQ0FBQ1AsS0FBSyxHQUFHUSxPQUFPLENBQUNmLElBQUksQ0FBQztZQUMzQmMsS0FBSyxDQUFDSixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxDQUFDYixTQUFTLENBQUNzQixRQUFRLENBQUMsRUFBRSxDQUFDTCxLQUFLLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUs7WUFDNUNELEtBQUssQ0FBQ0wsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN0QkssS0FBSyxDQUFDSCxPQUFPLEdBQUdJLE9BQU8sQ0FBQztRQUMxQixDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUssTUFBTSxFQUFDRixRQUFRLEdBQUMsR0FBR1QsVUFBVSxDQUFDZ0IsT0FBTyxDQUFDO0FBQzdDLGlFQUFlaEIsVUFBVSxDQUFDaUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHAvLi9zdG9yZS9zbGljZXMvdGFza3NTbGljZS5qcz9iMmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuXHJcbi8vIFJlYWQgVGFza3NcclxuZXhwb3J0IGNvbnN0IHJlYWRUYXNrcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXCJ0YXNrcy9yZWFkVGFza3NcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvdXNlcnM/cGFnZT0yYCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHRhc2tzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdGFza3M6IFtdLFxyXG4gICAgdGFzazI6IFtdLFxyXG4gICAgbG9hZGluZzogbnVsbCxcclxuICAgIHN1Y2Nlc3M6IG51bGwsXHJcbiAgICBtZXNzYWdlOiBudWxsLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGdldFRhc2tzOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN0YXRlLnRhc2syID0gcGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbSFlEUkFURV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5wYXlsb2FkLnRhc2tzLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIFtyZWFkVGFza3MucGVuZGluZ106IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBbcmVhZFRhc2tzLmZ1bGZpbGxlZF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJwYXlsb2FkIDo6XCIsIHBheWxvYWQpO1xyXG5cclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS50YXNrcyA9IHBheWxvYWQuZGF0YTtcclxuICAgICAgc3RhdGUuc3VjY2VzcyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgW3JlYWRUYXNrcy5yZWplY3RlZF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5tZXNzYWdlID0gcGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge2dldFRhc2tzfSA9IHRhc2tzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdGFza3NTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiSFlEUkFURSIsImF4aW9zIiwiYmFzZVVybCIsInJlYWRUYXNrcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhc2tzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJ0YXNrMiIsImxvYWRpbmciLCJzdWNjZXNzIiwibWVzc2FnZSIsInJlZHVjZXJzIiwiZ2V0VGFza3MiLCJzdGF0ZSIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/tasksSlice.js\n");

/***/ }),

/***/ "./store/slices/userSlice.js":
/*!***********************************!*\
  !*** ./store/slices/userSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetchAllUser\": () => (/* binding */ fetchAllUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    loading: false,\n    data: null,\n    error: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        fetchAllUser: (state, action)=>{\n            console.log(\"action ::\", action.payload);\n            console.log(\"state ::\", (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.current)(state));\n            state.data = action.payload;\n            state.loading = true;\n        }\n    },\n    exptraReducers: {\n        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{\n            console.log(\"@HYDRATE\", state, action.payload);\n            return {\n                ...state,\n                ...action.payload.user\n            };\n        }\n    }\n});\nconst { fetchAllUser  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvdXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNYO0FBRTdDLE1BQU1HLFlBQVksR0FBRztJQUNuQkMsT0FBTyxFQUFFLEtBQUs7SUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDVkMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVELE1BQU1DLFNBQVMsR0FBR1AsNkRBQVcsQ0FBQztJQUM1QlEsSUFBSSxFQUFFLE1BQU07SUFDWkwsWUFBWTtJQUNaTSxRQUFRLEVBQUU7UUFDUkMsWUFBWSxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFDekNGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRWIseURBQU8sQ0FBQ1UsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4Q0EsS0FBSyxDQUFDTixJQUFJLEdBQUdPLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1lBQzVCSixLQUFLLENBQUNQLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUNGO0lBQ0RZLGNBQWMsRUFBRTtRQUNkLENBQUNkLHVEQUFPLENBQUMsRUFBRSxDQUFDUyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSCxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFDL0MsT0FBTztnQkFDTCxHQUFHSixLQUFLO2dCQUNSLEdBQUdDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRSxJQUFJO2FBQ3ZCLENBQUM7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUssTUFBTSxFQUFFUCxZQUFZLEdBQUUsR0FBR0gsU0FBUyxDQUFDVyxPQUFPLENBQUM7QUFDbEQsaUVBQWVYLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BwLy4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZS5qcz8wODJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjdXJyZW50IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZmV0Y2hBbGxVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFjdGlvbiA6OlwiLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgOjpcIiwgY3VycmVudChzdGF0ZSkpO1xyXG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4cHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbSFlEUkFURV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQEhZRFJBVEVcIiwgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC51c2VyLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoQWxsVXNlciB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3VycmVudCIsIkhZRFJBVEUiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZmV0Y2hBbGxVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImV4cHRyYVJlZHVjZXJzIiwidXNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/userSlice.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl)\n/* harmony export */ });\nconst baseUrl = \"https://reqres.in\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcC8uL3V0aWxzL2Jhc2VVcmwuanM/MDdhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9yZXFyZXMuaW5cIjtcclxuIl0sIm5hbWVzIjpbImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();