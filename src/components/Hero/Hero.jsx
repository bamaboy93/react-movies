import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getCastInfo } from "../../services/api/movies-api";
import { useLocation } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import {
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
} from "@mui/material";
import {
  ExpandMore,
  PlayCircleOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";

import {
  ContentBox,
  ContentWrapper,
  HeroSection,
  LinkWrapper,
  LogoLink,
  MovieInfoWrapper,
  MovieTitle,
  MovieInfo,
  MovieInfoOptions,
  ReleaseDate,
  Rating,
  ImdbButton,
  OverviewAccordion,
  Overview,
  Subtitle,
  CastList,
  CastListItem,
  CastError,
  ButtonWatch,
  ButtonWatchMobile,
} from "./Hero.styled";

export default function Hero({ movie }) {
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
    <HeroSection backdrop={backdrop_path}>
      <Container>
        <ContentBox>
          <LinkWrapper>
            <LogoLink href="/react-movies" underline="none">
              Movie Base
            </LogoLink>
          </LinkWrapper>
          <ContentWrapper>
            <MovieInfoWrapper>
              <MovieTitle variant="h1">{title}</MovieTitle>
              <MovieInfo>
                <MovieInfoOptions>
                  {release_date && (
                    <ReleaseDate>
                      {release_date.split("").slice(0, 4).join("")}
                    </ReleaseDate>
                  )}
                  {vote_average && (
                    <Rating vote={vote_average}>
                      {vote_average.toFixed(1)}
                    </Rating>
                  )}
                  {imdb_id && (
                    <ImdbButton
                      href={`https://www.imdb.com/title/${imdb_id}`}
                      target="_blank"
                    >
                      <FaImdb size={40} />
                    </ImdbButton>
                  )}

                  <ButtonWatchMobile to={`${url.pathname}/${id}`}>
                    <PlayCircleOutlined />
                    Watch Now
                  </ButtonWatchMobile>
                </MovieInfoOptions>

                <OverviewAccordion>
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
                </OverviewAccordion>
              </MovieInfo>

              <Box>
                <Subtitle variant="h3">Starring:</Subtitle>
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
              </Box>
            </MovieInfoWrapper>
            <Box>
              <ButtonWatch to={`${url.pathname}/${id}`}>
                <PlayCircleFilledOutlined />
                Watch Now
              </ButtonWatch>
            </Box>
          </ContentWrapper>
        </ContentBox>
      </Container>
    </HeroSection>
  );
}

Hero.propTypes = {
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
