import Cast from "../../../components/Cast";
import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addFavourite,
  deleteFavourite,
  inFavourites,
} from "../../../services/localStorage";
import s from "./DesktopMovieData.module.scss";

export default function DesktopMovieData({ movie, onToggle }) {
  const [fav, setFav] = useState(false);

  const onFavourite = () => {
    if (fav) {
      deleteFavourite(movie.id);
    } else {
      addFavourite(movie);
    }
    setFav(!fav);
  };
  useEffect(() => {
    setFav(inFavourites(movie.id));
  }, [movie.id]);

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
      <div className={s.wrapper}>
        <div className={s.posterWrapper}>
          <img className={s.image} src={movie.src} alt={movie.title} />
          <div className={s.overlayScore}>
            <p style={{ color: getColor(movie.score) }} className={s.infoScore}>
              {movie.score.toFixed()}
            </p>
          </div>
        </div>
        <div className={s.description}>
          <h2 className={s.movieTitle}>{movie.title}</h2>
          <div className={s.btnBox}>
            <button type="button" onClick={onToggle} className={s.youBtn}>
              Trailer
            </button>
            <button type="button" className={s.favBtn} onClick={onFavourite}>
              {fav ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
          </div>

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
    </>
  );
}
