import React from "react";
import SetGameDifficulty from "./SetGameDifficulty";

function Header({ clicks, handleStart, gameNum, setGameNum }) {
  let clickCount =
    clicks.clicks === 0 ? <h1> </h1> : <h2>Flips: {clicks.clicks}</h2>;

  return (
    <div>
      <h1>Fun Game</h1>
      {clickCount}
      <SetGameDifficulty
        handleStart={handleStart}
        gameNum={gameNum}
        setGameNum={setGameNum}
      />
    </div>
  );
}

export default Header;
