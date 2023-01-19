import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api/movies-api";
import Status from "../../services/status";

import VideoError from "../VideoError/VideoError";
import { Video } from "./Trailer.styled";

export default function Trailer() {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getMovieVideo(movieId)
      .then((results) => {
        let total = [];
        for (const res of results) {
          if (res.type === "Trailer") {
            total.push(res);
          }
        }

        setTrailer(total);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <>
          {trailer.slice(0, 1).map((tr) => (
            <Video
              key={tr.id}
              src={`https://www.youtube.com/embed/${tr.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Video>
          ))}
          {trailer.length === 0 && <VideoError />}
        </>
      )}

      {status === Status.REJECTED && <p>{error.message}</p>}
    </>
  );
}
