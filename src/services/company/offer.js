import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const getOffre = () => {
  return new Promise((res, rej) => {
    axios
      .get(`${baseURL}/postuleOffreCompany`, {
        headers: {
          Authorization: Cookies.get("jwt"),
        },
      })
      .then((response) => {
        res(response.data)
      })
      .catch((response) => {
        rej(response);
      });
  });
};
