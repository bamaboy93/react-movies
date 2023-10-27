import PropTypes from "prop-types";
import { Container } from "@mui/material";
import Overview from "./Overview/Overview";
import ButtonPlay from "../Buttons/ButtonPlay/ButtonPlay";

import Cast from "../Cast";
import ImagesSwiper from "../ImagesSwiper";
import MovieOptions from "./MovieOptions/MovieOptions";
import Navigation from "../Navigation/Navigation";
import Details from "./Details/Details";

import {
  MovieInfo,
  MovieInfoWrapper,
  MovieSection,
  MovieTitle,
  NavWrapper,
  StyledSection,
} from "./SingleMovie.styled";

export default function SingleMovie({ movie, onToggle, cast, images }) {
  const { backdrop_path, original_title } = movie;

  return (
    <>
      {movie && (
        <MovieSection backdrop={backdrop_path}>
          <NavWrapper>
            <Navigation title={original_title} />
          </NavWrapper>
          <Container>
            <MovieInfoWrapper>
              <MovieInfo>
                <MovieTitle>{original_title}</MovieTitle>
                <MovieOptions movie={movie} />
                <Overview movie={movie} onToggle={onToggle} />
                <Details movie={movie} cast={cast} />
              </MovieInfo>

              <ButtonPlay onToggle={onToggle} />
            </MovieInfoWrapper>
          </Container>
        </MovieSection>
      )}
      <StyledSection>
        <Container>
          <Cast cast={cast} />
          <ImagesSwiper images={images} />
        </Container>
      </StyledSection>
    </>
  );
}

SingleMovie.propTypes = {
  movie: PropTypes.shape({
    backdrop: PropTypes.string,
    title: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
  onToggle: PropTypes.func,
};
