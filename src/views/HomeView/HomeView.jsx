import { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/api/movies-api";
import MainMovie from "../../components/MainMovie";
import Section from "../../components/Section";
import Upcoming from "../../components/Upcoming";
import NowPlaying from "../../components/NowPlaying";
import SwiperCarousel from "../../components/Swiper/Swiper";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const { pathname } = useLocation();
  const [popularQuery, topRatedQuery, upcomingQuery] = useQueries({
    queries: [
      {
        queryKey: ["popular"],
        queryFn: getPopularMovies,
      },

      {
        queryKey: ["topRated"],
        queryFn: getTopRatedMovies,
      },
      { queryKey: ["upcoming"], queryFn: getUpcomingMovies },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  if (
    popularQuery.isLoading ||
    topRatedQuery.isLoading ||
    upcomingQuery.isLoading
  ) {
    return <Loader />;
  }

  return (
    <>
      {popularQuery.isSuccess && (
        <>
          <MainMovie movie={popularQuery.data.results[0]} />
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
        <NowPlaying movie={popularQuery.data.results[1]} />
      )}
    </>
  );
}
