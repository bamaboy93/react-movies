import PropTypes from "prop-types";

import { StyledButton } from "./ButtonTrailer.styled";

export default function ButtonTrailer({ onToggle }) {
  return (
    <StyledButton variant="contained" color="secondary" onClick={onToggle}>
      Trailer
    </StyledButton>
  );
}

ButtonTrailer.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
