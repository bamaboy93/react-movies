import { Link, useLocation } from "react-router-dom";
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
    <div className={s.swiper}>
      <h2 className={s.title}>Top 20 Upcoming Movies</h2>
      <Swiper
        slidesPerView={4}
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
        {movies.map(({ id, backdrop_path, title }) => (
          <SwiperSlide key={id}>
            <div className={s.slide}>
              <Link to={`${url.pathname}/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
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
