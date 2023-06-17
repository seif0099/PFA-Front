import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";
export const getJobByName = (title) => {
  return new Promise((res, rej) => {
    axios
      .get(`${baseURL}/offres`, {
        title,
      })
      .then((response) => {
        res(response.data);
      })
      .catch((response) => {
        rej(response);
      });
  });
};
