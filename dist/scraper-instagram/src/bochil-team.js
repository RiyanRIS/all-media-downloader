"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bochilteamig = bochilteamig;
var _scraper = require("@bochilteam/scraper");
var _schema = require("./schema.js");
async function bochilteamig(url_media) {
  try {
    let res = await (0, _scraper.snapsave)(url_media).catch(err => {
      console.error(err);
      return {
        status: false
      };
    });
    if (res?.results.length != 0) {
      const url = res.results[0].url;
      const urls = res.results.map(v => v.url);
      if (url) {
        const final = {
          success: true,
          url,
          urls,
          caption: "► Play",
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
    urls: undefined,
    caption: undefined,
    from: undefined
  };
  return _schema.ResultSchema.parse(final);
}