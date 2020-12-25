import React, { useState } from "react";
import "../css/Card.css";
import FetchDetails from "../utils/hooks/fetchDetails.js";

export default function Card({
  episodeCount,
  episodeLength,
  image,
  title,
  genre,
  rating,
  subtype,
  startDate,
  status,
  studio,
  synopsis,
  type,
  userCount,
}) {
  const [genreValue, setgenreValue, studioValue, setstudioValue] = FetchDetails(
    genre,
    studio
  );

  return (
    <div className="parent">
      <div className="top">
        <div>
          <a id="title" href="">
            {title}
          </a>
        </div>
        <div className="genres">
          <ul>
            {genreValue.map((data) => {
              genre = data.attributes.name;
              return (
                <li>
                  <a id="genre">{genre}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="horizontal">
          {studioValue.length > 0 && <p id="studio">{studioValue} |</p>}
          {typeof episodeCount && typeof episodeLength == "number" && (
            <p id="episode">
              {episodeCount} eps x {episodeLength} min |
            </p>
          )}
          <p id="type" style={{ color: "rgb(93, 87, 87)" }}>
            {type}
          </p>
        </div>
      </div>
      <div className="mid">
        <img src={image} />
        <div>
          <div id="status">
            <p>{status}</p>
          </div>
          <p id="synopsis">{synopsis}</p>
        </div>
      </div>
      <div className="below">
        <p id="subtype">
          {subtype} - {startDate}
        </p>
        <p id="rating">&#11088; {rating}</p>
        <p id="userCount">&#9817; {userCount}</p>
      </div>
    </div>
  );
}
