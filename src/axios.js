//WE CREATE AN INSTANCE OF AXIOS AND EXPORT IT TO USE IT FROM NOW HENCEFORTH.
import axios from "axios";

const instance = axios.create({
  // # CHANGING THE REPORTING OFFICER
  baseURL: "https://kapesha-warmup.herokuapp.com/",
  // baseURL: "http://localhost:4000/",
  // # CHANGING THE REPORTING OFFICER
  //   baseURL: "https://daraja-integration.herokuapp.com/",
  // baseURL: "http://localhost:4000/",
  // baseURL: "https://qwertz-rent.herokuapp.com/",
});
export default instance;
