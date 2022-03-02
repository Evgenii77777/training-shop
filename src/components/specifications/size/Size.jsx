import React, { useEffect, useState } from "react";
import styles from "./Size.module.css";
import "../../../index.css";

const Size = ({ sizes }) => {
  let [btnContent, setBtnContent] = useState(`${sizes[0]}`);

  useEffect(() => {
    const ite = document.querySelectorAll(".btnSize");
    ite[0].classList.add("btnSizeActive");
  }, []);

  const onHandle = function (e) {
    const items = document.querySelectorAll(".btnSize");
    const target = e.currentTarget;
    Array.from(items).forEach((item) => {
      item.classList.remove("btnSizeActive");
    });
    target.classList.add("btnSizeActive");
  };

  const btnName = (e) =>
    setBtnContent((btnContent = e.currentTarget.textContent));
  return (
    <div className={styles.size}>
      <span className={styles.colorTitle}>Size:</span>
      <span className={styles.colorSpan}>{btnContent}</span>
      <ul className={styles.sizeList}>
        {sizes.map((item) => (
          <li key={item} onClick={btnName}>
            <button className="btnSize" onClick={onHandle}>
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
