/* eslint-disable */
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import InternetGroup from "../internetGroup/InternetGroup";
import styles from "./Footer.module.css";
import { paymentSystems } from "../../object/PaymentSystems";
import { categories, infornation } from "../../routes/FooterRoutes";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { useFormik } from "formik";
import * as yup from "yup";
import { emailPostFooter } from "../../redux/thunk/asincThunk/postEmailFooterThunk";

const Footer = () => {
  const isLoading = useSelector((state) => state.mailFooter.loading);
  const isError = useSelector((state) => state.mailFooter.error);
  let message = useSelector((state) => state.mailFooter.message);
  const status = useSelector((state) => state.mailFooter.status);
  let isEmpty = true;
  const dispatch = useDispatch();

  const validationsSchema = yup.object().shape({
    emailFooter: yup
      .string()
      .email("Невалидный email")
      .required("Введите email"),
  });
  const formik = useFormik({
    initialValues: {
      emailFooter: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationsSchema,
  });

  const inp = () => {
    if (formik.values.emailFooter === "" || status === "resolved") {
      return (isEmpty = false);
    } else if (formik.values.emailFooter !== "" || status === "error") {
      return (isEmpty = false);
    } else {
      return (isEmpty = true);
    }
  };
  inp();

  useEffect(() => {
    if (status === "resolved") {
      formik.setFieldValue("emailFooter", "");
    }
  }, [status]);

  const handleAction = (email) => {
    dispatch(emailPostFooter(email.emailFooter));
  };

  return (
    <footer data-test-id="footer">
      <div className={styles.wrapper}>
        <div className={styles.superContainer}>
          <div className={styles.wrapperTop}>
            <h2 className={styles.title}>BE IN TOUCH WITH US:</h2>
            <div>
              <div className={styles.formikWrapper}>
                <label>
                  <input
                    className={styles.label}
                    data-test-id="footer-mail-field"
                    id="emailFooter"
                    name="emailFooter"
                    type="text"
                    value={formik.values.emailFooter}
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.emailFooter && formik.errors.emailFooter && (
                  <p className={styles.error}>{formik.errors.emailFooter}</p>
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
                    disabled={
                      !formik.isValid || !formik.dirty || isLoading || isEmpty
                    }
                    type="submit"
                    onClick={() => handleAction(formik.values)}
                  >
                    Join Us
                  </button>
                </div>
                {status === "resolved" && (
                  <h4 className={styles.status}>Почта отправлена</h4>
                )}
                {isError && <h4 className={styles.error}>{message}</h4>}
              </div>
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
