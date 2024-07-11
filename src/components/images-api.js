import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";

export default async function fetchImages(query, currentPage) {
  const response = await axios.get("/search/photos/", {
    params: {
      client_id: "vVzf19IgKpeRfRvy90KMh1Dl6wl29hsRIWtv5bnfqrc",
      page: currentPage,
      per_page: 9,
      query: query,
    },
  });

  return response.data;
}
