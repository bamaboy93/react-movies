import { useState, useEffect } from "react";

import Status from "../../services/status";
import { getFavourites } from "../../services/localStorage";
import PageTitle from "../../components/PageTitle";
import FavouritesGrid from "../../components/FavouritesGrid";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import Container from "../../components/Container";

export default function FavouritesView() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    setMovies(getFavourites());
    setStatus(Status.RESOLVED);
  }, []);
  return (
    <Container>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <PageTitle title="Favourites" />
          {movies.length === 0 ? (
            <AlertMessage message="Your favourites list is empty!" />
          ) : (
            <FavouritesGrid movies={movies} />
          )}
        </>
      )}
    </Container>
  );
}
