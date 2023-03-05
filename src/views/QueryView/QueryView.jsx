import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Status from "../../services/status";
import api from "../../services/api/movies-api";
import usePagination from "../../hooks/usePagination";

import MovieData from "../../components/MovieData";
import Pagination from "../../components/Pagination";
import PageTitle from "../../components/PageTitle";
import Loader from "../../components/Loader/Loader";

export default function QueryPage() {
  const [movies, setMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalpages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  ////////////////Pagination
  const PER_PAGE = 20;
  const pages = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);

    pages.jump(p);
  };

  ////////Search Query

  useEffect(() => {
    if (!searchQuery) return;

    setStatus(Status.PENDING);

    api
      .getMoviesByQuery(searchQuery, currentPage)
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
  }, [searchQuery, currentPage, error]);

  return (
    <>
      {status === Status.IDLE}

      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <PageTitle title={`Results for "${searchQuery}"`} />
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
