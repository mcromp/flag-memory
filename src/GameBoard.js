import React, { useState, useEffect } from "react";
import Card from "./Card";

function Gameboard({
  cardDeck,
  setCardDeck,
  setFlipAttempts,
  setWikiBoardData,
  gameSolved
}) {
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    const pairMatch = c => {
      setFlipAttempts(prevState => {
        prevState.correct++;
        return prevState;
      });
      setWikiBoardData(prevState => {
        prevState = [c.index, ...prevState];
        return prevState;
      });
      setTimeout(() => {
        setCardDeck(prevState =>
          prevState.map(state => {
            if (state.name === c.name) {
              state.flipped = false;
              state.solved = true;
            }
            return state;
          })
        );
        setActiveCards([]);
      }, 400);
    };
    const pairNoMatch = () => {
      setFlipAttempts(prevState => {
        prevState.incorrect++;
        return prevState;
      });
      setTimeout(() => {
        setActiveCards([]);
        setCardDeck(prevState =>
          prevState.map(state => {
            state.flipped = false;
            return state;
          })
        );
      }, 400);
    };
    if (activeCards.length === 2) {
      activeCards[0].name === activeCards[1].name
        ? pairMatch(activeCards[0])
        : pairNoMatch();
    }
  }, [activeCards, setWikiBoardData, setFlipAttempts, setCardDeck]);

  const flagClick = c => {
    setCardDeck(prevState => {
      prevState[c.boardIndex].flipped = !prevState[c.boardIndex].flipped;
      return prevState;
    });
    setActiveCards(prevState => {
      prevState = [...prevState, c];
      return prevState;
    });
  };

  const gameDeck = cardDeck.map((country, i) => (
    <Card {...{ country, flagClick, activeCards }} key={country.name + i} />
  ));

  return (
    <div className={gameSolved ? "noDisplay" : "cardGrid"}>{gameDeck}</div>
  );
}

export default Gameboard;
