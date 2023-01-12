import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import MovieData from "../../components/MovieData";
import Pagination from "../../components/Pagination";

import usePagination from "../../hooks/usePagination";

export default function UpcomingView() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(null);

  //////////////////////////Pagination
  const PER_PAGE = 20;
  const pages = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);
    pages.jump(p);
  };

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

  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED}

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
    </>
  );
}
