import React, { useEffect, useState } from "react";
import styles from "./Color.module.css";
import "../../../index.css";

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

  useEffect(() => {
    const ite = document.querySelectorAll(".btnColor");
    ite[0].classList.add("btnColorActive");
  }, []);

  const onHandle = function (e) {
    const items = document.querySelectorAll(".btnColor");
    const target = e.currentTarget;
    Array.from(items).forEach((item) => {
      item.classList.remove("btnColorActive");
    });
    target.classList.add("btnColorActive");
  };

  return (
    <div className={styles.color}>
      <span className={styles.colorTitle}>Color:</span>
      <span className={styles.colorSpan}>{btnContent}</span>
      <ul className={styles.colorList}>
        {unicImg.map((item) => {
          return (
            <li key={item.id}>
              <button
                className="btnColor"
                index={item.color}
                onClick={onHandle}
              >
                <img
                  onClick={btnName}
                  id={item.color}
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
