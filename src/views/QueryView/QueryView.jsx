import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMoviesByQuery } from "../../services/api/movies-api";

import MovieData from "../../components/MovieData";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import AlertMessage from "../../components/AlertMessage";

export default function QueryPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const { status, data } = useQuery({
    queryKey: ["search"],
    queryFn: () => getMoviesByQuery(searchQuery),
  });
  console.log(searchQuery);

  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && (
        <AlertMessage message="500 Internal Server Error! Try again later." />
      )}

      {status === "success" && (
        <>
          <PageTitle title={`Results for "${searchQuery}"`} />
          <MovieData movies={data.results} />
        </>
      )}
    </>
  );
}
