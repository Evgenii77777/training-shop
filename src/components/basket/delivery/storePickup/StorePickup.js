import React, { useState } from "react";
import styles from "../pickupPost/PickupPost.module.css";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import ButtonFurther from "../../buttonFurther/ButtonFurther";
import Total from "../../total/Total";
import { postCity } from "../../../../redux/thunk/asincThunk/postDeliveryCity";

const StorePickup = ({
  type,
  setType,
  total,
  errorCheckbox,
  setErrorCheckbox,
  formik,
  valuesNew,
  setValues,
}) => {
  const dispatch = useDispatch();
  let [showCities, setShowCities] = useState(false);
  let [arrow, setArrow] = useState(null);

  let [showCountry, setShowCountry] = useState(true);
  let [arrowCountry, setArrowCountry] = useState(null);

  const cities = useSelector((state) => state.cities.cities);
  const countryName = useSelector((state) => state.country.country);

  const handleFocusCountry = () => {
    setShowCountry((showCountry = false));
  };

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    formik.values.storeAddress = event.target.value;
    if (valuesNew.storeAddress.length >= 3) {
      dispatch(
        postCity({
          city: valuesNew.storeAddress,
          country: formik.values.country,
        })
      );
      setArrow((arrow = true));
    }
  };

  const handleChangeCountry = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    formik.values.country = event.target.value;
  };

  const handleChoiseCity = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      storeAddress: e.target.textContent,
    }));
    formik.values.storeAddress = e.target.textContent;
    setShowCities(!showCities);
    setArrow((arrow = false));
  };

  const handleChoiseCountry = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      country: e.target.textContent,
    }));
    formik.values.country = e.target.textContent;
    setShowCountry(!showCountry);
    setArrowCountry((arrowCountry = false));
  };

  const handleArrow = () => {
    setArrow((arrow = false));
    setShowCities(!showCities);
  };
  const handleArrowShow = () => {
    setArrow((arrow = true));
    setShowCities(!showCities);
  };

  const handleArrowCountry = () => {
    setArrowCountry((arrowCountry = false));
    setShowCountry(!showCountry);
  };
  const handleArrowShowCountry = () => {
    setArrowCountry((arrowCountry = true));
    setShowCountry(!showCountry);
  };

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
            <p className={styles.text}>ADRESS of store</p>
            <label htmlFor="country" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`country`}
                id="country"
                type="text"
                placeholder="Country"
                onChange={(e) => handleChangeCountry(e)}
                onBlur={formik.handleBlur}
                onMouseEnter={() => handleFocusCountry()}
                value={valuesNew.country}
              />
              {countryName !== null && countryName.length !== 0 && (
                <>
                  {arrowCountry === true ? (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrowCountry()}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.5 15L12 7.5L4.5 15" stroke="#9C9C9C" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrowShowCountry()}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.6">
                          <path d="M19 9L12 16L5 9" stroke="#121212" />
                        </g>
                      </svg>
                    </button>
                  )}
                </>
              )}
            </label>
            {countryName !== null && countryName.length !== 0 && (
              <div
                className={
                  !showCountry
                    ? styles.citiesContainer
                    : styles.citiesContainerShow
                }
              >
                <ul className={styles.citiesList}>
                  {countryName.map((el) =>
                    el.map((item, index) => (
                      <li key={item.name} className={styles.citiesItem}>
                        <button
                          type="button"
                          className={
                            index % 2 === 0
                              ? styles.citiesBtn
                              : styles.citiesBtnBlack
                          }
                          onClick={(e) => handleChoiseCountry(e)}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}

            {formik.touched.country && formik.errors.country && (
              <p className={styles.errorEmail}>{formik.errors.country}</p>
            )}
          </li>
          <li className={styles.item}>
            <label htmlFor="storeAddress" className={styles.labelFirst}>
              <input
                className={
                  formik.touched.adress && formik.errors.adress
                    ? styles.inputError
                    : styles.inputFirst
                }
                name={`storeAddress`}
                id="storeAddress"
                type="text"
                placeholder="Store adress"
                onChange={(e) => handleChange(e)}
                onBlur={formik.handleBlur}
                value={valuesNew.storeAddress}
                disabled={formik.values.country.length === 0}
              />
              {cities !== null && cities.length !== 0 && (
                <>
                  {arrow === true ? (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrow()}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.5 15L12 7.5L4.5 15" stroke="#9C9C9C" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrowShow()}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.6">
                          <path d="M19 9L12 16L5 9" stroke="#121212" />
                        </g>
                      </svg>
                    </button>
                  )}
                </>
              )}
            </label>
            {cities !== null && cities.length !== 0 && (
              <div
                className={
                  !showCities
                    ? styles.citiesContainer
                    : styles.citiesContainerShow
                }
              >
                <ul className={styles.citiesList}>
                  {cities.map((item, index) => (
                    <li key={item.city} className={styles.citiesItem}>
                      <button
                        type="button"
                        className={
                          index % 2 === 0
                            ? styles.citiesBtn
                            : styles.citiesBtnBlack
                        }
                        onClick={(e) => handleChoiseCity(e)}
                      >
                        {item.city}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {formik.touched.storeAddress && formik.errors.storeAddress && (
              <p className={styles.errorEmail}>{formik.errors.storeAddress}</p>
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
            deliveryMethod: "Store pickup",
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

export default StorePickup;
