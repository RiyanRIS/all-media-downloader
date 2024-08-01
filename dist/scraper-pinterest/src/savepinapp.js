"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savepinapp = savepinapp;
var _axios = _interopRequireDefault(require("axios"));
var _cheerio = _interopRequireDefault(require("cheerio"));
var _schema = require("./schema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function savepinapp(query) {
  try {
    const {
      data
    } = await _axios.default.get(`https://www.savepin.app/download.php?url=${query}&lang=en&type=redirect`);
    const $ = _cheerio.default.load(data);
    if ($(".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a").attr("href").includes("force-save.php")) {
      var url = decodeURIComponent($(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href").split("url=")[1]);
    } else {
      var url = $(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href");
    }
    const final = {
      success: true,
      url,
      caption: "► Play",
      from: "[*] savepin.app"
    };
    return _schema.ResultSchema.parse(final);
  } catch (err) {
    console.log(err);
    const final = {
      success: false,
      url: undefined,
      caption: undefined,
      from: undefined
    };
    return _schema.ResultSchema.parse(final);
  }
}