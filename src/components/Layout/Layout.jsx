import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ showHeader = [], onSubmit }) {
  const { pathname } = useLocation();

  return (
    <>
      {showHeader.includes(pathname) && <Header onSubmit={onSubmit} />}
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
    </>
  );
}
