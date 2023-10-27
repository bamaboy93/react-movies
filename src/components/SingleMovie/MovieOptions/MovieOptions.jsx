import PropTypes from "prop-types";
import {
  Genre,
  Options,
  Rating,
  RatingFull,
  Runtime,
  Year,
} from "./MovieOptions.styled";

export default function MovieOptions({ movie }) {
  const { release_date, genres, runtime, vote_average } = movie;
  return (
    <Options>
      <Year>{release_date.split("").slice(0, 4).join("")}</Year>
      {genres.slice(0, 1).map((genre) => (
        <Genre key={genre.id}>{genre.name}</Genre>
      ))}
      <Runtime>{runtime}min</Runtime>
      <Rating vote={vote_average}>
        {vote_average.toFixed(1)}
        <RatingFull>/10</RatingFull>
      </Rating>
    </Options>
  );
}

MovieOptions.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.shape),
    year: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
