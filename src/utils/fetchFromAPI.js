import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

const options = {
  params: {
    maxResults: "50",
    key: process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
