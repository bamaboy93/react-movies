import PropTypes from "prop-types";
import { useState } from "react";
import { Drawer, Stack } from "@mui/material";
import { BsFillPlayFill } from "react-icons/bs";

import {
  DetailsButton,
  DrawerWrapper,
  MovieWrapper,
  PosterWrapper,
  Poster,
  Rating,
  InfoWrapper,
  MovieTitle,
  Subtitle,
  ReleaseYear,
  GenreItem,
  Runtime,
  CastList,
  CastListItem,
  CastError,
  Overview,
} from "./Details.styled";

export default function Details({ cast, movie }) {
  const {
    overview,
    original_title,
    release_date,
    runtime,
    vote_average,
    poster_path,
  } = movie;
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
      <DetailsButton onClick={toggleDrawer()}>
        <BsFillPlayFill /> Details
      </DetailsButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <DrawerWrapper>
          <MovieWrapper>
            <PosterWrapper>
              <Poster
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
              />
              <Rating vote={vote_average}>{vote_average.toFixed()}</Rating>
            </PosterWrapper>
            <InfoWrapper>
              <MovieTitle variant="h2">{original_title}</MovieTitle>
              <ReleaseYear>
                {release_date.split("").slice(0, 4).join("")}
              </ReleaseYear>
              <Subtitle variant="h4">Genres:</Subtitle>
              <Stack direction="row" spacing={0.7}>
                {movie.genres.slice(0, 2).map((genre) => (
                  <GenreItem key={genre.id}>{genre.name}</GenreItem>
                ))}
              </Stack>
              <Subtitle variant="h4">Runtime:</Subtitle>
              <Runtime>{runtime}min</Runtime>
              <Subtitle variant="h4">Cast:</Subtitle>
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
        </DrawerWrapper>
      </Drawer>
    </>
  );
}

Details.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
};
