import React, { useState } from "react";
import styles from "./Color.module.css";

const Color = ({ images }) => {
  let unicColor = [];
  let unicImg = [];
  images.forEach((el) => {
    if (!unicColor.includes(el.color)) {
      return unicColor.push(el.color) && unicImg.push(el);
    }
  });

  let [btnContent, setBtnContent] = useState(`${unicColor[0]}`);
  const btnName = (e) => setBtnContent((btnContent = e.currentTarget.id));

  return (
    <div className={styles.color}>
      <span className={styles.colorTitle}>Color:</span>
      <span className={styles.colorSpan}>{btnContent}</span>
      <ul className={styles.colorList}>
        {unicImg.map((item) => {
          return (
            <li key={item.id}>
              <button
                className={styles.colorBtn}
                onClick={btnName}
                id={item.color}
              >
                <img
                  src={`https://training.cleverland.by/shop${item?.url}`}
                  alt={item.url}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Color;
