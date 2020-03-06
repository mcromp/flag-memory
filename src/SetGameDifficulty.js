import React from "react";

const DIFFICULTY_VALS = [
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

const SetGameDifficulty = ({ deckSizeNum, setDeckSizeNum, handleSubmit }) => {
  return (
    <div className="selectDiv">
      <form onSubmit={handleSubmit}>
        <select
          value={deckSizeNum}
          onChange={e => setDeckSizeNum(e.target.value)}
        >
          {DIFFICULTY_VALS.map((data, i) => (
            <option key={data.name} value={data.value}>
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
};

export default SetGameDifficulty;
