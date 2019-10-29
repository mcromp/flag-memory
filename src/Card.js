import React from "react";

function Card({ c, flagClick, activeCards }) {
  let img = c.flipped ? c.flag : null;




  return (
    <div>
       {if (!c.solved) {
      <img
        className={c.flipped ? "card" : "card"}
        alt=""
        src={img}
        onClick={
          activeCards.length < 2 && !c.flipped ? () => flagClick(c) : null
        }
      />
      }else {}
      <div className="card">
        <span className="check">✔</span>
      </div>
       }
    </div>
  );
}

export default Card;
