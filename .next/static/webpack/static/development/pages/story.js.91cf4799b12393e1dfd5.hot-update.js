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

/***/ })

})
//# sourceMappingURL=story.js.91cf4799b12393e1dfd5.hot-update.js.map