import React, { useState } from "react";
import InputMask from "react-input-mask";
import ButtonPayment from "../buttonPayment/ButtonPayment";
import Total from "../total/Total";
import Im1 from "../../../assets/png/pp3.png";
import Im2 from "../../../assets/png/pp4.png";
import Im3 from "../../../assets/png/pp5.png";
import Eye from "../../../assets/svg/eye.svg";
import EyeSlash from "../../../assets/svg/icon-EyeSlash.svg";
import styles from "./Payment.module.css";

const Payment = ({
  type,
  setType,
  total,
  error,
  setError,
  status,
  setFulfield,
  fulfield,
  formik,
  formikPaypal,
  cash,
  setCash,
}) => {
  const [show, setShow] = useState(true);

  const onChangeCash = (e) => {
    setCash((cash = e.target.id));
  };

  const handleChangeShow = (e) => {
    setShow(!show);
    e.currentTarget.previousSibling.type = "text";
  };

  const handleChangeShowPassword = (e) => {
    setShow(!show);
    e.currentTarget.previousSibling.type = "password";
  };

  return (
    <>
      <div className={styles.paymentContainer}>
        <h4 className={styles.title}>Method of payments</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label
                htmlFor="paypal"
                className={
                  cash === "paypal" ? styles.checked : styles.noChecked
                }
              >
                <input
                  id="paypal"
                  type="radio"
                  name="payment"
                  onClick={(e) => onChangeCash(e)}
                />
              </label>
            </div>

            <div className={styles.container}>
              <img src={Im1} alt="Paypal" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label
                htmlFor="cardVisa"
                className={
                  cash === "cardVisa" ? styles.checked : styles.noChecked
                }
              >
                <input
                  id="cardVisa"
                  type="radio"
                  name="payment"
                  onClick={(e) => onChangeCash(e)}
                  checked
                />
              </label>
            </div>
            <div className={styles.container}>
              <img src={Im2} alt="Visa" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label
                htmlFor="masterCard"
                className={
                  cash === "masterCard" ? styles.checked : styles.noChecked
                }
              >
                <input
                  id="masterCard"
                  type="radio"
                  name="payment"
                  onClick={(e) => onChangeCash(e)}
                />
              </label>
            </div>
            <div className={styles.container}>
              <img src={Im3} alt="Master" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label
                htmlFor="cash"
                className={cash === "cash" ? styles.checked : styles.noChecked}
              >
                <span className={styles.cashSpan}>Cash</span>
                <input
                  id="cash"
                  type="radio"
                  name="payment"
                  onClick={(e) => onChangeCash(e)}
                />
              </label>
            </div>
          </li>
        </ul>
        <form>
          {cash === "cardVisa" || cash === "masterCard" ? (
            <>
              <label htmlFor="cardpassword">
                <p className={styles.formText}>Card</p>
                <InputMask
                  mask="9999 9999 9999 9999"
                  className={
                    formik.touched.cart && formik.errors.cart
                      ? styles.inputError
                      : styles.formInput
                  }
                  name="card"
                  id="cardpassword"
                  type="text"
                  placeholder="____ ____ ____ ____"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.card}
                />
              </label>
              {formik.touched.card && formik.errors.card && (
                <p className={styles.errorEmail}>{formik.errors.card}</p>
              )}
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="cardDate">
                    <InputMask
                      mask="99/99"
                      className={
                        formik.touched.year && formik.errors.year
                          ? styles.inputError
                          : styles.formInput
                      }
                      name="cardDate"
                      id="cardDate"
                      type="text"
                      placeholder="MM/YY"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardDate}
                    />
                  </label>
                  {formik.touched.cardDate && formik.errors.cardDate && (
                    <p className={styles.errorEmail}>
                      {formik.errors.cardDate}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cardCVV" className={styles.labelShow}>
                    <InputMask
                      mask="999"
                      className={
                        formik.touched.cardCVV && formik.errors.cardCVV
                          ? styles.inputError
                          : styles.formInput
                      }
                      name="cardCVV"
                      id="cardCVV"
                      type="password"
                      placeholder="CVV"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardCVV}
                    />
                    {show ? (
                      <button
                        className={styles.showBtn}
                        type="button"
                        onClick={(e) => handleChangeShow(e)}
                      >
                        <img src={EyeSlash} alt="eyeSlash" />
                      </button>
                    ) : (
                      <button
                        className={styles.showBtn}
                        type="button"
                        onClick={(e) => handleChangeShowPassword(e)}
                      >
                        <img src={Eye} alt="eye" />
                      </button>
                    )}
                  </label>
                  {formik.touched.cardCVV && formik.errors.cardCVV && (
                    <p className={styles.errorEmail}>{formik.errors.cardCVV}</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {cash === "paypal" && (
            <>
              <label htmlFor="cashEmail" className={styles.labelFirst}>
                <p className={styles.formText}>E-mail</p>
                <input
                  className={
                    formikPaypal.touched.cart && formikPaypal.errors.cart
                      ? styles.inputError
                      : styles.formInput
                  }
                  name={`cashEmail`}
                  id="cashEmail"
                  type="text"
                  placeholder="e-mail"
                  onChange={formikPaypal.handleChange}
                  onBlur={formikPaypal.handleBlur}
                  value={formikPaypal.values.cashEmail}
                />
              </label>
              {formikPaypal.touched.cashEmail &&
                formikPaypal.errors.cashEmail && (
                  <p className={styles.errorEmail}>
                    {formikPaypal.errors.cashEmail}
                  </p>
                )}
            </>
          )}
          {cash === "cash" && <></>}
        </form>
        <div className={styles.topPayment}>
          <Total total={total} />
          <ButtonPayment
            type={type}
            setType={setType}
            cash={cash}
            isValid={formik.isValid}
            dirty={formik.dirty}
            isValidPaypal={formikPaypal.isValid}
            dirtyPaypal={formikPaypal.dirty}
            error={error}
            setError={setError}
            total={total}
            formik={formik}
            fulfield={fulfield}
            setFulfield={setFulfield}
            status={status}
            formikPaypal={formikPaypal}
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
