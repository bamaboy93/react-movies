import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase";

import Cast from "../../../components/Cast";
import SearchLink from "../../../components/SearchLink/SearchLink";
import UserInfo from "../../../components/UserInfo";
import Login from "../../../components/Login";
import Container from "../../../components/Container";

import { LinearProgress } from "@mui/material";
import s from "./MobileMovieData.module.scss";
import Buttons from "../../../components/Buttons/Buttons";

export default function DesktopMovieData({ movie, onToggle }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LinearProgress color="secondary" />;
  }
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
  return (
    <>
      <div className={s.navWrapper}>
        <SearchLink />
        {user ? <UserInfo /> : <Login />}
      </div>

      <Container>
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
          <div className={s.sideWrapper}>
            <Buttons movie={movie} onToggle={onToggle} />

            <h3 className={s.title}>Year</h3>
            <p className={s.infoYear}>
              {movie.year.split("").slice(0, 4).join("")}
            </p>
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
        <div className={s.infoWrapper}>
          <h2 className={s.movieTitle}>{movie.title}</h2>

          <Cast />
          <h3 className={s.title}>About</h3>
          <p className={s.info}>{movie.overview}</p>
        </div>
      </Container>
    </>
  );
}
