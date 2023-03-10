import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import { BsFillPlayFill } from "react-icons/bs";
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
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer()}>
        <Box
          sx={{ width: 750 }}
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <DetailsWrapper>
            <MovieWrapper>
              <PosterWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={original_title}
                />
                <Rating vote={vote_average}>{vote_average.toFixed()}</Rating>
              </PosterWrapper>
              <InfoWrapper>
                <Title>{original_title}</Title>
                <Year>{release_date.split("").slice(0, 4).join("")}</Year>
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
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  cast: PropTypes.arrayOf(PropTypes.shape),
};
