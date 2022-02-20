import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";
import styles from "../../relatedProducts/RelatedProducts.module.css";
import I1 from "../../../assets/img/i1.jpg";
import I2 from "../../../assets/img/i2.jpg";
import I3 from "../../../assets/img/i3.jpg";
import I4 from "../../../assets/img/i4.jpg";
import Stars from "../../stars/Stars";

const SwiperRelated = () => {
  let scrn = 2;
  function widthScreen() {
    const screen = window.screen.width;
    if (screen >= 320 && screen <= 500) {
      console.log(screen);
      return (scrn = 1);
    }
    if (screen >= 501 && screen <= 739) {
      return (scrn = 2);
    } else if (screen >= 740 && screen <= 1023) {
      return (scrn = 3);
    }
    return (scrn = 4);
  }
  widthScreen();
  return (
    <Swiper
      className="swiperNew"
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={scrn}
      data-test-id="related-slider"
    >
      <SwiperSlide className="newSlide">
        <li>
          <img src={I1} alt="Image1" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I2} alt="Image2" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <span className={styles.darkSpan}>$ 60.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I3} alt="Image3" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>

            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I4} alt="Image4" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I1} alt="Image1" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I2} alt="Image2" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <span className={styles.darkSpan}>$ 60.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I3} alt="Image3" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>

            <Stars />
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide className="newSlide">
        <li>
          <img src={I4} alt="Image4" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperRelated;
