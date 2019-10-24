import React from "react";

function SetGameDifficulty({ gameNum, setGameNum, handleStart }) {
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
    <div className="borderB">
      <form onSubmit={handleStart}>
        <select
          className="select"
          value={gameNum}
          onChange={e => setGameNum(e.target.value)}
        >
          {difficultyValues.map((data, i) => (
            <option key={i} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
        <button disabled={!gameNum}>Start!</button>
      </form>
    </div>
  );
}

export default SetGameDifficulty;