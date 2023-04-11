import axios from "axios";

const api = axios.create({
  baseURL:
    "https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/",
});

export default api;
