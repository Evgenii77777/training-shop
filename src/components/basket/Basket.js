import React, { useState } from "react";
import styles from "./Basket.module.css";
import Cur from "../../assets/png/наклон.png";
import {
  decrement,
  deleteItem,
  increment,
  toggleBasket,
  toggleBasketSide,
} from "../../redux/btnBasket/btnBasket-actions";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, getIsEmpty } from "../../redux/btnBasket/btnBasket-selectors";
import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";

const Basket = () => {
  let total = 0;
  const open = useSelector(getOpen);
  const isEmpty = useSelector(getIsEmpty);
  const dispatch = useDispatch();

  isEmpty.forEach((el) => (total = el.price * el.quantity + total));

  const backSide = function () {
    let body = document.querySelector("body");
    if (open) {
      body.classList.add("no__scroll");
    } else {
      body.classList.remove("no__scroll");
    }
  };
  backSide();

  // новый код

  let [type, setType] = useState("");
  const handleChangeType = (name) => {
    setType((type = name));
    console.log(type);
  };

  return (
    <div className={open ? styles.openBasketSide : null}>
      <div
        className={open ? styles.openBasket : null}
        id="backSide"
        onClick={(e) => dispatch(toggleBasketSide(e.target.id))}
      >
        <div
          className={open ? styles.container : styles.open}
          data-test-id="cart"
        >
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Shopping Cart</h3>
            <button
              className={styles.cross}
              onClick={() => dispatch(toggleBasket(open))}
            ></button>
          </div>
          <div className={styles.basket}>
            {isEmpty.length === 0 ? (
              <div>
                <h2 className={styles.text}>Sorry, your cart is empty</h2>
                <button
                  className={styles.btn}
                  onClick={() => dispatch(toggleBasket(open))}
                >
                  back to shopping
                </button>
              </div>
            ) : (
              <div className={styles.notEmptyBasket}>
                <div className={styles.notEmpty}>
                  <button
                    onClick={(e) => handleChangeType(e.target.id)}
                    id="Item in Cart"
                    className={styles.firstBtn}
                  >
                    Item in Cart
                  </button>
                  <img src={Cur} alt="item" />
                  <button
                    onClick={(e) => handleChangeType(e.target.id)}
                    id="Delivery Info"
                  >
                    Delivery Info
                  </button>
                  <img src={Cur} alt="item" />
                  <button
                    onClick={(e) => handleChangeType(e.target.id)}
                    id="Payment"
                  >
                    Payment
                  </button>
                </div>
                <div className={styles.listWrapper}>
                  {type === "Item in Cart" && (
                    <ul className={styles.list}>
                      {isEmpty.map((el, index) => (
                        <li key={index} data-test-id="cart-card">
                          <div>
                            <img
                              src={el.color[1]}
                              alt="images"
                              className={styles.notEmptyImg}
                            />
                          </div>
                          <div className={styles.notEmptySpanContainer}>
                            <span className={styles.name}>{el.name}</span>
                            <span className={styles.color}>{el.color[0]},</span>
                            <span className={styles.size}>{el.size}</span>
                            <div className={styles.notEmptyBtnWrapper}>
                              <div className={styles.notEmptyBtnContainer}>
                                <button
                                  id={el.newId}
                                  onClick={(e) =>
                                    dispatch(decrement(e.target.id))
                                  }
                                  data-test-id="minus-product"
                                >
                                  -
                                </button>
                                <span>{el.quantity}</span>
                                <button
                                  id={el.newId}
                                  onClick={(e) =>
                                    dispatch(increment(e.target.id))
                                  }
                                  data-test-id="plus-product"
                                >
                                  +
                                </button>
                              </div>
                              <span id="price" className={styles.price}>
                                $ {(el.price * el.quantity).toFixed(2)}
                              </span>
                              <button
                                className={styles.trash}
                                id={el.newId}
                                onClick={(e) =>
                                  dispatch(deleteItem(e.target.id))
                                }
                                data-test-id="remove-product"
                              ></button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {type === "Delivery Info" && <Delivery />}
                  {type === "Payment" && <Payment />}
                </div>
                <div className={styles.notEmptyWrapper}>
                  <div className={styles.spanWrapper}>
                    <span className={styles.spanWrapperFirst}>Total</span>
                    <span className={styles.spanWrapperSecond}>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className={styles.btnWrapper}>
                    <button className={styles.btnWrapperFirst}>Further</button>
                    <button
                      className={styles.btnWrapperSecond}
                      onClick={() => dispatch(toggleBasket(open))}
                    >
                      View Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     open: getOpen(state),
//     isEmpty: getIsEmpty(state),
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteitem: (id) => dispatch(deleteItem(id)),
//     onToggleBasket: (open) => dispatch(toggleBasket(!open)),
//     onToggleBasketSide: (name) => dispatch(toggleBasketSide(name)),
//     onIncrement: (id) => dispatch(increment(id)),
//     onDecrement: (id) => dispatch(decrement(id)),
//   };
// };

export default Basket;
