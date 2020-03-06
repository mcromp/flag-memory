import fetchWiki from "./fetchWiki";

const createDeck = (setCardDeck, countryData, setCountryData, deckSizeNum) => {
  let countries = shuffle([...countryData]);
  countries = countries.slice(0, deckSizeNum);
  countries.map(c =>
    !countryData[c.index].wiki ? fetchWiki(c, setCountryData) : c
  );
  countries = shuffle([...countries, ...countries]);
  setCardDeck(countries.map((c, i) => ({ ...c, boardIndex: i })));
};

//Fisher–Yates shuffle function
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default createDeck;
