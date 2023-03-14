import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

export default function Layout({ showHeader = [] }) {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:1279px)");

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <>{showHeader.includes(pathname) && <Header />}</>
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
  showHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
};
