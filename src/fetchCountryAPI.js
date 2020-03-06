import fetchJSON from "./fetchJSON";
const NAME_CORRECTIONS = {
  "Korea (Democratic People's Republic of)": "North Korea",
  "Virgin Islands (British)": "British Virgin Islands",
  "Macedonia (the former Yugoslav Republic of)": "North Macedonia",
  Georgia: "Georgia (country)"
};

const setCountryDataFromFetch = (data, setCountryData) => {
  setCountryData(
    data.map((country, index) => {
      let countryName = country.name;
      return {
        name: NAME_CORRECTIONS[countryName] || countryName,
        flag: country.flag,
        index,
        flipped: false,
        solved: false,
        wiki: null
      };
    })
  );
};

const fetchCountryAPI = (url, setCountryData) => {
  fetchJSON(url).then(data => setCountryDataFromFetch(data, setCountryData));
};

export default fetchCountryAPI;
