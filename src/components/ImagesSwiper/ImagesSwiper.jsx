import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import noImageFound from "../../styles/images/no-image.jpg";
import { ImageSwiper } from "./ImagesSwiper.styled";
import Container from "../Container";

import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";

export default function ImagesSwiper({ images }) {
  return (
    <>
      {images.length > 0 && (
        <Container>
          <ImageSwiper>
            <Swiper
              effect={"fade"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectFade]}
            >
              {images.slice(0, 8).map(({ file_path }) => (
                <SwiperSlide key={file_path}>
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
          </ImageSwiper>
        </Container>
      )}
    </>
  );
}
