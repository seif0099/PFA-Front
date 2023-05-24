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
  adresse,
  image
) => {
  return new Promise((res, rej) => {
      const data = new FormData();
      data.append("nomEntreprise",nomEntreprise)
      data.append("description",description)
      data.append("adresse",adresse)
      data.append("telephone",telephone)
      data.append("siteWeb",siteWeb)
      data.append("codeEntreprise",codeEntreprise)
      data.append("image",image)
      data.append("email",email)
      data.append("password",password)
      axios
        .post(`${baseURL}/companyRegister`,data
          )
        .then(response => {
          res(response.data);
        })
        .catch(err => {
          rej(err);
        });
    }
  );
};
