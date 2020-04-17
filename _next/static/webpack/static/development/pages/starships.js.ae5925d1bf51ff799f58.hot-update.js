webpackHotUpdate("static/development/pages/starships.js",{

/***/ "./components/randomPlanet/randomPlanet.js":
/*!*************************************************!*\
  !*** ./components/randomPlanet/randomPlanet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomPlanet.styled */ "./components/randomPlanet/randomPlanet.styled.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mpth/react-no-ssr */ "./node_modules/@mpth/react-no-ssr/dist/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errorMessage/errorMessage */ "./components/errorMessage/errorMessage.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner */ "./components/spinner/spinner.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/randomPlanet/randomPlanet.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var RandomPlanet = function RandomPlanet(_ref) {
  var fetchPlanets = _ref.fetchPlanets,
      getRandomPlanet = _ref.getRandomPlanet,
      randomPlanet = _ref.randomPlanet,
      planets = _ref.planets,
      isFetchingRandomPlanet = _ref.isFetchingRandomPlanet,
      brokenRandomPlanet = _ref.brokenRandomPlanet;

  var serverImage = __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsImg"], {
    onError: function onError() {
      return setBroken();
    },
    src: "https://starwars-visualguide.com/assets/img/planets/".concat(randomPlanet.id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  });

  var brokenImg = brokenRandomPlanet ? __jsx(_errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 42
    }
  }) : serverImage;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPlanets();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getRandomPlanet();
    var interval = setInterval(function () {
      getRandomPlanet();
    }, 2000);
    return function () {
      return clearInterval(interval);
    };
  }, [planets]);
  return __jsx(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetails"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, isFetchingRandomPlanet ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 35
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledName"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, randomPlanet.name), brokenImg, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsWrapp"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      marginRight: '1em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "Population:", randomPlanet.population), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, "Period: ", randomPlanet.rotation_period), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "Orbital Period: ", randomPlanet.orbital_period)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "Diameter:", randomPlanet.diameter), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Climate:", randomPlanet.climate), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Gravity:", randomPlanet.gravity)))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    planets: state.planets,
    randomPlanet: state.randomPlanet,
    isFetchingRandomPlanet: state.isFetchingRandomPlanet,
    brokenRandomPlanet: state.brokenRandomPlanet
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchPlanets: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchPlanets"],
  getRandomPlanet: _actions__WEBPACK_IMPORTED_MODULE_3__["getRandomPlanet"]
})(RandomPlanet));

/***/ })

})
//# sourceMappingURL=starships.js.ae5925d1bf51ff799f58.hot-update.js.map