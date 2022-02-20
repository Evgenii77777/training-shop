import React, { useEffect, useState } from "react";
import Top from "../../assets/svg/Group 9.svg";
import Bottom from "../../assets/svg/Group 10.svg";
import styles from "./Foto.module.css";
import { Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper/style.css";
import "swiper/css";
import "swiper/css/navigation";

const Foto = ({ card }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  // useEffect(() => {
  //   console.log(firstSwiper);
  //   console.log(setFirstSwiper);
  // });
  // const onNext = () => {
  //   let swip = document.querySelector(".swiper-slide-active").children[0].src;

  //   let img = document.querySelectorAll("#img");
  //   img.forEach((el) => {
  //     if (el.src !== swip) {
  //       return el.classList.add("active");
  //     } else {
  //       return el.classList.remove("active");
  //     }
  //   });
  //   secondSwiper.slideNext();
  // };
  // const onPrev = () => {
  //   let swip = document.querySelector(".swiper-slide-active").children[0].src;

  //   let img = document.querySelectorAll("#img");
  //   img.forEach((el) => {
  //     if (el.src !== swip) {
  //       return el.classList.add("active");
  //     } else {
  //       return el.classList.remove("active");
  //     }
  //   });
  //   secondSwiper.slidePrev();
  // };
  return (
    <div className={styles.foto}>
      <div className={styles.wrapper}>
        <Swiper
          className="firstSwiper"
          modules={[Controller]}
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
          modules={[Controller]}
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
