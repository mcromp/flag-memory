import React, { useState, useEffect } from "react";
import Header from "./Header";
import GameOver from "./GameOver";
import GameBoard from "./GameBoard";
import FlagBoard from "./FlagBoard";
import * as utils from "./utils";
import "./App.css";

const url = "https://restcountries.eu/rest/v2/all";

function App() {
  const [gameNum, setGameNum] = useState("");
  const [clicks, setClicks] = useState({});
  const [cardDeck, setCardDeck] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [flagBoard, setFlagBoard] = useState([]);

  useEffect(() => {
    utils.resetClicks(setClicks);
    utils.fetchCountryAPI(url, setCountryData);
  }, []);

  const handleStart = e => {
    e.preventDefault();
    utils.resetClicks(setClicks);
    utils.createDeck(setCardDeck, countryData, setCountryData, gameNum);
    setGameNum(0);
  };

  const solved =
    cardDeck.length > 0 && cardDeck.filter(c => !c.solved).length === 0;

  // const testy = () => {
  //   console.log(cardDeck);
  //   console.log(cardDeck.filter(c => !c.solved));
  //   console.log(solved);
  // };

  return (
    <div className="App">
      <Header
        clicks={clicks}
        handleStart={handleStart}
        gameNum={gameNum}
        setGameNum={setGameNum}
      />
      {solved ? (
        <GameOver clicks={clicks} />
      ) : (
        <GameBoard
          cardDeck={cardDeck}
          setCardDeck={setCardDeck}
          setClicks={setClicks}
          setFlagBoard={setFlagBoard}
          countryData={countryData}
        />
      )}
      <FlagBoard flagBoard={flagBoard} countryData={countryData} />
    </div>
  );
}

export default App;
