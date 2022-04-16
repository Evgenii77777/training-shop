import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "../Basket.module.css";

const ButtonError = ({
  setType,
  formik,
  formikStore,
  formikExpress,
  formikPayment,
  formikPaymentPaypal,
  setValues,
  valuesNew,
}) => {
  const status = useSelector((state) => state.cart.status);
  const dispatch = useDispatch();

  const onHandleBackToPayment = () => {
    setType("Payment");
    dispatch(order(status));
  };

  const onHandleBackToCart = () => {
    setType("Item in Cart");
    dispatch(order(status));
    const navBar = document.querySelectorAll(".textBar");
    if (navBar.length !== 0) {
      navBar[2].classList.remove("firstBtn");
      navBar[0].classList.add("firstBtn");
    }
    formik.resetForm();
    formikStore.resetForm();
    formikExpress.resetForm();
    formikPayment.resetForm();
    formikPaymentPaypal.resetForm();
    setValues(
      (valuesNew = {
        phone: "",
        email: "",
        storeAddress: "",
        country: "",
      })
    );
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
