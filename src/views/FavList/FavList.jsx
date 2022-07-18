import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import noImageFound from "../../styles/images/noimage.jpg";

import Status from "../../services/status";
import { getFavourites } from "../../services/localStorage";
import Container from "../../components/Container";
import s from "./FavList.module.scss";
export default function UserList() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const url = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);

    setMovies(getFavourites());
    setStatus(Status.RESOLVED);
  }, []);
  return (
    <Container>
      <h2 className={s.title}>Favourites</h2>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <ul className={s.moviesList}>
            {movies.map(({ id, src, title }) => (
              <li key={id} className={s.moviesItem}>
                <Link to={`${url.pathname}/${id}`}>
                  <div className={s.image}>
                    <img
                      src={src ? `${src}` : `${noImageFound}`}
                      alt={title}
                      className={s.poster}
                    />
                  </div>

                  <div className={s.movieCard}>
                    <p className={s.movieTitle}>{title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
}
