import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Status from "../../services/status";
import api from "../../services/api/movies-api";

import noImageFound from "../../styles/images/noimage.jpg";

import Container from "../../components/Container";
import PopUp from "../../components/PopUp";
import Trailer from "../../components/Trailer";

import MobileMovieData from "./MobileMovieData";
import ImagesSwiper from "../../components/ImagesSwiper";
import Dmv from "./DMV/DMV";

function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [showPopUp, setPopUp] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  useEffect(() => {
    setStatus(Status.PENDING);
    api
      .getMovieById(movieId)
      .then(
        ({
          backdrop_path,
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
          genres,
          id,
          runtime,
          tagline,
        }) => {
          setMovie({
            id: id,
            backdrop: `https://image.tmdb.org/t/p/original${backdrop_path}`,
            src: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImageFound}`,
            title: original_title,
            year: release_date,
            score: vote_average,
            overview,
            genres,
            runtime,
            tagline,
          });

          setStatus(Status.RESOLVED);
        }
      )
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

  const togglePopUp = () => {
    setPopUp(!showPopUp);
  };

  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          {showPopUp && (
            <PopUp onClose={togglePopUp}>
              <Trailer />
            </PopUp>
          )}
          {isMobile && <MobileMovieData movie={movie} onToggle={togglePopUp} />}

          {!isMobile && <Dmv movie={movie} onToggle={togglePopUp} />}
          <Container>
            <ImagesSwiper />
          </Container>
        </>
      )}
    </>
  );
}

export default MovieView;
