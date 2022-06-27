import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import MovieData from "../../components/MovieData/MovieData";
import ErrorWrapper from "../../components/ErrorWrapper/ErrorWrapper";
import Navigation from "../../components/Navigation/Navigation";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "@mui/material/Pagination";

import usePagination from "../../hooks/Pagination";

function HomePage() {
  const history = useNavigate();
  const { search } = useLocation();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const PER_PAGE = 20;
  const _DATA = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);
    _DATA.jump(p);
  };
  /////Popular Movies
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getPopularMovies(currentPage)
      .then(({ results, page, total_pages }) => {
        setMovies(results);
        setCurrentPage(page);
        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error, currentPage]);

  //////////Search Query

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setStatus(Status.IDLE);

    history.push({ search: `query=${newQuery}` });
  };

  useEffect(() => {
    if (search === "") {
      return;
    }

    const newSearch = new URLSearchParams(search).get("query");
    setQuery(newSearch);
  }, [search]);

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
        <SearchBar onSubmit={handleFormSubmit} />
        <Navigation />

        {status === Status.PENDING && <Loader />}

        {status === Status.REJECTED && <ErrorWrapper query={query} />}

        {status === Status.RESOLVED && (
          <>
            <MovieData movies={movies} />
            {totalpages > 1 && (
              <Pagination
                count={totalpages}
                page={currentPage}
                onChange={handleChange}
              />
            )}
          </>
        )}
      </Container>
    </main>
  );
}

export default HomePage;
