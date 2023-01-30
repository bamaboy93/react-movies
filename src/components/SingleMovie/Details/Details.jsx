import { useState, Fragment } from "react";
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
  const [state, setState] = useState({
    right: false,
  });
  const anchor = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Fragment>
        <DetailsButton onClick={toggleDrawer(anchor, true)}>
          Details
        </DetailsButton>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <Box
            sx={{ width: 750 }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <DetailsWrapper>
              <MovieWrapper>
                <PosterWrapper>
                  <Poster src={src} alt="alt" />
                  <Rating vote={score}>{score.toFixed()}</Rating>
                </PosterWrapper>
                <InfoWrapper>
                  <Title>{title}</Title>{" "}
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
      </Fragment>
    </>
  );
}
