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
  const [flipAttempts, setFlipAttempts] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [wikiBoardData, setWikiBoardData] = useState([]);

  const URL = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    resetFlipAttempts(setFlipAttempts);
    fetchCountryAPI(URL, setCountryData);
  }, []);

  const resetFlipAttempts = setFlipAttempts => {
    setFlipAttempts({
      correct: 0,
      incorrect: 0
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    resetFlipAttempts(setFlipAttempts);
    createDeck(setCardDeck, countryData, setCountryData, deckSizeNum);
    setDeckSizeNum(0);
  };

  let gameSolved =
    cardDeck.length > 0 && cardDeck.filter(c => !c.solved).length === 0;

  return (
    <div className="app">
      <Header
        flipAttempts={flipAttempts}
        handleSubmit={handleSubmit}
        deckSizeNum={deckSizeNum}
        setDeckSizeNum={setDeckSizeNum}
      />
      {gameSolved && <GameOver flipAttempts={flipAttempts} />}
      <GameBoard
        cardDeck={cardDeck}
        setCardDeck={setCardDeck}
        setFlipAttempts={setFlipAttempts}
        setWikiBoardData={setWikiBoardData}
        countryData={countryData}
        gameSolved={gameSolved}
      />

      <WikiBoard wikiBoardData={wikiBoardData} countryData={countryData} />
    </div>
  );
}

export default App;
