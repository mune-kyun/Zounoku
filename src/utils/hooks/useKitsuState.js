import { useEffect, useState } from "react";

const Base_API = "https://kitsu.io/api/edge";
// const sort = "?sort=-endDate,-popularityRank";
const sort = "?";
const default_URL = sort + "&page[limit]=12&page[offset]=";
const search_URL = "?filter[text]=";

export default function useKitsuState(type, searchValue, page) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(Base_API + type + default_URL + page)
      .then((response) => response.json())
      .then((result) => {
        setdata(result.data);
      });
  }, []);

  useEffect(() => {
    let URLtoFetch = "";
    if (searchValue == "") {
      URLtoFetch = Base_API + type + default_URL;
    } else {
      URLtoFetch = Base_API + type + search_URL + searchValue;
    }
    fetch(URLtoFetch)
      .then((response) => response.json())
      .then((result) => {
        setdata(result.data);
      });
  }, [searchValue]);

  useEffect(() => {
    fetch(Base_API + type + default_URL + page * 10)
      .then((response) => response.json())
      .then((result) => {
        setdata(result.data);
      });
  }, [page]);

  return [data, setdata];
}
