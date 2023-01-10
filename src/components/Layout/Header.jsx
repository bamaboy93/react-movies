import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

import Container from "../Container";
import Login from "../Login";
import UserInfo from "../UserInfo";
import SearchLink from "../SearchLink/SearchLink";

import { LinearProgress } from "@mui/material";
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
          <a className={s.logo} href="/">
            MB
          </a>

          <ul className={s.navList}>
            <li className={s.navItem}>
              <a className={s.navLink} href="/">
                Home
              </a>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/">
                Features
              </a>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/">
                Blog
              </a>
            </li>
          </ul>
          <div className={s.loginBlock}>
            <SearchLink />
            {user ? <UserInfo /> : <Login />}
          </div>
        </nav>
      </Container>
    </header>
  );
}

<div class="nav-menu fixed-top">
  <div class="container">
    <nav class="nav">
      <a class="logo" href="/">
        <img
          class="logo--img"
          src="./images/logo-name.png"
          alt="logotype"
          width="143"
          height="42"
        />
      </a>

      <ul class="nav__list">
        <li class="nav__item">
          <a class="nav__link" href="#about">
            About
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#news">
            News
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#music">
            Music
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#media">
            Media
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#tours">
            Tours
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>;
