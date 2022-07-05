import { NavLink } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

import s from "./SearchLink.module.scss";

export default function SearchLink() {
  return (
    <div className={s.overlay}>
      <NavLink to="/search" className={s.link}>
        <HiOutlineSearch />
      </NavLink>
    </div>
  );
}
