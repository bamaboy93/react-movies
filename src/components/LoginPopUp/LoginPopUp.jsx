import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import LoginForm from "../LoginForm/LoginForm";

import s from "./LoginPopUp.module.scss";

const modalRoot = document.querySelector("#modal-root");
const LoginPopUp = ({ onClose }) => {
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
    <div className={s.modal} onClick={handleBackdropClick}>
      <div className={s.content}>
        <LoginForm />
      </div>
    </div>,
    modalRoot
  );
};

LoginPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginPopUp;
