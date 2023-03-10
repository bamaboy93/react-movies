import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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

function MovieView() {
  const { movieId } = useParams();
  const [showPopUp, setPopUp] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

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

  if (movieQuery.isLoading || castQuery.isLoading || imagesQuery.isLoading) {
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

export default MovieView;
