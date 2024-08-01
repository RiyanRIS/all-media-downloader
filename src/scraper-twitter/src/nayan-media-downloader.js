import pkg from 'nayan-media-downloader';
const { twitterdown } = pkg;

import { ResultSchema } from "./schema.js";

export async function nayanmediadownloadertw(url_media) {
  try {
    let res = await twitterdown(url_media).catch((err) => {
      console.error(err);
      return { status: false };
    });

    if (res.status) {
      const url = res.data.HD ?? res.data.SD;
      if(url){
        const final = {
          success: true,
          url,
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
    caption: undefined,
    from: undefined,
  };

  return ResultSchema.parse(final);
}
