import React, { useState, useEffect } from "react";
import Header from "./Header";
import GameOver from "./GameOver";
import GameBoard from "./GameBoard";
import WikiBoard from "./WikiBoard";
import resetClicks from "./resetClicks";
import createDeck from "./createDeck";
import fetchCountryAPI from "./fetchCountryAPI";
import "./App.css";

function App() {
  const [gameNum, setGameNum] = useState("");
  const [clicks, setClicks] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [wikiBoardData, setWikiBoardData] = useState([]);

  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    resetClicks(setClicks);
    fetchCountryAPI(url, setCountryData);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    resetClicks(setClicks);
    createDeck(setCardDeck, countryData, setCountryData, gameNum);
    setGameNum(0);
  };

  let gameSolved =
    cardDeck.length > 0 && cardDeck.filter(c => !c.solved).length === 0;

  return (
    <div className="App">
      <Header
        clicks={clicks}
        handleSubmit={handleSubmit}
        gameNum={gameNum}
        setGameNum={setGameNum}
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

      <div>
        <WikiBoard wikiBoardData={wikiBoardData} countryData={countryData} />
      </div>
    </div>
  );
}

export default App;
