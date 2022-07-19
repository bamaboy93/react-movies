import BackLink from "./BackLink";
import s from "./DMV.module.scss";
import Navigation from "./Navigaton";

import Overview from "./Overview";

export default function Dmv({ movie, onToggle }) {
  console.log(movie);
  return (
    <div
      className={s.filmScreen}
      style={{ background: `url(${movie.backdrop})` }}
    >
      <BackLink />
      <div className={s.titleWrapper}>
        <h1 className={s.title}>{movie.title}</h1>
      </div>

      <div className={s.screenFadingBlock}>
        <Overview movie={movie} onToggle={onToggle} />

        {/* <Details film={film} isShow={activeTab === "Details"} /> */}
      </div>
      <Navigation />
    </div>
  );
}
