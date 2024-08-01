"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gettwittermedia = gettwittermedia;
var _getTwitterMedia = _interopRequireDefault(require("get-twitter-media"));
var _schema = require("./schema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function gettwittermedia(url_media) {
  try {
    let res = await (0, _getTwitterMedia.default)(url_media).catch(err => {
      console.error(err);
      return {
        found: false
      };
    });
    if (res.found) {
      const {
        url
      } = res.media[0];
      const final = {
        success: true,
        url,
        caption: "► Play",
        from: "[*] get-twitter-media"
      };
      return _schema.ResultSchema.parse(final);
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