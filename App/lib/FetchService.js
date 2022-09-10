import { BASE_URL } from "./Constant";

export const FetchCall = async slug => {
  const apiURL = BASE_URL + `?cate=${slug}`;
  const res = await fetch(apiURL);
  const categories = await res.json();
  return categories;
};
