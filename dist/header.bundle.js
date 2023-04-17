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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutSection)\n/* harmony export */ });\nfunction aboutSection() {\n    const sectionAbout = document.createElement('section');\n    const h2 = document.createElement('h2');\n    const article = document.createElement('article');\n    const p = document.createElement('p');\n    const blockquote = document.createElement('blockquote');\n\n    h2.innerText = \"About Mos Eisley Cantina (AKA Chalmun's Cantina)\";\n\n    p.innerText = \n    `\"Leave your droids outside. You don't want Wuher on your case.\"\n    \"Keep your blaster holstered! Why ask for trouble?\"\n    \"Find an empty table or barstool. Crowding other customers will only end in tears.\"\n    \"Be friendly. Buy a drink for your neighbor at the bar.\"\n    \"Applaud the band—even if they're way off-key!\"\n    \"Make pleasant conversation and try to laugh at bad jokes.\"\n    \"Tip the bartender, especially if you make a mess.\"`;\n\n    blockquote.innerText = \"―Mos Eisley Cantina house rules[1]\";\n\n    p.appendChild(blockquote);\n    article.appendChild(p);\n\n    sectionAbout.appendChild(h2);\n    sectionAbout.appendChild(article);\n\n    return sectionAbout;\n}\n\n\n//# sourceURL=webpack://dynamic_web-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactSection)\n/* harmony export */ });\nfunction contactSection() {\n    const sectionContact = document.createElement('section');\n    \n    return sectionContact;\n}\n\n\n//# sourceURL=webpack://dynamic_web-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerWithNav)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction headerWithNav() {\n    \n    const modules = {\n        about: (0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n        menu: (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n        contact: (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    };\n\n    const header = document.createElement(\"header\");\n    const h1 = document.createElement(\"h1\");\n    const nav = document.createElement(\"nav\");\n    \n\n    h1.innerText = \"Mos Eisely Cantina\";\n    \n    // CREATE NAV TABS\n    const divAbout = document.createElement(\"div\");\n    divAbout.setAttribute(\"id\", \"about\")\n    divAbout.innerText = \"ABOUT\";\n\n    const divMenu = document.createElement(\"div\");\n    divMenu.setAttribute(\"id\", \"menu\")\n    divMenu.innerText = \"MENU\";\n\n    const divContact = document.createElement(\"div\");\n    divContact.setAttribute(\"id\", \"contact\")\n    divContact.innerText = \"CONTACT\";\n\n    // APPEND ELEMENTS\n    nav.appendChild(divAbout);\n    nav.appendChild(divMenu);\n    nav.appendChild(divContact);\n\n    header.appendChild(h1);\n    header.appendChild(nav);\n\n    // ADD LISTENERS\n    const divs = nav.querySelectorAll(\"div\");\n    divs.forEach(div => {\n        div.addEventListener(\"click\", (e) =>{\n            document.body.appendChild( modules[e.target.id] );\n        })\n    });\n    \n    return header;\n}\n\n\n//# sourceURL=webpack://dynamic_web-page/./src/header.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuSection)\n/* harmony export */ });\nfunction menuSection() {\n    const sectionMenu = document.createElement('section');\n    \n    return sectionMenu;\n}\n\n\n//# sourceURL=webpack://dynamic_web-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/header.js");
/******/ 	
/******/ })()
;