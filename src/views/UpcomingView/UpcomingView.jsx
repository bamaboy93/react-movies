import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../services/api/movies-api";
import MovieData from "../../components/MovieData";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import AlertMessage from "../../components/AlertMessage";

export default function UpcomingView() {
  const { status, data } = useQuery({
    queryFn: () => getUpcomingMovies(),
    queryKey: ["topRated"],
  });
  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && (
        <AlertMessage message="500 Internal Server Error! Try again later." />
      )}

      {status === "success" && (
        <>
          <PageTitle title="Upcoming Movies" />
          <MovieData movies={data.results} />
        </>
      )}
    </>
  );
}
