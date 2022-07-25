import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addFavourite,
  deleteFavourite,
  inFavourites,
} from "../../services/localStorage";

import s from "./Buttons.module.scss";

export default function Buttons({ movie, onToggle }) {
  const [fav, setFav] = useState(false);

  const onFavourite = () => {
    if (fav) {
      deleteFavourite(movie.id);
    } else {
      addFavourite(movie);
    }
    setFav(!fav);
  };
  useEffect(() => {
    setFav(inFavourites(movie.id));
  }, [movie.id]);
  return (
    <div className={s.btnBox}>
      <button type="button" onClick={onToggle} className={s.youBtn}>
        Trailer
      </button>
      <button type="button" className={s.favBtn} onClick={onFavourite}>
        {fav ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    </div>
  );
}

Buttons.propTypes = {
  movie: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};
