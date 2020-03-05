const fetchJSON = async url => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchJSON;
