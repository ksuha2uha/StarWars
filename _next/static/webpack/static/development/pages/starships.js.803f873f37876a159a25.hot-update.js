webpackHotUpdate("static/development/pages/starships.js",{

/***/ "./components/starships/starshipsInfo/starshipsInfo.js":
/*!*************************************************************!*\
  !*** ./components/starships/starshipsInfo/starshipsInfo.js ***!
  \*************************************************************/
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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/starships/starshipsInfo/starshipsInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var StarshipsInfo = function StarshipsInfo(_ref) {
  var selectedStarship = _ref.selectedStarship,
      isFetchingStarship = _ref.isFetchingStarship,
      setBroken = _ref.setBroken,
      broken = _ref.broken;

  var serverImage = __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsImg"], {
    onError: function onError() {
      return setBroken();
    },
    src: "https://starwars-visualguide.com/assets/img/starships/".concat(selectedStarship.id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  });

  var brokenImg = broken ? __jsx(_errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 30
    }
  }) : serverImage;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetails"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, isFetchingStarship ? __jsx(_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 31
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledName"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, selectedStarship.name), brokenImg, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "Model:", selectedStarship.model), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Manufacturer: ", selectedStarship.manufacturer), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Cost: ", selectedStarship.cost_in_credits), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Length: ", selectedStarship.length), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Max speed: ", selectedStarship.max_atmosphering_speed), __jsx(_people_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "Passengers: ", selectedStarship.passengers)))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedStarship: state.selectedStarship,
    isFetchingStarship: state.isFetchingStarship,
    broken: state.broken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setBroken: _actions__WEBPACK_IMPORTED_MODULE_6__["setBroken"]
})(StarshipsInfo));

/***/ })

})
//# sourceMappingURL=starships.js.803f873f37876a159a25.hot-update.js.map