"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./alert/index.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  //console.log(useParams());
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Texto"));
}

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  exact: true,
  component: Home
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/alert",
  exact: true,
  component: _index.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/alert/:wallet",
  component: _index.default
}))), document.getElementById("root"));