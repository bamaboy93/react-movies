import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Cast,
  CastList,
  CastListItem,
  DetailsWrapper,
  Overview,
  Subtitle,
} from "./Details.styled";

export default function Details({ cast, movie, show }) {
  const { overview } = movie;
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      classNames="alert"
      timeout={2000}
      mountOnEnter
      unmountOnExit
    >
      <DetailsWrapper>
        {overview && <Overview>{overview}</Overview>}

        <Cast>
          <Subtitle>Starring</Subtitle>
          {cast && (
            <CastList>
              {cast.slice(0, 6).map(({ id, original_name }) => (
                <CastListItem key={id}>{original_name}</CastListItem>
              ))}
            </CastList>
          )}
        </Cast>
      </DetailsWrapper>
    </CSSTransition>
  );
}
