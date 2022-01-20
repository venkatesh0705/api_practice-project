import axios from "axios";

export default class Apiservice {
  apiData() {
    return axios
      .get("https://61a085036c3b400017e69900.mockapi.io/sampleData")
      .then((res) => res.data);
  }
}
