//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

import styles from "./CardsList.module.css";
import Card from "../Card";

export default function CardsList({ currentTitle, animeSearch }) {
  //const navigate = useNavigate();
  //useEffect(() => navigate(`/${currentTitle}`.replace(/\s/g,'')), [currentTitle, navigate, animeSearch]);

  if (Object.keys(animeSearch).length === 0) return "Please, wait some seconds or reload the page";

  //if (!!animeSearch) {
  //  history.push(`/${currentTitle}`)
  //}

  return (
    <main className={styles.main}>
      <div className={styles.cardsItems} id="cardsItems">
        {animeSearch.map((card) => (
          <Card key={card.mal_id} card={card} currentTitle={currentTitle} />
        ))}
      </div>
    </main>
  );
}
