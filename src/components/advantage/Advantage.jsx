import React from "react";
import styles from "./Advantage.module.css";

const Advantage = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.one}>
        <h3>FREE SHIPPING</h3>
        <span>On all UA order or order above $100</span>
      </li>
      <li className={styles.two}>
        <h3>30 DAYS RETURN</h3>
        <span>Simply return it within 30 days for an exchange</span>
      </li>
      <li className={styles.three}>
        <h3>SUPPORT 24/7</h3>
        <span>Contact us 24 hours a day, 7 days a week</span>
      </li>
    </ul>
  );
};

export default Advantage;
