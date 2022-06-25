import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import noImageFound from "../../styles/images/noimage.jpg";

import Container from "../../components/Container/Container";
import PopUp from "../../components/PopUp/PopUp";
import Trailer from "../../components/Trailer/Trailer";
import DesktopMovieData from "./DesktopMovieData/DesktopMovieData";
import MobileMovieData from "./MobileMovieData/MobileMovieData";

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
          poster_path,
          original_title,
          vote_average,
          overview,
          release_date,
          genres,
        }) => {
          setMovie({
            src: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImageFound}`,
            title: original_title,
            year: release_date,
            score: vote_average,
            overview,
            genres,
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
    <Container>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          {isMobile && <MobileMovieData movie={movie} onClick={togglePopUp} />}

          {!isMobile && (
            <DesktopMovieData movie={movie} onClick={togglePopUp} />
          )}

          {showPopUp && (
            <PopUp onClose={togglePopUp}>
              <Trailer />
            </PopUp>
          )}
        </>
      )}
    </Container>
  );
}

export default MovieView;
