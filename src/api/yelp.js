import axios from "axios";
import { YELP_SECRET } from "../env/keys";

export const yelpAPI = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer " + YELP_SECRET,
  },
});
