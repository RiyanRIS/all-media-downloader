"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tiktokdl = tiktokdl;
var _schema = require("./src/schema.js");
var _bochilTeam = require("./src/bochil-team.js");
async function tiktokdl(media, options = {}) {
  let result = await (0, _bochilTeam.bochilteamtt)(media);
  return _schema.ResultSchema.parse(result);
}