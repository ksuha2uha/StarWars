webpackHotUpdate("static/development/pages/planets.js",{

/***/ "./components/planet/planetsList/planetsList.js":
/*!******************************************************!*\
  !*** ./components/planet/planetsList/planetsList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _people_peopleList_peopleList_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../people/peopleList/peopleList.styled */ "./components/people/peopleList/peopleList.styled.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mpth/react-no-ssr */ "./node_modules/@mpth/react-no-ssr/dist/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/spinner */ "./components/spinner/spinner.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/planet/planetsList/planetsList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PlanetList = function PlanetList(_ref) {
  var fetchPlanets = _ref.fetchPlanets,
      selectPlanet = _ref.selectPlanet,
      planets = _ref.planets,
      isFetchingPlanet = _ref.isFetchingPlanet,
      setDefaultBroken = _ref.setDefaultBroken;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPlanets();
  }, []);
  return __jsx(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_people_peopleList_peopleList_styled__WEBPACK_IMPORTED_MODULE_2__["StyledList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, isFetchingPlanet ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, planets.map(function (el) {
    return __jsx(_people_peopleList_peopleList_styled__WEBPACK_IMPORTED_MODULE_2__["StyledListItem"], {
      onClick: (function () {
        return selectPlanet(el.name);
      }, setDefaultBroken()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, el.name);
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    planets: state.planets,
    isFetchingPlanet: state.isFetchingPlanet
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchPlanets: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchPlanets"],
  selectPlanet: _actions__WEBPACK_IMPORTED_MODULE_3__["selectPlanet"],
  setDefaultBroken: _actions__WEBPACK_IMPORTED_MODULE_3__["setDefaultBroken"]
})(PlanetList));

/***/ })

})
//# sourceMappingURL=planets.js.46fd9462a0dbdef4cf41.hot-update.js.map