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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody{\n    height: 100%;\n}\n*{\n    padding: 0;\n    margin: 0;\n    font-family: \"Outfit\", sans-serif;\n}\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #d1cdcd;\n}\nheader{\n    display: flex;\n    background-color: #494b6f;\n    padding: 1em;\n    width: 100vw;\n}\nmain{\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-areas:\n    \"sidebar todoListContainer\";\n    flex: 1;\n    min-height: 0;\n}\n.logo{\n    font-size: 50px;\n    font-weight: 700;\n    color: #24a1fa;\n}\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    background-color: #368AFF;\n    grid-area: sidebar;\n    height: 100%;\n    padding: 1em;\n    gap: 1em;\n}\n.projects, .inbox{\n    font-size: 30px;\n    color: #202130;\n    text-align: left;\n}\n.currentProjects{\n    display: flex;\n    flex-direction: column;\n}\n\n.project-button, .inbox{\n    border: none;\n    background: none;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 10px;\n}\n.project-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    padding: 0 0.25rem;\n}\n.project-button{\n    font-size: 20px;\n    text-align: left;\n    flex: 1;\n}\n.project-button:hover{\n    background-color:#2f7ce7;\n}\n.projectDeleteButton{\n    border: none;\n    background: transparent;\n    color: #202130;\n    font-size: 10px;\n    cursor: pointer;\n    padding: 0 0.35rem;\n    border-radius: 50%;\n    transition: background-color 0.2s ease, color 0.2s ease;\n}\n.projectDeleteButton:hover{\n    background-color: rgba(0,0,0,0.12);\n    color: #ff3b3b;\n}\n.inbox:hover{\n    background-color:#2f7ce7;\n}\nfieldset{\n    background-color: #eef5ff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.5em;\n    border: none;\n    padding: 3rem;\n    border-radius: 20px;\n    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);\n}\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    padding: 1.5rem;\n    width: min(95vw, 420px);\n    transform: translate(-50%, -50%);\n    border-radius: 24px;\n    background-color: #ffffff;\n    border: 1px solid rgba(15,23,42,0.08);\n    box-shadow: 0 28px 60px rgba(15,23,42,0.18);\n    z-index: 290;\n    visibility: hidden;\n}\n.modal form{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.modal label{\n    display: block;\n    margin-bottom: 0.35rem;\n    color: #334155;\n    font-size: 0.95rem;\n    font-weight: 600;\n}\n.modal input,\n.modal select{\n    width: 100%;\n    padding: 0.95rem 1rem;\n    border-radius: 14px;\n    border: 1px solid rgba(15,23,42,0.15);\n    background-color: #ffffff;\n    color: #0f172a;\n    font-size: 1rem;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.modal input:focus,\n.modal select:focus{\n    outline: none;\n    border-color: #24a1fa;\n    box-shadow: 0 0 0 4px rgba(36,161,250,0.14);\n}\nlegend{\n    display: inline-block;\n    margin-bottom: 1rem;\n    padding: 0.45rem 0.9rem;\n    background-color: #dbeafe;\n    border-radius: 999px;\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: #0f172a;\n}\n.open-modal{\n    visibility: visible;\n}\n.overlay{\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    pointer-events: none;\n    visibility: hidden;\n    z-index: 280;\n}\n.open-overlay{\n    visibility: visible;\n    pointer-events: auto;\n}\n.todoListContainer{\n    grid-area: todoListContainer;\n    padding: 1.25em;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.currentHeading{\n    text-align: center;\n    font-size: 2rem;\n    color: #202130;\n    padding-bottom: 0.75rem;\n    border-bottom: 1px solid rgba(255,255,255,0.4);\n    margin-bottom: 0.75rem;\n}\n\n.todoList{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.newTodoBtn,\n.addProjectBtn,\n.addTodoBtn,\n.addProjectBtnForm {\n    border: none;\n    cursor: pointer;\n    background-color: #24a1fa;\n    color: #ffffff;\n    border-radius: 12px;\n    padding: 0.9rem 1.3rem;\n    font-size: 1rem;\n    font-weight: 700;\n    transition: transform 0.15s ease, background-color 0.15s ease;\n}\n\n.newTodoBtn,\n.addProjectBtn {\n    box-shadow: 0 8px 18px rgba(36,161,250,0.22);\n}\n\n.addTodoBtn:hover,\n.addProjectBtn:hover,\n.addProjectBtnForm:hover,\n.newTodoBtn:hover {\n    background-color: #1a84d9;\n    transform: translateY(-1px);\n}\n\n.addProjectBtn {\n    margin-top: 1rem;\n    align-self: flex-start;\n    font-size: 15px;\n}\n\n.newTodoBtn {\n    align-self: center;\n}\n\n.todoCard{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 1rem;\n    background-color: #ffffff;\n    padding: 1rem 1.25rem;\n    border-radius: 18px;\n    border: 1px solid rgba(0,0,0,0.08);\n    box-shadow: 0 10px 24px rgba(0,0,0,0.06);\n}\n\n.todoCard > div{\n    min-width: 0;\n}\n\n.todo-title{\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #0f172a;\n    flex: 1 1 220px;\n}\n\n.todo-description{\n    color: #475569;\n    flex: 1 1 240px;\n}\n\n.todo-dueDate,\n.todo-priority{\n    color: #475569;\n    font-size: 0.95rem;\n    white-space: nowrap;\n}\n\n.todoDeleteButton{\n    border: none;\n    cursor: pointer;\n    background-color: #ffe6e9;\n    color: #c11f2d;\n    padding: 0.65rem 0.85rem;\n    border-radius: 999px;\n    font-weight: 700;\n    transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;\n}\n.projectDeleteButton{ \n    border: none;\n    cursor: pointer;\n    background-color: #ffe6e9;\n    color: #c11f2d;\n    padding: 0.15rem 0.25rem;\n    border-radius: 999px;\n    font-weight: 700;\n    transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease;\n}\n\n\n.todoDeleteButton:hover,\n.projectDeleteButton:hover{\n    background-color: #ffccd6;\n    color: #9b1421;\n    transform: translateY(-1px);\n}\n\nfooter{\n    text-align: center;\n    padding: 1rem;\n    background-color: #494b6f;\n    color: #24a1fa;\n    bottom: 0;\n    position: fixed;\n    width: 100vw;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/DOM.js"
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDOM: () => (/* binding */ updateDOM)\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/Storage.js\");\n\nconst todoList = document.querySelector('.todoList');\nconst currentProjects = document.querySelector('.currentProjects')\n\n\n\nfunction updateDOM(currentProjectId) {\n    const currentTodos = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.loadTodos)() || [];\n    const currentProjectsData = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects)() || [];\n\n    todoList.innerHTML = \"\";\n    currentProjects.innerHTML = \"\";\n\n\n      currentProjectsData.forEach(project => {\n        const projectItem = document.createElement('div');\n        projectItem.classList.add('project-item');\n        projectItem.dataset.projectId = project.id;\n\n        const projectButton = document.createElement('button');\n        projectButton.type = 'button';\n        projectButton.textContent = project.title ||  'Untitled Project';\n        projectButton.classList.add('project-button');\n        projectButton.dataset.projectId = project.id;\n        projectButton.dataset.projectTitle = project.title || 'Untitled Project';\n\n        const projectDeleteButton = document.createElement('button');\n        projectDeleteButton.type = 'button';\n        projectDeleteButton.textContent = '✕';\n        projectDeleteButton.classList.add('projectDeleteButton');\n        projectDeleteButton.dataset.projectId = project.id;\n        projectDeleteButton.setAttribute('aria-label', 'Delete project');\n\n        projectItem.append(projectButton, projectDeleteButton);\n        currentProjects.appendChild(projectItem);\n    });\n\n    // it detects if there is a project selected or not\n    if (currentProjectId === null) {\n        \n    currentTodos.filter(todo => todo.projectId === null).forEach(todo => {\n        const card = document.createElement('section');\n        card.classList.add('todoCard');\n        card.dataset.todoId = todo.id;\n\n        const titleDiv = document.createElement('div');\n        titleDiv.textContent = todo.title;\n        titleDiv.classList.add('todo-title');\n\n        const descriptionDiv = document.createElement('div');\n        descriptionDiv.textContent = todo.description;\n        descriptionDiv.classList.add('todo-description');\n\n        const dueDateDiv = document.createElement('div');\n        dueDateDiv.textContent = `Due: ${todo.dueDate}`;\n        dueDateDiv.classList.add('todo-dueDate');\n\n        const priorityDiv = document.createElement('div');\n        priorityDiv.textContent = `Priority: ${todo.priority}`;\n        priorityDiv.classList.add('todo-priority');\n\n        const todoDeleteButton = document.createElement('button');\n        todoDeleteButton.textContent = 'Delete'\n        todoDeleteButton.classList.add('todoDeleteButton')\n        todoDeleteButton.dataset.id = todo.id;\n\n        card.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,todoDeleteButton);\n        todoList.appendChild(card);\n    });\n    } else{\n        // it shows only the todos that's under the current project\n        const filteredTodos = currentTodos.filter(todo => todo.projectId === currentProjectId)\n        filteredTodos.forEach(todo => {\n           const card = document.createElement('section');\n        card.classList.add('todoCard');\n        card.dataset.todoId = todo.id;\n\n        const titleDiv = document.createElement('div');\n        titleDiv.textContent = todo.title;\n        titleDiv.classList.add('todo-title');\n\n        const descriptionDiv = document.createElement('div');\n        descriptionDiv.textContent = todo.description;\n        descriptionDiv.classList.add('todo-description');\n\n        const dueDateDiv = document.createElement('div');\n        dueDateDiv.textContent = `Due: ${todo.dueDate}`;\n        dueDateDiv.classList.add('todo-dueDate');\n\n        const priorityDiv = document.createElement('div');\n        priorityDiv.textContent = `Priority: ${todo.priority}`;\n        priorityDiv.classList.add('todo-priority');\n\n        const todoDeleteButton = document.createElement('button');\n        todoDeleteButton.textContent = 'Delete';\n        todoDeleteButton.classList.add('todoDeleteButton');\n        todoDeleteButton.dataset.id = todo.id;\n\n        card.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,todoDeleteButton);\n        todoList.appendChild(card);\n    })\n    }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-template/./src/DOM.js?\n}");

