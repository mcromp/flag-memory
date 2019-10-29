const nameCorrections = {
  "Korea (Democratic People's Republic of)": "North Korea",
  "Virgin Islands (British)": "British Virgin Islands",
  "Macedonia (the former Yugoslav Republic of)": "North Macedonia"
};

const fetchCountryAPI = (url, setCountryData) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountryData(
        data.map((c, index) => {
          let name = c.name;
          if (nameCorrections[c.name]) {
            name = nameCorrections[c.name];
          }
          return {
            name: name,
            flag: c.flag,
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
