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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// // /api/new-meetup\n// // only POST works here due to the if statement\n// const mongoose = require(\"mongoose\");\n// const handler = async (req, res) => {\n//   if (req.method === \"POST\") {\n//     const data = req.body;\n//     const { title, image, address, description } = data;\n//     await mongoose.connect(\n//       \"mongodb+srv://maytham:60620237may@cluster0.mfmndro.mongodb.net/meetup\"\n//     );\n//     const meetupSchema = new mongoose.Schema({\n//       title: String,\n//       image: String,\n//       address: String,\n//       description: String,\n//     });\n//     const Meetup = mongoose.model(\"Meetups\", meetupSchema);\n//     const meetup = new Meetup({\n//       title: title,\n//       image: image,\n//       address: address,\n//       description: description,\n//     });\n//     // const result = await meetup.save();\n//     await meetup.save();\n//     // console.log(result);\n//     mongoose.disconnect();\n//     res.status(201).json({ message: \"Meetup inserted\" });\n//   }\n// };\n// export default handler;\n\n// /api/new-meetup\n// POST /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://maytham:60620237may@cluster0.mfmndro.mongodb.net/meetup\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQkFBcUI7QUFDckIsa0RBQWtEO0FBRWxELHdDQUF3QztBQUV4Qyx3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUU3QiwyREFBMkQ7QUFFM0QsOEJBQThCO0FBQzlCLGdGQUFnRjtBQUNoRixTQUFTO0FBRVQsaURBQWlEO0FBQ2pELHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixVQUFVO0FBRVYsOERBQThEO0FBRTlELGtDQUFrQztBQUNsQyxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsVUFBVTtBQUVWLDZDQUE2QztBQUM3QywyQkFBMkI7QUFDM0IsOEJBQThCO0FBRTlCLDZCQUE2QjtBQUM3Qiw0REFBNEQ7QUFDNUQsTUFBTTtBQUNOLEtBQUs7QUFFTCwwQkFBMEI7QUFFWTtBQUV0QyxrQkFBa0I7QUFDbEIsdUJBQXVCO0FBRXZCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU1DLE9BQU9ILElBQUlJLElBQUk7UUFFckIsTUFBTUMsU0FBUyxNQUFNUCx3REFBbUIsQ0FDdEM7UUFFRixNQUFNUyxLQUFLRixPQUFPRSxFQUFFO1FBRXBCLE1BQU1DLG9CQUFvQkQsR0FBR0UsVUFBVSxDQUFDO1FBRXhDLE1BQU1DLFNBQVMsTUFBTUYsa0JBQWtCRyxTQUFTLENBQUNSO1FBRWpEUyxRQUFRQyxHQUFHLENBQUNIO1FBRVpMLE9BQU9TLEtBQUs7UUFFWmIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQW1CO0lBQ3JELENBQUM7QUFDSDtBQUVBLGlFQUFlbEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIC9hcGkvbmV3LW1lZXR1cFxyXG4vLyAvLyBvbmx5IFBPU1Qgd29ya3MgaGVyZSBkdWUgdG8gdGhlIGlmIHN0YXRlbWVudFxyXG5cclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG4vLyBjb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4vLyAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xyXG5cclxuLy8gICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXHJcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9tYXl0aGFtOjYwNjIwMjM3bWF5QGNsdXN0ZXIwLm1mbW5kcm8ubW9uZ29kYi5uZXQvbWVldHVwXCJcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgY29uc3QgbWVldHVwU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbi8vICAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbi8vICAgICAgIGltYWdlOiBTdHJpbmcsXHJcbi8vICAgICAgIGFkZHJlc3M6IFN0cmluZyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGNvbnN0IE1lZXR1cCA9IG1vbmdvb3NlLm1vZGVsKFwiTWVldHVwc1wiLCBtZWV0dXBTY2hlbWEpO1xyXG5cclxuLy8gICAgIGNvbnN0IG1lZXR1cCA9IG5ldyBNZWV0dXAoe1xyXG4vLyAgICAgICB0aXRsZTogdGl0bGUsXHJcbi8vICAgICAgIGltYWdlOiBpbWFnZSxcclxuLy8gICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwLnNhdmUoKTtcclxuLy8gICAgIGF3YWl0IG1lZXR1cC5zYXZlKCk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuLy8gICAgIG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWRcIiB9KTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gL2FwaS9uZXctbWVldHVwXHJcbi8vIFBPU1QgL2FwaS9uZXctbWVldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgXCJtb25nb2RiK3NydjovL21heXRoYW06NjA2MjAyMzdtYXlAY2x1c3RlcjAubWZtbmRyby5tb25nb2RiLm5ldC9tZWV0dXBcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkIVwiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();