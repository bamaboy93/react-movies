import { useState, useEffect } from "react";

import { BsCaretRightSquare } from "react-icons/bs";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../Container";
import getColor from "../../services/getColor";
import s from "./MainMovie.module.scss";

export default function MainMovie({ movie }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { id } = movie;
  // Cast
  useEffect(() => {
    api
      .getCastInfo(id)
      .then((cast) => {
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id, error]);
  return (
    <div
      className={s.mainWrapper}
      style={{
        background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <Container>
        <div className={s.logoWrapper}>
          <a className={s.logoLink} href="/">
            Movie Base
          </a>
        </div>
        <div className={s.movieWrapper}>
          <div className={s.infoWrapper}>
            <h1 className={s.title}>{movie.title}</h1>
            <div className={s.info}>
              <div className={s.options}>
                {movie.release_date && (
                  <span className={s.year}>
                    {movie.release_date.split("").slice(0, 4).join("")}
                  </span>
                )}

                {movie.vote_average && (
                  <span
                    style={{ color: getColor(movie.vote_average) }}
                    className={s.rating}
                  >
                    {movie.vote_average}
                  </span>
                )}
                {movie.adult === true && (
                  <span className={s.ageLimit}>18+</span>
                )}
              </div>

              {movie.overview && <p className={s.overview}>{movie.overview}</p>}
            </div>
            {status === Status.RESOLVED && (
              <div className={s.block}>
                <h2 className={s.subtitle}>Starring:</h2>
                <ul className={s.cast}>
                  {actors.slice(0, 4).map((actor) => (
                    <li key={actor.id} className={s.item}>
                      {actor.original_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={s.linkWrapper}>
            <a className={s.link} href="/">
              <BsCaretRightSquare />
              <span>View Details</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
