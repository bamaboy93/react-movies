import { useState } from "react";
import classNames from "classnames";

import { BsPlayCircle } from "react-icons/bs";
import s from "./DesktopMovieView.module.scss";

import Navigation from "./Navigaton";
import Overview from "./Overview";
import Details from "./Details";
import BackLink from "./BackLink";
import Cast from "./Cast";

export default function Dmv({ cast, movie, onToggle }) {
  const [showInfo, setShowInfo] = useState("Overview");
  const { backdrop, title } = movie;
  const classes = classNames(s.filmScreen, {
    [s.filmScreenDetails]: showInfo === "Details",
  });

  return (
    <>
      <div className={classes} style={{ background: `url(${backdrop})` }}>
        <BackLink />

        <div className={s.titleWrapper}>
          <h1 className={s.title}>{title}</h1>
        </div>

        <div className={s.screenFadingBlock}>
          <Overview
            movie={movie}
            onToggle={onToggle}
            showInfo={showInfo === "Overview"}
          />

          <Details
            cast={cast}
            movie={movie}
            showInfo={showInfo === "Details"}
          />
        </div>
        <Navigation onChange={setShowInfo} tab={showInfo} />
      </div>
      {cast && <Cast cast={cast} />}

      <button onClick={onToggle} className={s.buttonPlay}>
        <BsPlayCircle />
      </button>
    </>
  );
}
