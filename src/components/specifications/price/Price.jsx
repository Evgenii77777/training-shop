import React from "react";
import styles from "./Price.module.css";
import S1 from "../../../assets/png/Group 26.png";
import S2 from "../../../assets/png/Group 27.png";
import { useParams, useLocation } from "react-router";
import { PRODUCTS } from "../../../object/Products";
import { connect } from "react-redux";
import {
  addItem,
  deleteItem,
} from "../../../redux/btnBasket/btnBasket-actions";

const Price = ({ price, onAddItem, color, size, isEmpty, onDeleteitem }) => {
  const params = useParams();
  let history = useLocation();
  let name = "";
  let find = null;

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
          onClick={() => onAddItem(obj)}
          data-test-id="add-cart-button"
        >
          Add to card
        </button>
      ) : (
        <button
          className={styles.priceBtn}
          onClick={() => onDeleteitem(obj.newId)}
          data-test-id="add-cart-button"
        >
          remoove to card
        </button>
      )}
      <img className={styles.priceImg} src={S1} alt="heatr" />
      <img src={S2} alt="scales" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    color: state.basket.color,
    size: state.basket.size,
    isEmpty: state.basket.card,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onAddItem: (item) => dispatch(addItem(item)),
  onDeleteitem: (id) => dispatch(deleteItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Price);
