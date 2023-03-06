import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/api/movies-api";
import MovieData from "../../components/MovieData";
import PageTitle from "../../components/PageTitle";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error";

export default function TopRatedView() {
  const { status, data } = useQuery({
    queryFn: () => getTopRatedMovies(),
    queryKey: ["topRated"],
  });
  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && <Error />}

      {status === "success" && (
        <>
          <PageTitle title="Top Rated movies" />
          <MovieData movies={data.results} />
        </>
      )}
    </>
  );
}
