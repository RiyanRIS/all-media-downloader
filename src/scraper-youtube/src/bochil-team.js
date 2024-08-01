import { youtubedl as ytdl_bochilteam } from "@bochilteam/scraper";

/**
 * Downloads a YouTube video using the bochilteam scraper with the specified quality.
 * 
 * @param {string} media - The URL or ID of the YouTube video.
 * @param {string} kualitas - The quality of the video. Can be '240p', '360p', '480p', '720p', or '1080p'.
 * @returns {Promise<Object>} The result of the download operation.
 * @returns {Promise<Object>} result - The result object.
 * @returns {boolean} result.success - Indicates if the operation was successful.
 * @returns {string} [result.url] - The URL of the downloaded video, if successful.
 * @returns {string} [result.caption] - The title of the video.
 * @returns {string} result.from - The source of the video, which is always "[*] bochil-team".
 * @returns {string} [result.error] - Error message, if the operation failed.
 */
export async function bochilteamyt(media, kualitas) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await ytdl_bochilteam(media).catch((err) => {
        console.error(err);
        resolve({ status: false, error: err })
      });

      if (res) {
        const url = await res.video[kualitas].download();
        const caption = res?.title;
        if (url) {
          resolve({
            success: true,
            url,
            caption,
            from: "[*] bochil-team",
          })
        } else {
          resolve({
            success: false,
            error: "Failed to download the video.",
          });
        }
      }
    } catch (err) {
      resolve({
        success: false,
        error: err.message
      })
    }
  });
}
