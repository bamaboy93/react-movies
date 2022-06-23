import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import LoadBtn from "../../components/LoadBtn/LoadBtn";
import MovieData from "../../components/MovieData/MovieData";
import Navigation from "../../components/Navigation/Navigation";

export default function UpcomingView() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  /////Upcoming Movies
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
  }, [error]);

  return (
    <main>
      <Container>
        <Navigation />

        {status === Status.PENDING && <Loader />}

        {status === Status.REJECTED}

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
