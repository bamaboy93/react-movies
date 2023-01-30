import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import noImage from "../../styles/images/no-image.jpg";

import { MovieList, MovieListItem, MovieTitle } from "./Upcoming.styled";

export default function Upcoming({ movies }) {
  const url = useLocation();
  return (
    <MovieList>
      {movies.slice(0, 10).map(({ id, backdrop_path, title }) => (
        <MovieListItem key={id}>
          <Link to={`${url.pathname}/${id}`}>
            <img
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                  : `${noImage}`
              }
              alt="movie backdrop"
            />
          </Link>

          <MovieTitle>{title}</MovieTitle>
        </MovieListItem>
      ))}
    </MovieList>
  );
}

Upcoming.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
