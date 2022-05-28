import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api/movies-api";

import Status from "../../services/status";
import s from "./Trailer.module.scss";

// import { ReactComponent as IconNotFound } from "../../icons/noVideo.svg";

export default function Trailer() {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getMovieVideo(movieId)
      .then((results) => {
        if (results.length === 0) {
          throw new Error("Sorry. We don't have any video on this movie yet");
        }
        setTrailer(results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {/* <IconNotFound
        width={300}
        height={150}
        fill="#64ffda"
        style={{ marginTop: 220, marginLeft: 400 }}
      /> */}
      {status === Status.RESOLVED && (
        <ul>
          {trailer.map((tr) => (
            <li key={tr.id}>
              {tr.name === "Official Trailer" && (
                <iframe
                  className={s.video}
                  src={`https://www.youtube.com/embed/${tr.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </li>
          ))}
        </ul>
      )}

      {status === Status.REJECTED && <p>{error.message}</p>}
    </>
  );
}
