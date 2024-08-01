"use strict";

var _index = require("./index.js");
const testUrls = {
  video: "https://www.facebook.com/MITCSAIL/videos/175310064147000/",
  watch: "https://fb.watch/9WktuN9j-z",
  // gif: "https://twitter.com/archillect/status/1687161588854243343?s=20",
  // multi: "https://www.instagram.com/p/C9zeIbCy3Q4/?igsh=bTJsbHdvNm1taG5u",
  fail: "https://fb.watch/9WktusYhLKN9j-z"
};
async function test(url) {
  if (url === "all") {
    let testResults = [];
    for (let url in testUrls) {
      testResults.push(await test(url));
    }
    return testResults.join("\n");
  } else {
    let res = await (0, _index.facebookdl)(testUrls[url], {
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
  let res = await test("video");
  console.log(res);
})();