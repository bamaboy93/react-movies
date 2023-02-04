import PropTypes from "prop-types";
import BackLink from "../BackLink";
import Buttons from "../Buttons";
import CastMobile from "../CastMobile";
import Container from "../Container";
import ImagesSwiper from "../ImagesSwiper";
import {
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

export default function SingleMovieMobile({ movie, cast, onToggle }) {
  const { src, title, score, year, overview, runtime } = movie;
  return (
    <>
      {movie && (
        <PageWrapper>
          <Container>
            <BackLink />
            <MovieWrapper>
              <PosterWrapper>
                <Poster src={src} alt={title} />
                <Rating vote={score}>{score.toFixed()}</Rating>
              </PosterWrapper>

              <InfoWrapper>
                <Title>{title}</Title>{" "}
                <Year>{year.split("").slice(0, 4).join("")}</Year>
                <Subtitle>Genres:</Subtitle>
                <Genres>
                  {movie.genres.slice(0, 2).map((genre) => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                </Genres>
                <Subtitle>Runtime:</Subtitle>
                <Runtime>{runtime}min</Runtime>
              </InfoWrapper>
            </MovieWrapper>
            <Buttons movie={movie} onToggle={onToggle} />
            <Overview>{overview}</Overview>
          </Container>
          <CastMobile cast={cast} />
          <ImagesSwiper />
        </PageWrapper>
      )}
    </>
  );
}

SingleMovieMobile.propTypes = {
  movie: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    runtime: PropTypes.number,
    score: PropTypes.number,
    overview: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
  onToggle: PropTypes.func,
};
