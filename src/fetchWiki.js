import fetchJSON from "./fetchJSON";

const URL_WIKI = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const setCountryDataWiki = (c, setCountryData, json) => {
  setCountryData(prevState => {
    prevState[c.index].wiki = json.extract;
    return prevState;
  });
};

const fetchWiki = (c, setCountryData) => {
  fetchJSON(URL_WIKI + c.name).then(json => {
    setCountryDataWiki(c, setCountryData, json);
  });
};

export default fetchWiki;
