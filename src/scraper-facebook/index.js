import { bochilteamfb } from "./src/bochil-team.js";
import { nayanmediadownloaderfb } from "./src/nayan-media-downloader.js";
import { ResultSchema } from "./src/schema.js";

export async function facebookdl(media, options = {}) {

  let result = await bochilteamfb(media);

  if (!result.success) {
    result = await nayanmediadownloaderfb(url_media);
  }

  return ResultSchema.parse(result);
}