import React from "react";
import SetGameDifficulty from "./SetGameDifficulty";

function Header({ handleSubmit, gameNum, setGameNum }) {
  return (
    <div>
      <h1>Flag Memory</h1>
      <SetGameDifficulty
        handleSubmit={handleSubmit}
        gameNum={gameNum}
        setGameNum={setGameNum}
      />
    </div>
  );
}

export default Header;
