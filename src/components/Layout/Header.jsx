import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

import Container from "../Container";
import Login from "../Login";
import UserInfo from "../UserInfo";

import { LinearProgress } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";
import s from "./Layout.module.scss";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <NavLink className={s.logo} to="/">
            MB
          </NavLink>

          <ul className={s.navList}>
            <li className={s.navItem}>
              <div className={s.dropdownWrapper}>
                <a className={s.navLink} href="/">
                  Home
                  <FaCaretDown />
                </a>
                <div className={s.dropdown}>
                  <ul className={s.dropdownList}>
                    <li className={s.dropdownItem}>
                      <NavLink className={s.dropdownLink} to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className={s.dropdownItem}>
                      <NavLink className={s.dropdownLink} to="/popular">
                        Popular
                      </NavLink>
                    </li>
                    <li className={s.dropdownItem}>
                      <NavLink className={s.dropdownLink} to="/top_rated">
                        Top Rated
                      </NavLink>
                    </li>
                    <li className={s.dropdownItem}>
                      <NavLink className={s.dropdownLink} to="/upcoming">
                        Upcoming
                      </NavLink>
                    </li>
                    <li className={s.dropdownItem}>
                      <NavLink className={s.dropdownLink} to="/favourites">
                        Favourites
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/">
                Features
                <FaCaretDown />
              </a>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/">
                Blog
                <FaCaretDown />
              </a>
            </li>
          </ul>
          <div className={s.loginBlock}>{user ? <UserInfo /> : <Login />}</div>
        </nav>
      </Container>
    </header>
  );
}
