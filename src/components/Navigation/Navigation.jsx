import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";

export default function Navigation({ onSubmit }) {
  return (
    <div className={s.linkContainer}>
      <span className={s.item}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/trending"
        >
          Trending Movies Today
        </NavLink>
      </span>

      <span className={s.item}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/upcoming"
        >
          Upcoming
        </NavLink>
      </span>
    </div>
  );
}
