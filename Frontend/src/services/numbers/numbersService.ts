import axios from "axios";

const API_URL = "/api/numbers/";

// inquire a number
export const search = async (number: string) => {
  const response = await axios.get(API_URL + `search?number=${number}`);
  return response.data;
};

//get seach history
export const searchHistory = async () => {
  const response = await axios.get(API_URL + "history");
  return response.data;
};
