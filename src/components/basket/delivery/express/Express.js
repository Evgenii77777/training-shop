import React from "react";
import styles from "../pickupPost/PickupPost.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Express = () => {
  const validationsSchema = yup.object().shape({
    phone: yup.number().required("Поле должно быть заполнено"),
    mail: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
    adress: yup.string().required("Поле должно быть заполнено"),
    city: yup.string().required("Поле должно быть заполнено"),
    street: yup.string().required("Поле должно быть заполнено"),
    house: yup.number().required("Поле должно быть заполнено"),
    apartment: yup.number(),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
      mail: "",
      adress: "",
      city: "",
      street: "",
      house: "",
      apartment: "",
      post: "",
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
          <p className={styles.text}>ADRESS</p>
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
              placeholder="adress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adress}
            />
          </label>
          {formik.touched.adress && formik.errors.adress && (
            <p className={styles.errorEmail}>{formik.errors.adress}</p>
          )}
        </li>
        <li className={styles.item}>
          <label htmlFor="city" className={styles.labelFirst}>
            <input
              className={
                formik.touched.city && formik.errors.city
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`city`}
              data-test-id="review-name-field"
              id="city"
              type="text"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
          </label>
          {formik.touched.city && formik.errors.city && (
            <p className={styles.errorEmail}>{formik.errors.city}</p>
          )}
        </li>
        <li className={styles.item}>
          <label htmlFor="street" className={styles.labelFirst}>
            <input
              className={
                formik.touched.street && formik.errors.street
                  ? styles.inputError
                  : styles.inputFirst
              }
              name={`street`}
              data-test-id="review-name-field"
              id="street"
              type="text"
              placeholder="Street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
          </label>
          {formik.touched.street && formik.errors.street && (
            <p className={styles.errorEmail}>{formik.errors.street}</p>
          )}
        </li>
        <li className={styles.item}>
          <div className={styles.wrapperAdress}>
            <label htmlFor="house" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.house && formik.errors.house
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`house`}
                data-test-id="review-name-field"
                id="house"
                type="text"
                placeholder="House"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.house}
              />
            </label>
            {formik.touched.house && formik.errors.house && (
              <p className={styles.errorEmail}>{formik.errors.house}</p>
            )}
            <label htmlFor="apartment" className={styles.labelFirst}>
              <input
                className={styles.inputFirst}
                name={`apartment`}
                data-test-id="review-name-field"
                id="apartment"
                type="text"
                placeholder="Apartment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apartment}
              />
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Express;
