import React, { useState } from "react";
import styles from "./Size.module.css";

const Size = ({ sizes }) => {
  let [btnContent, setBtnContent] = useState(`${sizes[0]}`);

  const btnName = (e) =>
    setBtnContent((btnContent = e.currentTarget.textContent));
  return (
    <div className={styles.size}>
      <span className={styles.colorTitle}>Size:</span>
      <span className={styles.colorSpan}>{btnContent}</span>
      <ul className={styles.sizeList}>
        {sizes.map((item) => (
          <li key={item}>
            <button className={styles.sizesBtn} onClick={btnName}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <p className={styles.sizeText}>Size guide</p>
    </div>
  );
};

export default Size;
