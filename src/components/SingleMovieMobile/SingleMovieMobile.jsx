import PropTypes from "prop-types";
import Navigation from "../SingleMovie/Navigation/Navigation";

import CastMobile from "../CastMobile";
import Container from "../Container";
import ImagesSwiper from "../ImagesSwiper";
import {
  NavigationWrapper,
  InfoWrapper,
  MovieWrapper,
  Poster,
  Title,
  Rating,
  Year,
  Genres,
  Genre,
  Overview,
  PosterWrapper,
  Subtitle,
  Runtime,
  PageWrapper,
} from "./SingleMovieMobile.styled";

export default function SingleMovieMobile({ movie, cast, images, onToggle }) {
  const {
    release_date,
    poster_path,
    title,
    genres,
    vote_average,
    overview,
    runtime,
  } = movie;
  return (
    <>
      {movie && (
        <PageWrapper>
          <Container>
            <NavigationWrapper>
              <Navigation title={title} />
            </NavigationWrapper>
            <MovieWrapper>
              <PosterWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
                <Rating vote={vote_average}>{vote_average.toFixed()}</Rating>
              </PosterWrapper>

              <InfoWrapper>
                <Year>{release_date.split("").slice(0, 4).join("")}</Year>
                <Subtitle>Genres:</Subtitle>
                <Genres>
                  {genres.slice(0, 2).map((genre) => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                </Genres>
                <Subtitle>Runtime:</Subtitle>
                <Runtime>{runtime}min</Runtime>
              </InfoWrapper>
            </MovieWrapper>
            <Title>{title}</Title>
            {/* <Buttons movie={movie} onToggle={onToggle} /> */}
            <Overview>{overview}</Overview>
          </Container>
          <CastMobile cast={cast} />
          <ImagesSwiper images={images} />
        </PageWrapper>
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
