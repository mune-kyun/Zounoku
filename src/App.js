import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AnimeList from "./components/AnimeList.js";
import MangaList from "./components/MangaList.js";
import Navbar from "./components/Navbar.js";
import React, { useState } from "react";

function App() {
  const [contentType, setcontentType] = useState("/anime");

  return (
    <Router>
      <Navbar setcontentType={setcontentType} />
      <Switch>
        <Route path="/" exact={true}></Route>
        <Route path="/anime">
          <AnimeList />
        </Route>
        <Route path="/manga">
          <MangaList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
