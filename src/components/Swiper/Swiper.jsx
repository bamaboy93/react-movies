import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import noImageFound from "../../styles/images/noimage.jpg";

import "swiper/scss";
import "swiper/scss/navigation";

import { Navigation, Autoplay } from "swiper";
import {
  Image,
  MovieTitle,
  MovieTitleOverlay,
  Overlay,
  OverlayTitle,
  OverlayVote,
  Slide,
} from "./Swiper.styled";

export default function SwiperCarousel({ movies }) {
  const url = useLocation();
  return (
    <Swiper
      style={{ "--swiper-navigation-color": "#e50914" }}
      slidesPerView={1}
      spaceBetween={15}
      loop={true}
      breakpoints={{
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 4,
        },
        // when window width is >= 1280px
        1280: {
          width: 1280,
          slidesPerView: 6,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <SwiperSlide key={id}>
          <Slide>
            <Link to={`${url.pathname}/${id}`}>
              <Overlay>
                <OverlayVote vote={vote_average}>
                  {vote_average.toFixed()}
                </OverlayVote>
                <OverlayTitle>{title}</OverlayTitle>
              </Overlay>
              <Image
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : `${noImageFound}`
                }
                alt={title}
              />

              <MovieTitleOverlay>
                <MovieTitle>{title}</MovieTitle>
              </MovieTitleOverlay>
            </Link>
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Swiper.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};
