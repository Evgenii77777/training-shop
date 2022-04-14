import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "../Basket.module.css";

const ButtonError = ({ type, setType }) => {
  const status = useSelector((state) => state.cart.status);
  const dispatch = useDispatch();

  const onHandleBackToPayment = () => {
    setType((type = "Payment"));
    dispatch(order(status));
  };
  const onHandleBackToCart = () => {
    setType((type = "Item in Cart"));
    dispatch(order(status));
  };

  return (
    <div className={styles.btnWrapper}>
      <button
        className={styles.btnWrapperFirst}
        onClick={() => onHandleBackToPayment()}
      >
        back to payment
      </button>
      <button
        className={styles.btnWrapperSecond}
        onClick={() => onHandleBackToCart()}
      >
        View Cart
      </button>
    </div>
  );
};

export default ButtonError;
