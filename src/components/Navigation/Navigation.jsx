import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={s.linkContainer}>
      <span className={s.item}>
        <NavLink
          className={s.link}
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #ded09f" : "none",
          })}
          to="/top_rated"
        >
          Top Rated Movies
        </NavLink>
      </span>

      <span className={s.item}>
        <NavLink
          className={s.link}
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #ded09f" : "none",
          })}
          to="/upcoming"
        >
          Upcoming
        </NavLink>
      </span>
    </div>
  );
}
