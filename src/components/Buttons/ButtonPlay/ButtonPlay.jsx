import PropTypes from "prop-types";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Button } from "./ButtonPlay.styled";

export default function ButtonPlay({ onToggle }) {
  return (
    <Button aria-label="play" onClick={onToggle}>
      <PlayCircleOutlineIcon />
    </Button>
  );
}

ButtonPlay.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
