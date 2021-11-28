import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAnime } from "./customHooks";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import AnimeCardsResults from "./components/AnimeCardsResults";
//import AnimeInfo from "./components/AnimeInfo";
import CardsList from "./components/CardsList";

function App() {
  const { currentTitle, setCurrentTitle, error, isDataLoading, animeSearch } = useAnime();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              currentTitle={currentTitle}
              setCurrentTitle={setCurrentTitle}
              error={error}
              isDataLoading={isDataLoading}
              animeSearch={animeSearch}
            />
          }
        />
        <Route
          path={`/${currentTitle}`}
          element={<CardsList currentTitle={currentTitle} animeSearch={animeSearch} />}
        />
        {/*<Route path={`/${currentTitle}/:id`} element={<AnimeInfo />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

function Main({ currentTitle, setCurrentTitle, error, isDataLoading, animeSearch }) {
  return (
    <>
      <SearchForm onSubmit={setCurrentTitle} value={currentTitle} />
      <AnimeCardsResults
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        error={error}
        isDataLoading={isDataLoading}
        animeSearch={animeSearch}
      />
    </>
  );
}

export default App;
