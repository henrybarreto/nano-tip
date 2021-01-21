"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _client = _interopRequireDefault(require("../../client"));

var _nano = require("../../nano");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Alert(props) {
  var _useParams = (0, _reactRouterDom.useParams)(),
      wallet = _useParams.wallet;

  if (!wallet) {
    return /*#__PURE__*/_react.default.createElement("h1", null, "Error: Wallet addr needed!");
  }

  (0, _react.useEffect)(function () {
    console.log((0, _nano.from_raw_to_nano)("1000000000000000000000000000000000"));
  });
  var tip_amount = "00000.1";
  var tip_image = "/image.gif";
  var tip_text = "Thank you for the ".concat(tip_amount, " Nano tip!"); //const tip_from_addr = "nano_1jg4zyh98x8rm1d9w9tqtwdb1k3keqwxa4wjnurtakzp5qf7n8g7trqcqiqc";

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: styled.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styled.screen
  }, /*#__PURE__*/_react.default.createElement("main", {
    style: styled.tip
  }, /*#__PURE__*/_react.default.createElement("header", {
    style: styled.tipHeader
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: styled.tipImage,
    src: tip_image,
    alt: tip_text
  })), /*#__PURE__*/_react.default.createElement("p", {
    style: styled.tipText
  }, tip_text), /*#__PURE__*/_react.default.createElement("audio", null)))));
}

var styled = {
  container: {
    //visibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh" //background: "#00FF00"

  },
  screen: {},
  tip: {
    width: "100%",
    height: "100%"
  },
  tipHeader: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  tipImage: {
    width: "65vw"
  },
  tipText: {
    fontFamily: "Montserrat",
    fontSize: "3em",
    color: "#000034",
    textAlign: "center"
  },
  tipAmount: {}
};
var animationStyled = {
  fadeOut: {
    opacity: "0",
    transition: "opacity 1s"
  },
  fadeIn: {
    opacity: "1",
    transition: "opacity 1s"
  }
};