/***/ },

/***/ "./src/Projct.js"
/*!***********************!*\
  !*** ./src/Projct.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nclass project {\n    constructor (id, title, description){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n    }\n}\n\n//# sourceURL=webpack://webpack-template/./src/Projct.js?\n}");

/***/ },

/***/ "./src/Storage.js"
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   loadTodos: () => (/* binding */ loadTodos),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects),\n/* harmony export */   saveTodos: () => (/* binding */ saveTodos)\n/* harmony export */ });\n//a function to save todos to local storage\nfunction saveTodos(todo) {\n    const existing = JSON.parse(localStorage.getItem(\"todos\")) || [];\n    existing.push(todo);\n    localStorage.setItem(\"todos\", JSON.stringify(existing));\n}\n\n//function to get todos from local storage\nfunction loadTodos() {\n    return JSON.parse(localStorage.getItem(\"todos\"));\n}\n\n//function to remove a todo from local storage\nfunction deleteTodo(id) {\n    const currentTodos = loadTodos() || [];\n    const updated = currentTodos.filter(todo => todo.id !== id);\n    localStorage.setItem(\"todos\",JSON.stringify(updated))\n}\n\n\n\n//function to save projects to local storage\nfunction saveProjects(project) {\n    const existing = JSON.parse(localStorage.getItem(\"projects\")) || [];\n    existing.push(project);\n    localStorage.setItem(\"projects\", JSON.stringify(existing));\n}\n\n//function to get projects from local storage\nfunction loadProjects() {\n    return JSON.parse(localStorage.getItem(\"projects\"));\n}\n\n//function to remove a project from local storage\nfunction deleteProject(projectId) {\n    const currentProjectsData = loadProjects() || [];\n    const updated = currentProjectsData.filter(project => project.id !== projectId);\n    localStorage.setItem(\"projects\",JSON.stringify(updated))\n}\n\n//# sourceURL=webpack://webpack-template/./src/Storage.js?\n}");

