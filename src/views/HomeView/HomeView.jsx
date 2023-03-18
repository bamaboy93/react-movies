import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getMovieById,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/api/movies-api";
import MainMovie from "../../components/MainMovie";
import Section from "../../components/Section";
import Upcoming from "../../components/Upcoming";
import NowPlaying from "../../components/NowPlaying";
import SwiperCarousel from "../../components/Swiper/Swiper";

export default function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  const [movieQuery, popularQuery, topRatedQuery, upcomingQuery] = useQueries({
    queries: [
      {
        queryKey: ["mainMovie"],
        queryFn: () => getMovieById(315162),
      },
      {
        queryKey: ["popularMovies"],
        queryFn: getPopularMovies,
      },

      {
        queryKey: ["topRatedMovies"],
        queryFn: getTopRatedMovies,
      },
      { queryKey: ["upcomingMovies"], queryFn: getUpcomingMovies },
    ],
  });

  return (
    <>
      {popularQuery.isSuccess && (
        <>
          <MainMovie movie={movieQuery.data} />
          <Section title="Popular" linkTo="/popular">
            <SwiperCarousel movies={popularQuery.data.results} />
          </Section>
        </>
      )}

      {topRatedQuery.isSuccess && (
        <Section title="Top Rated" linkTo="/top_rated">
          <SwiperCarousel movies={topRatedQuery.data.results} />
        </Section>
      )}
      {upcomingQuery.isSuccess && (
        <Section title="Top 10 Upcoming Movies" linkTo="/upcoming">
          <Upcoming movies={upcomingQuery.data.results} />
        </Section>
      )}
      {popularQuery.isSuccess && (
        <NowPlaying movie={popularQuery.data.results[16]} />
      )}
    </>
  );
}
