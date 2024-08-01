import { youtubedl as downloader } from "./index.js";

const testUrls = {
  video: "https://www.youtube.com/watch?v=FjFsx6iQE3Y/",
  short: "https://www.youtube.com/shorts/tZWS4S4ej_8/",
  fail: "https://www.youtube.com/shorts/tZWSsd4Dsf7sdf94S4ej_8",
};

async function test(url) {
  if (url === "all") {
    let testResults = [];
    for (let url in testUrls) {
      testResults.push(await test(url));
    }
    return testResults.join("\n");
  } else {
    let res = await downloader(testUrls[url])
    .then((res) => {
      return `Test ${res.success ? 'passed 🟢' : 'failed 🔴'} for ${url}: ${JSON.stringify(res, null, 2)}\n`;
    }).catch((err) => {
      return `Test failed for ${url}\n\n${err}\n`;
    })
    return res;
  }
}

(async () => {
  let res = await test("video");
  console.log(res);
})();
