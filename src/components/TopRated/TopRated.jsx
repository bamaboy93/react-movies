import { NavLink } from "react-router-dom";

import SwiperCarousel from "../Swiper/Swiper";
import s from "./TopRated.module.scss";

export default function TopRated({ movies }) {
  return (
    <div className={s.wrapper}>
      <div className={s.upperNav}>
        <h2 className={s.title}>Top Rated</h2>
        <NavLink className={s.link} to="/top_rated">
          View All
        </NavLink>
      </div>
      <SwiperCarousel movies={movies} />
    </div>
  );
}
