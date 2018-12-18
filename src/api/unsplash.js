import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 11c30f8f42c132c37d350807130d1bd00db6a5b8cb2db658c19419532d010387"
  }
});
