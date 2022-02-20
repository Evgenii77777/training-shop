import React from "react";
import styles from "./Size.module.css";

const Size = ({ sizes }) => {
  return (
    <div className={styles.size}>
      <span className={styles.colorTitle}>Size:</span>
      <span className={styles.colorSpan}>{sizes[0].split(" ")[0]}</span>
      <ul className={styles.sizeList}>
        {sizes.map((item) => (
          <li key={item.split(" ")[0]}>
            <button>{item.split(" ")[0]}</button>
          </li>
        ))}
      </ul>
      <p className={styles.sizeText}>Size guide</p>
    </div>
  );
};

export default Size;
