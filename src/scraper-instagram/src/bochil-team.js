import { snapsave } from "@bochilteam/scraper";
import { ResultSchema } from "./schema.js";

export async function bochilteamig(url_media) {
  try {
    let res = await snapsave(url_media).catch((err) => {
      console.error(err);
      return { status: false };
    });

    if (res?.results.length != 0) {
      const url = res.results[0].url;
      const urls = res.results.map((v) => v.url);
      if (url) {
        const final = {
          success: true,
          url,
          urls,
          caption: "► Play",
          from: "[*] bochil-team",
        };
        return ResultSchema.parse(final);
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
    from: undefined,
  };

  return ResultSchema.parse(final);
}
