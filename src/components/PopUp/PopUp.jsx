import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { ModalContent } from "./PopUp.styled";

export default function PopUp({ open, onToggle, children }) {
  return (
    <div>
      <Modal open={open} onClose={onToggle}>
        <ModalContent>{children}</ModalContent>
      </Modal>
    </div>
  );
}

PopUp.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
