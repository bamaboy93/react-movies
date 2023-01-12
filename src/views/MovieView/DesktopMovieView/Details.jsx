import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import getColor from "../../../services/getColor";

import s from "./DesktopMovieView.module.scss";

export default function Overview({ cast, movie, showInfo }) {
  const nodeRef = useRef(null);
  const { year, genres, runtime, score, overview } = movie;

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
          {year && (
            <span className={s.year}>
              {year.split("").slice(0, 4).join("")}
            </span>
          )}
          {genres && (
            <span className={s.genre}>
              {genres.slice(0, 1).map((genre) => (
                <span key={genre.id} className={s.item}>
                  {genre.name}
                </span>
              ))}
            </span>
          )}
          {runtime && <span className={s.runtime}>{runtime}min</span>}

          {score && (
            <p style={{ color: getColor(score) }} className={s.rating}>
              {score.toFixed(2)} <span className={s.ratingAccent}>/10</span>
            </p>
          )}
        </div>

        {overview && <p className={s.description}>{overview}</p>}

        <div className={s.block}>
          <h3 className={s.subtitle}>Starring</h3>
          {cast && (
            <ul className={s.cast}>
              {cast.slice(0, 6).map(({ id, original_name }) => (
                <li key={id} className={s.item}>
                  {original_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </CSSTransition>
  );
}
