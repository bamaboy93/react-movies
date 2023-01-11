import { Link, useLocation } from "react-router-dom";
import getColor from "../../services/getColor";
// import PropTypes from "prop-types";
import noImageFound from "../../styles/images/noimage.jpg";
import Container from "../Container";
import MainMovie from "../MainMovie";

import s from "./MovieData.module.scss";

export default function MovieData({ movies }) {
  const url = useLocation();

  return (
    <>
      <MainMovie movie={movies[0]} />
      <Container>
        <ul className={s.moviesList}>
          {movies.map(({ id, poster_path, title, vote_average }) => (
            <li key={id} className={s.moviesItem}>
              <Link to={`${url.pathname}/${id}`}>
                <div className={s.voteOverlay}>
                  <p
                    style={{ color: getColor(vote_average) }}
                    className={s.vote}
                  >
                    {vote_average.toFixed()}
                  </p>
                </div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `${noImageFound}`
                  }
                  alt={title}
                />

                <div className={s.movieCard}>
                  <p className={s.movieTitle}>{title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

// MovieData.propTypes = {
//   movies: PropTypes.shape,
// };
