import { useEffect, useState } from "react";

export default function FetchDetails(genreLink, studioLink) {
  const [genre, setgenre] = useState([]);
  const [studio, setstudio] = useState("");

  useEffect(() => {
    fetch(genreLink)
      .then((response) => response.json())
      .then((result) => {
        setgenre(result.data);
      });

    fetch(studioLink)
      .then((response) => response.json())
      .then((result) => {
        let nextLink = "";
        const index = result.data.length - 1;
        nextLink = result.data[index].relationships.company.links.related;
        return nextLink;
      })
      .catch((e) => {
        setstudio("");
      })
      .then((link) => {
        return fetch(link);
      })
      .then((response) => response.json())
      .then((result) => setstudio(result.data.attributes.name));
  }, []);

  return [genre, setgenre, studio, setstudio];
}
