"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = foo;

var websocket = _interopRequireWildcard(require("websocket"));

var _nano = require("./nano");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function foo() {
  console.error("ERR");
  /*const transaction = JSON.parse(message.utf8Data);
  const { amount, is_send } = transaction;
  if(is_send) {
    const amoutNumber = parseInt(amount);
    const amoutNano = from_raw_to_nano(amoutNumber);
  }*/
}

var wsClient = new websocket.client();
wsClient.on("connectFailed", function () {
  console.warn("Connection failed!"); //process.exitCode(1);
});
wsClient.on("connect", function (wsConnection) {
  wsConnection.on("error", function () {
    console.warn("Connection error!");
  });
  wsConnection.on("close", function () {
    console.warn("Connection closed!"); //process.exitCode(1);
  });
  wsConnection.on("message", function (message) {
    console.log(message);

    if (message.type !== "utf8") {
      console.error("Invalid message type"); //process.exitCode(1);
    }

    foo();
  });
  console.log("Connected!");
  var addr = "nano_19qkxbngbr8msg6dnqxdnqgdu1xrqah3odot8krmk18oihskca6hspcord9e";

  try {
    wsConnection.sendUTF(JSON.stringify({
      "address": addr,
      "api_key": "0"
    }));
    console.log("Sended!");
  } catch (e) {
    console.error(e); //process.exitCode(1);
  }
});
wsClient.connect("ws://yapraiwallet.space/call");