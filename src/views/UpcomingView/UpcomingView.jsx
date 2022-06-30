import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import usePagination from "../../hooks/Pagination";

import Container from "../../components/Container";

import MovieData from "../../components/MovieData";
import Navigation from "../../components/Navigation";
import Pagination from "../../components/Pagination";

export default function UpcomingView() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(null);

  /////////////////////////Pagination
  const PER_PAGE = 20;
  const _DATA = usePagination(totalpages, PER_PAGE);
  const handleChange = (e, p) => {
    setCurrentPage(p);
    _DATA.jump(p);
  };

  /////Upcoming Movies
  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .getUpcomingMovies(currentPage)
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
    <main>
      <Container>
        <Navigation />

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
      </Container>
    </main>
  );
}
