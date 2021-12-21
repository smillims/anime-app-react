import PT from "prop-types";

const getAnimeSearchUrl = (search) => {
  const stringToUrl = search.replace(/\s+/g, "").toLowerCase();
  return `https://api.jikan.moe/v3/search/anime?q=${stringToUrl}&page=1`;
};

getAnimeSearchUrl.propTypes = {
  search: PT.string,
};

const dataStore = {};

const validateAndLoadData = (currentTitle) => {
  const cashOfAnime = dataStore[currentTitle];

  if (cashOfAnime) return cashOfAnime;

  const url = getAnimeSearchUrl(currentTitle);
  const fetchAPI = fetch(url).then((response) => {
    const results = response.json();
    return results;
  });

  return fetchAPI;
}

validateAndLoadData.propTypes = {
  currentTitle: PT.string,
};

export default validateAndLoadData;
