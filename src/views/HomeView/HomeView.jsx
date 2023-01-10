import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../../components/Container";

import MainMovie from "../../components/MainMovie";
import ErrorWrapper from "../../components/ErrorWrapper";
import Popular from "../../components/Popular";
import Upcoming from "../../components/Upcoming";
import TopRated from "../../components/TopRated";
import NowPlaying from "../../components/NowPlaying";

export default function HomePage() {
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

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
        setNowPlaying(results[3]);

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
