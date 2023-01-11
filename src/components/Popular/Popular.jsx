import { NavLink } from "react-router-dom";

import SwiperCarousel from "../Swiper/Swiper";
import s from "./Popular.module.scss";

export default function Popular({ movies }) {
  return (
    <div className={s.wrapper}>
      <div className={s.upperNav}>
        <h2 className={s.title}>Popular</h2>
        <NavLink className={s.link} to="/popular">
          View All
        </NavLink>
      </div>

      <SwiperCarousel movies={movies} />
    </div>
  );
}
