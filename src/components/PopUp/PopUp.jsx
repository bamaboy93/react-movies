import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import s from "./PopUp.module.scss";

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
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.Modal__content}>
        {children}
        <button className={s.Modal__button} type="button" onClick={onClose}>
          &#10006;
        </button>
      </div>
    </div>,
    modalRoot
  );
};

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
