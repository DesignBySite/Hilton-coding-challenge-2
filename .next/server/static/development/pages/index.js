module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room.scss */ "./components/room.scss");
/* harmony import */ var _room_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_room_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\kniel\\HiltonAssessment\\hilton\\components\\Room.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const room = props => {
  return __jsx("div", {
    className: props.checked === false ? 'room_container disabled' : 'room_container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "room_title-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.number === 0 ? null : __jsx("input", {
    type: "checkbox",
    checked: props.checked,
    onChange: props.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Room ", props.number + 1)), __jsx("div", {
    className: "room_inputs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Adults (18+)"), __jsx("select", {
    disabled: props.checked === false ? true : false,
    value: props.adults,
    onChange: props.handleAdultValueChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "1"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "2"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Children (0-17)"), __jsx("select", {
    disabled: props.checked === false ? true : false,
    value: props.children,
    onChange: props.handleChildValueChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "0"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "1"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "2")))));
};

/* harmony default export */ __webpack_exports__["default"] = (room);

/***/ }),

/***/ "./components/room.scss":
/*!******************************!*\
  !*** ./components/room.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Room */ "./components/Room.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parseCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parseCookies */ "./parseCookies.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\kniel\\HiltonAssessment\\hilton\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({
    req
  }) {
    const cookies = Object(_parseCookies__WEBPACK_IMPORTED_MODULE_3__["default"])(req);
    return {
      cookies
    };
  }

  componentDidMount() {
    if (this.props.cookies.lastState === undefined) {
      this.setState({
        numberOfRooms: 4,
        roomState: [true, false, false, false],
        rooms: [{
          id: 1,
          adults: 1,
          children: 0
        }, {
          id: 2,
          adults: 1,
          children: 0
        }, {
          id: 3,
          adults: 1,
          children: 0
        }, {
          id: 4,
          adults: 1,
          children: 0
        }]
      });
    } else if (this.props.cookies !== undefined) {
      let refreshState = this.props.cookies;
      refreshState = JSON.parse(refreshState.lastState);
      this.setState({
        numberOfRooms: refreshState.numberOfRooms,
        roomState: refreshState.roomState,
        rooms: refreshState.rooms
      });
    }
  }

  handleCheckedChange(i) {
    let newRoomState = this.state.roomState;
    let currentIndex = i;
    let nextIndex = currentIndex + 1;
    let prevIndex = currentIndex - 1;

    switch (true) {
      case newRoomState[nextIndex] === true:
        for (let num = currentIndex; num < newRoomState.length; num++) {
          if (newRoomState[num] === true) {
            newRoomState[num] = !newRoomState[num];
          }
        }

        ;
        break;

      case newRoomState[prevIndex] === false:
        for (let num = 1; num <= currentIndex; num++) {
          if (newRoomState[num] === false) {
            newRoomState[num] = !newRoomState[num];
          }
        }

        ;
        break;

      default:
        newRoomState[currentIndex] = !newRoomState[currentIndex];
        break;
    }

    this.setState({
      roomState: newRoomState
    });
  }

  calculateRooms() {
    let rooms = [];

    for (let i = 0; i < this.state.numberOfRooms; ++i) {
      let roomNumber = i;
      let room = this.state.rooms[i];
      rooms.push(__jsx(_components_Room__WEBPACK_IMPORTED_MODULE_0__["default"], {
        key: i,
        number: roomNumber,
        room: this.state.rooms[i],
        adults: this.state.rooms[i].adults,
        children: this.state.rooms[i].children,
        handleAdultValueChange: () => this.handleAdultValueChange(room.id, event),
        handleChildValueChange: () => this.handleChildValueChange(room.id, event),
        checked: this.state.roomState[roomNumber],
        handleChange: () => this.handleCheckedChange(roomNumber),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    }

    return rooms;
  }

  handleAdultValueChange(id, event) {
    let newRooms = this.state.rooms.slice();
    let index = this.state.rooms.findIndex(i => i.id == id);
    newRooms[index].id = id;
    newRooms[index].adults = Number(event.target.value);
    this.setState({
      rooms: newRooms
    });
  }

  handleChildValueChange(id, event) {
    let newRooms = this.state.rooms.slice();
    let index = this.state.rooms.findIndex(i => i.id == id);
    newRooms[index].id = id;
    newRooms[index].children = Number(event.target.value);
    this.setState({
      rooms: newRooms
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('lastState', this.state);
  }

  render() {
    return __jsx("form", {
      className: "listing-of-rooms",
      onSubmit: event => this.handleOnSubmit(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, this.calculateRooms(), __jsx("input", {
      type: "submit",
      value: "Submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./parseCookies.js":
/*!*************************!*\
  !*** ./parseCookies.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kniel\HiltonAssessment\hilton\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map