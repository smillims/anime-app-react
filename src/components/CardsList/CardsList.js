import PT from 'prop-types';

import styles from './CardsList.module.css';
import Card from '../Card';

const CardsList = ({ animeSearch }) => {
  if (Object.keys(animeSearch).length === 0) return 'Please, wait some seconds or reload the page';

  return (
    <main className={styles.main}>
      <div className={styles.cardsItems} id="cardsItems">
        {animeSearch.map(card => (
          <Card card={card} key={card.mal_id} />
        ))}
      </div>
    </main>
  );
}

CardsList.propTypes = {
  animeSearch: PT.array
}

export default CardsList;
