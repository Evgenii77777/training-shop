import React from "react";
import styles from "./LeftSide.module.css";

const LeftSide = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.superContainer}>
        <p className={styles.one}>+375 29 100 20 30</p>
        <p className={styles.two}>Belarus, Gomel, Lange 17</p>
        <p className={styles.three}>All week 24/7</p>
      </div>
    </div>
  );
};

export default LeftSide;
