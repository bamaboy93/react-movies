import { useState, useEffect } from "react";
import Status from "../../services/status";
import api from "../../services/api/movies-api";
import noImageFound from "../../icons/noimage.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  const [films, setFilms] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    api
      .getUpcomingMovies()
      .then((results) => {
        setFilms(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  return (
    <Carousel responsive={responsive}>
      <ul>
        {films.map(({ id, poster_path, title }) => (
          <li key={id}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `${noImageFound}`
              }
              alt={title}
            />
          </li>
        ))}
      </ul>
    </Carousel>
  );
}
