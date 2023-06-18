import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const userUpdate = (
  lastname,
  firstname,
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
    formData.append("email", email);
    formData.append("adresse", adresse);
    formData.append("age", age);
    formData.append("telephone", telephone);

    if (typeof image != "string") {
      formData.append("image", image);
    }

    console.log(image);
    axios
      .put(`${baseURL}/user`, formData, {
        headers: {
          "Content-Type": "multipart/formdata",

          Authorization: Cookies.get("jwt"),
        },
      })
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};
