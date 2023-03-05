import PropTypes from "prop-types";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import {
  DetailsButton,
  DetailsWrapper,
  MovieWrapper,
  PosterWrapper,
  Poster,
  Rating,
  InfoWrapper,
  Title,
  Runtime,
  Year,
  Subtitle,
  Genres,
  Genre,
  Overview,
  CastList,
  CastListItem,
  CastError,
} from "./Details.styled";

export default function Details({ cast, movie }) {
  const { overview, title, year, runtime, score, src } = movie;
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <DetailsButton onClick={toggleDrawer()}>Details</DetailsButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer()}>
        <Box
          sx={{ width: 750 }}
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <DetailsWrapper>
            <MovieWrapper>
              <PosterWrapper>
                <Poster src={src} alt="movie poster" />
                <Rating vote={score}>{score.toFixed()}</Rating>
              </PosterWrapper>
              <InfoWrapper>
                <Title>{title}</Title>
                <Year>{year.split("").slice(0, 4).join("")}</Year>
                <Subtitle>Genres:</Subtitle>
                <Genres>
                  {movie.genres.slice(0, 2).map((genre) => (
                    <Genre key={genre.id}>{genre.name}</Genre>
                  ))}
                </Genres>
                <Subtitle>Runtime:</Subtitle>
                <Runtime>{runtime}min</Runtime>
                <Subtitle>Cast:</Subtitle>
                {cast ? (
                  <CastList>
                    {cast.slice(0, 4).map((actor) => (
                      <CastListItem key={actor.id}>
                        {actor.original_name}
                      </CastListItem>
                    ))}
                  </CastList>
                ) : (
                  <CastError>...</CastError>
                )}
              </InfoWrapper>
            </MovieWrapper>
            <Overview>{overview}</Overview>
          </DetailsWrapper>
        </Box>
      </Drawer>
    </>
  );
}

Details.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    runtime: PropTypes.number,
    score: PropTypes.number,
    overview: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
};
