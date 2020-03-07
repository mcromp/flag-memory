import React, { useState, useEffect } from "react";
import Card from "./Card";

const TIMEOUT_VALUE = 400;

function Gameboard({
  cardDeck,
  setCardDeck,
  setFlipAttempts,
  setWikiBoardData,
  gameSolved
}) {
  const [activeCards, setActiveCards] = useState([]);

  const addFlipValuetoFlipAttempts = (setFlipAttempts, value) => {
    setFlipAttempts(prevState => {
      prevState[value]++;
      return prevState;
    });
  };

  const setCorrectAttempt = (setCardDeck, name) => {
    setCardDeck(prevState =>
      prevState.map(state => {
        if (state.name === name) {
          state.flipped = false;
          state.solved = true;
        }
        return state;
      })
    );
  };

  const setIncorrectAttempt = setCardDeck => {
    setCardDeck(prevState =>
      prevState.map(state => {
        state.flipped = false;
        return state;
      })
    );
  };

  const addToWikiBoard = (setWikiBoardData, c) => {
    setWikiBoardData(prevState => {
      let tempArr = prevState.filter(country => c.index !== country);
      return [c.index, ...tempArr];
    });
  };

  useEffect(() => {
    const pairMatch = c => {
      addFlipValuetoFlipAttempts(setFlipAttempts, "correct");
      addToWikiBoard(setWikiBoardData, c);
      setTimeout(() => {
        setActiveCards([]);
        setCorrectAttempt(setCardDeck, c.name);
      }, TIMEOUT_VALUE);
    };

    const pairNoMatch = () => {
      addFlipValuetoFlipAttempts(setFlipAttempts, "incorrect");
      setTimeout(() => {
        setActiveCards([]);
        setIncorrectAttempt(setCardDeck);
      }, TIMEOUT_VALUE);
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
    setActiveCards(prevState => [...prevState, c]);
  };

  const gameDeck = cardDeck.map((country, i) => (
    <Card {...{ country, flagClick, activeCards }} key={country.name + i} />
  ));

  return (
    <div className={gameSolved ? "noDisplay" : "cardGrid"}>{gameDeck}</div>
  );
}

export default Gameboard;
