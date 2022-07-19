import Buttons from "../../../components/Buttons/Buttons";
import s from "./DMV.module.scss";

export default function Overview({ movie, onToggle }) {
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
    <div className={s.info}>
      <div className={s.options}>
        {movie.year && (
          <span className={s.year}>
            {movie.year.split("").slice(0, 4).join("")}
          </span>
        )}
        {movie.genres && (
          <span>
            {movie.genres.slice(0, 1).map((genre) => (
              <span key={genre.id} className={s.item}>
                {genre.name}
              </span>
            ))}
          </span>
        )}
        {movie.runtime && (
          <span className={s.ageLimit}>{movie.runtime}min</span>
        )}

        {movie.score && (
          <span style={{ color: getColor(movie.score) }} className={s.rating}>
            {movie.score.toFixed()}
          </span>
        )}
      </div>

      {movie.tagline && <p className={s.shortDesc}>{movie.tagline}</p>}
      <Buttons movie={movie} onToggle={onToggle} />
    </div>
  );
}
