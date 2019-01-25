webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\components\\Comment.js";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return console.log(comment) || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-112126019" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-112126019" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "112126019",
    css: ".comment.jsx-112126019{margin-bottom:1.5em;}.comment-user.jsx-112126019{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-112126019{font-size:0.9rem;}.comment-content.jsx-112126019 p.jsx-112126019{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-112126019 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-112126019 pre{max-width:100%;overflow:scroll;}.nested-comments.jsx-112126019{border-left:margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHeUMsQUFJSCxBQU1BLEFBSVIsQUFNRSxBQUtJLEFBS2EsU0FmUixFQU1NLElBS1YsRUFyQkMsQUFNckIsR0FWQSxPQThCMEMsRUFmakIsRUFXekIsR0FyQndCLGdCQVd4QixJQVZBLFdBeUJxQixNQVZyQixXQVdBIiwiZmlsZSI6IkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQgfSkgPT5cclxuICBjb25zb2xlLmxvZyhjb21tZW50KSB8fCAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXVzZXJcIj57Y29tbWVudC51c2VyfTwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29tbWVudC1jb250ZW50XCJcclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQuY29udGVudCB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2NvbW1lbnQuY29tbWVudHMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cclxuICAgICAgICAgICAge2NvbW1lbnQuY29tbWVudHMubWFwKCBuZXN0ZWRDb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgIDxDb21tZW50IGtleT17bmVzdGVkQ29tbWVudC5pZH0gY29tbWVudD17bmVzdGVkQ29tbWVudH0vPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50LXVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IDpnbG9iYWwoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmVzdGVkLWNvbW1lbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xyXG4iXX0= */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Comment.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.be17479e7130b7e9b787.hot-update.js.map