import React from "react";
import { useDispatch } from "react-redux";
import { addPickup } from "../../../redux/order/order-actions";
import styles from "../Basket.module.css";

const ButtonFurther = ({ values, setType, setErrorCheckbox, formik }) => {
  const dispatch = useDispatch();

  const onHandlePayment = () => {
    const agree = document.getElementById("agree");

    if (formik.isValid && formik.dirty) {
      if (agree !== null && agree.checked === true) {
        setType("Payment");
        dispatch(addPickup({ ...values }));
      } else {
        setErrorCheckbox(true);
      }
      if (agree.checked === false) {
        setErrorCheckbox(true);
      }
    } else {
      agree.checked = false;
      formik.handleSubmit();
      setErrorCheckbox(true);
    }
  };

  const onHandleBackToItem = () => {
    setType("Item in Cart");
  };

  return (
    <div className={styles.btnWrapper}>
      <button
        type="button"
        className={styles.btnWrapperFirst}
        onClick={() => onHandlePayment()}
      >
        Further
      </button>
      <button
        className={styles.btnWrapperSecond}
        onClick={() => onHandleBackToItem()}
      >
        View Cart
      </button>
    </div>
  );
};

export default ButtonFurther;
