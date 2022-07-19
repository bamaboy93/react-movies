import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";

import s from "./Layout.module.scss";
import Footer from "./Footer";

export default function Layout({ showHeader = [] }) {
  const { pathname } = useLocation();

  return (
    <div className={s.wrapper}>
      {showHeader.includes(pathname) && <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />

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
