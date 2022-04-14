import React, { useEffect, useState } from "react";
import styles from "./Size.module.css";
import "../../../index.css";
import { currentSize } from "../../../redux/btnBasket/btnBasket-actions";
import { useDispatch } from "react-redux";

const Size = ({ sizes }) => {
  console.log(sizes);
  let [btnContent, setBtnContent] = useState(`${sizes[0]}`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentSize(sizes[0]));
    const ite = document.querySelectorAll(".btnSize");
    ite[0].classList.add("btnSizeActive");
  }, [sizes, dispatch]);

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
            <div onClick={(e) => dispatch(currentSize(e.target.textContent))}>
              <button className="btnSize" onClick={(e) => onHandle(e)}>
                {item}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.sizeText}>Size guide</p>
    </div>
  );
};
export default Size;
