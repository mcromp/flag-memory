import nameFilter from "./nameFilter.js";

const fetchCountryAPI = (url, setCountryData) => {
  let name = "";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountryData(
        data.map((c, index) => {
          name = nameFilter(c.name);
          return {
            name,
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
