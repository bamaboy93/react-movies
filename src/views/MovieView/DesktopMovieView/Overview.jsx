import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import getColor from "../../../services/getColor";

import Buttons from "../../../components/Buttons/Buttons";
import s from "./DesktopMovieView.module.scss";

export default function Overview({ movie, onToggle, showInfo }) {
  const nodeRef = useRef(null);
  const { year, genres, runtime, score, adult, tagline } = movie;
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
          {adult === true && <span className={s.ageLimit}>18+</span>}
        </div>

        {tagline && <p className={s.shortDesc}>{tagline}</p>}
        <Buttons movie={movie} onToggle={onToggle} />
      </div>
    </CSSTransition>
  );
}
