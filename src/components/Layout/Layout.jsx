import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Container from "../Container";
import Login from "../Login/Login";
import UserInfo from "../UserInfo/UserInfo";

import { ReactComponent as LogoIcon } from "../../styles/icons/tmdb.svg";

import s from "./Layout.module.scss";

export default function AppBar() {
  const [user] = useAuthState(auth);
  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.navbar}>
            <a href="/react-movies/">
              <p className={s.logo}>MovieDB</p>
            </a>
            <div className={s.loginBlock}>
              {user ? <UserInfo /> : <Login />}
            </div>
          </div>
        </Container>
      </header>
      <Outlet />
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
    </>
  );
}
