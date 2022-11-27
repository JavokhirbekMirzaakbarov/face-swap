import axios from "axios";

// common http request
export default axios.create({
  baseURL: "http://3.72.255.214:8000/",
  headers: {
    "Content-type": "application/json",
  },
});
