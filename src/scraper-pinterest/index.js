import { ResultSchema } from "./src/schema.js";
import { savepinapp } from "./src/savepinapp.js";

export async function pinterestdl(media, options = {}) {

  let result = await savepinapp(media);

  return ResultSchema.parse(result);
}