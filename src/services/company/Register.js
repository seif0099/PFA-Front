import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";
export const register = (
  nomEntreprise,
  description,
  telephone,
  siteWeb,
  codeEntreprise,
  email,
  password,
  adress,
  confirmPass
) => {
  return new Promise((res, rej) => {
    if (
      email !== "" &&
      password !== "" &&
      description !== "" &&
      telephone !== "" &&
      siteWeb !== "" &&
      codeEntreprise !== "" &&
      password !== "" &&
      adress !== "" &&
      confirmPass!=="password"
    ) {
      axios
        .post(`${baseURL}/companyRegister`, {
          nomEntreprise,
          description,
          adress,
          telephone,
          siteWeb,
          codeEntreprise,
          email,
          password,
          confirmPass,
        })
        .then((response) => {
          res(response.data);
        })
        .catch((response) => {
          rej(response);
        });
    } else {
      rej("empty field !");
    }
  });
};
