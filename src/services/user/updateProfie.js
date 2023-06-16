import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const userUpdate = (
  lastname,
  firstname,
  password,
  email,
  adresse,
  age,
  telephone,
  image
) => {
  return new Promise((res, rej) => {
    const formData = new FormData();
    formData.append("nom", lastname);
    formData.append("prenom", firstname);
    formData.append("image", image);
    formData.append("adresse", adresse);
    formData.append("age", age);
    formData.append("telephone", telephone);
    formData.append("email", email);
    formData.append("password", password);
    axios
      .put(`${baseURL}/user`, formData, {
        headers: {
          Authorization: Cookies.get("jwt"),
        },
      })
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};
