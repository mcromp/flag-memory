import fetchAPI from "./fetchJSON";
const nameCorrections = {
  "Korea (Democratic People's Republic of)": "North Korea",
  "Virgin Islands (British)": "British Virgin Islands",
  "Macedonia (the former Yugoslav Republic of)": "North Macedonia",
  Georgia: "Georgia (country)"
};

const setCountryDataFromApi = (data, setCountryData) => {
  setCountryData(
    data.map((country, index) => {
      let countryName = country.name;
      return {
        name: nameCorrections[countryName] || countryName,
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
  fetchAPI(url).then(data => setCountryDataFromApi(data, setCountryData));
};

export default fetchCountryAPI;
