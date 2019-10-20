import React, { useState, useEffect } from "react";
import Header from "./Header";
import * as utils from "./utils";
import "./App.css";

const url = "https://restcountries.eu/rest/v2/all";

function App() {
  const [gameNum, setGameNum] = useState("");
  const [clicks, setClicks] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    utils.resetClicks(setClicks);
    utils.fetchCountryAPI(url, setCountryData);
  }, []);

  const handleStart = e => {
    e.preventDefault();
    utils.resetClicks(setClicks);
    utils.createDeck(setCardDeck, countryData, setCountryData, gameNum);
    setGameNum(0);
    console.log(cardDeck);
  };

  return (
    <div className="App">
      <Header
        clicks={clicks}
        handleStart={handleStart}
        gameNum={gameNum}
        setGameNum={setGameNum}
      />
    </div>
  );
}

export default App;
