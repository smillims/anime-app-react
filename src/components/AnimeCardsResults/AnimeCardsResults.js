import PT from 'prop-types';

import { paragraphOfState } from './AnimeCardsResults.module.css';
import CardsList from '../CardsList';

const AnimeCardsResults = ({ currentTitle, error, isDataLoading, animeSearch }) => {
  if (currentTitle === '') {
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
      <div className={paragraphOfState}>{typeof error === 'object' ? error.toString() : error}</div>
    );
  }

  return (
    <div className={paragraphOfState}>
      <CardsList animeSearch={animeSearch} />
    </div>
  );
}

AnimeCardsResults.propTypes = {
  currentTitle: PT.string,
  error: PT.oneOfType([PT.object, PT.string]),
  isDataLoading: PT.bool,
  animeSearch: PT.array
}

export default AnimeCardsResults;
