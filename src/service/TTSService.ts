import axios from "axios";

const API_KEY = process.env.VUE_APP_RAPID_API_KEY;
export default {
  async scrape(text: string) {
    const options = {
      method: "POST",
      url: "https://large-text-to-speech.p.rapidapi.com/tts",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "large-text-to-speech.p.rapidapi.com",
      },
      data: { text: text },
    };

    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async downloadVideo(id: string) {
    const options = {
      method: "GET",
      url: "https://large-text-to-speech.p.rapidapi.com/tts",
      params: {
        id: id,
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "large-text-to-speech.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
