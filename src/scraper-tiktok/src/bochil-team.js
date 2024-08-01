import {tiktokdl as ttdl_bochilteam} from '@bochilteam/scraper';
import { ResultSchema } from "./schema.js";

export async function bochilteamtt(url_media) {
  try {
    let res = await ttdl_bochilteam(url_media).catch((err) => {
      console.error(err);
      return { status: false };
    });

    if (res) {
      const url = res?.video?.noWatermark
        ? res?.video?.noWatermark
        : res?.video?.withWatermark;
      const caption = "*" + res?.nickname + "* \n_"
      + res?.description + "_";
      if(url){
        const final = {
          success: true,
          url,
          caption,
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
    caption: undefined,
    from: undefined,
  };

  return ResultSchema.parse(final);
}
