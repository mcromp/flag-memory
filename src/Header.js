import React from "react";
import SetGameDifficulty from "./SetGameDifficulty";

function Header({ handleStart, gameNum, setGameNum }) {
  return (
    <div>
      <h1>Fun Game</h1>
      <SetGameDifficulty
        handleStart={handleStart}
        gameNum={gameNum}
        setGameNum={setGameNum}
      />
    </div>
  );
}

export default Header;
