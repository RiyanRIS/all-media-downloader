"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instagramdl = instagramdl;
var _bochilTeam = require("./src/bochil-team.js");
var _nayanMediaDownloader = require("./src/nayan-media-downloader.js");
var _schema = require("./src/schema.js");
async function instagramdl(media, options = {}) {
  let result = await (0, _bochilTeam.bochilteamig)(media);
  if (!result.success) {
    result = await (0, _nayanMediaDownloader.nayanmediadownloaderig)(url_media);
  }
  return _schema.ResultSchema.parse(result);
}