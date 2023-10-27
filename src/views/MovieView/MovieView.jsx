import { useQueries } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  getMovieById,
  getCastInfo,
  getMovieImages,
  getMovieVideo,
} from "../../services/api/movies-api";

import PopUp from "../../components/PopUp";
import Trailer from "../../components/Trailer";
import Loader from "../../components/Loader/Loader";
import VideoError from "../../components/VideoError";

import SingleMovie from "../../components/SingleMovie";
import SingleMovieMobile from "../../components/SingleMovieMobile";

export default function MovieView() {
  const { movieId } = useParams();
  const [showPopUp, setPopUp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const [movieQuery, castQuery, imagesQuery, trailerQuery] = useQueries({
    queries: [
      {
        queryKey: ["movie"],
        queryFn: () => getMovieById(movieId),
      },

      {
        queryKey: ["cast"],
        queryFn: () => getCastInfo(movieId),
      },
      { queryKey: ["images"], queryFn: () => getMovieImages(movieId) },
      { queryKey: ["trailer"], queryFn: () => getMovieVideo(movieId) },
    ],
  });

  const togglePopUp = () => {
    setPopUp(!showPopUp);
  };

  if (movieQuery.isFetching) {
    return <Loader />;
  }

  return (
    <>
      {isMobile ? (
        <SingleMovieMobile
          movie={movieQuery.data}
          cast={castQuery.data}
          images={imagesQuery.data}
          onToggle={togglePopUp}
        />
      ) : (
        <SingleMovie
          movie={movieQuery.data}
          cast={castQuery.data}
          images={imagesQuery.data}
          onToggle={togglePopUp}
        />
      )}

      {showPopUp && (
        <PopUp onClose={togglePopUp}>
          {trailerQuery.isSuccess ? (
            <Trailer videos={trailerQuery.data} />
          ) : (
            <VideoError />
          )}
        </PopUp>
      )}
    </>
  );
}
