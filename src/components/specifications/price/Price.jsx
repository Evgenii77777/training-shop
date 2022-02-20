import React from "react";
import styles from "./Price.module.css";
import S1 from "../../../assets/png/Group 26.png";
import S2 from "../../../assets/png/Group 27.png";

const Price = ({ price }) => {
  return (
    <div className={styles.price}>
      <span className={styles.priceSpan}>$ {price}</span>
      <button className={styles.priceBtn}>Add to card</button>
      <img className={styles.priceImg} src={S1} alt="heatr" />
      <img src={S2} alt="scales" />
    </div>
  );
};

export default Price;
