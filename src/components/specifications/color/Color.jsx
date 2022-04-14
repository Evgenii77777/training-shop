import React, { useEffect, useMemo, useState } from "react";
import styles from "./Color.module.css";
import "../../../index.css";
import { useDispatch } from "react-redux";
import { currentColor } from "../../../redux/btnBasket/btnBasket-actions";

const Color = ({ images }) => {
  let bestColor = useMemo(() => [], []);
  let bestImg = useMemo(() => [], []);
  bestColor = [];
  bestImg = [];
  const dispatch = useDispatch();

  images.forEach((el) => {
    if (!bestColor.includes(el.color)) {
      return bestColor.push(el.color) && bestImg.push(el);
    }
  });

  let [btnContent, setBtnContent] = useState(`${bestColor[0]}`);
  const btnName = (e) => setBtnContent((btnContent = e.currentTarget.id));

  const color = bestColor[0];
  const img = bestImg[0].url;
  useEffect(() => {
    dispatch(
      currentColor([color, "https://training.cleverland.by/shop" + img])
    );
    const ite = document.querySelectorAll(".btnColor");
    ite[0].classList.add("btnColorActive");
  }, [dispatch, color, img]);

  const onHandle = function (e) {
    const items = document.querySelectorAll(".btnColor");
    const target = e.currentTarget;
    Array.from(items).forEach((item) => {
      if (item.classList.contains("btnColorActive")) {
        item.classList.remove("btnColorActive");
      }
    });
    target.classList.add("btnColorActive");
  };

  return (
    <div className={styles.color}>
      <span className={styles.colorTitle}>Color:</span>
      <span className={styles.colorSpan}>{btnContent}</span>
      <ul className={styles.colorList}>
        {bestImg.map((item) => {
          return (
            <li
              key={item.id}
              onClick={(e) =>
                dispatch(
                  currentColor([e.currentTarget.firstChild.id, e.target.src])
                )
              }
            >
              <button
                className="btnColor"
                index={item.color}
                onClick={(e) => onHandle(e)}
                id={item.color}
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
