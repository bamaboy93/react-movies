import { Box } from "@mui/material";
import PropTypes from "prop-types";

import ButtonFav from "../../Buttons/ButtonFav/ButtonFav";
import ButtonTrailer from "../../Buttons/ButtonTrailer/ButtonTrailer";

import { ButtonsBox, ShortDesc } from "./Overview.styled";

export default function Overview({ movie, onToggle }) {
  const { tagline } = movie;

  return (
    <Box>
      {tagline && <ShortDesc>{tagline}</ShortDesc>}
      <ButtonsBox>
        <ButtonTrailer onToggle={onToggle} />
        <ButtonFav movie={movie} />
      </ButtonsBox>
    </Box>
  );
}

Overview.propTypes = {
  movie: PropTypes.shape({
    tagline: PropTypes.string,
  }),
  onToggle: PropTypes.func,
};