/***/ },

/***/ "./src/Todo.js"
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n    constructor (id, title, description, dueDate, priority, projectId){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.projectId = projectId;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-template/./src/Todo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _Projct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projct.js */ \"./src/Projct.js\");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage.js */ \"./src/Storage.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\n\n\n\n\nlet currentProjectId = null;\nlet currentProjectTitle = null;\n\nconst newTodoBtn = document.querySelector('.newTodoBtn');\nconst modal = document.querySelector(\"#modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst addProjectBtn = document.querySelector('.addProjectBtn');\nconst projectModal = document.querySelector(\"#projectModal\");\n\nconst closeAllModals = () => {\n    modal.classList.remove(\"open-modal\");\n    projectModal.classList.remove(\"open-modal\");\n    overlay.classList.remove(\"open-overlay\");\n};\n\n// the \"Add new todo\" button that opens the form\nnewTodoBtn.addEventListener(\"click\", ()=>{\n    modal.classList.add(\"open-modal\");\n    overlay.classList.add(\"open-overlay\")\n})\n\n\nconst addTodoBtn = document.querySelector('.addTodoBtn');\n// the \"Add Todo\" button that submits the form and closes it\naddTodoBtn.addEventListener(\"click\", ()=>{\n     closeAllModals();\n})\n\n\n// the \"+ Add Project\" button that opens the form\naddProjectBtn.addEventListener(\"click\", ()=>{\n    projectModal.classList.add(\"open-modal\");\n    overlay.classList.add(\"open-overlay\")\n})\n\noverlay.addEventListener(\"click\", closeAllModals);\n\n\nconst closeProjectModal = () => {\n    projectModal.classList.remove(\"open-modal\")\n    overlay.classList.remove(\"open-overlay\")\n}\n// the \"Add Project\" button that submits the form and closes it\nconst addProjectBtnForm = document.querySelector('.addProjectBtnForm');\naddProjectBtnForm.addEventListener(\"click\", ()=>{\n    closeProjectModal();\n})\n\n\n\nconst form = document.querySelector('#modal form');\nconst projectForm = document.querySelector('#projectModal form');\n// the event listener that takes the data from the todo form and save into local storage\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    const ToDo1 = new _Todo_js__WEBPACK_IMPORTED_MODULE_1__.todo(\n        crypto.randomUUID(),\n        formData.get(\"todoTitle\"),\n        formData.get(\"todoDescription\"),\n        formData.get(\"dueDate\"),\n        formData.get(\"priority\"),\n        currentProjectId\n    );\n    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTodos)(ToDo1);\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n    form.reset();\n});\n\n// the event listener that takes the data from the project form and save into local storage\nprojectForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const formData = new FormData(projectForm);\n    const newProject = new _Projct_js__WEBPACK_IMPORTED_MODULE_2__.project(\n        crypto.randomUUID(),\n        formData.get(\"projectTitle\"),\n        formData.get(\"projectDescription\")\n    );\n    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(newProject);\n    closeProjectModal();\n    projectForm.reset();\n    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n});\n\nconst todoList = document.querySelector('.todoList');\nconst currentHeading = document.querySelector('.currentHeading');\nconst inbox = document.querySelector('.inbox');\n\n// Changes the current heading to inbox, and shows the todos that is not assigned to a project\ninbox.addEventListener(\"click\", ()=>{\ncurrentHeading.textContent = \"Inbox\";\ncurrentProjectId = null;\ncurrentProjectTitle = null;\n(0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n})\n\n// Changes the current heading to the current project, and saves the id of the current project\nconst currentProjects = document.querySelector('.currentProjects');\ncurrentProjects.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"project-button\")) {\n         currentProjectId = e.target.dataset.projectId;\n         currentProjectTitle = e.target.dataset.projectTitle\n        currentHeading.textContent = `${currentProjectTitle}`\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n    }\n});\n\n// the recursive function that updates the DOM \n(0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n\n//the event listener that deletes todos \nconst todoDeleteButton = document.querySelector('.todoDeleteButton');\ntodoList.addEventListener(\"click\", (e)=>{\n    if (e.target.classList.contains(\"todoDeleteButton\")) {\n        const currentId = e.target.dataset.id\n        ;(0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(currentId)\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId)\n    }\n})\n\n//the event listener that deletes projects\ncurrentProjects.addEventListener(\"click\", (e)=>{\n    if (e.target.classList.contains(\"projectDeleteButton\")) {\n        const currentId = e.target.dataset.projectId;\n        (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(currentId);\n        if (currentProjectId === currentId) {\n            currentProjectId = null;\n            currentProjectTitle = null;\n            currentHeading.textContent = \"Inbox\";\n        }\n        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_4__.updateDOM)(currentProjectId);\n    }\n})\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;