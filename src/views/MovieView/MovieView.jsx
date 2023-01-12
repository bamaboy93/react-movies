import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Status from "../../services/status";
import api from "../../services/api/movies-api";
import noImageFound from "../../styles/images/noimage.jpg";

import Loader from "../../components/Loader";
import Container from "../../components/Container";
import PopUp from "../../components/PopUp";
import Trailer from "../../components/Trailer";
import ImagesSwiper from "../../components/ImagesSwiper";

import MobileMovieView from "./MobileMovieView";
import DesktopMovieView from "./DesktopMovieView";

function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
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

  useEffect(() => {
    api
      .getCastInfo(movieId)
      .then((cast) => {
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
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
      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          {showPopUp && (
            <PopUp onClose={togglePopUp}>
              <Trailer />
            </PopUp>
          )}
          {isMobile && <MobileMovieView movie={movie} onToggle={togglePopUp} />}

          {!isMobile && (
            <DesktopMovieView
              cast={actors}
              movie={movie}
              onToggle={togglePopUp}
            />
          )}
          <Container>
            <ImagesSwiper />
          </Container>
        </>
      )}
    </>
  );
}

export default MovieView;
