import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import usePagination from "../../hooks/usePagination";

import Container from "../../components/Container";
import MovieData from "../../components/MovieData";
import ErrorWrapper from "../../components/ErrorWrapper";
import Navigation from "../../components/Navigation";
import Pagination from "../../components/Pagination";

import s from "./HomeView.module.scss";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  ////////////////Pagination
  const PER_PAGE = 20;
  const pages = usePagination(totalpages, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);

    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
    pages.jump(p);
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
  }, [currentPage, error]);

  return (
    <main>
      <Container>
        <div className={s.banner}></div>
        <Navigation />
        {status === Status.PENDING}
        {status === Status.REJECTED && <ErrorWrapper />}
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
      </Container>
    </main>
  );
}
