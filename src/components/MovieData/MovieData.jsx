import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import noImageFound from "../../icons/noimage.jpg";

import s from "./MovieData.module.scss";

export default function MovieData({ movies }) {
  const url = useLocation();

  function getColor(vote) {
    const num = vote.toFixed();
    if (num >= 8) {
      return "#7dd87d";
    } else if (num < 8 && num >= 5) {
      return "#eec60a";
    } else {
      return "#eb2632";
    }
  }
  return (
    <div>
      <ul className={s.moviesList}>
        {movies.map(({ id, poster_path, title, vote_average }) => (
          <li key={id} className={s.moviesItem}>
            <Link to={`${url.pathname}/${id}`}>
              <div className={s.voteOverlay}>
                <p style={{ color: getColor(vote_average) }} className={s.vote}>
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
                className={s.poster}
              />

              <div className={s.movieCard}>
                <p className={s.movieTitle}>{title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// MovieData.propTypes = {
//   movies: PropTypes.shape,
// };
