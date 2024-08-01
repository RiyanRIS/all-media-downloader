import axios from "axios";
import cheerio from "cheerio";
import { ResultSchema } from "./schema.js";

export async function savepinapp(query) {
  try {
    const { data } = await axios.get(`https://www.savepin.app/download.php?url=${query}&lang=en&type=redirect`)
    const $ = cheerio.load(data)
    if ($(".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a").attr("href").includes("force-save.php")) {
      var url = decodeURIComponent($(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href").split("url=")[1])
    } else {
      var url = $(".download-link > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").attr("href")
    }
    const final = {
      success: true,
      url,
      caption: "► Play",
      from: "[*] savepin.app",
    };
    return ResultSchema.parse(final);
  } catch (err) {
    console.log(err)

    const final = {
      success: false,
      url: undefined,
      caption: undefined,
      from: undefined,
    };
  
    return ResultSchema.parse(final);
  }
}
