import fetchWiki from "./fetchWiki";

export default function createDeck(
  setCardDeck,
  countryData,
  setCountryData,
  gameNum
) {
  let countries = [...countryData];
  shuffle(countries);
  countries = countries.slice(0, gameNum);
  countries.map(c => {
    return !countryData[c.index].wiki ? fetchWiki(c, setCountryData) : c;
  });
  countries = [...countries, ...countries];
  shuffle(countries);
  setCardDeck(countries);
  setCardDeck(prevState => prevState.map((c, i) => ({ ...c, boardIndex: i })));
}

//Fisher–Yates shuffle function
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
