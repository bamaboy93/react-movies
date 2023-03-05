import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import noImageFound from "../../styles/images/noimage.jpg";
import Container from "../Container";

import {
  MovieCard,
  MoviesList,
  MoviesListItem,
  MovieTitle,
  Overlay,
  OverlayTitle,
  OverlayVote,
  Rating,
} from "./MovieData.styled";

export default function MovieData({ movies }) {
  const url = useLocation();

  return (
    <Container>
      {movies && (
        <MoviesList>
          {movies.map((movie) => (
            <MoviesListItem key={movie.id}>
              <Link to={`${url.pathname}/${movie.id}`}>
                <Overlay>
                  <OverlayTitle>{movie.title}</OverlayTitle>
                </Overlay>
                <OverlayVote>
                  {movie.vote_average && (
                    <Rating vote={movie.vote_average}>
                      {movie.vote_average.toFixed()}
                    </Rating>
                  )}
                </OverlayVote>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : `${noImageFound}`
                  }
                  alt={movie.title}
                />
                <MovieCard>
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieCard>
              </Link>
            </MoviesListItem>
          ))}
        </MoviesList>
      )}
    </Container>
  );
}

MovieData.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};
