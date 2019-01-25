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
    className: "jsx-2285103428" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: story.id,
      className: "jsx-2285103428" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2285103428",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: story.url,
      className: "jsx-2285103428",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, story.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2285103428" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2285103428",
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
      className: "jsx-2285103428",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, story.comments_count || 0, " comments"))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2285103428",
    css: ".story-list.jsx-2285103428{padding:0 1em;}.story.jsx-2285103428{padding:1em 0;}.story-title.jsx-2285103428{font-sze:1rem;fornt-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-2285103428 a.jsx-2285103428{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2285103428 a.jsx-2285103428:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2285103428{font-size:0.8rem;font-weight:bold;}.story-details.jsx-2285103428 span.jsx-2285103428{margin-right:1em;}.story-details.jsx-2285103428 a.jsx-2285103428{color:#6600ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUd1QixBQUlBLEFBSUEsQUFPSCxBQUtlLEFBSVQsQUFLQSxBQUlILFdBakJPLEdBZnZCLEFBSUEsQUFJbUIsQUEwQnBCLEFBQUMsR0FWbUIsQUFLbkIsY0FwQlcsR0FnQlgsTUFmc0Isb0JBQ3RCLEFBU0EsQ0FKQSIsImZpbGUiOiJFOlxcc2FcXFByYWN0aWNlXFxoYWNrZXItbmV4dFxcY29tcG9uZW50c1xcU3RvcnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcclxuICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic3RvcnlcIiBrZXk9e3N0b3J5LmlkfT5cclxuICAgICAgPGgyPjxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICA8c3Bhbj57c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50cyA8L3NwYW4+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke3N0b3J5LmlkfWB9PlxyXG4gICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSl9XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc3RvcnktbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeSB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zemU6IDFyZW07XHJcbiAgICAgICAgZm9ybnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcnktdGl0bGUgYSB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS1kZXRhaWxzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0b3J5LWRldGFpbHMgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNjYwMGZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\components\\StoryList.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.bd934c0e7c1242fc7f20.hot-update.js.map