import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/Navbar.css";

const pages = [
  { to: "/anime", show: "Anime" },
  { to: "/manga", show: "Manga" },
];

export default function Navbar({ setcontentType }) {
  const [pagesIndex, setpagesIndex] = useState(0);

  function handleLinkClick(index) {
    setpagesIndex(index);
    setcontentType(pages[index].to);
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h4 onClick={() => setpagesIndex(-1)}>ZOUNOKU</h4>
        </Link>
      </div>
      <div className="pages">
        <ul>
          {pages.map((page, index) => {
            const addedClass = index == pagesIndex ? "underlined" : "";
            return (
              <li key={index}>
                <Link to={page.to}>
                  <div
                    className={"links " + addedClass}
                    onClick={() => handleLinkClick(index)}
                  >
                    {page.show}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
