import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import Container from "../Container";
import getColor from "../../services/getColor";
import s from "./MainMovie.module.scss";

export default function MainMovie({ movie }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const {
    id,
    backdrop_path,
    title,
    release_date,
    vote_average,
    adult,
    overview,
  } = movie;
  const url = useLocation();
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
        background: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
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
            <h1 className={s.title}>{title}</h1>
            <div className={s.info}>
              <div className={s.options}>
                {release_date && (
                  <span className={s.year}>
                    {release_date.split("").slice(0, 4).join("")}
                  </span>
                )}

                {vote_average && (
                  <span
                    style={{ color: getColor(vote_average) }}
                    className={s.rating}
                  >
                    {vote_average}
                  </span>
                )}
                {adult === true && <span className={s.ageLimit}>18+</span>}
              </div>

              {overview && <p className={s.overview}>{overview}</p>}
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
            <Link to={`${url.pathname}/${id}`} className={s.link}>
              <BsPlayCircle />
              <span>Watch Now</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
