import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPost } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "../Basket.module.css";

const ButtonPayment = ({
  isValid,
  dirty,
  type,
  setType,
  cash,
  isValidPaypal,
  dirtyPaypal,
  total,
  formik,
  formikPayment,
}) => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.order.pickup);
  const orderProducts = useSelector((state) => state.order.products);

  const onHandleOrder = () => {
    dispatch(
      orderPost({
        products: [orderProducts],
        ...delivery,
        totalPrice: `${total}`,
        ...formik.values,
        paymentMethod: "Card",
      })
    );
  };

  const onHandleOrderPayment = () => {
    dispatch(
      orderPost({
        products: [orderProducts],
        ...delivery,
        totalPrice: `${total}`,
        ...formikPayment.values,
        paymentMethod: "PayPal",
      })
    );
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
      {cash === "card" || cash === "cardVisa" ? (
        <button
          className={styles.btnWrapperFirst}
          disabled={!isValid || !dirty}
          onClick={() => onHandleOrder()}
        >
          Check Out
        </button>
      ) : (
        ""
      )}
      {cash === "paypal" && (
        <button
          className={styles.btnWrapperFirst}
          disabled={!isValidPaypal || !dirtyPaypal}
          onClick={() => onHandleOrderPayment()}
        >
          Check Out
        </button>
      )}
      {cash === "cash" && (
        <button
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
