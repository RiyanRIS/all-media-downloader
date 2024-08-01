import { ResultSchema } from "./src/schema.js";
import { bochilteamtt } from "./src/bochil-team.js";

export async function tiktokdl(media, options = {}) {
  let result = await bochilteamtt(media);

  return ResultSchema.parse(result);
}