import { npmytdl} from "./src/npm-ytdl.js";
import { bochilteamyt } from "./src/bochil-team.js";

/**
 * Downloads a YouTube video with the specified quality.
 * 
 * @param {string} media - The URL of the YouTube video.
 * @param {Object} [options={}] - Options for downloading the video.
 * @param {string} [options.kualitas='360p'] - The quality of the video. Can be '360p', '480p', '720p', or '1080p'.
 * @returns {Promise<Object>} The result of the download operation.
 * @returns {Promise<Object>} result - The result object.
 * @returns {boolean} [result.success] - Indicates if the operation was successful.
 * @returns {string} [result.url] - The URL of the downloaded video, if successful.
 * @returns {string} [result.caption] - Optional caption of the video.
 * @returns {string} [result.from] - The source of the video.
 * @returns {string} [result.error] - Error message, if the operation failed.
 */
export async function youtubedl(media, options = {}) {
  const validQualities = ['360p', '480p', '720p', '1080p'];
  const kualitas = options.kualitas || '360p';
  
  if (!npmytdl.validateURL(media)) {
    return { success: false, error: 'URL media tidak valid. Harus merupakan link YouTube.' };
  }

   if (!validQualities.includes(kualitas)) {
    return { status: false, error: `kualitas hanya ${validQualities.join(', ')}` };
  }

  let result = await npmytdl(media, kualitas);

  if (!result.success) {
    result = await bochilteamyt(media);
  }

  return result;
}