import PropTypes from "prop-types";
import { BsPlayCircle } from "react-icons/bs";
import { Button } from "./ButtonPlay.styled";

export default function ButtonPlay({ onToggle }) {
  return (
    <Button type="button" onClick={onToggle}>
      <BsPlayCircle />
    </Button>
  );
}

ButtonPlay.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
