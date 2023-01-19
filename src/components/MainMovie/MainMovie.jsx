import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

import Status from "../../services/status";
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
} from "./MainMovie.styled";

export default function MainMovie({ movie }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
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
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id, error]);
  return (
    <MainWrapper backdrop={backdrop_path}>
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
                <Link to={`${url.pathname}/${id}`}>
                  <BsPlayCircle />
                  <span>Watch Now</span>
                </Link>
              </Options>

              {overview && <Overview>{overview}</Overview>}
            </Info>

            {status === status.RESOLVED && (
              <Block>
                <Subtitle>Starring:</Subtitle>
                <CastList>
                  {actors.slice(0, 4).map((actor) => (
                    <CastListItem key={actor.id}>
                      {actor.original_name}
                    </CastListItem>
                  ))}
                </CastList>
              </Block>
            )}
          </InfoWrapper>
          <LinkWrapper>
            <Link to={`${url.pathname}/${id}`}>
              <BsPlayCircle />
              <span>Watch Now</span>
            </Link>
          </LinkWrapper>
        </MovieWrapper>
      </Container>
    </MainWrapper>
  );
}
