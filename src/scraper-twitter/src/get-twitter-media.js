import getTwitterMedia from "get-twitter-media";
import { ResultSchema } from "./schema.js";

export async function gettwittermedia(url_media) {
  try {
    let res = await getTwitterMedia(url_media).catch((err) => {
      console.error(err);
      return { found: false };
    });

    if (res.found) {
      const { url } = res.media[0];
      const final = {
        success: true,
        url,
        caption: "► Play",
        from: "[*] get-twitter-media",
      };
      return ResultSchema.parse(final);
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
