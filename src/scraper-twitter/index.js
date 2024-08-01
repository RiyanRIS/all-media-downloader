import { ResultSchema } from "./src/schema.js";
import { gettwittermedia } from "./src/get-twitter-media.js";
import { nayanmediadownloadertw } from "./src/nayan-media-downloader.js";

export async function twitterdl(media, options = {}) {
  const url_media = media.replace(/x\.com/g, "twitter.com");

  let result = await gettwittermedia(url_media);

  if (!result.success) {
    result = await nayanmediadownloadertw(url_media);
  }

  return ResultSchema.parse(result);
}