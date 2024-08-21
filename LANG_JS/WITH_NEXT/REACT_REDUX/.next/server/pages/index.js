"use strict";
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_usersAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/usersAction */ \"./store/actions/usersAction.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _store_actions_actionsTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/actionsTypes */ \"./store/actions/actionsTypes.js\");\n\n\n\n\n\n\n\n\nconst Home = ({ data  })=>{\n    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((store)=>store);\n    console.log(\"application store ::\", store);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: \"REDUX WITH NEXT JS\"\n            }, void 0, false, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Data From Static Site Generation : \",\n                    data\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\REDUX_A2Z\\\\WITH_NEXTJS\\\\USE_REACT_REDUX\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\nconst getStaticProps = _store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getStaticProps((store)=>async (context)=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://jsonplaceholder.typicode.com/users\");\n        store.dispatch({\n            type: _store_actions_actionsTypes__WEBPACK_IMPORTED_MODULE_6__.GET_USERS,\n            payload: res.data\n        });\n        return {\n            props: {\n                data: \"Munna\"\n            }\n        };\n    });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDcUI7QUFDN0I7QUFDcUI7QUFDYztBQUN6QjtBQUNzQjtBQUUxRCxNQUFNUSxJQUFJLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsR0FBSztJQUN6QixNQUFNQyxLQUFLLEdBQUdULHdEQUFXLENBQUMsQ0FBQ1MsS0FBSyxHQUFLQSxLQUFLLENBQUM7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixFQUFFRixLQUFLLENBQUMsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsU0FBUyxFQUFFLFFBQVE7U0FBRTs7MEJBQ2pDLDhEQUFDQyxJQUFFO2dCQUFDRixLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxRQUFRO2lCQUFFOzBCQUFFLG9CQUFrQjs7Ozs7eUJBQUs7MEJBQzNELDhEQUFDRSxJQUFFOztvQkFBQyxxQ0FBbUM7b0JBQUNSLElBQUk7Ozs7Ozt5QkFBTTs7Ozs7O2lCQUM5QyxDQUNOO0NBQ0g7QUFFTSxNQUFNUyxjQUFjLEdBQUdaLDZEQUEyQixDQUN2RCxDQUFDSSxLQUFLLEdBQUssT0FBT1MsT0FBTyxHQUFLO1FBQzVCLE1BQU1DLEdBQUcsR0FBRyxNQUFNakIsZ0RBQVMsQ0FBQyw0Q0FBNEMsQ0FBQztRQUN6RU8sS0FBSyxDQUFDWSxRQUFRLENBQUM7WUFBRUMsSUFBSSxFQUFFaEIsa0VBQVM7WUFBRWlCLE9BQU8sRUFBRUosR0FBRyxDQUFDWCxJQUFJO1NBQUUsQ0FBQyxDQUFDO1FBRXZELE9BQU87WUFDTGdCLEtBQUssRUFBRTtnQkFDTGhCLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRixDQUFDO0tBQ0gsQ0FDRixDQUFDO0FBRUYsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGZldGNoQWxsVXNlcnMgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy91c2Vyc0FjdGlvblwiO1xyXG5pbXBvcnQgc3RvcmVXcmFwcGVyIGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBHRVRfVVNFUlMgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zVHlwZXNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZVNlbGVjdG9yKChzdG9yZSkgPT4gc3RvcmUpO1xyXG4gIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb24gc3RvcmUgOjpcIiwgc3RvcmUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+UkVEVVggV0lUSCBORVhUIEpTPC9oMj5cclxuICAgICAgPGg0PkRhdGEgRnJvbSBTdGF0aWMgU2l0ZSBHZW5lcmF0aW9uIDoge2RhdGF9PC9oND5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBzdG9yZVdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoXHJcbiAgKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBHRVRfVVNFUlMsIHBheWxvYWQ6IHJlcy5kYXRhIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGRhdGE6IFwiTXVubmFcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJheGlvcyIsInN0eWxlcyIsImZldGNoQWxsVXNlcnMiLCJzdG9yZVdyYXBwZXIiLCJHRVRfVVNFUlMiLCJIb21lIiwiZGF0YSIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwiaDIiLCJoNCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImdldCIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./store/actions/actionsTypes.js":
/*!***************************************!*\
  !*** ./store/actions/actionsTypes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_USERS\": () => (/* binding */ GET_USERS)\n/* harmony export */ });\nconst GET_USERS = \"GET_USERS\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNUeXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNUeXBlcy5qcz8xOWUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHRVRfVVNFUlMgPSBcIkdFVF9VU0VSU1wiOyJdLCJuYW1lcyI6WyJHRVRfVVNFUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/actionsTypes.js\n");

/***/ }),

