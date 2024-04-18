import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "ZWw0K9zedynerthYprdMBlcfJimPtavBiy9zgT8r1bE";

export async function fetchImages(requestValue, currentPage) {
    try {
      const respons = await axios.get("/search/photos/", {
        params: {
          query: requestValue,
          page: currentPage,
          per_page: 10,
          client_id: `${ACCESS_KEY}`,
        },
      });
      return respons.data;
    } catch (error) {
      console.log(error.message);
    }
}