import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

export default function Layout({ showHeader = [], onSubmit }) {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({
    query: "(max-width: 1279px)",
  });

  return (
    <>
      {isMobile ? (
        <HeaderMobile onSubmit={onSubmit} />
      ) : (
        <>{showHeader.includes(pathname) && <Header onSubmit={onSubmit} />}</>
      )}

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
  onSubmit: PropTypes.func.isRequired,
  showHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
};
