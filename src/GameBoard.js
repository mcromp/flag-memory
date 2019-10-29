import React, { useState, useEffect } from "react";
import Card from "./Card";

function Gameboard({ cardDeck, setCardDeck, setClicks, setFlagBoard }) {
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    const pairMatch = c => {
      setClicks(prevState => {
        prevState.correct++;
        return prevState;
      });
      setFlagBoard(prevState => {
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
      setClicks(prevState => {
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
  }, [activeCards, setFlagBoard, setClicks, setCardDeck]);

  const flagClick = c => {
    setClicks(prevState => {
      prevState.clicks++;
      return prevState;
    });
    setCardDeck(prevState => {
      prevState[c.boardIndex].flipped = !prevState[c.boardIndex].flipped;
      return prevState;
    });
    setActiveCards(prevState => {
      prevState = [...prevState, c];
      return prevState;
    });
  };

  const gameDeck = cardDeck.map((c, i) => {
    return (
      <Card c={c} key={i} flagClick={flagClick} activeCards={activeCards} />
    );
  });
  return <div className="grid">{gameDeck}</div>;
}

export default Gameboard;
