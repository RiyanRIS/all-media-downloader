"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitterdl = twitterdl;
var _schema = require("./src/schema.js");
var _getTwitterMedia = require("./src/get-twitter-media.js");
var _nayanMediaDownloader = require("./src/nayan-media-downloader.js");
async function twitterdl(media, options = {}) {
  const url_media = media.replace(/x\.com/g, "twitter.com");
  let result = await (0, _getTwitterMedia.gettwittermedia)(url_media);
  if (!result.success) {
    result = await (0, _nayanMediaDownloader.nayanmediadownloadertw)(url_media);
  }
  return _schema.ResultSchema.parse(result);
}