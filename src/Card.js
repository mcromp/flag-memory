import React from "react";

function Card({ c, flagClick, activeCards }) {
  let img = !c.flipped ? c.flag : null;
  return (
    <div>
      <img
        className="card"
        alt=""
        src={img}
        onClick={
          activeCards.length < 2
            ? !c.flipped
              ? () => flagClick(c)
              : null
            : null
        }
      />
    </div>
  );
}

export default Card;
