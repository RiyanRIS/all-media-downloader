import ytdl from "@distube/ytdl-core";

/**
 * Downloads a YouTube video using ytdl-core with the specified quality.
 * 
 * @param {string} media - The URL or ID of the YouTube video.
 * @param {string} kualitas - The quality of the video. Can be '360p', '480p', '720p', or '1080p'.
 * @returns {Promise<Object>} The result of the download operation.
 * @returns {Promise<Object>} result - The result object.
 * @returns {boolean} result.success - Indicates if the operation was successful.
 * @returns {string} [result.url] - The URL of the downloaded video, if successful.
 * @returns {string} [result.caption] - The title of the video, always "► Play" in this case.
 * @returns {string} result.from - The source of the video, which is always "[*] ytdl-core".
 * @returns {string} [result.error] - Error message, if the operation failed.
 */
export async function npmytdl(media, kualitas) {
  return new Promise(async (resolve, reject) => {
    try {
      const qualityValues = {
        '360p': 18,
        '480p': 135,
        '720p': 22,
        '1080p': 37,
      };
      const valueForQuality = qualityValues[kualitas];

      const infos = await ytdl.getInfo(media);
      let yta = ytdl.chooseFormat(infos.formats, { quality: valueForQuality });
      let url = yta.url;
      
      resolve({
        success: true,
        url,
        caption: "► Play",
        from: "[*] ytdl-core",
      });
    } catch (err) {
      resolve({
        success: false,
        error: err.message,
      });
    }
  });
}