/***/ "./store/actions/usersAction.js":
/*!**************************************!*\
  !*** ./store/actions/usersAction.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAllUsers\": () => (/* binding */ fetchAllUsers)\n/* harmony export */ });\n/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsTypes */ \"./store/actions/actionsTypes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fetchAllUsers = ()=>async (dispatch)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/users\");\n            console.log(\"@@@@ res data :by getStaticProps:\", res.data);\n            return dispatch({\n                type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_USERS,\n                payload: res.data\n            });\n        } catch (err) {\n            console.log(\"users data fetching error ::\", err);\n        }\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3VzZXJzQWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDakI7QUFFbkIsTUFBTUUsYUFBYSxHQUFHLElBQU0sT0FBT0MsUUFBUSxHQUFLO1FBQ3JELElBQUk7WUFDRixNQUFNQyxHQUFHLEdBQUcsTUFBTUgsZ0RBQVMsQ0FBQyw0Q0FBNEMsQ0FBQztZQUN6RUssT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLEVBQUVILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7WUFFM0QsT0FBT0wsUUFBUSxDQUFDO2dCQUFFTSxJQUFJLEVBQUVULG9EQUFTO2dCQUFFVSxPQUFPLEVBQUVOLEdBQUcsQ0FBQ0ksSUFBSTthQUFFLENBQUMsQ0FBQztTQUN6RCxDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRUksR0FBRyxDQUFDLENBQUM7U0FDbEQ7S0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3N0b3JlL2FjdGlvbnMvdXNlcnNBY3Rpb24uanM/ZTVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVRfVVNFUlMgfSBmcm9tIFwiLi9hY3Rpb25zVHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQWxsVXNlcnMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJAQEBAIHJlcyBkYXRhIDpieSBnZXRTdGF0aWNQcm9wczpcIiwgcmVzLmRhdGEpO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9VU0VSUywgcGF5bG9hZDogcmVzLmRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZXJzIGRhdGEgZmV0Y2hpbmcgZXJyb3IgOjpcIiwgZXJyKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJHRVRfVVNFUlMiLCJheGlvcyIsImZldGNoQWxsVXNlcnMiLCJkaXNwYXRjaCIsInJlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/usersAction.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer/rootReducer */ \"./store/reducer/rootReducer.js\");\n\n\n\n\nconst composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__.compose;\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {\n        const newState = {\n            ...state,\n            ...action.payload\n        };\n        return newState;\n    } else {\n        return (0,_reducer_rootReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state, action);\n    }\n};\nconst store = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\nconst storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(store);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUM5QjtBQUM0QjtBQUNaO0FBRWhELE1BQU1PLGdCQUFnQixHQUNwQixNQUEwRSxJQUMxRUwsMENBQU87QUFFVCxNQUFNUSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDakMsSUFBSUEsTUFBTSxDQUFDQyxJQUFJLEtBQUtULHVEQUFPLEVBQUU7UUFDM0IsTUFBTVUsUUFBUSxHQUFHO1lBQ2YsR0FBR0gsS0FBSztZQUNSLEdBQUdDLE1BQU0sQ0FBQ0csT0FBTztTQUNsQjtRQUVELE9BQU9ELFFBQVEsQ0FBQztLQUNqQixNQUFNO1FBQ0wsT0FBT1IsZ0VBQVcsQ0FBQ0ssS0FBSyxFQUFFQyxNQUFNLENBQUMsQ0FBQztLQUNuQztDQUNGO0FBRUQsTUFBTUksS0FBSyxHQUFHLElBQU1oQixrREFBVyxDQUFDVSxPQUFPLEVBQUVULHNEQUFlLENBQUNFLG9EQUFLLENBQUMsQ0FBQztBQUVoRSxNQUFNYyxZQUFZLEdBQUdaLGlFQUFhLENBQUNXLEtBQUssQ0FBQztBQUV6QyxpRUFBZUMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3N0b3JlL2luZGV4LmpzPzU2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cclxuICAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKSB8fFxyXG4gIGNvbXBvc2U7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHN0b3JlID0gKCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5jb25zdCBzdG9yZVdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKHN0b3JlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlV3JhcHBlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsInRodW5rIiwiSFlEUkFURSIsImNyZWF0ZVdyYXBwZXIiLCJyb290UmVkdWNlciIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJwYXlsb2FkIiwic3RvcmUiLCJzdG9yZVdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/reducer/rootReducer.js":
/*!**************************************!*\
  !*** ./store/reducer/rootReducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ \"./store/reducer/userReducer.js\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    users: _userReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2VyL3Jvb3RSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQTtBQUV4QyxNQUFNRSxXQUFXLEdBQUdGLHNEQUFlLENBQUM7SUFDbENHLEtBQUssRUFBRUYsb0RBQVc7Q0FDbkIsQ0FBQztBQUVGLGlFQUFlQyxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3RvcmUvcmVkdWNlci9yb290UmVkdWNlci5qcz8xYzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlclJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyczogdXNlclJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducer/rootReducer.js\n");

/***/ }),

/***/ "./store/reducer/userReducer.js":
/*!**************************************!*\
  !*** ./store/reducer/userReducer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionsTypes */ \"./store/actions/actionsTypes.js\");\n\nconst initialState = {\n    name: \"user State\",\n    usersLoading: false,\n    data: null,\n    error: null\n};\nconst userReducer = (state = initialState, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_USERS:\n            return {\n                ...state,\n                data: payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2VyL3VzZXJSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXBELE1BQU1DLFlBQVksR0FBRztJQUNuQkMsSUFBSSxFQUFFLFlBQVk7SUFDbEJDLFlBQVksRUFBRSxLQUFLO0lBQ25CQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssR0FBR04sWUFBWSxFQUFFTyxNQUFNLEdBQUs7SUFDcEQsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRSxHQUFHRixNQUFNO0lBRWhDLE9BQVFDLElBQUk7UUFDVixLQUFLVCw0REFBUztZQUNaLE9BQU87Z0JBQUUsR0FBR08sS0FBSztnQkFBRUgsSUFBSSxFQUFFTSxPQUFPO2FBQUUsQ0FBQztRQUVyQztZQUNFLE9BQU9ILEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRUQsaUVBQWVELFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zdG9yZS9yZWR1Y2VyL3VzZXJSZWR1Y2VyLmpzP2UxMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX1VTRVJTIH0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uc1R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmFtZTogXCJ1c2VyIFN0YXRlXCIsXHJcbiAgdXNlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgR0VUX1VTRVJTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogcGF5bG9hZCB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbIkdFVF9VU0VSUyIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJ1c2Vyc0xvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducer/userReducer.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

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