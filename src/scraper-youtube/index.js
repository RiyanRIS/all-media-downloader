// ./index.js
import { ResultSchema } from "./src/schema.js";
import { npmytdl} from "./src/npm-ytdl.js";

export async function youtubedl(media, options = {}) {

  const itag = options.itag || 18;

  let result = await npmytdl(media, itag);

  return ResultSchema.parse(result);
}