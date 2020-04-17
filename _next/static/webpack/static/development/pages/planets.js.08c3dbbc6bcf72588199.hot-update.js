webpackHotUpdate("static/development/pages/planets.js",{

/***/ "./components/planet/planetsInfo/planetsInfo.js":
/*!******************************************************!*\
  !*** ./components/planet/planetsInfo/planetsInfo.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mpth/react-no-ssr */ "./node_modules/@mpth/react-no-ssr/dist/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../people/peopleInfo/peopleInfo.styled */ "./components/people/peopleInfo/peopleInfo.styled.js");
/* harmony import */ var _errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errorMessage/errorMessage */ "./components/errorMessage/errorMessage.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/spinner */ "./components/spinner/spinner.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/planet/planetsInfo/planetsInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PlanetsInfo = function PlanetsInfo(_ref) {
  var selectedPlanet = _ref.selectedPlanet,
      isFetchingPlanet = _ref.isFetchingPlanet,
      broken = _ref.broken,
      setBroken = _ref.setBroken;

  // const [broken, setBroken] = useState(false)
  var serverImage = __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsImg"], {
    planet: true,
    onError: function onError() {
      return setBroken();
    },
    src: "https://starwars-visualguide.com/assets/img/planets/".concat(selectedPlanet.id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  });

  var brokenImg = broken ? __jsx(_errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 30
    }
  }) : serverImage;
  return (// <NoSSR>
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetails"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, isFetchingPlanet ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledName"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, selectedPlanet.name), brokenImg, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsList"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, "Population:", selectedPlanet.population), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, "Period: ", selectedPlanet.rotation_period), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, "Orbital Period: ", selectedPlanet.orbital_period), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, "Diameter: ", selectedPlanet.diameter), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, "Climate: ", selectedPlanet.climate), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, "Gravity: ", selectedPlanet.gravity)))))
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedPlanet: state.selectedPlanet,
    isFetchingPlanet: state.isFetchingPlanet,
    broken: state.broken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setBroken: setBroken
})(PlanetsInfo));

/***/ })

})
//# sourceMappingURL=planets.js.08c3dbbc6bcf72588199.hot-update.js.map