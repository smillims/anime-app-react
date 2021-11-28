import { useEffect, useState } from "react";
import AnimeDetailPage from "../AnimeDetailPage";

function AnimeInfo() {
  const [animeDetail, setAnimeDetail] = useState({});
  const [error, setError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const animeID = window.location.pathname
    .split("/")
    .filter((item) => item >= 1)
    .join("");

  const url = `https://api.jikan.moe/v3/anime/${animeID}`;

  useEffect(() => {
    setIsDataLoading(true);
    if (animeID) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setAnimeDetail(data);
          setError(null);
        })
        .catch(setError)
        .finally(() => setIsDataLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDataLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <AnimeDetailPage animeDetail={animeDetail} />;
}

export default AnimeInfo;
