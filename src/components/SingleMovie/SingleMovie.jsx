import PropTypes from "prop-types";
import Overview from "./Overview/Overview";
import ButtonPlay from "../Buttons/ButtonPlay/ButtonPlay";
import Cast from "../Cast";
import ImagesSwiper from "../ImagesSwiper";
import Container from "../Container";
import MovieInfo from "./MovieInfo";
import Navigation from "./Navigation/Navigation";

import {
  MovieScreen,
  NavigationWrapper,
  MovieWrapper,
  Title,
} from "./SingleMovie.styled";
import Details from "./Details/Details";

export default function SingleMovie({ movie, onToggle, cast, images }) {
  const { backdrop_path, original_title } = movie;

  return (
    <>
      {movie && (
        <MovieScreen backdrop={backdrop_path}>
          <NavigationWrapper>
            <Navigation title={original_title} />
          </NavigationWrapper>
          <MovieWrapper>
            <Container>
              <Title>{original_title}</Title>
              <MovieInfo movie={movie} />
              <Overview movie={movie} onToggle={onToggle} />

              <ButtonPlay onToggle={onToggle} />
              <Details movie={movie} cast={cast} />
            </Container>
          </MovieWrapper>
        </MovieScreen>
      )}
      <Cast cast={cast} />
      <ImagesSwiper images={images} />
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
