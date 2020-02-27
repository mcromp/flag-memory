const nameCorrections = {
  "Korea (Democratic People's Republic of)": "North Korea",
  "Virgin Islands (British)": "British Virgin Islands",
  "Macedonia (the former Yugoslav Republic of)": "North Macedonia",
  Georgia: "Georgia (country)"
};

const fetchCountryAPI = (url, setCountryData) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountryData(
        data.map((country, index) => {
          let name = country.name;
          if (nameCorrections[country.name]) {
            name = nameCorrections[country.name];
          }
          return {
            name: name,
            flag: country.flag,
            index,
            flipped: false,
            solved: false,
            wiki: null
          };
        })
      );
    })
    .catch(err => console.error(err));
};

export default fetchCountryAPI;
