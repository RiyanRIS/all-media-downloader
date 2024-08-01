"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youtubedl = youtubedl;
var _schema = require("./src/schema.js");
var _npmYtdl = require("./src/npm-ytdl.js");
// ./index.js

async function youtubedl(media, options = {}) {
  const itag = options.itag || 18;
  let result = await (0, _npmYtdl.npmytdl)(media, itag);
  return _schema.ResultSchema.parse(result);
}