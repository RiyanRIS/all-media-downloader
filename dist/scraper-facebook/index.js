"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.facebookdl = facebookdl;
var _bochilTeam = require("./src/bochil-team.js");
var _nayanMediaDownloader = require("./src/nayan-media-downloader.js");
var _schema = require("./src/schema.js");
async function facebookdl(media, options = {}) {
  let result = await (0, _bochilTeam.bochilteamfb)(media);
  if (!result.success) {
    result = await (0, _nayanMediaDownloader.nayanmediadownloaderfb)(url_media);
  }
  return _schema.ResultSchema.parse(result);
}