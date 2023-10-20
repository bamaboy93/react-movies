import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ showHeader = [] }) {
  const { pathname } = useLocation();

  return (
    <>
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
    </>
  );
}

Layout.propTypes = {
  showHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
};
