import { instagramdl as downloader } from "./index.js";

const testUrls = {
  // video: "https://twitter.com/CursedVideos/status/1687071264848879616?s=20",
  reel: "https://www.instagram.com/reel/C9hplTiNoDi/?igsh=MTlremd6bzQwNjEzYg==",
  // gif: "https://twitter.com/archillect/status/1687161588854243343?s=20",
  multi: "https://www.instagram.com/p/C9zeIbCy3Q4/?igsh=bTJsbHdvNm1taG5u",
  fail: "https://www.instagram.com/p/C9zeIbCy3Q409sHygjs9hslkO",
};

async function test(url) {
  if (url === "all") {
    let testResults = [];
    for (let url in testUrls) {
      testResults.push(await test(url));
    }
    return testResults.join("\n");
  } else {
    let res = await downloader(testUrls[url], {
      text: true,
    }).then((res) => {
      return `Test ${res.success ? 'passed 🟢' : 'failed 🔴'} for ${url}: ${JSON.stringify(res, null, 2)}\n`;
    }).catch((err) => {
      return `Test failed for ${url}\n\n${err}\n`;
    })
    return res;
  }
}

(async () => {
  let res = await test("multi");
  console.log(res);
})();
