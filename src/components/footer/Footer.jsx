import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import InternetGroup from "../internetGroup/InternetGroup";
import styles from "./Footer.module.css";
import { paymentSystems } from "../../object/PaymentSystems";
import { categories, infornation } from "../../routes/FooterRoutes";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { Formik } from "formik";
import * as yup from "yup";
import { emailPostFooter } from "../../redux/thunk/asincThunk/postEmailFooterThunk";

const Footer = () => {
  const validationsSchema = yup.object().shape({
    emailFooter: yup
      .string()
      .email("Невалидный email")
      .required("Введите email"),
  });
  let isEmpty = true;
  let input = document.getElementById("emailFooter");
  setTimeout(() => {
    const inp = () => {
      if (input.value === "" || status === "resolved") {
        return (isEmpty = false);
      } else if (input.value !== "" || status === "error") {
        return (isEmpty = false);
      } else {
        return (isEmpty = true);
      }
    };
    inp();
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emailPostFooter());
  }, [dispatch]);
  const handleAction = (email) => {
    dispatch(emailPostFooter(email));
    if (status === "resolved") {
      email.emailFooter = "";
    }
  };

  const isLoading = useSelector((state) => state.mailFooter.loading);
  const isError = useSelector((state) => state.mailFooter.error);
  const isNumber = useSelector((state) => state.mailFooter.number);
  let message = useSelector((state) => state.mailFooter.message);
  const status = useSelector((state) => state.mailFooter.status);

  return (
    <footer data-test-id="footer">
      <div className={styles.wrapper}>
        <div className={styles.superContainer}>
          <div className={styles.wrapperTop}>
            <h2 className={styles.title}>BE IN TOUCH WITH US:</h2>
            <div>
              <Formik
                initialValues={{
                  emailFooter: "",
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
                  <div className={styles.formikWrapper}>
                    <label>
                      <input
                        className={styles.label}
                        data-test-id="footer-mail-field"
                        id="emailFooter"
                        name="emailFooter"
                        type="text"
                        value={values.emailFooter}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>
                    {touched.emailFooter && errors.emailFooter && (
                      <p className={styles.error}>{errors.emailFooter}</p>
                    )}
                    <div className={styles.wrapperLoader}>
                      {isLoading && (
                        <div className={styles.loader} data-test-id="loader">
                          <Watch
                            height="15"
                            width="15"
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
                        Join Us
                      </button>
                    </div>
                    {status === "resolved" && isNumber !== 1 && (
                      <h4 className={styles.status}>Почта отправлена</h4>
                    )}
                    {isError && isNumber !== 1 && (
                      <h4 className={styles.error}>{message}</h4>
                    )}
                  </div>
                )}
              </Formik>
            </div>
          </div>
          <InternetGroup className={styles.group} />
        </div>
      </div>

      <div className={styles.superContainerList}>
        <ul className={styles.list}>
          <li>
            <h4>Categories</h4>
            {categories.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.path}`}
                data-test-id={`footer-nav-link-${item.path}`}
              >
                {item.name}
              </NavLink>
            ))}
          </li>
          <li>
            <h4>Infomation</h4>
            {infornation.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.path}`}
                data-test-id={`footer-nav-link-${item.path}`}
              >
                {item.name}
              </NavLink>
            ))}
          </li>
          <li>
            <h4>Useful links</h4>
            <NavLink to="/">Terms & Conditions</NavLink>
            <NavLink to="/">Returns & Exchanges</NavLink>
            <NavLink to="/">Shipping & Delivery</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>

          <li>
            <h4>CONTACT US</h4>
            <p className={styles.two}>Belarus, Gomel, Lange 17</p>
            <p className={styles.one}>+375 29 100 20 30</p>
            <p className={styles.three}>All week 24/7</p>
            <p className={styles.four}>info@clevertec.ru</p>
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
        <div className={styles.superContainer}>
          <p>Copyright © 2032 all rights reserved</p>
          <ul className={styles.listWrap}>
            {paymentSystems.map((item) => (
              <li className={styles.item} key={item.id}>
                <img src={item.img} alt={item.name} />
              </li>
            ))}
          </ul>
          <Link to="/">Clevertec.ru/training</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
