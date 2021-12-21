import PT from "prop-types";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => (
  <Link to={`/anime-info/${card.mal_id}`}>
    <div className={styles.card} id={card.mal_id}>
      <div className={styles.cardImgContainer}>
        <img src={card.image_url} alt={card.title} />
      </div>
      <div className={styles.cardItemContainer}>
        <h3 className={styles.cardItemH3}>{card.title}</h3>
        <span className={styles.cardItemRating}>{card.score} / 10</span>
        <p className={styles.cardItemText}>{card.synopsis}</p>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  card: PT.object,
};

export default Card;
