import React from "react";

function FlagBoard({ flagBoard, countryData }) {
  let board = flagBoard.map((c, i) => {
    return (
      <div key={i}>
        <h1>{countryData[c].name}</h1>
        <p>{countryData[c].wiki}</p>
      </div>
    );
  });

  return <div>{board}</div>;
}

export default FlagBoard;
