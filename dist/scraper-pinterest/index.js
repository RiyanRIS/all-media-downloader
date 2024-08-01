"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pinterestdl = pinterestdl;
var _schema = require("./src/schema.js");
var _savepinapp = require("./src/savepinapp.js");
async function pinterestdl(media, options = {}) {
  let result = await (0, _savepinapp.savepinapp)(media);
  return _schema.ResultSchema.parse(result);
}