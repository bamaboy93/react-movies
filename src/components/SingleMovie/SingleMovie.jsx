import { useState } from "react";

import {
  Genre,
  MovieScreen,
  Options,
  Rating,
  RatingFull,
  Runtime,
  Title,
  TitleWrapper,
  Year,
} from "./SingleMovie.styled";

import BackLink from "../BackLink";
import Overview from "./Overview";
import Details from "./Details";
import ButtonPlay from "../Buttons/ButtonPlay";
import Navigation from "./Navigation";
import Cast from "../Cast";

export default function SingleMovie({ movie, onToggle, cast }) {
  const { backdrop, title, year, genres, runtime, score } = movie;

  const [show, setShow] = useState("Overview");

  return (
    <>
      <MovieScreen backdrop={backdrop}>
        <BackLink />

        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>

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

        <Navigation onChange={setShow} tab={show} />

        <ButtonPlay onToggle={onToggle} />
      </MovieScreen>
      <Cast cast={cast} />
    </>
  );
}
