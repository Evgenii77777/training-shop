import React, { useEffect, useMemo, useState } from "react";
import styles from "./Color.module.css";
import "../../../index.css";
import { connect } from "react-redux";
import { currentColor } from "../../../redux/btnBasket/btnBasket-actions";

const Color = ({ images, onColor }) => {
  // let unicColor = [];
  // let unicImg = [];
  // images.forEach((el) => {
  //   if (!unicColor.includes(el.color)) {
  //     return unicColor.push(el.color) && unicImg.push(el);
  //   }
  // });

  // let [btnContent, setBtnContent] = useState(`${unicColor[0]}`);
  // const btnName = (e) => setBtnContent((btnContent = e.currentTarget.id));
  let bestColor = useMemo(() => [], []);
  let bestImg = useMemo(() => [], []);
  images.forEach((el) => {
    if (!bestColor.includes(el.color)) {
      return bestColor.push(el.color) && bestImg.push(el);
    }
  });
  let [btnContent, setBtnContent] = useState(`${bestColor[0]}`);
  const btnName = (e) => setBtnContent((btnContent = e.currentTarget.id));
  console.log(bestColor);
  console.log(bestImg);
  useEffect(() => {
    onColor([
      bestColor[0],
      "https://training.cleverland.by/shop" + bestImg[0].url,
    ]);
    const ite = document.querySelectorAll(".btnColor");
    ite[0].classList.add("btnColorActive");
  }, [onColor, bestColor, bestImg]);

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
        {bestImg.map((item) => {
          return (
            <li
              key={item.id}
              onClick={(e) =>
                onColor([e.currentTarget.firstChild.id, e.target.src])
              }
            >
              <button
                className="btnColor"
                index={item.color}
                onClick={onHandle}
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
// const mapStateToProps = (state) => {
//   return {
//     color: state.basket.color,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    onColor: (id) => dispatch(currentColor(id)),
  };
};
export default connect(null, mapDispatchToProps)(Color);
