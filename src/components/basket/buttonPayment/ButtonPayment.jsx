import { useDispatch, useSelector } from "react-redux";
import { orderPost } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "../Basket.module.css";

const ButtonPayment = ({
  setType,
  cash,
  total,
  formik,
  formikPaypal,
  setCheckedCheckbox,
}) => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.order.pickup);
  const orderProducts = useSelector((state) => state.order.cart);

  const onHandleOrder = () => {
    if (
      formik.isValid &&
      formik.dirty &&
      formik.values.cardCVV !== "" &&
      formik.values.cardCVV.includes("_") === false &&
      formik.values.card !== "" &&
      formik.values.card.includes("_") === false &&
      formik.values.cardDate !== "" &&
      formik.values.cardDate.includes("_") === false
    ) {
      dispatch(
        orderPost({
          products: [orderProducts],
          ...delivery,
          totalPrice: `${total}`,
          ...formik.values,
          card: formik.values.card.replace(/\s/g, ""),
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
    setType("Delivery Info");
    setCheckedCheckbox(true);
  };

  return (
    <div className={styles.btnWrapper}>
      {(cash === "masterCard" || cash === "cardVisa") && (
        <button
          type="button"
          className={styles.btnWrapperFirst}
          onClick={() => onHandleOrder()}
        >
          Check Out
        </button>
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
          ready
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
