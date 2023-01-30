import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

import api from "../../services/api/movies-api";

import Container from "../Container";
import {
  MainWrapper,
  LogoWrapper,
  LogoLink,
  MovieWrapper,
  InfoWrapper,
  MainTitle,
  Info,
  Options,
  OptionsItem,
  Rating,
  Overview,
  Block,
  Subtitle,
  CastList,
  CastListItem,
  LinkWrapper,
  Wrapper,
  WatchLink,
  MobileWatchLink,
  CastError,
} from "./MainMovie.styled";

export default function MainMovie({ movie }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  const {
    id,
    backdrop_path,
    title,
    release_date,
    vote_average,
    adult,
    overview,
  } = movie;
  const url = useLocation();
  // Cast
  useEffect(() => {
    api
      .getCastInfo(id)
      .then((cast) => {
        setActors(cast);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [id, error]);
  return (
    <MainWrapper backdrop={backdrop_path}>
      <Wrapper>
        <Container>
          <LogoWrapper>
            <LogoLink href="/">Movie Base</LogoLink>
          </LogoWrapper>
          <MovieWrapper>
            <InfoWrapper>
              <MainTitle>{title}</MainTitle>
              <Info>
                <Options>
                  {release_date && (
                    <OptionsItem>
                      {release_date.split("").slice(0, 4).join("")}
                    </OptionsItem>
                  )}
                  {vote_average && (
                    <Rating vote={vote_average}>{vote_average}</Rating>
                  )}
                  {adult === true && <OptionsItem>18+</OptionsItem>}
                  <MobileWatchLink to={`${url.pathname}/${id}`}>
                    <BsPlayCircle />
                    Watch Now
                  </MobileWatchLink>
                </Options>

                {overview && <Overview>{overview}</Overview>}
              </Info>

              <Block>
                <Subtitle>Starring:</Subtitle>
                {actors ? (
                  <CastList>
                    {actors.slice(0, 4).map((actor) => (
                      <CastListItem key={actor.id}>
                        {actor.original_name}
                      </CastListItem>
                    ))}
                  </CastList>
                ) : (
                  <CastError>...</CastError>
                )}
              </Block>
            </InfoWrapper>
            <LinkWrapper>
              <WatchLink to={`${url.pathname}/${id}`}>
                <BsPlayCircle />
                Watch Now
              </WatchLink>
            </LinkWrapper>
          </MovieWrapper>
        </Container>
      </Wrapper>
    </MainWrapper>
  );
}

MainMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    adult: PropTypes.bool,
    overview: PropTypes.string,
  }),
};
