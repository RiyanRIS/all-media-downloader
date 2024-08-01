"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nayanmediadownloaderig = nayanmediadownloaderig;
var _nayanMediaDownloader = _interopRequireDefault(require("nayan-media-downloader"));
var _schema = require("./schema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  ndown
} = _nayanMediaDownloader.default;
async function nayanmediadownloaderig(url_media) {
  try {
    let res = await ndown(url_media).catch(err => {
      console.error(err);
      return {
        status: false
      };
    });
    if (res.status) {
      const url = res.data[0].url;
      const urls = res.data.map(v => v.url);
      if (url) {
        const final = {
          success: true,
          url,
          urls,
          caption: "► Play",
          from: "[*] nayan-media-downloader"
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