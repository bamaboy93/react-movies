import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { Modal, Overlay } from "./PopUp.styled";

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
    <Overlay onClick={handleBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
};

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
