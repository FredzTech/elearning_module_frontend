//WE CREATE AN INSTANCE OF AXIOS AND EXPORT IT TO USE IT FROM NOW HENCEFORTH.
import axios from "axios";

const instance = axios.create({
  // baseURL: "https://kapesha-warmup.herokuapp.com/",
  baseURL: "http://localhost:4000/",
});
export default instance;
