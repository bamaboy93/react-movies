import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { Box, Container } from "@mui/material";
import {
  LinkWatch,
  MovieBox,
  MovieInfo,
  MovieTitle,
  MovieWrapper,
  Option,
  Options,
  Overview,
  Rating,
  Section,
  PosterWrapper,
} from "./NowPlaying.styled";
import noImageFound from "../../styles/images/noimage.jpg";

export default function NowPlaying({ movie }) {
  const url = useLocation();
  const {
    id,
    poster_path,
    backdrop_path,
    title,
    overview,
    release_date,
    vote_average,
    adult,
  } = movie;
  return (
    <Section>
      <MovieBox backdrop={backdrop_path}>
        <Container>
          <MovieWrapper>
            <Box>
              <MovieTitle>{title}</MovieTitle>
              <MovieInfo>
                <Options>
                  {release_date && (
                    <Option>
                      {release_date.split("").slice(0, 4).join("")}
                    </Option>
                  )}
                  {vote_average && (
                    <Rating vote={vote_average}>{vote_average}</Rating>
                  )}
                  {adult === true && <Option>18+</Option>}
                </Options>

                {overview && <Overview>{overview}</Overview>}

                <LinkWatch to={`${url.pathname}/${id}`}>
                  <PlayArrowIcon /> Watch Now
                </LinkWatch>
              </MovieInfo>
            </Box>

            <PosterWrapper>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `${noImageFound}`
                }
                alt={title}
                width={350}
              />
            </PosterWrapper>
          </MovieWrapper>
        </Container>
      </MovieBox>
    </Section>
  );
}

NowPlaying.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdrop_path: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    adult: PropTypes.bool,
    overview: PropTypes.string,
  }),
};
