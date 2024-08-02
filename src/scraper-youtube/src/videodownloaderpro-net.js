import axios from 'axios';
import cheerio from 'cheerio';

async function rebel(url, dev = false) {
  try {
    const URL = "https://videodownloaderpro.net/en64/";
    
    // Mengirim permintaan GET ke URL menggunakan axios
    const { data } = await axios.get(URL);
    
    // Memuat halaman ke cheerio untuk parsing
    const $ = cheerio.load(data);
    
    // Menyetel form input dengan URL yang diberikan
    const form = {
      search: url,
    };
    
    // Mengirim form menggunakan POST request
    const response = await axios.post(URL, form, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
      }
    });
    
    // Memuat halaman hasil pencarian ke cheerio
    const resultPage = cheerio.load(response.data);

    // Mendapatkan informasi video
    const thub = resultPage(".videoImage").css("background-image").replace('url("', "").replace('")', "") || "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
    const title = resultPage(".videoTitle").text() || "No title";
    const duration = resultPage(".timeCode").text() || "";
    const link_group = resultPage(".downloadLinks");

    let links = [];
    link_group.each((index, element) => {
      const format = resultPage(element).find(".formats").text();
      const quality = resultPage(element).find(".quality").text();
      const linkUrl = resultPage(element).find("a").attr("href");
      links.push({ format, quality, url: linkUrl });
    });

    const result = {
      info: { 
        title, 
        thub, 
        duration,
      },
      links,
    };

    if (url.includes("instagram.com")) {
      const data = await insta(url, dev);
      console.log(data);
      result.info.thub = data.thub;
      result.links = [];
      result.links.push({ format: "MP4", quality: "SD", url: data.link });
    }

    return result;
  } catch (error) {
    console.error(error);
  }
}

export default rebel;
