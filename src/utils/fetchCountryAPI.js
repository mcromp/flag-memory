const fetchCountryAPI = (url, setCountryData) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountryData(
        data.map((c, i) => ({
          name: c.name,
          flag: c.flag,
          index: i,
          flipped: false,
          solved: false,
          wiki: null
        }))
      );
    })
    .catch(err => console.error(err));
};

export default fetchCountryAPI;
