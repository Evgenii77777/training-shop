import React from "react";
import styles from "./TopClothes.module.css";
import Arrow from "../../assets/png/►.png";
import Share from "../../assets/svg/share 1.svg";
import { Link } from "react-router-dom";

const TopClothes = ({ name }) => {
  return (
    <div className={styles.clothes}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperLink}>
          <Link className={styles.home} to="/">
            Home
          </Link>
          <img className={styles.arrow} src={Arrow} alt="arrow" />
          <span className={styles.path}>{`${name}`}</span>
        </div>
        <div className={styles.container}>
          <img src={Share} alt="share" />
          <span className={styles.share}>Share</span>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{name}</h2>
      </div>
    </div>
  );
};

export default TopClothes;
