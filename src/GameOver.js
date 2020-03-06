import React from "react";

const GameOver = ({ flipAttempts }) => {
  return (
    <div className="gameover">
      <h1>Solved!</h1>
      <h2>in {flipAttempts.correct + flipAttempts.incorrect} attemps</h2>
      <h3>
        {flipAttempts.correct} correct attemps and {flipAttempts.incorrect}{" "}
        incorrect
      </h3>
      <p>select a new difficulty level to start again</p>
    </div>
  );
};

export default GameOver;
