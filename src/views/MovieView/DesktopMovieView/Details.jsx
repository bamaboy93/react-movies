import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import getColor from "../../../services/getColor";

import Cast from "../../../components/Cast";
import s from "./DesktopMovieView.module.scss";

export default function Overview({ movie, showInfo }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={showInfo}
      classNames="fadeDown"
      timeout={0}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={s.info}>
        <div className={s.options}>
          {movie.year && (
            <span className={s.year}>
              {movie.year.split("").slice(0, 4).join("")}
            </span>
          )}
          {movie.genres && (
            <span className={s.genre}>
              {movie.genres.slice(0, 1).map((genre) => (
                <span key={genre.id} className={s.item}>
                  {genre.name}
                </span>
              ))}
            </span>
          )}
          {movie.runtime && (
            <span className={s.runtime}>{movie.runtime}min</span>
          )}

          {movie.score && (
            <span style={{ color: getColor(movie.score) }} className={s.rating}>
              {movie.score.toFixed()}
            </span>
          )}
        </div>

        {movie.overview && <p className={s.description}>{movie.overview}</p>}

        <div className={s.block}>
          <Cast />
        </div>
      </div>
    </CSSTransition>
  );
}
