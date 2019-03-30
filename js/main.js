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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Handles parallax effect on front page.
 * 
 * Note: document.ready does not allow pictures to load.
 * Since the position of the .text-container divs rely
 * on that, we use the .on("load") function instead.
 **/ 

jQuery(window).on("load", function () { // Allows pictures to load

  // Create array for storing text-container locations
  var boxTops = [];

  //store the bottom of the veiwport
  var docViewBottom =
    jQuery(window).scrollTop() + jQuery(window).height();

  // Store the origional location of the text-container divs
  jQuery('.text-container').each(function (index, e) {
    boxTops.push(jQuery(this).offset().top);
  });

  // The magic! Fires every time the window is scrolled
  jQuery(window).scroll(function () {
    // Set width to trigger parallax effect
    if (window.matchMedia("(min-width: 768px)").matches) {
      var multiplier = .6;
      // Set the speed at which the boxes scroll for break-points
      if (window.matchMedia("(min-width: 576px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 960px)").matches) {
        var multiplier = .6;
      } else if (window.matchMedia("(min-width: 1200px)").matches) {
        var multiplier = .6;
      }

      // Find the bottom of the screen
      var wScroll = jQuery(this).scrollTop();
      var currentBottom = docViewBottom + wScroll;

      // Iterate through the text containers
      jQuery('.text-container').each(function (index, object) {

        // If the container is on screen, start the parallax
        if (currentBottom > boxTops[index]) {
          // Determine how much parallax we want.
          var scrollAmount = (currentBottom - boxTops[index]) * multiplier;
          // Make it happen!
          jQuery(object).css({
            'transform': 'translate(0px, -' + scrollAmount + 'px)'
          }); // Ends .css transformations
        } // Ends if 
      }); // Ends .each
    }// Ends the size check
  }); // Ends .scroll
}); // Ends .on(load)

/***/ })
/******/ ]);