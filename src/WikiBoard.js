import React from "react";

const WikiBoard = ({ wikiBoardData, countryData }) => {
  let board = wikiBoardData.map(countryID => {
    let { name, flag, wiki } = countryData[countryID];
    return <WikiCountryCard key={countryID} {...{ name, flag, wiki }} />;
  });
  return <div className="wikiBoard">{board}</div>;
};

const WikiCountryCard = ({ name, flag, wiki }) => {
  return (
    <div key={name} className="wiki">
      <h1>{name}</h1>
      <img alt={`flag of ${name}`} src={flag} />
      <p>{wiki}</p>
    </div>
  );
};

export default WikiBoard;
