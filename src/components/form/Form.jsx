/* eslint-disable */
import React, { useEffect } from "react";
import styles from "./Form.module.css";
import M from "../../assets/img/bgm.png";
import W from "../../assets/img/bgw.png";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { useFormik } from "formik";
import * as yup from "yup";
import { emailPost } from "../../redux/thunk/asincThunk/postEmailThunk";

const Form = () => {
  const validationsSchema = yup.object().shape({
    mail: yup.string().email("Невалидный email").required("Введите email"),
  });

  const formik = useFormik({
    initialValues: {
      mail: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationsSchema,
  });

  const isLoading = useSelector((state) => state.mail.loading);
  const isError = useSelector((state) => state.mail.error);
  let message = useSelector((state) => state.mail.message);
  let status = useSelector((state) => state.mail.status);
  let isEmpty = true;
  const dispatch = useDispatch();

  const inp = () => {
    if (formik.values.mail === "" || status === "resolved") {
      return (isEmpty = false);
    } else if (formik.values.mail !== "" || status === "error") {
      return (isEmpty = false);
    } else {
      return (isEmpty = true);
    }
  };
  inp();

  useEffect(() => {
    if (status === "resolved") {
      formik.setFieldValue("mail", "");
      formik.touched.mail = false;
    }
  }, [status]);

  const handleAction = (email) => {
    dispatch(emailPost(email));
  };

  return (
    <section className={styles.container}>
      <img className={styles.women} src={W} alt="women" />
      <img className={styles.men} src={M} alt="men" />
      <div className={styles.form}>
        <span>Special Offer</span>
        <h2>
          Subscribe And <span className={styles.sale}> Get 10% Off</span>
        </h2>
        <div>
          <form className={styles.formikWrapper}>
            <label>
              <input
                className={styles.label}
                data-test-id="main-subscribe-mail-field"
                id="email"
                name="mail"
                type="text"
                value={formik.values.mail}
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.mail && formik.errors.mail && (
              <p className={styles.errorEmail}>{formik.errors.mail}</p>
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
                data-test-id="main-subscribe-mail-button"
                disabled={
                  !formik.isValid || !formik.dirty || isLoading || isEmpty
                }
                type="submit"
                onClick={() =>
                  handleAction(formik.values, () => {
                    formik.values.mail = "";
                  })
                }
              >
                Subscribe
              </button>
            </div>
            {status === "resolved" && (
              <h4 id="resolved" className={styles.status}>
                Почта отправлена
              </h4>
            )}
            {isError && <h4 className={styles.error}>{message}</h4>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
