webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  people: [],
  selectedPerson: {},
  isFetchingPeople: true,
  planets: [],
  selectedPlanet: {},
  isFetchingPlanet: true,
  starships: [],
  selectedStarship: {},
  isFetchingStarship: true,
  randomPlanet: {},
  isFetchingRandomPlanet: true,
  broken: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // console.log(action.type);
  switch (action.type) {
    case 'FETCH_PEOPLE':
      var updatedPeople = action.payload.map(function (el, i) {
        el.id = i + 1;
        return el;
      });
      return _objectSpread({}, state, {
        people: updatedPeople,
        selectedPerson: updatedPeople[0],
        isFetchingPeople: false
      });

    case 'SELECT_PEOPLE':
      var filteredPeople = state.people.filter(function (el) {
        return el.name === action.payload;
      });
      return _objectSpread({}, state, {
        selectedPerson: filteredPeople[0]
      });

    case 'FETCH_PLANETS':
      var updatePlanets = action.payload.map(function (el, i) {
        el.id = el.url.match(/([0-9]*)\/$/)[1];
        return el;
      });
      return _objectSpread({}, state, {
        planets: updatePlanets,
        selectedPlanet: updatePlanets[1],
        isFetchingPlanet: false,
        isFetchingRandomPlanet: false
      });

    case 'SELECT_PLANET':
      var filteredPlanets = state.planets.filter(function (el) {
        return el.name === action.payload;
      });
      return _objectSpread({}, state, {
        selectedPlanet: filteredPlanets[0]
      });

    case 'FETCH_STARSHIPS':
      var updateStarships = action.payload.map(function (el, i) {
        el.id = el.url.match(/([0-9]*)\/$/)[1];
        return el;
      });
      return _objectSpread({}, state, {
        starships: updateStarships,
        selectedStarship: updateStarships[0],
        isFetchingStarship: false
      });

    case 'SELECT_STARSHIP':
      var filteredStarships = state.starships.filter(function (el) {
        return el.name === action.payload;
      });
      return _objectSpread({}, state, {
        selectedStarship: filteredStarships[0]
      });

    case 'RANDOM_PLANET':
      var randomID = Math.round(Math.random() * 10 + 1);
      var randomPlanet = state.planets[randomID];
      console.log(randomPlanet);
      return _objectSpread({}, state, {
        randomPlanet: randomPlanet || state.planets[3]
      });

    case 'SET_BROKEN_IMG':
      return _objectSpread({}, state, {
        broken: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.0797f3e6bb789739f32f.hot-update.js.map