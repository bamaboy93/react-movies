import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import noImageFound from "../../styles/images/noimage.jpg";

import {
  Card,
  CardRatingOverlay,
  CardTitle,
  CardTitleOverlay,
  Rating,
} from "./DataGridItem.styled";
import { Grid } from "@mui/material";

export default function DataGridItem({ movie }) {
  const url = useLocation();

  return (
    <Grid item xs={12} sm={2} md={2}>
      <Link to={`${url.pathname}/${movie.id}`}>
        <Card>
          <CardRatingOverlay id="CardRatingOverlay">
            {movie.vote_average && (
              <Rating vote={movie.vote_average}>
                {movie.vote_average.toFixed()}
              </Rating>
            )}
          </CardRatingOverlay>

          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `${noImageFound}`
            }
            alt={movie.title}
          />

          <CardTitleOverlay id="CardTitleOverlay">
            <CardTitle>{movie.title}</CardTitle>
          </CardTitleOverlay>
        </Card>
      </Link>
    </Grid>
  );
}

DataGridItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
