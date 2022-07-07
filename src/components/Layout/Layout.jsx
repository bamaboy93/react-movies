import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Container from "../Container";
import Login from "../Login";
import UserInfo from "../UserInfo";

import { ReactComponent as LogoIcon } from "../../styles/icons/tmdb.svg";

import s from "./Layout.module.scss";
import { LinearProgress } from "@mui/material";
import SearchLink from "../SearchLink/SearchLink";

export default function Layout() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Container>
          <div className={s.navbar}>
            <a href="/react-movies/">
              <p className={s.logo}>MovieDB</p>
            </a>

            <div className={s.loginBlock}>
              <SearchLink />
              {user ? <UserInfo /> : <Login />}
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={s.footer}>
        <Container>
          <div className={s.footerWrapper}>
            <p className={s.footerText}>© MovieDB, 2022 based on</p>
            <a href="https://www.themoviedb.org/">
              <LogoIcon width={80} />
            </a>
          </div>
        </Container>
      </footer>

      <ToastContainer
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
