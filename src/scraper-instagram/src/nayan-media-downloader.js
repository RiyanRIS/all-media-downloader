import pkg from 'nayan-media-downloader';
const { ndown } = pkg;

import { ResultSchema } from "./schema.js";

export async function nayanmediadownloaderig(url_media) {
  try {
    let res = await ndown(url_media).catch((err) => {
      console.error(err);
      return { status: false };
    });

    if (res.status) {
      const url = res.data[0].url;
      const urls = res.data.map((v) => v.url )
      if(url){
        const final = {
          success: true,
          url,
          urls,
          caption: "► Play",
          from: "[*] nayan-media-downloader",
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
