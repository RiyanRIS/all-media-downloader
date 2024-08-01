"use strict";

var _index = require("./index.js");
const testUrls = {
  tiktok: "https://www.tiktok.com/@fadiljaidi/video/7392518292352683270",
  vt: "https://vt.tiktok.com/ZSYVx8jYY",
  fail: "https://vt.tiktok.com/inigagalbro"
};
async function test(url) {
  if (url === "all") {
    let testResults = [];
    for (let url in testUrls) {
      testResults.push(await test(url));
    }
    return testResults.join("\n");
  } else {
    let res = await (0, _index.tiktokdl)(testUrls[url], {
      text: true
    }).then(res => {
      return `Test ${res.success ? 'passed 🟢' : 'failed 🔴'} for ${url}: ${JSON.stringify(res, null, 2)}\n`;
    }).catch(err => {
      return `Test failed for ${url}\n\n${err}\n`;
    });
    return res;
  }
}
(async () => {
  let res = await test("fail");
  console.log(res);
})();