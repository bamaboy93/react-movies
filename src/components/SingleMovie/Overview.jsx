import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import Buttons from "../Buttons";

import { OverviewWrapper, ShortDesc } from "./Overview.styled";

export default function Overview({ movie, onToggle, show }) {
  const { tagline } = movie;
  const nodeRef = useRef(null);
  console.log(nodeRef);
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      classNames="alert"
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <OverviewWrapper>
        {tagline && <ShortDesc>{tagline}</ShortDesc>}
        <Buttons movie={movie} onToggle={onToggle} />
      </OverviewWrapper>
    </CSSTransition>
  );
}
