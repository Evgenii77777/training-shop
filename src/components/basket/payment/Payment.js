import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import Im1 from "../../../assets/png/pp3.png";
import Im2 from "../../../assets/png/pp4.png";
import Im3 from "../../../assets/png/pp5.png";
import InputMask from "react-input-mask";
import ButtonPayment from "../buttonPayment/ButtonPayment";
import Total from "../total/Total";

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
  let [show, setShow] = useState(true);

  const onChangeCash = (e) => {
    setCash((cash = e.target.id));
  };

  useEffect(() => {
    const radioInput = document.getElementById("cardVisa");
    return (radioInput.checked = true);
  }, []);

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
      <div>
        <h4 className={styles.title}>Method of payments</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <input
                id="paypal"
                type="radio"
                name="radio"
                onClick={(e) => onChangeCash(e)}
              />
              <label htmlFor="paypal"></label>
            </div>

            <div className={styles.container}>
              <img src={Im1} alt="Paypal" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <input
                id="cardVisa"
                type="radio"
                name="radio"
                onClick={(e) => onChangeCash(e)}
              />
              <label htmlFor="cardVisa"></label>
            </div>
            <div className={styles.container}>
              <img src={Im2} alt="Visa" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <input
                id="card"
                type="radio"
                name="radio"
                onClick={(e) => onChangeCash(e)}
              />
              <label htmlFor="card"></label>
            </div>
            <div className={styles.container}>
              <img src={Im3} alt="Master" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.form_radio}>
              <input
                id="cash"
                type="radio"
                name="radio"
                onClick={(e) => onChangeCash(e)}
              />
              <label htmlFor="cash"></label>
            </div>
            <p className={styles.text}>Cash</p>
          </li>
        </ul>
        <form>
          {cash === "cardVisa" || cash === "card" ? (
            <>
              <p className={styles.formText}>CARD</p>
              <label htmlFor="cart">
                <InputMask
                  mask="9999 9999 9999 9999"
                  className={
                    formik.touched.cart && formik.errors.cart
                      ? styles.inputError
                      : styles.formInput
                  }
                  name={`cart`}
                  id="cart"
                  type="text"
                  placeholder="____ ____ ____ ____"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cart}
                />
              </label>
              {formik.touched.cart && formik.errors.cart && (
                <p className={styles.errorEmail}>{formik.errors.cart}</p>
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
                      name={`cardDate`}
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
                      name={`cardCVV`}
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.06349 12C2.6578 10.8958 3.79588 9.33029 5.40457 8.0117C7.12107 6.60473 9.34606 5.5 12.0001 5.5C14.6542 5.5 16.8791 6.60473 18.5956 8.0117C20.2043 9.33029 21.3424 10.8958 21.9367 12C21.3424 13.1042 20.2043 14.6697 18.5956 15.9883C16.8791 17.3953 14.6542 18.5 12.0001 18.5C9.34606 18.5 7.12107 17.3953 5.40457 15.9883C3.79588 14.6697 2.6578 13.1042 2.06349 12ZM1.04165 12.1996C1.04597 12.2095 1.05062 12.2193 1.05559 12.229C1.66894 13.4536 2.93566 15.2576 4.77065 16.7617C6.61248 18.2714 9.05416 19.5 12.0001 19.5C14.9461 19.5 17.3877 18.2714 19.2296 16.7617C21.0646 15.2576 22.3313 13.4535 22.9447 12.2289C22.9497 12.2191 22.9545 12.209 22.9589 12.1988C22.9869 12.1343 23.0003 12.0667 23.0002 12C23.0003 11.9333 22.9869 11.8657 22.9589 11.8012C22.9545 11.791 22.9497 11.7809 22.9447 11.7711C22.3313 10.5465 21.0646 8.74242 19.2296 7.2383C17.3877 5.7286 14.9461 4.5 12.0001 4.5C9.05416 4.5 6.61248 5.7286 4.77065 7.2383C2.93566 8.74239 1.66894 10.5464 1.05559 11.771C1.05062 11.7807 1.04597 11.7905 1.04165 11.8004C1.01339 11.8652 0.999948 11.9331 1 12C0.999948 12.0669 1.01339 12.1348 1.04165 12.1996Z"
                            fill="#9C9C9C"
                          />
                          <path
                            d="M10.5835 8.80421C10.4707 8.54955 10.5851 8.24824 10.8519 8.16829C11.5189 7.96844 12.2296 7.94534 12.9132 8.10563C13.7612 8.30448 14.5211 8.77468 15.0775 9.44481C15.6339 10.1149 15.9563 10.9484 15.9959 11.8185C16.0277 12.5198 15.8744 13.2142 15.5553 13.833C15.4276 14.0806 15.1104 14.1377 14.8808 13.9799C14.6513 13.8222 14.5975 13.5093 14.7146 13.2565C14.9151 12.8233 15.0101 12.346 14.9882 11.8642C14.9586 11.2136 14.7175 10.5903 14.3014 10.0892C13.8853 9.58807 13.317 9.23644 12.6829 9.08774C12.2134 8.97764 11.7268 8.98324 11.2641 9.10069C10.9941 9.16922 10.6964 9.05888 10.5835 8.80421Z"
                            fill="#9C9C9C"
                          />
                          <path
                            d="M14.1491 14.7638C14.3183 14.9814 14.2803 15.2979 14.0435 15.4387C13.3088 15.8752 12.4492 16.0674 11.5905 15.979C10.5654 15.8735 9.62052 15.3764 8.9529 14.5914C8.28528 13.8063 7.9464 12.7939 8.0069 11.7652C8.05758 10.9034 8.38527 10.0858 8.93417 9.4308C9.11115 9.21961 9.42966 9.233 9.61719 9.43488C9.80473 9.63677 9.7891 9.95038 9.62103 10.1687C9.25601 10.6429 9.03859 11.2188 9.00301 11.8238C8.9576 12.5959 9.21195 13.3557 9.71302 13.9449C10.2141 14.5341 10.9232 14.9072 11.6926 14.9864C12.2954 15.0484 12.8988 14.9263 13.4254 14.6422C13.6679 14.5114 13.98 14.5463 14.1491 14.7638Z"
                            fill="#9C9C9C"
                          />
                          <path d="M3.5 2.5L20 21.5" stroke="#9C9C9C" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className={styles.showBtn}
                        type="button"
                        onClick={(e) => handleChangeShowPassword(e)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.06349 12C2.6578 10.8958 3.79588 9.33029 5.40457 8.0117C7.12107 6.60473 9.34606 5.5 12.0001 5.5C14.6542 5.5 16.8791 6.60473 18.5956 8.0117C20.2043 9.33029 21.3424 10.8958 21.9367 12C21.3424 13.1042 20.2043 14.6697 18.5956 15.9883C16.8791 17.3953 14.6542 18.5 12.0001 18.5C9.34606 18.5 7.12107 17.3953 5.40457 15.9883C3.79588 14.6697 2.6578 13.1042 2.06349 12ZM1.04165 12.1996C1.04597 12.2095 1.05062 12.2193 1.05559 12.229C1.66894 13.4536 2.93566 15.2576 4.77065 16.7617C6.61248 18.2714 9.05416 19.5 12.0001 19.5C14.9461 19.5 17.3877 18.2714 19.2296 16.7617C21.0646 15.2576 22.3313 13.4535 22.9447 12.2289C22.9497 12.2191 22.9545 12.209 22.9589 12.1988C22.9869 12.1343 23.0003 12.0667 23.0002 12C23.0003 11.9333 22.9869 11.8657 22.9589 11.8012C22.9545 11.791 22.9497 11.7809 22.9447 11.7711C22.3313 10.5465 21.0646 8.74242 19.2296 7.2383C17.3877 5.7286 14.9461 4.5 12.0001 4.5C9.05416 4.5 6.61248 5.7286 4.77065 7.2383C2.93566 8.74239 1.66894 10.5464 1.05559 11.771C1.05062 11.7807 1.04597 11.7905 1.04165 11.8004C1.01339 11.8652 0.999948 11.9331 1 12C0.999948 12.0669 1.01339 12.1348 1.04165 12.1996Z"
                            fill="#9C9C9C"
                          />
                          <path
                            d="M10.5835 8.80421C10.4707 8.54955 10.5851 8.24824 10.8519 8.16829C11.5189 7.96844 12.2296 7.94534 12.9132 8.10563C13.7612 8.30448 14.5211 8.77468 15.0775 9.44481C15.6339 10.1149 15.9563 10.9484 15.9959 11.8185C16.0277 12.5198 15.8744 13.2142 15.5553 13.833C15.4276 14.0806 15.1104 14.1377 14.8808 13.9799V13.9799C14.6513 13.8222 14.5975 13.5093 14.7146 13.2565C14.9151 12.8233 15.0101 12.346 14.9882 11.8642C14.9586 11.2136 14.7175 10.5903 14.3014 10.0892C13.8853 9.58807 13.317 9.23644 12.6829 9.08774C12.2134 8.97764 11.7268 8.98324 11.2641 9.10069C10.9941 9.16922 10.6964 9.05888 10.5835 8.80421V8.80421Z"
                            fill="#9C9C9C"
                          />
                          <path
                            d="M14.1491 14.7638C14.3183 14.9814 14.2803 15.2979 14.0435 15.4387C13.3088 15.8752 12.4492 16.0674 11.5905 15.979C10.5654 15.8735 9.62052 15.3764 8.9529 14.5914C8.28528 13.8063 7.9464 12.7939 8.0069 11.7652C8.05758 10.9034 8.38527 10.0858 8.93417 9.4308C9.11115 9.21961 9.42966 9.233 9.61719 9.43488V9.43488C9.80473 9.63677 9.7891 9.95038 9.62103 10.1687C9.25601 10.6429 9.03859 11.2188 9.00301 11.8238C8.9576 12.5959 9.21195 13.3557 9.71302 13.9449C10.2141 14.5341 10.9232 14.9072 11.6926 14.9864C12.2954 15.0484 12.8988 14.9263 13.4254 14.6422C13.6679 14.5114 13.98 14.5463 14.1491 14.7638V14.7638Z"
                            fill="#9C9C9C"
                          />
                        </svg>
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
              <p className={styles.formText}>E-MAIL</p>
              <label htmlFor="cashEmail" className={styles.labelFirst}>
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
                  <p formikPaypalclassName={styles.errorEmail}>
                    {formikPaypal.errors.cashEmail}
                  </p>
                )}
            </>
          )}
          {cash === "cash" && <></>}
        </form>
        <div>
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
            formikPayment={formikPaypal}
          />
        </div>
      </div>
    </>
  );
};

export default Payment;