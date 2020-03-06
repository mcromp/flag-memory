import React from "react";
import SetGameDifficulty from "./SetGameDifficulty";

function Header({ handleSubmit, deckSizeNum, setDeckSizeNum }) {
  return (
    <div className="header">
      <h1>Flag Memory</h1>
      <SetGameDifficulty
        handleSubmit={handleSubmit}
        deckSizeNum={deckSizeNum}
        setDeckSizeNum={setDeckSizeNum}
      />
    </div>
  );
}

export default Header;
