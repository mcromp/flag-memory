import React from "react";

function SetGameDifficulty({ deckSizeNum, setDeckSizeNum, handleSubmit }) {
  const difficultyValues = [
    {
      name: "Select Difficulty Level",
      value: "{null}"
    },
    {
      name: "Easy",
      value: 6
    },
    {
      name: "Normal",
      value: 12
    },
    {
      name: "Difficult",
      value: 18
    }
  ];

  return (
    <div className="selectDiv">
      <form onSubmit={handleSubmit}>
        <select
          value={deckSizeNum}
          onChange={e => setDeckSizeNum(e.target.value)}
        >
          {difficultyValues.map((data, i) => (
            <option key={i} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
        <button className="btn" disabled={!deckSizeNum}>
          Start!
        </button>
      </form>
    </div>
  );
}

export default SetGameDifficulty;
