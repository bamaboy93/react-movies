import Buttons from "../../Buttons";

import { OverviewWrapper, ShortDesc } from "./Overview.styled";

export default function Overview({ movie, onToggle, show }) {
  const { tagline } = movie;

  return (
    <OverviewWrapper>
      {tagline && <ShortDesc>{tagline}</ShortDesc>}
      <Buttons movie={movie} onToggle={onToggle} />
    </OverviewWrapper>
  );
}
