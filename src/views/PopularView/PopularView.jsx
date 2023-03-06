import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/api/movies-api";
import MovieData from "../../components/MovieData";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error";
import PageTitle from "../../components/PageTitle";

export default function PopularView() {
  const { status, data } = useQuery({
    queryKey: ["popular"],
    queryFn: () => getPopularMovies(),
  });

  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && <Error />}

      {status === "success" && (
        <>
          <PageTitle title="Popular movies" />
          <MovieData movies={data.results} />
        </>
      )}
    </>
  );
}
