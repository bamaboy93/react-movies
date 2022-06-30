import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../Container";
import LoginPopUp from "../LoginPopUp/LoginPopUp";
import { ReactComponent as LoginIcon } from "../../styles/icons/login.svg";
import { ReactComponent as LogoIcon } from "../../styles/icons/tmdb.svg";

import s from "./Layout.module.scss";

export default function AppBar() {
  const [showPopUp, setPopUp] = useState(false);
  const togglePopUp = () => {
    setPopUp(!showPopUp);
  };
  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.block}>
            <a href="/react-movies/">
              <p className={s.logo}>MovieDB</p>
            </a>
            <div className={s.loginBlock}>
              <a className={s.login} href="/react-movies/userlist">
                U
              </a>
              <p className={s.login}>Login</p>
              <span className={s.line}>|</span>
              <button type="button" className={s.button} onClick={togglePopUp}>
                <LoginIcon width={30} height={30} />
              </button>
            </div>
          </div>
          {showPopUp && <LoginPopUp onClose={togglePopUp}></LoginPopUp>}
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
