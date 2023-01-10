import SwiperCarousel from "../Swiper/Swiper";
import s from "./TopRated.module.scss";

export default function TopRated({ movies }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Top Rated</h2>
      <SwiperCarousel movies={movies} />
    </div>
  );
}
