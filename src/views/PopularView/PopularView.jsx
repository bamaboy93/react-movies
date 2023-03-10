import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/api/movies-api";
import MovieData from "../../components/MovieData";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import AlertMessage from "../../components/AlertMessage";

export default function PopularView() {
  const { status, data } = useQuery({
    queryKey: ["popular"],
    queryFn: () => getPopularMovies(),
  });

  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && (
        <AlertMessage message="500 Internal Server Error! Try again later." />
      )}

      {status === "success" && (
        <>
          <PageTitle title="Popular movies" />
          <MovieData movies={data.results} />
        </>
      )}
    </>
  );
}
