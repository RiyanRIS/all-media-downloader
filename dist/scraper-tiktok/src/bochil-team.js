"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bochilteamtt = bochilteamtt;
var _scraper = require("@bochilteam/scraper");
var _schema = require("./schema.js");
async function bochilteamtt(url_media) {
  try {
    let res = await (0, _scraper.tiktokdl)(url_media).catch(err => {
      console.error(err);
      return {
        status: false
      };
    });
    if (res) {
      const url = res?.video?.noWatermark ? res?.video?.noWatermark : res?.video?.withWatermark;
      const caption = "*" + res?.nickname + "* \n_" + res?.description + "_";
      if (url) {
        const final = {
          success: true,
          url,
          caption,
          from: "[*] bochil-team"
        };
        return _schema.ResultSchema.parse(final);
      }
    }
  } catch (e) {
    console.error(e);
  }
  const final = {
    success: false,
    url: undefined,
    caption: undefined,
    from: undefined
  };
  return _schema.ResultSchema.parse(final);
}