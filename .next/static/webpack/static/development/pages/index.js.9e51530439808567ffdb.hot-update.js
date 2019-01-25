webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\sa\\Practice\\hacker-next\\components\\StoryList.js";




var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1395133476" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-1395133476" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1395133476",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-1395133476",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1395133476" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1395133476",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, story.points || 0, " points "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1395133476",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1395133476",
    css: ".story-list.jsx-1395133476{padding:0 1em;}.story.jsx-1395133476{padding:1em 0;}.story-title.jsx-1395133476{font-sze:1rem;fornt-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-1395133476 a.jsx-1395133476{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-1395133476 a.jsx-1395133476:hover,story-details.jsx-1395133476 a.jsx-1395133476:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-1395133476{font-size:0.8rem;font-weight:bold;}.story-details.jsx-1395133476 span.jsx-1395133476{margin-right:1em;}.story-details.jsx-1395133476 a.jsx-1395133476{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUd1QixBQUlBLEFBSUEsQUFPSCxBQUtlLEFBSVQsQUFLQSxBQUlILFdBakJPLEdBZnZCLEFBSUEsQUFJbUIsQUF5QkksR0FUSixBQUtuQixjQXBCVyxHQWdCWCxNQWZzQixvQkFDdEIsQUFTQSxDQUpBLEdBa0JBIiwiZmlsZSI6IkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU3RvcnlMaXN0ID0gKHsgc3RvcmllcyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XHJcbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiIGtleT17c3RvcnkuaWR9PlxyXG4gICAgICA8aDI+PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzIDwvc3Bhbj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XHJcbiAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKX1cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5zdG9yeS1saXN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5IHtcclxuICAgICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5LXRpdGxlIHtcclxuICAgICAgICBmb250LXN6ZTogMXJlbTtcclxuICAgICAgICBmb3JudC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS10aXRsZSBhIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyLCBzdG9yeS1kZXRhaWxzIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcnktZGV0YWlscyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS1kZXRhaWxzIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcnktZGV0YWlscyBhIHtcclxuICAgICAgICBjb2xvcjogIzY2MDBmZjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\StoryList.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.9e51530439808567ffdb.hot-update.js.map