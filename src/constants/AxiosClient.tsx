import { Axios } from "axios";

const client = new Axios({
  baseURL: process.env.REACT_APP_BASE_URL!,
});
export default client;
