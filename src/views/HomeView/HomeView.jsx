import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../../components/Container";

import MainMovie from "../../components/MainMovie";
import ErrorWrapper from "../../components/ErrorWrapper";
import Popular from "../../components/Popular";
import Upcoming from "../../components/Upcoming";
import TopRated from "../../components/TopRated";
import NowPlaying from "../../components/NowPlaying";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [currentQueryPage, setCurrentQueryPage] = useState(null);
  const [totalpages, setTotalPages] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const navigate = useNavigate();
  const location = useLocation();

  //////////Search Query

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setCurrentQueryPage(null);
    setTotalPages(null);

    setStatus(Status.IDLE);
    navigate({
      search: `query=${newQuery}`,
    });
  };
  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get("query");

    setQuery(newSearch);
    navigate({
      search: `query=${newSearch}`,
    });
  }, [location.search, navigate]);

  useEffect(() => {
    if (!query) return;

    setStatus(Status.PENDING);

    api
      .getMoviesByQuery(query, currentQueryPage)
      .then(({ results, page, total_pages }) => {
        if (results.length === 0) {
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
        setCurrentQueryPage(page);
        setTotalPages(total_pages);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, currentQueryPage, error]);

  /////Popular Movies
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getPopularMovies()
      .then(({ results }) => {
        setPopular(results);
        setMovie(results[7]);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);
  // Upcoming
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getUpcomingMovies()
      .then(({ results }) => {
        setUpcoming(results);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);
  // Top Rated
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getTopRatedMovies()
      .then(({ results }) => {
        setTopRated(results);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);
  // Now_Playing
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getNowPlaying()
      .then(({ results }) => {
        setNowPlaying(results[0]);

        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);
  return (
    <>
      {movie ? <MainMovie movie={movie} /> : null}
      <SearchBar onSubmit={handleFormSubmit} />
      <Container>
        {status === Status.PENDING}
        {status === Status.REJECTED && <ErrorWrapper />}
        {status === Status.RESOLVED && (
          <>
            {popular && <Popular movies={popular} />}
            {topRated && <TopRated movies={topRated} />}
            {upcoming && <Upcoming movies={upcoming} />}
            {nowPlaying && <NowPlaying movie={nowPlaying} />}
          </>
        )}
      </Container>
    </>
  );
}
