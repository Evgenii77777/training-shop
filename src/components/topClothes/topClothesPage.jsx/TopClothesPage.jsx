import React from "react";
import styles from "./TopClothesPage.module.css";
import Arrow from "../../../assets/png/►.png";
import Share from "../../../assets/svg/share 1.svg";
import ProductStatistics from "../../productStatistic/ProductStatistics";

const TopClothesPage = ({ name, path }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.superContainer}>
        <div>
          <span className={styles.home}>Home</span>
          <img className={styles.arrow} src={Arrow} alt="arrow" />
          <span className={styles.home}>{`${name}`}</span>
          <img className={styles.arrow} src={Arrow} alt="arrow" />
          <span className={styles.path}>{`${path}`}</span>
        </div>
        <div className={styles.container}>
          <img src={Share} alt="share" />
          <span className={styles.share}>Share</span>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{name}</h2>
      </div>
      <ProductStatistics />
    </div>
  );
};
export default TopClothesPage;
