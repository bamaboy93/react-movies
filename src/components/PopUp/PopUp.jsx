import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import s from "./PopUp.module.scss";

import Trailer from "../Trailer/Trailer";

const modalRoot = document.querySelector("#modal-root");
const PopUp = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.modaloverlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        {children}

        <Trailer />
      </div>
    </div>,
    modalRoot
  );
};

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
