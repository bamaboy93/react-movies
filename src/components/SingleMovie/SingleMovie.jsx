import { useState } from "react";

import {
  Genre,
  MovieScreen,
  MovieWrapper,
  Options,
  Rating,
  RatingFull,
  Runtime,
  Title,
  Year,
} from "./SingleMovie.styled";

import BackLink from "../BackLink";
import Overview from "./Overview/Overview";
import Details from "./Details/Details";
import ButtonPlay from "../Buttons/ButtonPlay";
import Navigation from "./Navigation/Navigation";
import Cast from "../Cast";
import ImagesSwiper from "../ImagesSwiper";
import Container from "../Container";

export default function SingleMovie({ movie, onToggle, cast }) {
  const { backdrop, title, year, genres, runtime, score } = movie;

  const [show, setShow] = useState("Overview");

  return (
    <>
      {movie && (
        <MovieScreen backdrop={backdrop}>
          <Container>
            <BackLink />

            <MovieWrapper>
              <Container>
                <Title>{title}</Title>

                <Options>
                  <Year>{year.split("").slice(0, 4).join("")}</Year>
                  {genres.slice(0, 1).map((genre) => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                  <Runtime>{runtime}min</Runtime>
                  <Rating vote={score}>
                    {score.toFixed(2)}
                    <RatingFull>/10</RatingFull>
                  </Rating>
                </Options>

                <Overview
                  movie={movie}
                  onToggle={onToggle}
                  show={show === "Overview"}
                />

                <Details show={show === "Details"} cast={cast} movie={movie} />
                <ButtonPlay onToggle={onToggle} />
              </Container>
            </MovieWrapper>
            <Navigation onChange={setShow} tab={show} />
          </Container>
        </MovieScreen>
      )}
      <Cast cast={cast} />
      <ImagesSwiper />
    </>
  );
}
