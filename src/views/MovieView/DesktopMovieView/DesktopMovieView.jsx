import { useState } from "react";
import classNames from "classnames";

import s from "./DesktopMovieView.module.scss";

import Navigation from "./Navigaton";
import Overview from "./Overview";
import Details from "./Details";
import BackLink from "./BackLink";

export default function Dmv({ movie, onToggle }) {
  const [showInfo, setShowInfo] = useState("Overview");

  const classes = classNames(s.filmScreen, {
    [s.filmScreenDetails]: showInfo === "Details",
  });

  return (
    <div className={classes} style={{ background: `url(${movie.backdrop})` }}>
      <BackLink />
      <div className={s.titleWrapper}>
        <h1 className={s.title}>{movie.title}</h1>
      </div>

      <div className={s.screenFadingBlock}>
        <Overview
          movie={movie}
          onToggle={onToggle}
          showInfo={showInfo === "Overview"}
        />

        <Details movie={movie} showInfo={showInfo === "Details"} />
      </div>
      <Navigation onChange={setShowInfo} />
    </div>
  );
}
