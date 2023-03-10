import { useState, useEffect } from "react";

import { Video } from "./Trailer.styled";

export default function Trailer({ videos }) {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const trailers = videos.filter((video) => video.type === "Trailer");
    setTrailer(trailers[0]);
  }, [videos]);

  return (
    <>
      {trailer && (
        <Video
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </>
  );
}
