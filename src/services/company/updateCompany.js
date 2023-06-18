import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const companyUpdate = (
  companyName,
  description,
  email,
  adresse,
  code,
  telephone,
  image
) => {
  return new Promise((res, rej) => {
    const formData = new FormData();
    formData.append("nomEntreprise", companyName);
    formData.append("description", description);
    formData.append("email", email);
    formData.append("adresse", adresse);
    formData.append("codeEntreprise", code);
    formData.append("telephone", telephone);

    console.log(typeof image);
    if (typeof image != "string") {
      formData.append("image", image);
    }

    console.log(image);
    console.log(formData);
    axios
      .put(`${baseURL}/company`, formData, {
        headers: {
          "Content-Type": "multipart/formdata",
          Authorization: Cookies.get("jwt"),
        },
      })
      .then((response) => res(response.data))
      .catch((err) => rej(err));
  });
};
