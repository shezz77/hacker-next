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
      className: "jsx-1395133476" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1395133476" + " " + "story-title",
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
    css: ".story-list.jsx-1395133476{padding:0 1em;}.story.jsx-1395133476{padding:1em 0;}.story-title.jsx-1395133476{font-sze:1rem;fornt-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-1395133476 a.jsx-1395133476{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-1395133476 a.jsx-1395133476:hover,story-details.jsx-1395133476 a.jsx-1395133476:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-1395133476{font-size:0.8rem;font-weight:bold;}.story-details.jsx-1395133476 span.jsx-1395133476{margin-right:1em;}.story-details.jsx-1395133476 a.jsx-1395133476{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUd1QixBQUlBLEFBSUEsQUFPSCxBQUtlLEFBSVQsQUFLQSxBQUlILFdBakJPLEdBZnZCLEFBSUEsQUFJbUIsQUF5QkksR0FUSixBQUtuQixjQXBCVyxHQWdCWCxNQWZzQixvQkFDdEIsQUFTQSxDQUpBLEdBa0JBIiwiZmlsZSI6IkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU3RvcnlMaXN0ID0gKHsgc3RvcmllcyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XHJcbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzdG9yeVwiIGtleT17c3RvcnkuaWR9PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj48YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHMgPC9zcGFuPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cclxuICAgICAgICAgIDxhPntzdG9yeS5jb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpfVxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnN0b3J5LWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Rvcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc3plOiAxcmVtO1xyXG4gICAgICAgIGZvcm50LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5LXRpdGxlIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIsIHN0b3J5LWRldGFpbHMgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5LWRldGFpbHMgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNjYwMGZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDtcclxuIl19 */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\StoryList.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.ba00d72022f358dc900b.hot-update.js.map