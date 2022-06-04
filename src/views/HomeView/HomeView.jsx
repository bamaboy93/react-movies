import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Status from "../../services/status";
import api from "../../services/api/movies-api";
import noImageFound from "../../icons/noimage.jpg";

import SearchBar from "../../components/SearchBar/SearchBar";
import Container from "../../components/Container/Container";
import LoadBtn from "../../components/LoadBtn/LoadBtn";

import s from "./HomeView.module.scss";

function HomePage() {
  const history = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  /////Popular Movies
  useEffect(() => {
    setStatus(Status.PENDING);
    api
      .getPopularMovies()
      .then((results) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  //////////Search Query

  const handleFormSubmit = (newQuery) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setMovies(null);
    setStatus(Status.IDLE);

    history.push({ ...location, search: `query=${newQuery}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get("query");
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!query) return;

    setStatus(Status.PENDING);

    api
      .getMoviesByQuery(query)
      .then((results) => {
        if (results.length === 0) {
          toast.error(`No movies found on ${query}.`);
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [query, error]);

  /////////////////////////Popup

  return (
    <main>
      <Container>
        <div className={s.linkContainer}>
          <a href="/" className={s.link}>
            Trending Movies Today
          </a>
          <SearchBar onSubmit={handleFormSubmit} />
          <a href="/" className={s.link}>
            Upcoming Movies
          </a>
        </div>

        {status === Status.PENDING}

        {status === Status.REJECTED}

        {status === Status.RESOLVED && (
          <div className={s.wrapper}>
            <ul className={s.moviesList}>
              {movies.map(({ id, poster_path, title }) => (
                <li key={id} className={s.moviesItem}>
                  <Link
                    to={{
                      pathname: `movies/${id}`,
                    }}
                  >
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
            <LoadBtn />
          </div>
        )}
      </Container>
    </main>
  );
}

export default HomePage;
