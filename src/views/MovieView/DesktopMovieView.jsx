import SingleMovie from "../../components/SingleMovie";
import Cast from "../../components/Cast";

export default function MovieView({ cast, movie, onToggle }) {
  return (
    <>
      {movie && <SingleMovie movie={movie} cast={cast} onToggle={onToggle} />}

      <Cast cast={cast} />
    </>
  );
}
