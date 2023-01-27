import { useState, useEffect } from "react";
import Status from "../../services/status";
import api from "../../services/api/movies-api";
import usePagination from "../../hooks/usePagination";
import { useLocation } from "react-router-dom";
import MovieData from "../../components/MovieData";
import Pagination from "../../components/Pagination";

export default function QueryPage({ name }) {
  const [movies, setMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalpages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  ////////////////Pagination
  const PER_PAGE = 20;
  const pages = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);

    pages.jump(p);
  };

  ////////Search Query

  useEffect(() => {
    if (!name) return;

    setStatus(Status.PENDING);

    api
      .getMoviesByQuery(name, currentPage)
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
  }, [name, currentPage, error]);

  return (
    <>
      {status === Status.IDLE}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <MovieData movies={movies} />

          <Pagination
            page={currentPage}
            totalpages={totalpages}
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
}
