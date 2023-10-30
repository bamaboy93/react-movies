import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getPopularMovies,
  getMoviesByQuery,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/api/movies-api";

function usePopularQuery() {
  return useInfiniteQuery(
    ["popular"],
    ({ pageParam = 1 }) => getPopularMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.results.length !== 0 ? nextPage : undefined;
      },
    }
  );
}

function useTopRatedQuery() {
  return useInfiniteQuery(
    ["topRated"],
    ({ pageParam = 1 }) => getTopRatedMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.results.length !== 0 ? nextPage : undefined;
      },
    }
  );
}

function useUpcomingQuery() {
  return useInfiniteQuery(
    ["topRated"],
    ({ pageParam = 1 }) => getUpcomingMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.results.length !== 0 ? nextPage : undefined;
      },
    }
  );
}

function useSearchQuery(query) {
  return useInfiniteQuery(
    ["search", query],
    ({ pageParam = 1 }) => getMoviesByQuery(query, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return lastPage.results.length !== 0 ? nextPage : undefined;
      },
    }
  );
}

export { usePopularQuery, useSearchQuery, useTopRatedQuery, useUpcomingQuery };
