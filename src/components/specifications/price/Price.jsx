import React from "react";
import styles from "./Price.module.css";
import S1 from "../../../assets/png/Group 26.png";
import S2 from "../../../assets/png/Group 27.png";
import { useParams, useLocation } from "react-router";
import { PRODUCTS } from "../../../object/Products";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
} from "../../../redux/btnBasket/btnBasket-actions";
import {
  getColor,
  getSize,
  getIsEmpty,
} from "../../../redux/btnBasket/btnBasket-selectors";

const Price = ({ price }) => {
  const params = useParams();
  let history = useLocation();
  let name = "";
  let find = null;

  const color = useSelector(getColor);
  const size = useSelector(getSize);
  const isEmpty = useSelector(getIsEmpty);
  const dispatch = useDispatch();

  const getName = function () {
    if (history.pathname.includes("women")) {
      return (name = "women");
    }
    return (name = "men");
  };
  getName();

  const item = PRODUCTS[name].find((el) => {
    if (el.id === params.id) {
      return el;
    }
    return null;
  });

  let obj = {
    ...item,
    quantity: 1,
    color,
    size,
    newId: item.id + color + size,
  };

  const isFind = function () {
    isEmpty.some((el) => {
      if (obj.newId === el.newId) {
        return (find = true);
      }
      return (find = false);
    });
  };
  isFind();

  return (
    <div className={styles.price}>
      <span className={styles.priceSpan}>$ {price}</span>
      {!find ? (
        <button
          className={styles.priceBtn}
          onClick={() => dispatch(addItem(obj))}
          data-test-id="add-cart-button"
        >
          Add to card
        </button>
      ) : (
        <button
          className={styles.priceBtn}
          onClick={() => dispatch(deleteItem(obj.newId))}
          data-test-id="add-cart-button"
        >
          remove to card
        </button>
      )}
      <img className={styles.priceImg} src={S1} alt="heatr" />
      <img src={S2} alt="scales" />
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     color: getColor(state),
//     size: getSize(state),
//     isEmpty: getIsEmpty(state),
//   };
// };
// const mapDispatchToProps = (dispatch) => ({
//   onAddItem: (item) => dispatch(addItem(item)),
//   onDeleteitem: (id) => dispatch(deleteItem(id)),
// });
export default Price;
