import React from "react";

function WikiBoard({ wikiBoardData, countryData }) {
  let board = wikiBoardData.map((country, i) => {
    let { name, flag, wiki } = countryData[country];
    return (
      <div key={i} className="borderB">
        <h1>{name}</h1>
        <img className="flag" alt={`flag of ${name}`} src={flag} />
        <p>{wiki}</p>
      </div>
    );
  });

  return <div>{board}</div>;
}

export default WikiBoard;
