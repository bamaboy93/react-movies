import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import noImageFound from "../../icons/noimage.jpg";

import Cast from "../../components/Cast/Cast";
import { ReactComponent as IconPlay } from "../../icons/youtube.svg";
import Container from "../../components/Container/Container";
import PopUp from "../../components/PopUp/PopUp";

import s from "./MovieView.module.scss";

function MovieView() {
  const history = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [showPopUp, setPopUp] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);
    api
      .getMovieById(movieId)
      .then(
        ({
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
          genres,
        }) => {
          setMovie({
            src: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImageFound}`,
            title: original_title,
            year: release_date,
            score: vote_average,
            overview,
            genres,
          });
          setStatus(Status.RESOLVED);
        }
      )
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

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

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  const togglePopUp = () => {
    setPopUp(!showPopUp);
  };

  return (
    <Container>
      <button onClick={goBack} type="button" className={s.btn}>
        &#171;
      </button>

      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          <div className={s.wrapper}>
            <div className={s.posterWrapper}>
              <img className={s.image} src={movie.src} alt={movie.title} />
              <div className={s.overlayScore}>
                <p
                  style={{ color: getColor(movie.score) }}
                  className={s.infoScore}
                >
                  {movie.score.toFixed()}
                </p>
              </div>
            </div>
            <div className={s.description}>
              <h2 className={s.movieTitle}>{movie.title}</h2>
              <button type="button" onClick={togglePopUp} className={s.youBtn}>
                <IconPlay />
              </button>
              <div className={s.infoWrapper}>
                <h3 className={s.title}>Year</h3>
                <p className={s.infoYear}>
                  {movie.year.split("").slice(0, 4).join("")}
                </p>

                <Cast />
                <h3 className={s.title}>About</h3>
                <p className={s.info}>{movie.overview}</p>
                <h3 className={s.title}>Genres</h3>
                <ul className={s.genre}>
                  {movie.genres.map((genre) => (
                    <li key={genre.id} className={s.item}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {showPopUp && <PopUp onClose={togglePopUp}></PopUp>}
        </>
      )}
    </Container>
  );
}

export default MovieView;
