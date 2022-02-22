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
            540: {
              slidesPerView: 2,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className="firstSwiper"
          // modules={[Controller, Navigation]}
          // onSwiper={setFirstSwiper}
          // controller={{ control: secondSwiper }}
          navigation
          direction="vertical"

          // spaceBetween={30}
          // slidesPerView={3}
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
          // modules={[Controller, Navigation]}
          // onSwiper={setSecondSwiper}
          // controller={{ control: firstSwiper }}
          // navigation
          // spaceBetween={10}
          // slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
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
