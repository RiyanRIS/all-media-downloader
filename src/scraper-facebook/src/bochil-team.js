import got from "got";
import cheerio from "cheerio";
import { ResultSchema } from "./schema.js";

// credit: https://github.com/BochilTeam/scraper/tree/master/packages/scraper-facebook
const DEFAULT_HEADERS = {
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
  'sec-ch-ua-mobile': '?0',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
};

export async function bochilteamfb(url_media) {
  try {
    const html = await got("https://fdownloader.net/en", {
      headers: {
        ...DEFAULT_HEADERS,
      },
    }).text();
    const k_url_search = /k_url_search="(.*?)"/.exec(html)[1];
    const k_exp = /k_exp="(.*?)"/.exec(html)[1];
    const k_token = /k_token="(.*?)"/.exec(html)[1];
    const form = {
      k_exp,
      k_token,
      q: url_media,
      lang: "en",
      web: "fdownloader.net",
      v: "v2",
      w: "",
    };
    const data = await got
      .post(k_url_search, {
        headers: {
          ...DEFAULT_HEADERS,
          referer: "https://fdownloader.net/",
        },
        form,
      })
      .json();
    const $ = cheerio.load(data.data);
    const video = $("table.table")
      .eq(0)
      .find("tbody > tr")
      .map((_, el) => {
        const $el = $(el);
        const $td = $el.find("td");
        const quality = $td.eq(0).text();
        const url = $td.eq(2).find("a").attr("href");
        if (url) {
          return {
            quality,
            url
          };
        }
        return false;
      })
      .toArray()
      .filter(Boolean);
      const final = {
        success: true,
        url: video[0].url,
        urls: video.map((v) => v.url),
        caption: "► Play",
        from: "[*] bochil-team",
      };
    
      return ResultSchema.parse(final);
  } catch (e) {
    console.error(e);
  }

  const final = {
    success: false,
    url: undefined,
    urls: undefined,
    caption: undefined,
    from: undefined,
  };

  return ResultSchema.parse(final);
}