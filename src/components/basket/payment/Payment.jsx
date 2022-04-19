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
import PasswordOne from "../../passwordStars/PasswordOne";
import PasswordTwo from "../../passwordStars/PasswordTwo";
import PasswordThre from "../../passwordStars/PasswordThre";

const Payment = ({
  setType,
  total,
  formik,
  formikPaypal,
  cash,
  setCash,
  setCheckedCheckbox,
  setCheckedCheckboxExpress,
  setCheckedCheckboxStore,
  radio,
}) => {
  console.log(radio);
  const [show, setShow] = useState(true);
  const Data = new Date();
  let Year = Data.getFullYear();
  const Month = Data.getMonth() + 1;
  Year = String(Year).split("");
  const year = [Year[2], Year[3]].join("");
  const lengthPassword = formik.values.cardCVV.split("_").length;

  if (formik.values.cardDate) {
    const dayFormik = Number(formik.values.cardDate.split("/")[0]);
    const yearFormik = Number(formik.values.cardDate.split("/")[1]);
    if (dayFormik < 1 || dayFormik > 12 || dayFormik < Month) {
      formik.errors.cardDate = "Неправильный месяц";
      formik.isValid = false;
    } else if (yearFormik < year) {
      formik.errors.cardDate = "Неправильный год";
      formik.isValid = false;
    } else {
      formik.isValid = true;
    }
  }

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
              <label htmlFor="paypal" className={styles.radio}>
                <input
                  id="paypal"
                  type="radio"
                  name="payment"
                  checked={cash === "paypal" ? true : false}
                  className={styles.input}
                  onClick={(e) => onChangeCash(e)}
                />
                <div className={styles.radio__text}>
                  <img src={Im1} alt="Paypal" />
                </div>
              </label>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label htmlFor="cardVisa" className={styles.radio}>
                <input
                  id="cardVisa"
                  checked={cash === "cardVisa" ? true : false}
                  type="radio"
                  name="payment"
                  className={styles.input}
                  onClick={(e) => onChangeCash(e)}
                />
                <div className={styles.radio__text}>
                  <img src={Im2} alt="Visa" />
                </div>
              </label>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label htmlFor="masterCard" className={styles.radio}>
                <input
                  id="masterCard"
                  checked={cash === "masterCard" ? true : false}
                  type="radio"
                  name="payment"
                  className={styles.input}
                  onClick={(e) => onChangeCash(e)}
                />
                <div className={styles.radio__text}>
                  <img src={Im3} alt="Master" />
                </div>
              </label>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <label htmlFor="cash" className={styles.radio}>
                <input
                  id="cash"
                  checked={cash === "cash" ? true : false}
                  type="radio"
                  name="payment"
                  className={styles.input}
                  onClick={(e) => onChangeCash(e)}
                />
                <div className={styles.radio__text}>Cash</div>
              </label>
            </div>
          </li>
        </ul>
        <form>
          {(cash === "cardVisa" || cash === "masterCard") && (
            <>
              <label className={styles.formText} htmlFor="cardpassword">
                Card
                <InputMask
                  mask="9999 9999 9999 9999"
                  className={
                    formik.touched.card && formik.errors.card
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
                    {show && lengthPassword === 3 && <PasswordOne />}
                    {show && lengthPassword === 2 && <PasswordTwo />}
                    {show &&
                      lengthPassword === 1 &&
                      formik.values.cardCVV !== "" && <PasswordThre />}

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
          )}
          {cash === "paypal" && (
            <>
              <label htmlFor="cashEmail" className={styles.formText}>
                E-mail
                <input
                  className={
                    formikPaypal.touched.cart && formikPaypal.errors.cart
                      ? styles.inputError
                      : styles.formInput
                  }
                  name="cashEmail"
                  id="cashEmail"
                  type="text"
                  placeholder="e-mail"
                  onFocus={(e) => (e.target.placeholder = "")}
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
            setType={setType}
            cash={cash}
            total={total}
            formik={formik}
            formikPaypal={formikPaypal}
            setCheckedCheckbox={setCheckedCheckbox}
            setCheckedCheckboxExpress={setCheckedCheckboxExpress}
            setCheckedCheckboxStore={setCheckedCheckboxStore}
            radio={radio}
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
