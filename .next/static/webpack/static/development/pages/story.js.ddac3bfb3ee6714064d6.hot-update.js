webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);

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
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: story.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
        className: "jsx-2712449097",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2712449097" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: story.url,
        className: "jsx-2712449097",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2712449097" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-2712449097",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, story.points, " points"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-2712449097",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        className: "jsx-2712449097",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, story.time_ago))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2712449097",
        css: "main.jsx-2712449097{padding:1em;}.story-title.jsx-2712449097{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-2712449097 a.jsx-2712449097{color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxzYVxcUHJhY3RpY2VcXGhhY2tlci1uZXh0XFxwYWdlc1xcc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NnQixBQUc2QixBQUlLLEFBT04sV0FDZixDQVhBLEtBSWEsU0FDTyxnQkFDSyxxQkFDekIiLCJmaWxlIjoiRTpcXHNhXFxQcmFjdGljZVxcaGFja2VyLW5leHRcXHBhZ2VzXFxzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5cclxuY2xhc3MgU3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHJlcywgcXVlcnkgfSkge1xyXG4gICAgbGV0IHN0b3J5O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3RvcnlJZCA9IHF1ZXJ5LmlkO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gXHJcbiAgICAgICk7XHJcbiAgICAgIHN0b3J5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHN0b3J5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdG9yeSB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKCFzdG9yeSkge1xyXG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9e3N0b3J5LnRpdGxlfT5cclxuICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPjxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT48L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5wb2ludHN9IHBvaW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8c3Ryb25nPntzdG9yeS5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHN0cm9uZz57c3RvcnkudGltZV9hZ299PC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5O1xyXG4iXX0= */\n/*@ sourceURL=E:\\sa\\Practice\\hacker-next\\pages\\story.js */",
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/story")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=story.js.ddac3bfb3ee6714064d6.hot-update.js.map