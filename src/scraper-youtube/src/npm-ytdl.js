// ./src/npm-ytdl.js
// import ytdl from "ytdl-core";
import ytdl from "@distube/ytdl-core";

// credit: https://github.com/distubejs/ytdl-core
export async function npmytdl(query, itag) {
  try {
    const infos = await ytdl.getInfo(query);
    let yta = ytdl.chooseFormat(infos.formats, { quality: itag });
    let url = yta.url

    const final = {
      success: true,
      url,
      caption: "► Play",
      from: "[*] ytdl-core",
    };
    return final;
  } catch (err) {
    console.log(err)

    const final = {
      success: false,
      url: undefined,
      caption: undefined,
      from: undefined,
    };
  
    return final;
  }
}
