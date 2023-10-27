import PropTypes from "prop-types";
import { Container } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import ButtonFav from "../Buttons/ButtonFav/ButtonFav";
import ButtonTrailer from "../Buttons/ButtonTrailer/ButtonTrailer";

import Cast from "../Cast";

import {
  NavWrapper,
  MediaSection,
  PosterWrapper,
  Poster,
  RatingOverlay,
  Rating,
  InfoSection,
  MovieTitle,
  ButtonsBox,
  Options,
  Year,
  Genre,
  Runtime,
  Overview,
} from "./SingleMovieMobile.styled";

export default function SingleMovieMobile({ movie, cast, images, onToggle }) {
  const {
    release_date,
    poster_path,
    backdrop_path,
    title,
    genres,
    vote_average,
    overview,
    runtime,
  } = movie;
  return (
    <>
      {movie && (
        <>
          <MediaSection backdrop={backdrop_path}>
            <Container>
              <NavWrapper>
                <Navigation title={title} />
              </NavWrapper>
              <PosterWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
                <RatingOverlay>
                  <Rating vote={vote_average}>{vote_average.toFixed()}</Rating>
                </RatingOverlay>
              </PosterWrapper>
            </Container>
          </MediaSection>
          <InfoSection>
            <Container>
              <MovieTitle>{title}</MovieTitle>
              <ButtonsBox>
                <ButtonTrailer onToggle={onToggle} />
                <ButtonFav movie={movie} />
              </ButtonsBox>
              <Options spacing={3} direction="row">
                <Year>{release_date.split("").slice(0, 4).join("")}</Year>
                {genres.slice(0, 1).map((genre) => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
                <Runtime>{runtime}min</Runtime>
              </Options>
              <Overview>{overview}</Overview>
              <Cast cast={cast} />
            </Container>
          </InfoSection>
        </>
      )}
    </>
  );
}

SingleMovieMobile.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
  onToggle: PropTypes.func,
};
