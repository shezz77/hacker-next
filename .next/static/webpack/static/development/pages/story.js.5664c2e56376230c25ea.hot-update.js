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
    className: "jsx-1976746255" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1976746255" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-1976746255" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1976746255" + " " + "nested-comments",
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
    styleId: "1976746255",
    css: ".comment.jsx-1976746255{margin-bottom:1.5em;}.comment-user.jsx-1976746255{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHeUMsQUFJSCxpQkFDQSxHQUpyQixjQUt3QixvQkFDeEIiLCJmaWxlIjoiRTpcXHNhXFxQcmFjdGljZVxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXENvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PlxyXG4gIGNvbnNvbGUubG9nKGNvbW1lbnQpIHx8IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtdXNlclwiPntjb21tZW50LnVzZXJ9PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50IH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Y29tbWVudC5jb21tZW50cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lc3RlZC1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5jb21tZW50cy5tYXAoIG5lc3RlZENvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fS8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Comment.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.5664c2e56376230c25ea.hot-update.js.map