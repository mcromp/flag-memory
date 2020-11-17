import React from "react";
import SetGameDifficulty from "./SetGameDifficulty";

function Header({ handleSubmit, deckSizeNum, setDeckSizeNum }) {
 return (
  <div className="header">
   <span>Flag Memory</span>
   <SetGameDifficulty {...{ handleSubmit, deckSizeNum, setDeckSizeNum }} />
  </div>
 );
}

export default Header;
