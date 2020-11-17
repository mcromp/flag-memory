import React from "react";
import "./App.css";

function Card({ country, flagClick, activeCards }) {
 let { flipped, solved, flag } = country;
 let img = flipped ? flag : null;
 let isCardFlippable = activeCards.length < 2 && !(flipped || solved);

 const className = () => {
  if (isCardFlippable) return "card flippable";
  if (solved) return "card solved-card";
  return "card";
 };
 return (
  <div
   className={className()}
   onClick={isCardFlippable ? () => flagClick(country) : null}
  >
   {solved ? <span className="check">✔</span> : <img alt="" src={img} />}
  </div>
 );
}

export default Card;
