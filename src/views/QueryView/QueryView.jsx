import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import usePagination from "../../hooks/usePagination";

import MovieData from "../../components/MovieData";

import Pagination from "../../components/Pagination";

// import s from "./QueryView.module.scss";
import Container from "../../components/Container";

export default function QueryPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [currentQueryPage, setCurrentQueryPage] = useState(null);
  const [totalpages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(navigate);

  ////////////////Pagination
  const PER_PAGE = 20;
  const pages = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentQueryPage(p);

    pages.jump(p);
  };

  //////////Search Query

  // const handleFormSubmit = (newQuery) => {
  //   if (newQuery === query) return;

  //   setQuery(newQuery);
  //   setMovies(null);
  //   setCurrentQueryPage(null);
  //   setTotalPages(null);

  //   setStatus(Status.IDLE);
  //   navigate({
  //     search: `query=${newQuery}`,
  //   });
  // };
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

  return (
    <Container>
      {status === Status.IDLE}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <MovieData movies={movies} />

          <Pagination
            page={currentQueryPage}
            totalpages={totalpages}
            onChange={handleChange}
          />
        </>
      )}
    </Container>
  );
}
