import SwiperCarousel from "../Swiper/Swiper";
import s from "./Popular.module.scss";

export default function Popular({ movies }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Popular</h2>
      <SwiperCarousel movies={movies} />
    </div>
  );
}
