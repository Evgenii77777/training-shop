import React from "react";
import styles from "./Color.module.css";

const Color = ({ images }) => {
  return (
    <div className={styles.color}>
      <span className={styles.colorTitle}>Color:</span>
      <span className={styles.colorSpan}>{images[0].color}</span>
      <ul className={styles.colorList}>
        {images.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={`https://training.cleverland.by/shop${item?.url}`}
                alt={item.url}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Color;
