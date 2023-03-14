import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getCastInfo } from "../../services/api/movies-api";
import { useLocation } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import {
  ExpandMore,
  PlayCircleOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";

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
  OverviewBox,
  Imdb,
} from "./MainMovie.styled";

export default function MainMovie({ movie }) {
  const {
    id,
    backdrop_path,
    title,
    release_date,
    vote_average,

    overview,
    tagline,
    imdb_id,
  } = movie;
  const url = useLocation();

  const { data, isSuccess } = useQuery({
    queryKey: ["cast"],
    queryFn: () => getCastInfo(id),
  });

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
                  {imdb_id && (
                    <Imdb
                      href={`https://www.imdb.com/title/${imdb_id}`}
                      target="_blank"
                    >
                      <FaImdb />
                    </Imdb>
                  )}

                  <MobileWatchLink to={`${url.pathname}/${id}`}>
                    <PlayCircleOutlined />
                    Watch Now
                  </MobileWatchLink>
                </Options>
                <OverviewBox>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="overview-content"
                      id="overview-header"
                    >
                      <Overview>{tagline}</Overview>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Overview>{overview}</Overview>
                    </AccordionDetails>
                  </Accordion>
                </OverviewBox>
              </Info>

              <Block>
                <Subtitle>Starring:</Subtitle>
                {isSuccess ? (
                  <CastList>
                    {data.slice(0, 4).map((actor) => (
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
                <PlayCircleFilledOutlined />
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
    tagline: PropTypes.string,
    imdb_id: PropTypes.string,
  }),
};
