"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.npmytdl = npmytdl;
var _ytdlCore = _interopRequireDefault(require("@distube/ytdl-core"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// ./src/npm-ytdl.js
// import ytdl from "ytdl-core";

// credit: https://github.com/distubejs/ytdl-core
async function npmytdl(query, itag) {
  try {
    const infos = await _ytdlCore.default.getInfo(query);
    let yta = _ytdlCore.default.chooseFormat(infos.formats, {
      quality: itag
    });
    let url = yta.url;
    const final = {
      success: true,
      url,
      caption: "► Play",
      from: "[*] ytdl-core"
    };
    return final;
  } catch (err) {
    console.log(err);
    const final = {
      success: false,
      url: undefined,
      caption: undefined,
      from: undefined
    };
    return final;
  }
}