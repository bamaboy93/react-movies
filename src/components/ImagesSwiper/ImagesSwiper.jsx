import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";

import noImageFound from "../../styles/images/no-image.jpg";
import s from "./ImagesSwiper.module.scss";

import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";

import api from "../../services/api/movies-api";
import Status from "../../services/status";

export default function ImagesSwiper() {
  const { movieId } = useParams();
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    api
      .getMovieImages(movieId)
      .then((backdrops) => {
        setImages(backdrops);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId, error]);

  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED}

      {status === Status.RESOLVED && (
        <>
          {images && (
            <Swiper
              direction={"vertical"}
              effect={"fade"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectFade]}
              className={s.swiper}
            >
              {images.slice(0, 8).map(({ file_path }) => (
                <SwiperSlide key={file_path} className={s.slide}>
                  <img
                    src={
                      file_path
                        ? `https://image.tmdb.org/t/p/original${file_path}`
                        : `${noImageFound}`
                    }
                    alt="movie backdrop"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}
    </>
  );
}
