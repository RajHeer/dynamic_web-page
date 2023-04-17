/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutSection)\n/* harmony export */ });\nfunction aboutSection() {\n    const sectionAbout = document.createElement(\"section\");\n    const h2 = document.createElement(\"h2\");\n    const article = document.createElement(\"article\");\n    const p = document.createElement(\"p\");\n    const blockquote = document.createElement(\"blockquote\");\n\n    h2.innerText = \"About Mos Eisley Cantina (AKA Chalmun's Cantina)\";\n\n    p.innerText = \n    `\"Leave your droids outside. You don't want Wuher on your case.\"\n    \"Keep your blaster holstered! Why ask for trouble?\"\n    \"Find an empty table or barstool. Crowding other customers will only end in tears.\"\n    \"Be friendly. Buy a drink for your neighbor at the bar.\"\n    \"Applaud the band—even if they're way off-key!\"\n    \"Make pleasant conversation and try to laugh at bad jokes.\"\n    \"Tip the bartender, especially if you make a mess.\"`;\n\n    blockquote.innerText = \"―Mos Eisley Cantina house rules[1]\";\n\n    p.appendChild(blockquote);\n    article.appendChild(p);\n\n    sectionAbout.appendChild(h2);\n    sectionAbout.appendChild(article);\n\n    return sectionAbout;\n}\n\n\n//# sourceURL=webpack://dynamic_web-page/./src/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/about.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;