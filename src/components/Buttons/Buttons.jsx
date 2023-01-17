import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addFavourite,
  deleteFavourite,
  inFavourites,
} from "../../services/localStorage";
import { Box, ButtonTrailer, ButtonFav } from "./Buttons.styled";

export default function Buttons({ movie, onToggle }) {
  const { id } = movie;
  const [fav, setFav] = useState(false);

  const onFavourite = () => {
    if (fav) {
      deleteFavourite(id);
    } else {
      addFavourite(movie);
    }
    setFav(!fav);
  };
  useEffect(() => {
    setFav(inFavourites(id));
  }, [id]);
  return (
    <Box>
      <ButtonTrailer type="button" onClick={onToggle}>
        Trailer
      </ButtonTrailer>
      <ButtonFav type="button" onClick={onFavourite}>
        {fav ? <MdFavorite /> : <MdFavoriteBorder />}
      </ButtonFav>
    </Box>
  );
}

Buttons.propTypes = {
  movie: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};
