import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api/movies-api";

import Status from "../../services/status";

import s from "./Cast.module.scss";

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    api
      .getCastInfo(movieId)
      .then((cast) => {
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <h3 className={s.title}>Cast</h3>
          <ul className={s.cast}>
            {actors.slice(0, 8).map((actor) => (
              <li key={actor.id} className={s.item}>
                {actor.original_name}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
