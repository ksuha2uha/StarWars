webpackHotUpdate("static/development/pages/people.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: fetchPeople, selectPerson, fetchPlanets, selectPlanet, fetchStarships, selectStarship, getRandomPlanet, setBroken, setDefaultBroken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPeople", function() { return fetchPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPerson", function() { return selectPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlanets", function() { return fetchPlanets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlanet", function() { return selectPlanet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStarships", function() { return fetchStarships; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStarship", function() { return selectStarship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPlanet", function() { return getRandomPlanet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBroken", function() { return setBroken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultBroken", function() { return setDefaultBroken; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var fetchPeople = function fetchPeople() {
  return function _callee(dispatch) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://swapi.dev/api/people"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context.sent;
            return _context.abrupt("return", dispatch({
              type: 'FETCH_PEOPLE',
              payload: data.results
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var selectPerson = function selectPerson(personName) {
  return {
    type: 'SELECT_PEOPLE',
    payload: personName
  };
};
var fetchPlanets = function fetchPlanets() {
  return function _callee2(dispatch) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://swapi.dev/api/planets"));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: 'FETCH_PLANETS',
              payload: data.results
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var selectPlanet = function selectPlanet(planetName) {
  return {
    type: 'SELECT_PLANET',
    payload: planetName
  };
};
var fetchStarships = function fetchStarships() {
  return function _callee3(dispatch) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://swapi.dev/api/starships/"));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: 'FETCH_STARSHIPS',
              payload: data.results
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };
};
var selectStarship = function selectStarship(starshipName) {
  return {
    type: 'SELECT_STARSHIP',
    payload: starshipName
  };
};
var getRandomPlanet = function getRandomPlanet() {
  return {
    type: 'RANDOM_PLANET'
  };
};
var setBroken = function setBroken() {
  return {
    type: 'SET_BROKEN_IMG'
  };
};
var setDefaultBroken = function setDefaultBroken() {
  return {
    type: 'SET_DEFAULT_BROKEN_IMG'
  };
};

/***/ })

})
//# sourceMappingURL=people.js.3e839fa7f5494cf77b40.hot-update.js.map