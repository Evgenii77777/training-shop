import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPost } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "../Basket.module.css";

const ButtonPayment = ({
  setType,
  type,
  cash,
  total,
  formik,
  formikPaypal,
}) => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.order.pickup);
  const orderProducts = useSelector((state) => state.order.products);

  const onHandleOrder = () => {
    if (formik.isValid && formik.dirty) {
      dispatch(
        orderPost({
          products: [orderProducts],
          ...delivery,
          totalPrice: `${total}`,
          ...formik.values,
          paymentMethod: "Card",
        })
      );
    } else {
      formik.handleSubmit();
    }
  };

  const onHandleOrderPayment = () => {
    if (formikPaypal.isValid && formikPaypal.dirty) {
      dispatch(
        orderPost({
          products: [orderProducts],
          ...delivery,
          totalPrice: `${total}`,
          ...formikPaypal.values,
          paymentMethod: "PayPal",
        })
      );
    } else {
      formikPaypal.handleSubmit();
    }
  };

  const onHandleOrderCash = () => {
    dispatch(
      orderPost({
        products: [orderProducts],
        ...delivery,
        totalPrice: `${total}`,
        paymentMethod: "Cash",
      })
    );
  };

  const onHandleBackToCart = () => {
    setType((type = "Delivery Info"));
    const navBar = document.querySelectorAll(".textBar");
    if (navBar.length !== 0 && navBar[2].classList.contains("firstBtn")) {
      navBar[2].classList.remove("firstBtn");
      navBar[1].classList.add("firstBtn");
    }
  };

  return (
    <div className={styles.btnWrapper}>
      {cash === "masterCard" || cash === "cardVisa" ? (
        <button
          type="button"
          className={styles.btnWrapperFirst}
          onClick={() => onHandleOrder()}
        >
          Check Out
        </button>
      ) : (
        ""
      )}
      {cash === "paypal" && (
        <button
          type="button"
          className={styles.btnWrapperFirst}
          onClick={() => onHandleOrderPayment()}
        >
          Check Out
        </button>
      )}
      {cash === "cash" && (
        <button
          type="button"
          className={styles.btnWrapperFirst}
          onClick={() => onHandleOrderCash()}
        >
          Ready
        </button>
      )}
      <button
        className={styles.btnWrapperSecond}
        onClick={() => onHandleBackToCart()}
      >
        View Cart
      </button>
    </div>
  );
};

export default ButtonPayment;
