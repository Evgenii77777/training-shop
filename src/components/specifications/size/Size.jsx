import React from "react";
import styles from "./Size.module.css";

const Size = () => {
  return (
    <div className={styles.size}>
      <span className={styles.colorTitle}>Size:</span>
      <span className={styles.colorSpan}>S</span>
      <ul className={styles.sizeList}>
        <li>
          <button>XS</button>
        </li>
        <li>
          <button className={styles.active}>S</button>
        </li>
        <li>
          <button>M</button>
        </li>
        <li>
          <button>L</button>
        </li>
      </ul>
      <p className={styles.sizeText}>Size guide</p>
    </div>
  );
};

export default Size;
