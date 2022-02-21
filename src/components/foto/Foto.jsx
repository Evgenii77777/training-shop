import React, { useState } from "react";
import styles from "./Foto.module.css";
import { Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper/style.css";
import "swiper/css";
import "swiper/css/navigation";

const Foto = ({ card }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className={styles.foto}>
      <div className={styles.wrapper}>
        <Swiper
          className="firstSwiper"
          modules={[Controller, Navigation]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {card.images.map((item) => (
            <SwiperSlide key={item.url}>
              <img
                src={`https://training.cleverland.by/shop${item?.url}`}
                alt="Clothes"
                id="imgSwiper"
                className={styles.imgSwiper}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.container}>
        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          data-test-id="product-slider"
        >
          {card.images.map((item) => (
            <SwiperSlide className="newSlider" key={item.url}>
              <img
                src={`https://training.cleverland.by/shop${item?.url}`}
                alt="Clothes"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Foto;
