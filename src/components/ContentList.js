import React, { useState, useRef } from "react";
import Card from "./Card.js";
import useKitsuState from "../utils/hooks/useKitsuState.js";
import "../css/ContentList.css";
import Pagination from "./Pagination.js";
import dateConverter from "../utils/hooks/dateConverter.js";

export default function ContentList({ type }) {
  const search = useRef("");

  const [searchValue, setsearchValue] = useState("");
  const [sortByValue, setsortByValue] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [pages, setpages] = useState([
    "prev",
    ...Array.from({ length: 10 }, (_, i) => i + 1),
    "next",
  ]);

  const [data, setdata] = useKitsuState(type, searchValue, currentPage);

  function handleSearchSubmit() {
    const searchRefValue = search.current.value;
    if (searchRefValue != searchValue) {
      setsearchValue(searchRefValue);
    }
  }

  function handleSortByValue(event) {
    setsortByValue(event.target.value);
  }

  function handlePagination(button) {
    if (button == 0) {
      setcurrentPage(currentPage - 1);
    } else if (button == 1) {
      setcurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="content-page">
      <div className="content-filter">
        <div className="option-search">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" value={sortByValue} onChange={handleSortByValue}>
            <option value="">Average User Rating</option>
            <option value="/trending/anime">Trending Anime</option>
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." ref={search} />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
      </div>
      <div className="content-container">
        {data.map((result) => {
          const key = result.id;
          const genre = result.relationships.genres.links.related;
          const studio = result.relationships.productions.links.related;
          const type = result.type;

          const attributes = result.attributes;
          const episodeCount = attributes.episodeCount;
          const episodeLength = attributes.episodeLength;
          const title = attributes.titles.en_jp;
          const rating = attributes.averageRating;
          const startDate = dateConverter(attributes.startDate);
          const status = attributes.status;
          const subtype = attributes.subtype;
          const synopsis = attributes.synopsis;
          const userCount = attributes.userCount;
          const image = attributes.posterImage.small;
          return (
            <Card
              key={key}
              episodeCount={episodeCount}
              episodeLength={episodeLength}
              image={image}
              title={title}
              genre={genre}
              rating={rating}
              subtype={subtype}
              startDate={startDate}
              status={status}
              studio={studio}
              synopsis={synopsis}
              type={type}
              userCount={userCount}
            />
          );
        })}
      </div>
      <Pagination
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
}
