import { clearCard } from "../../../redux/btnBasket/btnBasket-actions";
import { order } from "../../../redux/thunk/asincThunk/postOrderThunk";
import styles from "./FulfieldPayment.module.css";

const FulfieldPayment = ({
  open,
  toggleBasket,
  dispatch,
  setType,
  formik,
  formikStore,
  formikExpress,
  formikPayment,
  formikPaymentPaypal,
  setValues,
  valuesNew,
  setCheckedCheckbox,
  setCheckedCheckboxExpress,
  setCheckedCheckboxStore,
}) => {
  const onHandleBackToShopping = () => {
    setType("Item in Cart");
    dispatch(toggleBasket(open));
    dispatch(order());
    dispatch(clearCard());
    formik.resetForm();
    formikStore.resetForm();
    formikExpress.resetForm();
    formikPayment.resetForm();
    formikPaymentPaypal.resetForm();
    setCheckedCheckboxStore(false);
    setCheckedCheckboxExpress(false);
    setCheckedCheckbox(false);
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
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Thank you for your order</h2>
        <p className={styles.text}>
          Information about your order will appear in your e-mail
        </p>
        <p className={styles.phrase}>Our manager will call you back.</p>
      </div>
      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={() => onHandleBackToShopping()}>
          BACK TO SHOPPING
        </button>
      </div>
    </div>
  );
};

export default FulfieldPayment;
