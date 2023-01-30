import BackLink from "../BackLink";
import Overview from "./Overview/Overview";
import ButtonPlay from "../Buttons/ButtonPlay";
import Cast from "../Cast";
import ImagesSwiper from "../ImagesSwiper";
import Container from "../Container";
import MovieInfo from "./MovieInfo";

import { MovieScreen, MovieWrapper, Title } from "./SingleMovie.styled";
import Details from "./Details/Details";

export default function SingleMovie({ movie, onToggle, cast }) {
  const { backdrop, title } = movie;

  return (
    <>
      {movie && (
        <MovieScreen backdrop={backdrop}>
          <Container>
            <BackLink />

            <MovieWrapper>
              <Container>
                <Title>{title}</Title>
                <MovieInfo movie={movie} />
                <Overview movie={movie} onToggle={onToggle} />

                <ButtonPlay onToggle={onToggle} />
                <Details movie={movie} cast={cast} />
              </Container>
            </MovieWrapper>
          </Container>
        </MovieScreen>
      )}
      <Cast cast={cast} />
      <ImagesSwiper />
    </>
  );
}
