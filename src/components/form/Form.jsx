import React from "react";
import styles from "./Form.module.css";
import M from "../../assets/img/bgm.png";
import W from "../../assets/img/bgw.png";
import { useDispatch, useSelector } from "react-redux";
import { emailPost } from "../../redux/thunk/postEmail";
import { Watch } from "react-loader-spinner";
import { Formik } from "formik";
import * as yup from "yup";

const Form = () => {
  const validationsSchema = yup.object().shape({
    email: yup.string().email("Невалидный email").required("Введите email"),
  });

  const isLoading = useSelector((state) => state.mail.loading);
  const isError = useSelector((state) => state.mail.error);
  let message = useSelector((state) => state.mail.message);
  const status = useSelector((state) => state.mail.status);
  const input = document.getElementById("email");
  let isEmpty = true;
  const inp = () => {
    if (input.value === "") {
      return (isEmpty = false);
    } else {
      return (isEmpty = true);
    }
  };
  setTimeout(() => {
    inp();
  });
  const dispatch = useDispatch();
  const handleAction = (email) => {
    dispatch(emailPost(email));
    email.email = "";
  };

  return (
    <section className={styles.container}>
      <img className={styles.women} src={W} alt="women" />
      <img className={styles.men} src={M} alt="men" />
      <form className={styles.form}>
        <span>Special Offer</span>
        <h2>
          Subscribe And <span className={styles.sale}> Get 10% Off</span>
        </h2>
        <div>
          <Formik
            initialValues={{
              email: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationsSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form className={styles.formikWrapper}>
                <label>
                  <input
                    className={styles.label}
                    data-test-id="footer-mail-field"
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                {touched.email && errors.email && (
                  <p className={styles.errorEmail}>{errors.email}</p>
                )}
                <div className={styles.wrapperLoader}>
                  {isLoading && (
                    <div className={styles.loader} data-test-id="loader">
                      <Watch
                        height="25"
                        width="25"
                        color="white"
                        ariaLabel="loading"
                      />
                    </div>
                  )}
                  <button
                    className={styles.input}
                    data-test-id="footer-subscribe-mail-button"
                    disabled={!isValid || !dirty || isLoading || isEmpty}
                    type="submit"
                    onClick={() => handleAction(values)}
                  >
                    Subscribe
                  </button>
                </div>
                {status === "resolved" && (
                  <h4 className={styles.status}>Почта отправлена</h4>
                )}
                {isError && <h4 className={styles.error}>{message}</h4>}
              </form>
            )}
          </Formik>
        </div>

        {/* <label>
          <input
            className={styles.label}
            data-test-id="main-subscribe-mail-field"
            required
            id="email"
            name="email"
            type="text"
            value={text}
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className={styles.loaderWrapper}>
          {isDis && status === "resolved" && (
            <h4 className={styles.status}>Почта отправлена успешно</h4>
          )}
          {isError && <h4 className={styles.error}>{message}</h4>}
          <input
            className={styles.input}
            data-test-id="main-subscribe-mail-button"
            disabled={isDis}
            type="button"
            value="Subscribe"
            onClick={() => handleAction(text)}
          />
          {isLoading && (
            <div className={styles.loader} data-test-id="loader">
              <Watch height="30" width="30" color="white" ariaLabel="loading" />
            </div>
          )}
        </div> */}
      </form>
    </section>
  );
};

export default Form;
