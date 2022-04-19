import { useState } from "react";
import InputMask from "react-input-mask";
import ButtonFurther from "../../buttonFurther/ButtonFurther.jsx";
import Total from "../../total/Total";
import styles from "../pickupPost/PickupPost.module.css";

const Express = ({
  setType,
  total,
  formik,
  radio,
  checkedCheckboxExpress,
  setCheckedCheckboxExpress,
}) => {
  const [errorCheckbox, setErrorCheckbox] = useState(false);

  const handleChangeCheckbox = () => {
    setErrorCheckbox(false);
    setCheckedCheckboxExpress(!checkedCheckboxExpress);
  };

  return (
    <>
      <div className={styles.form} data-test-id="review-modal" id="top">
        <ul>
          <li className={styles.item}>
            <label htmlFor="phone" className={styles.formText}>
              Phone
              <InputMask
                mask="+375 (99)9999999"
                className={
                  formik.touched.phone && formik.errors.phone
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="phone"
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
            <label htmlFor="email" className={styles.formText}>
              e-mail
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="email"
                id="email"
                type="text"
                placeholder="e-mail"
                onFocus={(e) => (e.target.placeholder = "")}
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
            <label htmlFor="country" className={styles.formText}>
              Adress
              <input
                className={
                  formik.touched.adress && formik.errors.adress
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="country"
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
            <label htmlFor="city" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.city && formik.errors.city
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="city"
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
                name="street"
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
              <div>
                <label htmlFor="house" className={styles.labelFirst}>
                  <input
                    className={
                      formik.touched.house && formik.errors.house
                        ? styles.inputError
                        : styles.inputFirst
                    }
                    name="house"
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
              </div>
              <div>
                <label htmlFor="apartment" className={styles.labelFirst}>
                  <input
                    className={styles.inputFirst}
                    name="apartment"
                    id="apartment"
                    type="text"
                    placeholder="Apartment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apartment}
                  />
                </label>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.containerAgree}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={checkedCheckboxExpress ? true : false}
              name="agree"
              id="agree"
              onClick={() => handleChangeCheckbox()}
            />
            <div
              className={
                errorCheckbox ? styles.errorCheck : styles.checkbox__text
              }
            >
              I agree to the processing of my personal information
            </div>
          </label>
        </div>
        {errorCheckbox === true && (
          <p className={styles.errorEmail}>
            Вы должны согласиться на обработку личной информации
          </p>
        )}
      </div>
      <div className={styles.bottomDelivery}>
        <Total total={total} />

        <ButtonFurther
          values={{
            ...formik.values,
            deliveryMethod: "Express delivery",
          }}
          setType={setType}
          setErrorCheckbox={setErrorCheckbox}
          formik={formik}
          radio={radio}
        />
      </div>
    </>
  );
};

export default Express;
