import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import SearchBar from "../../components/SearchBar/SearchBar2";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import LoadBtn from "../../components/LoadBtn/LoadBtn";
import MovieData from "../../components/MovieData/MovieData";

import s from "./HomeView.module.scss";
import ErrorWrapper from "../../components/ErrorWrapper/ErrorWrapper";

function HomePage() {
  const history = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  /////Popular Movies
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getPopularMovies()
      .then(({ results }) => {
        setMovies(results);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getUpcomingMovies()
      .then(({ results }) => {
        setMovies(results);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  //////////Search Query

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setStatus(Status.IDLE);

    history.push({ ...location, search: `query=${newQuery}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get("query");
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!query) return;

    setStatus(Status.PENDING);

    api
      .getMoviesByQuery(query)
      .then((results) => {
        if (results.length === 0) {
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, error]);

  return (
    <main>
      <Container>
        <div className={s.linkContainer}>
          <a href="/" className={s.link}>
            Trending Movies Today
          </a>
          <SearchBar onSubmit={handleFormSubmit} />
          <a href="/" className={s.link}>
            Upcoming Movies
          </a>
        </div>

        {status === Status.PENDING && <Loader />}

        {status === Status.REJECTED && <ErrorWrapper query={query} />}

        {status === Status.RESOLVED && (
          <>
            <MovieData movies={movies} />
            <LoadBtn />
          </>
        )}
      </Container>
    </main>
  );
}

export default HomePage;
