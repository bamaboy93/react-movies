import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import noImage from "../../styles/images/no-image.jpg";

import { Item, MovieTitle } from "./Upcoming.styled";
import { Grid } from "@mui/material";

export default function Upcoming({ movies }) {
  const url = useLocation();
  return (
    <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 10 }}>
      {movies.slice(0, 10).map(({ id, backdrop_path, title }) => (
        <Grid item xs={12} sm={4} md={2} key={id}>
          <Link to={`${url.pathname}/${id}`}>
            <Item>
              <img
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                    : `${noImage}`
                }
                alt="movie backdrop"
              />

              <MovieTitle>{title}</MovieTitle>
            </Item>
          </Link>{" "}
        </Grid>
      ))}
    </Grid>
  );
}

Upcoming.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
