import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api";
export const login = (email, password) => {
  return new Promise((res, rej) => {
      axios.post(`${baseURL}/companyLogin`, {
          email,
          password,
        })
        .then(response => {
          res(response.data);
        })
        .catch(response => {
          rej(response);
        });
    
  });
};
