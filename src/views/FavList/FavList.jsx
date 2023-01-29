import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import noImageFound from "../../styles/images/noimage.jpg";

import Status from "../../services/status";
import { getFavourites } from "../../services/localStorage";
import Container from "../../components/Container";

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
      <h2>Favourites</h2>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <ul>
            {movies.map(({ id, src, title }) => (
              <li key={id}>
                <Link to={`${url.pathname}/${id}`}>
                  <div>
                    <img src={src ? `${src}` : `${noImageFound}`} alt={title} />
                  </div>

                  <div>
                    <p c>{title}</p>
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
