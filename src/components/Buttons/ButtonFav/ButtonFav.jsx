import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addFavourite,
  deleteFavourite,
  inFavourites,
} from "../../../services/localStorage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase";
import { StyledButton } from "./ButtonFav.styled";

export default function ButtonFav({ movie }) {
  const { id } = movie;
  const [fav, setFav] = useState(false);
  const user = useAuthState(auth);

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
    <StyledButton
      title="You need to be logged in"
      color="secondary"
      onClick={onFavourite}
      disabled={user ? false : true}
    >
      {fav ? <MdFavorite size={30} /> : <MdFavoriteBorder size={30} />}
    </StyledButton>
  );
}

ButtonFav.propTypes = {
  movie: PropTypes.object.isRequired,
};
