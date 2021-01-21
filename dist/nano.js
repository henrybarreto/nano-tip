"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from_raw_to_nano = from_raw_to_nano;

function from_raw_to_nano(raw) {
  var nano = Math.pow(10, 30);
  return raw / nano;
}