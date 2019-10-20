const url_wiki = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const fetchWiki = (c, setCountryData) => {
  fetch(url_wiki + c.name)
    .then(response => response.json())
    .then(json => {
      setCountryData(prevState => {
        prevState[c.index].wiki = json.extract;
        return prevState;
      });
    })
    .catch(err => console.error(err));
};

export default fetchWiki;
