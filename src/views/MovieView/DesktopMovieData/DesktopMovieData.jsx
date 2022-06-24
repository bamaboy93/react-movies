import Cast from "../../../components/Cast/Cast";
import { ReactComponent as IconPlay } from "../../../icons/youtube.svg";

import s from "./DesktopMovieData.module.scss";

export default function DesktopMovieData({ movie, onClick }) {
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
        <button type="button" onClick={onClick} className={s.youBtn}>
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
  );
}
