import React from "react";
import styles from "./Color.module.css";
import C1 from "../../../assets/img/c1.jpg";
import C2 from "../../../assets/img/c2.jpg";
import C3 from "../../../assets/img/c3.jpg";
import C4 from "../../../assets/img/c4.jpg";

const Color = () => {
  return (
    <div className={styles.color}>
      <span className={styles.colorTitle}>Color:</span>
      <span className={styles.colorSpan}>Blue</span>
      <ul className={styles.colorList}>
        <li>
          <img src={C1} alt="clothes 1" />
        </li>
        <li>
          <img src={C2} alt="clothes 2" />
        </li>
        <li>
          <img src={C3} alt="clothes 3" />
        </li>
        <li>
          <img src={C4} alt="clothes 4" />
        </li>
      </ul>
    </div>
  );
};

export default Color;
