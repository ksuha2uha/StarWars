webpackHotUpdate("static/development/pages/people.js",{

/***/ "./components/people/peopleList/peopleList.js":
/*!****************************************************!*\
  !*** ./components/people/peopleList/peopleList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _peopleList_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peopleList.styled */ "./components/people/peopleList/peopleList.styled.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mpth/react-no-ssr */ "./node_modules/@mpth/react-no-ssr/dist/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/spinner */ "./components/spinner/spinner.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/people/peopleList/peopleList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PeopleList = function PeopleList(_ref) {
  var fetchPeople = _ref.fetchPeople,
      people = _ref.people,
      selectPerson = _ref.selectPerson,
      isFetchingPeople = _ref.isFetchingPeople,
      setDefaultBroken = _ref.setDefaultBroken;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPeople();
  }, []);
  return __jsx(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_peopleList_styled__WEBPACK_IMPORTED_MODULE_2__["StyledList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, isFetchingPeople ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, people.map(function (el) {
    return __jsx(_peopleList_styled__WEBPACK_IMPORTED_MODULE_2__["StyledListItem"], {
      onClick: function onClick() {
        return setDefaultBroken();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, el.name);
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    people: state.people,
    isFetchingPeople: state.isFetchingPeople
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchPeople: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchPeople"],
  selectPerson: _actions__WEBPACK_IMPORTED_MODULE_3__["selectPerson"],
  setDefaultBroken: _actions__WEBPACK_IMPORTED_MODULE_3__["setDefaultBroken"]
})(PeopleList));

/***/ })

})
//# sourceMappingURL=people.js.cd6523736e23e778504c.hot-update.js.map