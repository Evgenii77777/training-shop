import { useDispatch } from "react-redux";
import { addPickup } from "../../../redux/order/order-actions";
import styles from "../Basket.module.css";

const ButtonFurther = ({
  values,
  setType,
  setErrorCheckbox,
  formik,
  radio,
  incl,
  inclCities,
}) => {
  const dispatch = useDispatch();
  const onHandlePayment = () => {
    const agree = document.getElementById("agree");
    if (radio === "3") {
      if (formik.isValid && formik.dirty && incl && inclCities) {
        if (agree !== null && agree.checked === true) {
          setType("Payment");
          dispatch(
            addPickup({
              ...values,
              phone: values.phone
                .replace(/[^0-9]/g, " ")
                .split(" ")
                .join("")
                .replace(/^.{3}/, ""),
            })
          );
        } else {
          setErrorCheckbox(true);
        }
      } else {
        agree.checked = false;
        formik.handleSubmit();
        setErrorCheckbox(true);
      }
    } else {
      if (formik.isValid && formik.dirty) {
        if (agree !== null && agree.checked === true) {
          setType("Payment");
          dispatch(
            addPickup({
              ...values,
              phone: values.phone
                .replace(/[^0-9]/g, " ")
                .split(" ")
                .join("")
                .replace(/^.{3}/, ""),
            })
          );
        } else {
          setErrorCheckbox(true);
        }
      } else {
        agree.checked = false;
        formik.handleSubmit();
        setErrorCheckbox(true);
      }
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
