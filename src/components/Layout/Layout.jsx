import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../Container/Container";
import LoginPopUp from "../LoginPopUp/LoginPopUp";
import { ReactComponent as LoginIcon } from "../../icons/login.svg";

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
            <Link to="/">
              <p className={s.logo}>MovieDB</p>
            </Link>
            <div className={s.loginBlock}>
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
