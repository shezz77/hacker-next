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
    className: "jsx-3735113327" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3735113327" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-3735113327" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3735113327" + " " + "nested-comments",
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
    styleId: "3735113327",
    css: ".comment.jsx-3735113327{margin-bottom:1.5em;}.comment-user.jsx-3735113327{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-3735113327{font-size:0.9rem;}.comment-content.jsx-3735113327 p.jsx-3735113327{margin:0;margin-bottom:0.5em;word-wrap:break-word;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHeUMsQUFJSCxBQU1BLEFBSVIsU0FDVyxRQVZILEFBTXJCLEdBVkEsU0FleUIsS0FWRCxnQkFXeEIsSUFWQSIsImZpbGUiOiJFOlxcc2FcXFByYWN0aWNlXFxoYWNrZXItbmV4dFxcY29tcG9uZW50c1xcQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+XHJcbiAgY29uc29sZS5sb2coY29tbWVudCkgfHwgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+e2NvbW1lbnQudXNlcn08L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiXHJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtjb21tZW50LmNvbW1lbnRzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVzdGVkLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcCggbmVzdGVkQ29tbWVudCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudCBrZXk9e25lc3RlZENvbW1lbnQuaWR9IGNvbW1lbnQ9e25lc3RlZENvbW1lbnR9Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC11c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Comment.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.3a592a4e7becadfef3a3.hot-update.js.map