import "dotenv/config";
import axios from "axios";
console.log(process.env);
export const func = () => {
  const apiBaseUrl = process.env.VUE_APP_API_URL;
  axios.defaults.baseURL = apiBaseUrl;

  console.log(apiBaseUrl);
};
