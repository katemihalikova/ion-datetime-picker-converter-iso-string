(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var IsoStringConverter = (function () {
    function IsoStringConverter() {
        this.DATE_REGEXP = /^(?:(?:([+-]?\d{4,})(?:-(\d\d)(?:-(\d\d))?)?|(\d\d)-(\d\d))(?:$|T|\s)|(\d\d)(?:T|\s))/;
        this.TIME_REGEXP = /(?:^|T|\s)(?:(\d\d)(?::(\d\d)(?::(\d\d))?)?(?:$|Z|[+-]\d\d(?::|\d)|\s)|(\d\d):(\d\d):(\d\d)\.)/;
    }
    IsoStringConverter.prototype.convertFromPicker = function (input) {
        var dateString = "";
        if (input.month === undefined && input.day !== undefined) {
            input.month = 1;
        }
        else if (input.year === undefined && input.month !== undefined && input.day === undefined) {
            input.day = 1;
        }
        if (input.year !== undefined) {
            dateString += pad(input.year, 4);
        }
        if (input.month !== undefined) {
            if (input.year !== undefined) {
                dateString += "-";
            }
            dateString += pad(input.month);
        }
        if (input.day !== undefined) {
            dateString += "-" + pad(input.day);
        }
        var timeString = "";
        if (input.hour === undefined && (input.minute !== undefined || input.second !== undefined)) {
            input.hour = 0;
        }
        if (input.minute === undefined && input.second !== undefined) {
            input.minute = 0;
        }
        if (input.hour !== undefined) {
            timeString += pad(input.hour);
        }
        if (input.minute !== undefined) {
            timeString += ":" + pad(input.minute);
        }
        if (input.second !== undefined) {
            timeString += ":" + pad(input.second);
        }
        return dateString + (dateString !== "" && timeString !== "" ? "T" : "") + timeString;
    };
    IsoStringConverter.prototype.convertToPicker = function (input) {
        if (input === undefined) {
            return {};
        }
        var output = {};
        if (this.DATE_REGEXP.test(input)) {
            var parts = this.DATE_REGEXP.exec(input);
            if (parts[1] !== undefined) {
                output.year = Number(parts[1]);
            }
            if (parts[2] !== undefined) {
                output.month = Number(parts[2]);
            }
            if (parts[3] !== undefined) {
                output.day = Number(parts[3]);
            }
            if (parts[4] !== undefined) {
                output.month = Number(parts[4]);
            }
            if (parts[5] !== undefined) {
                output.day = Number(parts[5]);
            }
            if (parts[6] !== undefined) {
                output.day = Number(parts[6]);
            }
        }
        if (this.TIME_REGEXP.test(input)) {
            var parts = this.TIME_REGEXP.exec(input);
            if (parts[1] !== undefined) {
                output.hour = Number(parts[1]);
            }
            if (parts[2] !== undefined) {
                output.minute = Number(parts[2]);
            }
            if (parts[3] !== undefined) {
                output.second = Number(parts[3]);
            }
            if (parts[4] !== undefined) {
                output.hour = Number(parts[1]);
            }
            if (parts[5] !== undefined) {
                output.minute = Number(parts[2]);
            }
            if (parts[6] !== undefined) {
                output.second = Number(parts[3]);
            }
        }
        return output;
    };
    return IsoStringConverter;
}());
exports["default"] = IsoStringConverter;
function pad(input, length) {
    if (length === void 0) { length = 2; }
    var absInput = String(Math.abs(input));
    var negative = input < 0;
    if (absInput.length >= length) {
        return (input > 9999 ? "+" : "") + String(input);
    }
    return (negative ? "-" : "") + ("000" + absInput).substr(-length);
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(3);
var converter_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpConverterIsoString", converter_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var converter_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = converter_1["default"];


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});