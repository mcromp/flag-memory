import React, { useState, useEffect } from "react";
import Header from "./Header";
import GameOver from "./GameOver";
import GameBoard from "./GameBoard";
import WikiBoard from "./WikiBoard";
import createDeck from "./createDeck";
import fetchCountryAPI from "./fetchCountryAPI";
import "./App.css";

function App() {
  const [deckSizeNum, setDeckSizeNum] = useState("");
  const [clicks, setClicks] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [wikiBoardData, setWikiBoardData] = useState([]);

  const URL = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    resetClicks(setClicks);
    fetchCountryAPI(URL, setCountryData);
  }, []);

  const resetClicks = setClicks => {
    setClicks({
      clicks: 0,
      correct: 0,
      incorrect: 0
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    resetClicks(setClicks);
    createDeck(setCardDeck, countryData, setCountryData, deckSizeNum);
    setDeckSizeNum(0);
  };

  let gameSolved =
    cardDeck.length > 0 && cardDeck.filter(c => !c.solved).length === 0;

  return (
    <div className="app">
      <Header
        clicks={clicks}
        handleSubmit={handleSubmit}
        deckSizeNum={deckSizeNum}
        setDeckSizeNum={setDeckSizeNum}
      />
      {gameSolved && <GameOver clicks={clicks} />}
      <GameBoard
        cardDeck={cardDeck}
        setCardDeck={setCardDeck}
        setClicks={setClicks}
        setWikiBoardData={setWikiBoardData}
        countryData={countryData}
        gameSolved={gameSolved}
      />

      <WikiBoard wikiBoardData={wikiBoardData} countryData={countryData} />
    </div>
  );
}

export default App;
