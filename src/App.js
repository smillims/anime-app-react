
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAnime } from "./customHooks";
import Header from "./components/Header";
import SortForm from "./components/SortForm";
import AnimeCardsResults from "./components/AnimeCardsResults";
import AnimeInfo from "./components/AnimeInfo";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/anime-info/:id" element={<AnimeInfo />} />
    </Routes>
  </BrowserRouter>
);

const Main = () => {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useAnime();

  return (
    <>
      <SortForm onSubmit={setCurrentTitle} value={currentTitle} />
      <AnimeCardsResults
        currentTitle={currentTitle}
        error={error}
        isDataLoading={isDataLoading}
        animeSearch={animeSearch}
      />
    </>
  );
};

export default App;
