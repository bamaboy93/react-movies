import { useState, useEffect } from "react";
import { getFavourites } from "../../services/localStorage";
import PageTitle from "../../components/PageTitle";
import FavouritesGrid from "../../components/FavouritesGrid";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import Container from "../../components/Container";

export default function FavouritesView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getFavourites());
  }, []);
  return (
    <Container>
      {movies && (
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
