import { fetchData } from "../api";
import { getDateTodayYMD } from "../helper";

export const getDeals = async (url) => {
  return await fetchData(url)
    .then((data) => {
      localStorage.setItem("deals", JSON.stringify(data));
      localStorage.setItem("fetchDate", getDateTodayYMD());

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getStores = async (url) => {
  return await fetchData(url)
    .then((data) => {
      localStorage.setItem("stores", JSON.stringify(data));

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
