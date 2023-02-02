import { useState, useEffect } from "react";

import Status from "../../services/status";
import { getFavourites } from "../../services/localStorage";
import PageTitle from "../../components/PageTitle";
import FavouritesGrid from "../../components/FavouritesGrid";

export default function UserList() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    setMovies(getFavourites());
    setStatus(Status.RESOLVED);
  }, []);
  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <PageTitle title="Favourites" />
          <FavouritesGrid movies={movies} />
        </>
      )}
    </>
  );
}
