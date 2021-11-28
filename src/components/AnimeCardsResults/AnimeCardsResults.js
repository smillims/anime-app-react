//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

//import CardsList from "../CardsList";
import { paragraphOfState } from "./AnimeCardsResults.module.css";

function AnimeCardsResults({ currentTitle, setCurrentTitle, error, isDataLoading, animeSearch }) {
  //const navigate = useNavigate();

  //useEffect(() => {
  //  if (currentTitle && !isDataLoading) {
  //    navigate(`/${currentTitle}`);
  //    setCurrentTitle("");
  //  }
  //  //setCurrentTitle('')

  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, [currentTitle, isDataLoading, navigate]);

  if (currentTitle === "") {
    return (
      <div className={paragraphOfState}>
        <p>Good day (or evening)!</p>
        <p>You could search anime whatever you like!</p>
      </div>
    );
  }

  if (isDataLoading) {
    return <div className={paragraphOfState}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={paragraphOfState}>{typeof error === "object" ? error.toString() : error}</div>
    );
  }

  return null

  //return (
  //  <div className={paragraphOfState}>
  //    <CardsList currentTitle={currentTitle} animeSearch={animeSearch} />
  //  </div>
  //);
}

export default AnimeCardsResults;
