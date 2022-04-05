import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../pickupPost/PickupPost.module.css";

const StorePickup = () => {
  const validationsSchema = yup.object().shape({
    phone: yup.number().required("Поле должно быть заполнено"),
    mail: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
    country: yup.string().required("Поле должно быть заполнено"),
    adress: yup.string().required("Поле должно быть заполнено"),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
      mail: "",
      adress: "",
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationsSchema,
  });
  return (
    <div className={styles.form} data-test-id="review-modal" id="top">
      <ul>
        <li className={styles.item}>
          <p className={styles.text}>PHONE</p>
          <label htmlFor="phone" className={styles.labelFirst}>
            <input
              className={
                formik.touched.phone && formik.errors.phone
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`phone`}
              // data-test-id="review-name-field"
              id="phone"
              type="text"
              placeholder="+375  (__) _______"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </label>
          {formik.touched.phone && formik.errors.phone && (
            <p className={styles.errorEmail}>{formik.errors.phone}</p>
          )}
        </li>
        <li className={styles.item}>
          <p className={styles.text}>e-mail</p>
          <label htmlFor="mail" className={styles.labelFirst}>
            <input
              className={
                formik.touched.mail && formik.errors.mail
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`mail`}
              data-test-id="review-name-field"
              id="mail"
              type="text"
              placeholder="e-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
            />
          </label>
          {formik.touched.mail && formik.errors.mail && (
            <p className={styles.errorEmail}>{formik.errors.mail}</p>
          )}
        </li>
        <li className={styles.item}>
          <p className={styles.text}>ADRESS of store</p>
          <label htmlFor="country" className={styles.labelFirst}>
            <input
              className={
                formik.touched.country && formik.errors.country
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`country`}
              data-test-id="review-name-field"
              id="country"
              type="text"
              placeholder="Country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
          </label>
          {formik.touched.country && formik.errors.country && (
            <p className={styles.errorEmail}>{formik.errors.country}</p>
          )}
        </li>
        <li className={styles.item}>
          <label htmlFor="adress" className={styles.labelFirst}>
            <input
              className={
                formik.touched.adress && formik.errors.adress
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`adress`}
              data-test-id="review-name-field"
              id="adress"
              type="text"
              placeholder="Store adress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adress}
            />
          </label>
          {formik.touched.adress && formik.errors.adress && (
            <p className={styles.errorEmail}>{formik.errors.adress}</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default StorePickup;
