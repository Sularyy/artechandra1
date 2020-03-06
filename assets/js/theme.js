/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(8);
	module.exports = __webpack_require__(10);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	 * This is the entry point for specific javascript of theme
	 */
	$(document).ready(function () {
	  //alert('el documento está preparado');
	  //---------------Pie de pagina---------------------------------------
	  $('div.block-contact').addClass('elementoFooter');
	  var idiv;
	  var sdiv;
	  var fdiv;
	  idiv = $('<div id="informacion" class="elementoFooter">');
	  sdiv = $('<div id="miCuenta" class="elementoFooter">');
	  fdiv = $('</div>');
	  $('div.block-contact').after(idiv);
	  $('#informacion').after(sdiv);
	  $('#footer h3:first').appendTo('#informacion');
	  $('#footer ul:first').appendTo('#informacion');
	  $('#footer h3').eq(1).appendTo('#miCuenta');
	  $('#footer ul').eq(1).appendTo('#miCuenta');
	  console.log('el documento está preparado');

	  //----------------menu despegable para filtrar---------------------------------
	  $('#menuDesplegable').mouseover(function () {
	    $('#menuDesplegable').css('cursor', 'pointer');
	    $('.menuhidden').css('visibility', 'visible');
	  });
	  $('#prueba').mouseleave(function () {
	    $('.menuhidden').css('visibility', 'hidden');
	  });
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);