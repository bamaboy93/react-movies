import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../../components/Container";

import MovieData from "../../components/MovieData";
import ErrorWrapper from "../../components/ErrorWrapper";
import Navigation from "../../components/Navigation";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";

import usePagination from "../../hooks/Pagination";

function HomePage() {
  // const history = useNavigate();
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
        setError(error);
        console.log(error);
        setStatus(Status.REJECTED);
      });
  }, [currentPage]);

  //////////Search Query

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setCurrentPage(1);
    setTotalPages(null);
    setStatus(Status.IDLE);

    // history.push({ search: `query=${newQuery}` });
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
      .getMoviesByQuery(query, currentPage)
      .then(({ results, page, total_pages }) => {
        if (results.length === 0) {
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
        setCurrentPage(page);
        setTotalPages(total_pages);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, currentPage, error]);

  return (
    <main>
      <Container>
        <SearchBar onSubmit={handleFormSubmit} />
        <Navigation />

        {status === Status.PENDING}

        {status === Status.REJECTED && <ErrorWrapper query={query} />}

        {status === Status.RESOLVED && (
          <>
            <MovieData movies={movies} />

            {totalpages > 1 && (
              <Pagination
                page={currentPage}
                totalpages={totalpages}
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
