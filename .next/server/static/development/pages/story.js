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

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\components\\Comment.js";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-112126019" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "112126019",
    css: ".comment.jsx-112126019{margin-bottom:1.5em;}.comment-user.jsx-112126019{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-112126019{font-size:0.9rem;}.comment-content.jsx-112126019 p.jsx-112126019{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-112126019 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-112126019 pre{max-width:100%;overflow:scroll;}.nested-comments.jsx-112126019{border-left:margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHeUMsQUFJSCxBQU1BLEFBSVIsQUFNRSxBQUtJLEFBS2EsU0FmUixFQU1NLElBS1YsRUFyQkMsQUFNckIsR0FWQSxPQThCMEMsRUFmakIsRUFXekIsR0FyQndCLGdCQVd4QixJQVZBLFdBeUJxQixNQVZyQixXQVdBIiwiZmlsZSI6IkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+e2NvbW1lbnQudXNlcn08L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiXHJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtjb21tZW50LmNvbW1lbnRzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVzdGVkLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcCggbmVzdGVkQ29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudCBrZXk9e25lc3RlZENvbW1lbnQuaWR9IGNvbW1lbnQ9e25lc3RlZENvbW1lbnR9Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC11c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCA6Z2xvYmFsKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y2MDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IDpnbG9iYWwocHJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5lc3RlZC1jb21tZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Comment.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/Comments.js":
/*!********************************!*\
  !*** ./components/Comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\components\\Comments.js";



var Comments = function Comments(_ref) {
  var comments = _ref.comments;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comments.map(function (comment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: comment.id,
      comment: comment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\components\\Layout.js";






var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      backButton = _ref.backButton;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-465748492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-465748492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Hacker News | ".concat(title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-465748492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-465748492" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-465748492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, backButton && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    className: "jsx-465748492" + " " + "back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u2B05"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-465748492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-465748492" + " " + "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Hacker News")))), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3511681548",
    css: ".container.jsx-465748492{max-width:800px;margin:0 auto;background-color:whitesmoke;}nav.jsx-465748492{background-color:#f60;padding:1em;}nav.jsx-465748492>*.jsx-465748492{display:inline-block;color:black;}nav.jsx-465748492 a.jsx-465748492{-webkit-text-decoration:none;text-decoration:none;}nav.jsx-465748492 .main-title.jsx-465748492{font-weight:bold;}nav.jsx-465748492 .back-button.jsx-465748492{font-size:0.9rem;padding-right:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUd5QyxBQU1NLEFBS0QsQUFLQSxBQUlKLEFBR0EsZ0JBdEJILENBb0JsQixBQUdzQixJQVpOLENBTEEsUUFKakIsR0FVQyxDQUxBLENBa0JELGVBVEMsQUFTQSxRQXZCQSIsImZpbGUiOiJFOlxcc2FcXFByYWN0aWNlXFxoYWNrZXItbmV4dFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJhY2tCdXR0b259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSGFja2VyIE5ld3MgfCAke3RpdGxlfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufS8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhY2tCdXR0b24gJiYgPHNwYW4gb25DbGljaz17KCkgPT4gUm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj4mI3gyYjA1Ozwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHNwYW4gY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPkhhY2tlciBOZXdzPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5hdiA+ICoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2IC5tYWluLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hdiAuYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "955798537",
    css: "body{background-color:white;font-family:Verdana,Geneva,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURtQyxBQUdvRCx1QkFDaUIsc0NBQzVDIiwiZmlsZSI6IkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgYmFja0J1dHRvbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2BIYWNrZXIgTmV3cyB8ICR7dGl0bGV9YH08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICB7YmFja0J1dHRvbiAmJiA8c3BhbiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvblwiPiYjeDJiMDU7PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+SGFja2VyIE5ld3M8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2ID4gKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuYXYgLm1haW4tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2IC5iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Layout.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Comments */ "./components/Comments.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\pages\\story.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Story =
/*#__PURE__*/
function (_Component) {
  _inherits(Story, _Component);

  function Story() {
    _classCallCheck(this, Story);

    return _possibleConstructorReturn(this, _getPrototypeOf(Story).apply(this, arguments));
  }

  _createClass(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_6___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: story.title,
        backButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-157862177" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: story.url,
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-157862177" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, story.points, " points "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, story.comments_count, " comments "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, story.time_ago)), story.comments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
        comments: story.comments,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-157862177",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "No comments for this story")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "157862177",
        css: "main.jsx-157862177{padding:1em;}.story-title.jsx-157862177{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-157862177 a.jsx-157862177{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-157862177 a.jsx-157862177:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-157862177{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-157862177 a.jsx-157862177{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxwYWdlc1xcc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNnQixBQUc2QixBQUlLLEFBT04sQUFNZSxBQUtULEFBT04sV0FqQlUsQUFrQnpCLENBN0JBLEtBSWEsQUFrQlUsU0FqQkgsVUFrQndCLE1BakJuQixrQkFZekIsQ0FMQSxFQU5BLGFBaUJzQixrQkFDdEIiLCJmaWxlIjoiRTpcXHNhXFxQcmFjdGljZVxcaGFja2VyLW5leHRcXHBhZ2VzXFxzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tZW50c1wiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmNsYXNzIFN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcclxuICAgIGxldCBzdG9yeTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0b3J5SWQgPSBxdWVyeS5pZDtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YFxyXG4gICAgICApO1xyXG4gICAgICBzdG9yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzdG9yeSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3RvcnkgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGlmICghc3RvcnkpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPXtzdG9yeS50aXRsZX0gYmFja0J1dHRvbj17dHJ1ZX0+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj48YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkucG9pbnRzfSBwb2ludHMgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3N0b3J5LmNvbW1lbnRzX2NvdW50fSBjb21tZW50cyA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkudGltZV9hZ299PC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzdG9yeS5jb21tZW50cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICA8Q29tbWVudHMgY29tbWVudHM9e3N0b3J5LmNvbW1lbnRzfS8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5ObyBjb21tZW50cyBmb3IgdGhpcyBzdG9yeTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\pages\\story.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, story, storyId, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                storyId = query.id;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                story = null;

              case 15:
                return _context.abrupt("return", {
                  story: story
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/story.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/story.js */"./pages/story.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=story.js.map