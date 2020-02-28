import React from "react";

function GameOver({ clicks }) {
  return (
    <div className="gameover">
      <h1>Solved!</h1>
      <h2>with {clicks.clicks} flips</h2>
      <h3>
        {clicks.correct * 2} correct clicks and {clicks.incorrect * 2} incorrect
      </h3>
      <p>select a new difficulty level to start again</p>
    </div>
  );
}

export default GameOver;
