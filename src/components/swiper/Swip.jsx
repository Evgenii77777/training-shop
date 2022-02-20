import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import Photo from "../../assets/img/Rectangle.jpg";
import styles from "../main/Main.module.css";

import React from "react";

const Swip = () => {
  return (
    <Swiper data-test-id="main-slider" modules={[Navigation]} navigation>
      <SwiperSlide className="swiperSlid">
        <img className="back" src={Photo} alt="Back" />
        <div className={styles.wrapper}>
          <span className={styles.text}>Banner</span>
          <h3 className={styles.title}>your Title text</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="back" src={Photo} alt="Back" />
        <div className={styles.wrapper}>
          <span className={styles.text}>Banner</span>
          <h3 className={styles.title}>your Title text</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="back" src={Photo} alt="Back" />
        <div className={styles.wrapper}>
          <span className={styles.text}>Banner</span>
          <h3 className={styles.title}>your Title text</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="back" src={Photo} alt="Back" />
        <div className={styles.wrapper}>
          <span className={styles.text}>Banner</span>
          <h3 className={styles.title}>your Title text</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swip;
