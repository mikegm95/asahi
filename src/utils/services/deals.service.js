import { fetchData } from "../api";

export const getGameDeal = async (url) => {
  return await fetchData(url)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
