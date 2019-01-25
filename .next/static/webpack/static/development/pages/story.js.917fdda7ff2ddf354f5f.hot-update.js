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
    className: "jsx-2844785417" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2844785417" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2844785417" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2844785417" + " " + "nested-comments",
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
    styleId: "2844785417",
    css: ".comment.jsx-2844785417{margin-bottom:1.5em;}.comment-user.jsx-2844785417{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-2844785417{font-size:0.9rem;}.comment-content.jsx-2844785417 p.jsx-2844785417{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-2844785417 a.jsx-2844785417{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-2844785417 pre.jsx-2844785417{max-width:100%;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHeUMsQUFJSCxBQU1BLEFBSVIsQUFNRSxBQUtJLEFBTXBCLFNBaEJ5QixFQU1NLElBS1YsRUFyQkMsQUFNckIsR0FWQSxTQWV5QixFQVd6QixHQXJCd0IsZ0JBV3hCLElBVkEsaUJBZUEiLCJmaWxlIjoiRTpcXHNhXFxQcmFjdGljZVxcaGFja2VyLW5leHRcXGNvbXBvbmVudHNcXENvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PlxyXG4gIGNvbnNvbGUubG9nKGNvbW1lbnQpIHx8IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtdXNlclwiPntjb21tZW50LnVzZXJ9PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50IH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Y29tbWVudC5jb21tZW50cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lc3RlZC1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICB7Y29tbWVudC5jb21tZW50cy5tYXAoIG5lc3RlZENvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fS8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCBwcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uZXN0ZWQtY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\Comment.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.917fdda7ff2ddf354f5f.hot-update.js.map