import { useLocation } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import noImageFound from "../../styles/images/noimage.jpg";
import Container from "../Container";
import {
  InfoWrapper,
  LinkWatch,
  MovieInfo,
  MovieTitle,
  MovieWrapper,
  Option,
  Options,
  Overview,
  PosterWrapper,
  Rating,
  Section,
  Wrapper,
} from "./NowPlaying.styled";

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
      <Container>
        <Wrapper backdrop={backdrop_path}>
          <MovieWrapper>
            <InfoWrapper>
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
                  <BsFillPlayFill /> Watch Now
                </LinkWatch>
              </MovieInfo>
            </InfoWrapper>
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
        </Wrapper>
      </Container>
    </Section>
  );
}
