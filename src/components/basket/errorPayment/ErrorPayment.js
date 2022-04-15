import React from "react";
import { useSelector } from "react-redux";
import ButtonError from "../buttonError/ButtonError";
import styles from "../fulfieldPayment/FulfieldPayment.module.css";

const ErrorPayment = ({
  type,
  setType,
  formik,
  formikStore,
  formikExpress,
  formikPayment,
  formikPaymentPaypal,
}) => {
  const message = useSelector((state) => state.basket.message);
  console.log(message);
  return (
    <>
      <div className={styles.errorWrapper}>
        <h2 className={styles.title}>
          Sorry, your payment has not been processed.
        </h2>

        {message && <p className={styles.text}>{message}</p>}
      </div>
      <div>
        <ButtonError
          type={type}
          setType={setType}
          formik={formik}
          formikExpress={formikExpress}
          formikPayment={formikPayment}
          formikStore={formikStore}
          formikPaymentPaypal={formikPaymentPaypal}
        />
      </div>
    </>
  );
};

export default ErrorPayment;
