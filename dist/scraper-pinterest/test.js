"use strict";

var _index = require("./index.js");
const testUrls = {
  pinterest: "https://id.pinterest.com/pin/671669731964972211/",
  pinterest_video: "https://id.pinterest.com/pin/530017449909975593/",
  pin: "https://pin.it/3RKUb7KmC",
  pin_video: "https://pin.it/42mknfGRm",
  video2: "https://id.pinterest.com/pin/make-a-flower-chandelier-this-summer-video--462181980514459983/",
  fail: "https://pin.it/3RKUb7KsUt6FmC-z"
};
async function test(url) {
  if (url === "all") {
    let testResults = [];
    for (let url in testUrls) {
      testResults.push(await test(url));
    }
    return testResults.join("\n");
  } else {
    let res = await (0, _index.pinterestdl)(testUrls[url], {
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
  let res = await test("pin");
  console.log(res);
})();