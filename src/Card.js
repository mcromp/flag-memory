import React from "react";
import "./App.css";

function Card({ c, flagClick, activeCards }) {
  let { flipped, solved, flag } = c;
  let img = flipped ? flag : null;

  return (
    <div
      className="card"
      onClick={
        activeCards.length < 2 && !(flipped || solved)
          ? () => flagClick(c)
          : null
      }
    >
      {solved ? (
        <span className="check">✔</span>
      ) : (
        <img className="flag" alt="" src={img} />
      )}
    </div>
  );
}

export default Card;
