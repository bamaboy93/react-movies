import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import getColor from "../../services/getColor";
// import PropTypes from "prop-types";
import noImageFound from "../../styles/images/noimage.jpg";

import "swiper/scss";
import "swiper/scss/navigation";
import s from "./Swiper.module.scss";

import { Navigation, Autoplay } from "swiper";

export default function SwiperCarousel({ movies }) {
  const url = useLocation();
  return (
    <Swiper
      style={{ "--swiper-navigation-color": "#e50914" }}
      slidesPerView={6}
      spaceBetween={15}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className={s.swiper}
    >
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <SwiperSlide key={id} className={s.slide}>
          <Link to={`${url.pathname}/${id}`}>
            <div className={s.overlay}>
              <p
                style={{ color: getColor(vote_average) }}
                className={s.overlayVote}
              >
                {vote_average.toFixed()}
              </p>
              <p className={s.overlayTitle}>{title}</p>
            </div>
            <img
              className={s.image}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `${noImageFound}`
              }
              alt={title}
            />

            <div className={s.movieTitleOverlay}>
              <p className={s.movieTitle}>{title}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
