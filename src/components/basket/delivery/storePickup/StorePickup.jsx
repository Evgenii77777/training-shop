import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import ButtonFurther from "../../buttonFurther/ButtonFurther.jsx";
import Total from "../../total/Total";
import { postCity } from "../../../../redux/thunk/asincThunk/postDeliveryCity";
import Checkmark from "../../../../assets/svg/Check.svg";
import Chevron from "../../../../assets/svg/chevron-right 1.svg";
import Care from "../../../../assets/svg/icon-CareUp.svg";
import styles from "../pickupPost/PickupPost.module.css";

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
  const [showCities, setShowCities] = useState(false);
  const [arrow, setArrow] = useState(null);
  const [showCountry, setShowCountry] = useState(true);
  const [arrowCountry, setArrowCountry] = useState(null);
  const cities = useSelector((state) => state.cities.cities);
  const countryName = useSelector((state) => state.country.country);

  const handleFocusCountry = () => {
    setShowCountry(false);
  };

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    formik.values.storeAddress = event.target.value;
    if (valuesNew.storeAddress.length >= 2) {
      dispatch(
        postCity({
          city: valuesNew.storeAddress,
          country: formik.values.country,
        })
      );
      setArrow(true);
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
    setArrow(false);
  };

  const handleChoiseCountry = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      country: e.target.textContent,
    }));
    formik.values.country = e.target.textContent;
    setShowCountry(!showCountry);
    setArrowCountry(false);
  };

  const handleArrow = () => {
    setArrow(false);
    setShowCities(!showCities);
  };
  const handleArrowShow = () => {
    setArrow(true);
    setShowCities(!showCities);
  };

  const handleArrowCountry = () => {
    setArrowCountry(false);
    setShowCountry(!showCountry);
  };
  const handleArrowShowCountry = () => {
    setArrowCountry(true);
    setShowCountry(!showCountry);
  };

  return (
    <>
      <div className={styles.form} data-test-id="review-modal" id="top">
        <ul>
          <li className={styles.item}>
            <label htmlFor="phone" className={styles.labelFirst}>
              <p className={styles.text}>PHONE</p>
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
            <label htmlFor="country" className={styles.labelFirst}>
              <p className={styles.text}>ADRESS of store</p>
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
                onFocus={() => handleFocusCountry()}
                value={valuesNew.country}
              />
              {countryName !== null && countryName.length !== 0 && (
                <>
                  {arrowCountry === true ? (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrowCountry()}
                    >
                      <img src={Care} alt="care" />
                    </button>
                  ) : (
                    <button
                      className={styles.citiesBtnTop}
                      onClick={() => handleArrowShowCountry()}
                    >
                      <img src={Chevron} alt="chevron" />
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
                  formik.touched.storeAddress && formik.errors.storeAddress
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
                      className={styles.citiesBtnTopSecond}
                      onClick={() => handleArrow()}
                    >
                      <img src={Care} alt="care" />
                    </button>
                  ) : (
                    <button
                      className={styles.citiesBtnTopSecond}
                      onClick={() => handleArrowShow()}
                    >
                      <img src={Chevron} alt="chevron" />
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
              <img
                src={Checkmark}
                alt="checkmark"
                className={styles.checkmark}
              />
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
      <div className={styles.bottomDelivery}>
        <Total total={total} />

        <ButtonFurther
          values={{
            ...formik.values,
            deliveryMethod: "Store pickup",
          }}
          formik={formik}
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