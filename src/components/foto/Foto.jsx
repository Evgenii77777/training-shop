import React, { useState } from "react";
import styles from "./Foto.module.css";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper/style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Foto = ({ card }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.foto}>
      <div className={styles.wrapper}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          breakpoints={{
            1090: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className="firstSwiper"
          navigation
          direction="vertical"
        >
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.container}>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          data-test-id="product-slider"
        >
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`https://training.cleverland.by/shop${card.images[0]?.url}`}
              alt="Clothes"
              id="imgSwiper"
              className={styles.imgSwiper}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Foto;
