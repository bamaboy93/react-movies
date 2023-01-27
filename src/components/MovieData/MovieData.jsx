import { Link, useLocation } from "react-router-dom";

// import PropTypes from "prop-types";
import noImageFound from "../../styles/images/noimage.jpg";
import Container from "../Container";

import {
  MovieCard,
  MoviesList,
  MoviesListItem,
  MoviesSection,
  MovieTitle,
  Overlay,
  OverlayTitle,
  OverlayVote,
  Rating,
} from "./MovieData.styled";

export default function MovieData({ movies }) {
  const url = useLocation();

  return (
    <MoviesSection>
      <Container>
        <MoviesList>
          {movies.map(({ id, poster_path, title, vote_average }) => (
            <MoviesListItem key={id}>
              <Link to={`${url.pathname}/${id}`}>
                <Overlay>
                  <OverlayTitle>{title}</OverlayTitle>
                </Overlay>
                <OverlayVote>
                  {vote_average && (
                    <Rating vote={vote_average}>
                      {vote_average.toFixed()}
                    </Rating>
                  )}
                </OverlayVote>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `${noImageFound}`
                  }
                  alt={title}
                />
                <MovieCard>
                  <MovieTitle>{title}</MovieTitle>
                </MovieCard>
              </Link>
            </MoviesListItem>
          ))}
        </MoviesList>
      </Container>
    </MoviesSection>
  );
}

// MovieData.propTypes = {
//   movies: PropTypes.shape,
// };
