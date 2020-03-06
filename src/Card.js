import React from "react";
import "./App.css";

function Card({ country, flagClick, activeCards }) {
  let { flipped, solved, flag } = country;
  let img = flipped ? flag : null;
  let isCardFlippable = activeCards.length < 2 && !(flipped || solved);

  return (
    <div
      className="card"
      onClick={isCardFlippable ? () => flagClick(country) : null}
    >
      {solved ? <span className="check">✔</span> : <img alt="" src={img} />}
    </div>
  );
}

export default Card;
