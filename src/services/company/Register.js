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
  adresse
) => {
  return new Promise((res, rej) => {
      axios
        .post(`${baseURL}/companyRegister`, {
          nomEntreprise,
          description,
          adresse,
          telephone,
          siteWeb,
          codeEntreprise,
          email,
          password
        })
        .then(response => {
          res(response.data);
        })
        .catch(err => {
          rej(err);
        });
    }
  );
};
