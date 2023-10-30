import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/api/movies-api";
import Status from "../../services/status";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Upcoming from "../../components/Upcoming";
import NowPlaying from "../../components/NowPlaying";
import SwiperCarousel from "../../components/Swiper/Swiper";

export default function HomePage() {
  const { pathname } = useLocation();
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  useEffect(() => {
    setStatus(Status.PENDING);
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });

    getTopRatedMovies()
      .then((data) => {
        setTopRatedMovies(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });

    getUpcomingMovies()
      .then((data) => {
        setUpcomingMovies(data);
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
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          {popularMovies && (
            <>
              <Hero movie={popularMovies.results[2]} />
              <Section title="Popular" linkTo="/popular">
                <SwiperCarousel movies={popularMovies.results} />
              </Section>
            </>
          )}

          {topRatedMovies && (
            <Section title="Top Rated" linkTo="/top_rated">
              <SwiperCarousel movies={topRatedMovies.results} />{" "}
            </Section>
          )}

          {upcomingMovies && (
            <Section title="Top 10 Upcoming Movies" linkTo="/upcoming">
              <Upcoming movies={upcomingMovies.results} />
            </Section>
          )}

          {popularMovies && <NowPlaying movie={popularMovies.results[5]} />}
        </>
      )}
    </>
  );
}
