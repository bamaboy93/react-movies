import {
  Genre,
  Options,
  Rating,
  RatingFull,
  Runtime,
  Year,
} from "./MovieInfo.styled";

export default function MovieInfo({ movie }) {
  const { year, genres, runtime, score } = movie;
  return (
    <Options>
      <Year>{year.split("").slice(0, 4).join("")}</Year>
      {genres.slice(0, 1).map((genre) => (
        <Genre key={genre.id}>{genre.name}</Genre>
      ))}
      <Runtime>{runtime}min</Runtime>
      <Rating vote={score}>
        {score.toFixed(1)}
        <RatingFull>/10</RatingFull>
      </Rating>
    </Options>
  );
}
