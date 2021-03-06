/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\n  margin:0;\\n  padding:0\\n}\\nbody{\\n  background: #FFF;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\nform input[type='text']{\\n  width: 100%;\\n  height: 15px;\\n  line-height: 20px;\\n  font-size: 20px;\\n  padding: 10px 5px;\\n  border:none;\\n  border-radius: 5px;\\n}\\nform button, .conversion button{\\n  width: 100%;\\n  margin: 5px 0;\\n  padding: 5px;\\n  font-size: 20px;\\n  background-color: #3779E0;\\n  border: none;\\n  color:white;\\n  border-radius: 5px;\\n}\\nform .error{\\n  font-size: 12px;\\n  margin: 5px 0 ;\\n}\\n.container >*{\\n  width: 100%;\\n  text-align: center;\\n}\\n.container{\\n  background-color: #0F0F3B;\\n  color:#FFFFFF;\\n  width:25%;\\n  height:auto;\\n  margin:10px auto;\\n  padding: 30px;\\n  border-radius: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.container h1{\\n  font-size: 1em;\\n  margin:10px 0 30px;\\n}\\n.container .weather-card > *{\\n  margin: 20px 0 10px;\\n}\\n.weather-card h1.temp{\\n  font-size: 35px;\\n}\\n.weather-card .feels_like{\\n  font-size: 10px;\\n}\\n.weather-card img{\\n  margin: 0;\\n  width: 50px;\\n}\\n.location p{\\n  display: inline;\\n}\\n.loading{\\n  width: 40px;\\n  margin:5px 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/giphy.js":
/*!**********************!*\
  !*** ./src/giphy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Giphy; });\nfunction Giphy() {\n  async function search(term) {\n    try {\n      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IvRy5BaniNPKcmnafqVecToAWqRWNSam&s=${term}`);\n      const data = await response.json();\n      return data;\n    } catch (e) {\n      return e;\n    }\n  }\n  return {\n    search,\n  };\n}\n\n//# sourceURL=webpack:///./src/giphy.js?");

/***/ }),

/***/ "./src/images/loading.gif":
/*!********************************!*\
  !*** ./src/images/loading.gif ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"440a52bafb9dc49488228b2307f244db.gif\");\n\n//# sourceURL=webpack:///./src/images/loading.gif?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/loading.gif */ \"./src/images/loading.gif\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _giphy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./giphy */ \"./src/giphy.js\");\n\n\n\n\n\n(() => {\n  const body = document.querySelector(\"body\");\n  const form = document.querySelector(\"form\");\n  const inputLocation = document.querySelector(\"#location\");\n  const icon = document.querySelector(\".icon\");\n  const loading = document.querySelector(\".loading\");\n  const pCity = document.querySelector(\".city\");\n  const pCountry = document.querySelector(\".country\");\n  const pTemp = document.querySelector(\".temp\");\n  const pTempMin = document.querySelector(\".temp_min\");\n  const pTempMax = document.querySelector(\".temp_max\");\n  const pFeelLike = document.querySelector(\".feels_like\");\n  const btnCelsiu = document.querySelector(\"button.cel\");\n  const btnFaren = document.querySelector(\"button.far\");\n\n  let tempK;\n  let tempKmin;\n  let tempKmax;\n  let tempFeels;\n  let weather;\n\n  if (\"geolocation\" in navigator) {\n    /* geolocation is available */\n    navigator.geolocation.getCurrentPosition(\n      (position) => {\n        console.log(\"drop position\", position);\n        weather = new _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          long: position.coords.longitude,\n          lat: position.coords.latitude,\n        });\n        weather.getWeatherData().then(data=>{\n          inputLocation.value=data.cityName\n          inputLocation.focus()\n          populateUI(data)\n        })\n      },\n      (err) => {\n        console.log(err);\n      }\n    );\n  } else {\n    console.log(\"no show\");\n    /* geolocation IS NOT available */\n  }\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const errorSpan = inputLocation.parentElement.querySelector(\"span\");\n    if (!inputLocation.checkValidity()) {\n      errorSpan.textContent = \"Location is required\";\n      return;\n    }\n    loading.setAttribute(\"src\", _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n    weather = new _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputLocation.value);\n    weather\n      .getWeatherData()\n      .then((data) => {\n        populateUI(data)\n      })\n      .catch(() => {\n        loading.setAttribute(\"src\", \"\");\n        errorSpan.textContent = \"Enter a correct location. eg. Accra\";\n      });\n  });\n\n  btnCelsiu.addEventListener(\"click\", () => {\n    console.log(\"get cel\");\n    pTemp.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(tempK);\n    pFeelLike.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(tempFeels);\n    pTempMin.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(tempKmin);\n    pTempMax.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(tempKmax);\n  });\n  btnFaren.addEventListener(\"click\", () => {\n    console.log(\"get far\");\n    pTemp.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoF(tempK);\n    pFeelLike.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoF(tempFeels);\n    pTempMin.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoF(tempKmin);\n    pTempMax.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoF(tempKmax);\n  });\n\n  const populateUI = (data) => {\n    tempK = data.temp;\n    tempKmin = data.temp_min;\n    tempKmax = data.temp_max;\n    tempFeels = data.feels_like;\n    pTemp.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(data.temp);\n    pTempMin.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(data.temp_min);\n    pTempMax.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(data.temp_max);\n    pCity.innerHTML = data.cityName;\n    pCountry.innerHTML = data.countryCode;\n    const span = pFeelLike.querySelector(\"span\");\n    span.innerHTML = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertKtoC(data.feels_like);\n    loading.setAttribute(\"src\", \"\");\n    icon.setAttribute(\n      \"src\",\n      `http://openweathermap.org/img/wn/${data.icon}@2x.png`\n    );\n    errorSpan.textContent = \"\";\n    // enable conversion buttons\n    btnCelsiu.disabled = false;\n    btnFaren.disabled = false;\n    // Set the gif on the db\n    const gif = Object(_giphy__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().search(data.gifimage);\n    gif.then((data) => {\n      // const\n      body.style.backgroundImage = `url(${data.data.images.original.url})`;\n      body.style.backgroundRepeat = \"none\";\n      body.style.backgroundSize = \"100%\";\n    });\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Weather; });\nclass Weather {\n  constructor(location = 'accra') {\n    this.location = location;\n    this.query = ('lat'in location) ?`lat=${location.lat}&lon=${location.long}` : `q=${this.location}`\n  }\n\n  static convertKtoC(tempK) {\n    return `${parseFloat(parseFloat(tempK) - 273.15).toFixed(2)} ºC`;\n  }\n\n  static convertKtoF(tempK) {\n    return `${Number(((parseFloat(tempK) - 273.15) * 9) / 5 + 32).toFixed(2)} ºF`;\n  }\n\n  async getWeatherData() {\n    try {\n      const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?${\n          this.query\n        }&appid=f06f39597935c040f0dde71ac7cfd97c`,\n        {\n          mode: 'cors',\n        },\n      );\n      const data = await response.json();\n      const weatherInfo = {\n        cityName: data.name,\n        countryCode: data.sys.country,\n        temp: data.main.temp,\n        temp_min: data.main.temp_min,\n        temp_max: data.main.temp_max,\n        feels_like: data.main.feels_like,\n        weather: data.weather[0].main,\n        icon: data.weather[0].icon,\n        gifimage: data.weather[0].description,\n      };\n      return weatherInfo;\n    } catch (e) {\n      throw new Error('Enter a proper location');\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });