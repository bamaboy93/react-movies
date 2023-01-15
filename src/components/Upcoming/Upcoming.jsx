import { NavLink, Link, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import s from "./Upcoming.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

export default function Upcoming({ movies }) {
  const url = useLocation();
  return (
    <div className={s.swiperContainer}>
      <div className={s.upperNav}>
        <h2 className={s.title}>Top 20 Upcoming Movies</h2>
        <NavLink className={s.link} to="/upcoming">
          View All
        </NavLink>
      </div>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {movies.map(({ id, poster_path, backdrop_path, title }) => (
          <SwiperSlide key={id} className={s.swiperSlides}>
            <div className={s.slideSwiper}>
              <Link to={`${url.pathname}/${id}`}>
                <img
                  className={s.image}
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                      : `https://image.tmdb.org/t/p/original/84XcRwKHAw4VXdKOYTSW5ARxFEt.jpg`
                  }
                  alt="movie backdrop"
                />
              </Link>
            </div>
            <p className={s.slideTitle}>{title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
