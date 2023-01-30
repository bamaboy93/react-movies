import { useState, useEffect } from "react";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import MainMovie from "../../components/MainMovie";
import Section from "../../components/Section";
import Upcoming from "../../components/Upcoming";
import NowPlaying from "../../components/NowPlaying";
import SwiperCarousel from "../../components/Swiper/Swiper";
import Loader from "../../components/Loader";

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
        setMovie(results[2]);

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
        setNowPlaying(results[1]);

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
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED}
      {status === Status.RESOLVED && (
        <>
          {movie && <MainMovie movie={movie} />}
          {popular && (
            <Section title="Popular" linkTo="/popular">
              <SwiperCarousel movies={popular} />
            </Section>
          )}
          {topRated && (
            <Section title="Top Rated" linkTo="/top_rated">
              <SwiperCarousel movies={topRated} />
            </Section>
          )}
          {upcoming && (
            <Section title="Top 10 Upcoming Movies" linkTo="/upcoming">
              <Upcoming movies={upcoming} />
            </Section>
          )}
          {nowPlaying && <NowPlaying movie={nowPlaying} />}
        </>
      )}
    </>
  );
}
