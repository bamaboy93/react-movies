import PropTypes from "prop-types";
import Buttons from "../../Buttons";

import { OverviewWrapper, ShortDesc } from "./Overview.styled";

export default function Overview({ movie, onToggle }) {
  const { tagline } = movie;

  return (
    <OverviewWrapper>
      {tagline && <ShortDesc>{tagline}</ShortDesc>}
      <Buttons movie={movie} onToggle={onToggle} />
    </OverviewWrapper>
  );
}

Overview.propTypes = {
  movie: PropTypes.shape({
    tagline: PropTypes.string,
  }),
  onToggle: PropTypes.func,
};
