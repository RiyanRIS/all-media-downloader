"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nayanmediadownloadertw = nayanmediadownloadertw;
var _nayanMediaDownloader = _interopRequireDefault(require("nayan-media-downloader"));
var _schema = require("./schema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  twitterdown
} = _nayanMediaDownloader.default;
async function nayanmediadownloadertw(url_media) {
  try {
    let res = await twitterdown(url_media).catch(err => {
      console.error(err);
      return {
        status: false
      };
    });
    if (res.status) {
      const url = res.data.HD ?? res.data.SD;
      if (url) {
        const final = {
          success: true,
          url,
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
    caption: undefined,
    from: undefined
  };
  return _schema.ResultSchema.parse(final);
}