webpackHotUpdate("static/development/pages/index.js",{

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
      brokenRandomPlanet = _ref.brokenRandomPlanet,
      setBrokenRandomPlanet = _ref.setBrokenRandomPlanet;

  var serverImage = __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsImg"], {
    onError: function onError() {
      return setBrokenRandomPlanet();
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
  return (// <NoSSR>
    //   <>
    //     <StyledDetails>
    //       {isFetchingRandomPlanet ? <Spinner /> :
    //         <>
    //           {randomPlanet ?
    //             <>
    //               <StyledName>{randomPlanet.name}</StyledName>
    //               {
    //                 broken ? <ErrorMessage /> :
    //                   <>
    //                     <StyledDetailsImg onError={() => setBroken(true)}
    //                       src={`https://starwars-visualguide.com/assets/img/planets/${randomPlanet.id}.jpg`} />
    //                     <StyledDetailsList>
    //                       <StyledDetailsWrapp>
    //                         <div style={{ marginRight: '1em' }}>
    //                           <StyledDetailsListItem>Population:{randomPlanet.population}</StyledDetailsListItem>
    //                           <StyledDetailsListItem>Period: {randomPlanet.rotation_period}</StyledDetailsListItem>
    //                           <StyledDetailsListItem>Orbital Period: {randomPlanet.orbital_period}</StyledDetailsListItem>
    //                         </div>
    //                         <div>
    //                           <StyledDetailsListItem>Diameter:{randomPlanet.diameter}</StyledDetailsListItem>
    //                           <StyledDetailsListItem>Climate:{randomPlanet.climate}</StyledDetailsListItem>
    //                           <StyledDetailsListItem>Gravity:{randomPlanet.gravity}</StyledDetailsListItem>
    //                         </div>
    //                       </StyledDetailsWrapp>
    //                     </StyledDetailsList>
    //                   </>
    //               }
    //             </>
    //             : null}
    //         </>
    //       }
    //     </StyledDetails>
    //   </>
    // </NoSSR>
    __jsx(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }
    }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetails"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, isFetchingRandomPlanet ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 35
      }
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, randomPlanet ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledName"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, " ", randomPlanet.name), brokenImg, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsList"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsWrapp"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        marginRight: '1em'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    }, "Population:", randomPlanet.population), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, "Period: ", randomPlanet.rotation_period), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, "Orbital Period: ", randomPlanet.orbital_period)), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, "Diameter:", randomPlanet.diameter), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    }, "Climate:", randomPlanet.climate), __jsx(_randomPlanet_styled__WEBPACK_IMPORTED_MODULE_2__["StyledDetailsListItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, "Gravity:", randomPlanet.gravity))))) : null)))
  );
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
  getRandomPlanet: _actions__WEBPACK_IMPORTED_MODULE_3__["getRandomPlanet"],
  setDefaultBrokenRandomPlanet: _actions__WEBPACK_IMPORTED_MODULE_3__["setDefaultBrokenRandomPlanet"],
  setBrokenRandomPlanet: _actions__WEBPACK_IMPORTED_MODULE_3__["setBrokenRandomPlanet"]
})(RandomPlanet));

/***/ })

})
//# sourceMappingURL=index.js.830f8088c431d87fce22.hot-update.js.map