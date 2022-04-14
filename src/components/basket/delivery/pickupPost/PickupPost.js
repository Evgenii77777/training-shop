import React from "react";
import styles from "./PickupPost.module.css";
import InputMask from "react-input-mask";
import ButtonFurther from "../../buttonFurther/ButtonFurther";
import Total from "../../total/Total";

const PickupPost = ({
  type,
  setType,
  total,
  formik,
  errorCheckbox,
  setErrorCheckbox,
}) => {
  return (
    <>
      <div className={styles.form} data-test-id="review-modal" id="top">
        <ul>
          <li className={styles.item}>
            <p className={styles.text}>PHONE</p>

            <label htmlFor="phone" className={styles.labelFirst}>
              <InputMask
                mask="+999 (99)9999999"
                className={
                  formik.touched.phone && formik.errors.phone
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`phone`}
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
            <label htmlFor="email" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`email`}
                id="email"
                type="text"
                placeholder="e-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorEmail}>{formik.errors.email}</p>
            )}
          </li>
          <li className={styles.item}>
            <p className={styles.text}>ADRESS</p>
            <label htmlFor="country" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.country && formik.errors.country
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`country`}
                id="country"
                type="text"
                placeholder="adress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adress}
              />
            </label>
            {formik.touched.country && formik.errors.country && (
              <p className={styles.errorEmail}>{formik.errors.country}</p>
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
          <li className={styles.item}>
            <p className={styles.text}>POSTcode</p>

            <label htmlFor="postcode" className={styles.labelFirst}>
              <InputMask
                mask="BY 999999"
                className={
                  formik.touched.postcode && formik.errors.postcode
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`postcode`}
                id="postcode"
                type="text"
                placeholder="BY ______"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postcode}
              />
            </label>
            {formik.touched.postcode && formik.errors.postcode && (
              <p className={styles.errorEmail}>{formik.errors.postcode}</p>
            )}
          </li>
        </ul>
        <div className={styles.containerAgree}>
          <label className={styles.customcheckbox} htmlFor="agree">
            <input
              className={styles.hiddencheckbox}
              type="checkbox"
              name="agree"
              id="agree"
              onClick={() => setErrorCheckbox((errorCheckbox = false))}
            />
            <div
              className={errorCheckbox ? styles.errorCheck : styles.checkbox}
            >
              <svg
                width="12"
                className={styles.checkmark}
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3659 0.234229C11.5159 0.384251 11.6002 0.587698 11.6002 0.799829C11.6002 1.01196 11.5159 1.21541 11.3659 1.36543L4.96593 7.76543C4.8159 7.91541 4.61246 7.99966 4.40033 7.99966C4.18819 7.99966 3.98475 7.91541 3.83473 7.76543L0.634726 4.56543C0.488999 4.41455 0.408364 4.21247 0.410186 4.00271C0.412009 3.79295 0.496144 3.5923 0.644471 3.44397C0.792797 3.29565 0.993447 3.21151 1.2032 3.20969C1.41296 3.20787 1.61504 3.2885 1.76593 3.43423L4.40033 6.06863L10.2347 0.234229C10.3847 0.0842525 10.5882 0 10.8003 0C11.0125 0 11.2159 0.0842525 11.3659 0.234229Z"
                  fill="#111111"
                />
              </svg>
            </div>
          </label>

          <p className={styles.textAgree}>
            I agree to the processing of my personal information
          </p>
        </div>
        {errorCheckbox === true && (
          <p className={styles.errorEmail}>
            Вы должны согласиться на обработку личной информации
          </p>
        )}
      </div>
      <div>
        <Total total={total} />
        <ButtonFurther
          values={{
            ...formik.values,
            deliveryMethod: "Pickup from post offices",
          }}
          isValid={formik.isValid}
          dirty={formik.dirty}
          type={type}
          setType={setType}
          errorCheckbox={errorCheckbox}
          setErrorCheckbox={setErrorCheckbox}
        />
      </div>
    </>
  );
};

export default PickupPost;
