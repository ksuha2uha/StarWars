webpackHotUpdate("static/development/pages/people.js",{

/***/ "./components/people/peopleInfo/peopleInfo.js":
/*!****************************************************!*\
  !*** ./components/people/peopleInfo/peopleInfo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mpth/react-no-ssr */ "./node_modules/@mpth/react-no-ssr/dist/index.js");
/* harmony import */ var _mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mpth_react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../peopleInfo/peopleInfo.styled */ "./components/people/peopleInfo/peopleInfo.styled.js");
/* harmony import */ var _errorMessage_errorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errorMessage/errorMessage */ "./components/errorMessage/errorMessage.js");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spinner/spinner */ "./components/spinner/spinner.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ksuha2uha/Desktop/starWars-app/components/people/peopleInfo/peopleInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PeopleInfo = function PeopleInfo(_ref) {
  var selectedPerson = _ref.selectedPerson,
      isFetchingPeople = _ref.isFetchingPeople,
      broken = _ref.broken,
      setBroken = _ref.setBroken;

  var serverImage = __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsImg"], {
    onError: function onError() {
      return setBroken();
    },
    src: "https://starwars-visualguide.com/assets/img/characters/".concat(selectedPerson.id, ".jpg"),
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetails"], {
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
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledName"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, selectedPerson.name), brokenImg, __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsList"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Height:", selectedPerson.height), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "Mass: ", selectedPerson.mass), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Hair color: ", selectedPerson.hair_color), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Skin color: ", selectedPerson.skin_color), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Eye color: ", selectedPerson.eye_color), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Birth year: ", selectedPerson.birth_year), __jsx(_peopleInfo_peopleInfo_styled__WEBPACK_IMPORTED_MODULE_3__["StyledDetailsListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "Gender: ", selectedPerson.gender)))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedPerson: state.selectedPerson,
    isFetchingPeople: state.isFetchingPeople,
    broken: state.broken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setBroken: _actions__WEBPACK_IMPORTED_MODULE_6__["setBroken"]
})(PeopleInfo));

/***/ })

})
//# sourceMappingURL=people.js.da06965da37da5cde61b.hot-update.js.map