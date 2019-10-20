import shuffle from "./shuffle";
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
  countries.map(c => fetchWiki(c, setCountryData));
  countries = [...countries, ...countries];
  shuffle(countries);
  setCardDeck(countries);
  setCardDeck(prevState => prevState.map((c, i) => ({ ...c, boardIndex: i })));
}
