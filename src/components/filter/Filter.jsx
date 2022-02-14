import React from "react";
import styles from "./Filter.module.css";
import Adjust from "../../assets/svg/adjustments 1.svg";
import View from "../../assets/svg/view-list 1.svg";
import Grid from "../../assets/svg/view-grid 1.svg";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.wrapper}>
        <button className={styles.btnAdjust}>
          <img src={Adjust} alt="Adjust" />
        </button>
        <h3 className={styles.title}>Filter</h3>
      </div>
      <div className={styles.container}>
        <button className={styles.btnView}>
          <img src={View} alt="View" />
        </button>
        <button className={styles.btnGrid}>
          <img src={Grid} alt="Grid" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
