"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n\n\n\nconst NewMeetupPage = ()=>{\n    const addMeetupHandler = async (data)=>{\n        // const response = await axios.post(\"/api/new-meetup\", data);\n        const response = await fetch(\"/api/new-meetup\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const resData = await response;\n        console.log(resData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onAddMeetup: addMeetupHandler\n    }, void 0, false, {\n        fileName: \"D:\\\\React Course\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\new-meetup\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, undefined);\n};\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\nvar _c;\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQ3lDO0FBRW5FLE1BQU1FLGdCQUFnQixJQUFNO0lBQzFCLE1BQU1DLG1CQUFtQixPQUFPQyxPQUFTO1FBQ3ZDLDhEQUE4RDtRQUM5RCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO1lBQzlDQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047WUFDckJPLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO1FBRUEsTUFBTUMsVUFBVSxNQUFNUDtRQUN0QlEsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEscUJBQU8sOERBQUNYLHlFQUFhQTtRQUFDYyxhQUFhWjs7Ozs7O0FBQ3JDO0tBZE1EO0FBZ0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanM/OTU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5cclxuY29uc3QgTmV3TWVldHVwUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBhZGRNZWV0dXBIYW5kbGVyID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvbmV3LW1lZXR1cFwiLCBkYXRhKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2cocmVzRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIk5ld01lZXR1cEZvcm0iLCJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkFkZE1lZXR1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n"));

/***/ })

});