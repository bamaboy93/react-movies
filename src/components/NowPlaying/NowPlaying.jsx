import noImageFound from "../../styles/images/noimage.jpg";
import getColor from "../../services/getColor";
import s from "./NowPlaying.module.scss";
import { BsFillPlayFill } from "react-icons/bs";

export default function NowPlaying({ movie }) {
  const { poster_path, backdrop_path, title, overview, vote_average, adult } =
    movie;
  return (
    <div
      className={s.wrapper}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <div className={s.movieWrapper}>
        <div className={s.infoWrapper}>
          <h1 className={s.title}>{title}</h1>
          <div className={s.info}>
            <div className={s.options}>
              {movie.release_date && (
                <span className={s.year}>
                  {movie.release_date.split("").slice(0, 4).join("")}
                </span>
              )}

              {movie.vote_average && (
                <span
                  style={{ color: getColor(vote_average) }}
                  className={s.rating}
                >
                  {movie.vote_average}
                </span>
              )}
              {adult === true && <span className={s.ageLimit}>18+</span>}
            </div>

            {movie.overview && <p className={s.overview}>{overview}</p>}

            <a className={s.link} href="/">
              <BsFillPlayFill /> <span className={s.linkText}>Watch Now</span>
            </a>
          </div>
        </div>
        <div className={s.posterWrapper}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `${noImageFound}`
            }
            alt={title}
            width={350}
          />
        </div>
      </div>
    </div>
  );
}
