export const getJobById = (id) => {
  return new Promise((res, rej) => {
    axios
      .get(`${baseURL}/offre?id=${id}`, {
        headers: {
          Authorization: Cookies.get("jwt"),
        },
      })
      .then((response) => {
        res(response.data);
      })
      .catch((response) => {
        rej(response);
      });
  });
};
