import { bochilteamig } from "./src/bochil-team.js";
import { nayanmediadownloaderig } from "./src/nayan-media-downloader.js";
import { ResultSchema } from "./src/schema.js";

export async function instagramdl(media, options = {}) {

  let result = await bochilteamig(media);

  if (!result.success) {
    result = await nayanmediadownloaderig(url_media);
  }

  return ResultSchema.parse(result);
}