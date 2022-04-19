import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import ButtonFurther from "../../buttonFurther/ButtonFurther.jsx";
import Total from "../../total/Total";
import { postCity } from "../../../../redux/thunk/asincThunk/postDeliveryCity";
import Chevron from "../../../../assets/svg/chevron-right 1.svg";
import Care from "../../../../assets/svg/icon-CareUp.svg";
import styles from "../pickupPost/PickupPost.module.css";

const StorePickup = ({
  setType,
  total,
  formik,
  valuesNew,
  setValues,
  radio,
  checkedCheckbox,
  setCheckedCheckbox,
}) => {
  const dispatch = useDispatch();
  const [showCities, setShowCities] = useState(false);
  const [arrow, setArrow] = useState(null);
  const [showCountry, setShowCountry] = useState(true);
  const [arrowCountry, setArrowCountry] = useState(null);
  const [errorCheckbox, setErrorCheckbox] = useState(false);
  const cities = useSelector((state) => state.cities.cities);
  const countryName = useSelector((state) => state.country.country);
  const countryError = useSelector((state) => state.country.error);
  const citiesError = useSelector((state) => state.city.error);
  let newCountryArr = [];
  let newCities = [];

  if (Object.keys(formik.touched).length === 0) {
    formik.isValid = false;
  }
  const handleChangeCheckbox = () => {
    setErrorCheckbox(false);
    setCheckedCheckbox(!checkedCheckbox);
  };

  countryName.map((el) => el.map((item) => newCountryArr.push(item.name)));
  cities.map((el) => newCities.push(el.city));

  const incl = newCountryArr.includes(formik.values.country);
  const inclCities = newCities.includes(formik.values.storeAddress);

  const handleFocusCountry = () => {
    setShowCountry(false);
  };

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    formik.values.storeAddress = event.target.value;
    if (valuesNew.storeAddress.length === 3) {
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
              Adress of store
              {countryError && (
                <h3 className={styles.errorEmail}>Ошибка получения стран</h3>
              )}
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="country"
                id="country"
                type="text"
                placeholder="Country"
                autoComplete="off"
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
            {!incl && formik.touched.country && (
              <h3 className={styles.errorEmail}>Нет такой страны в списке</h3>
            )}
            {formik.touched.country &&
              formik.errors.country &&
              valuesNew.country === "" && (
                <p className={styles.errorEmail}>{formik.errors.country}</p>
              )}
          </li>

          <li className={styles.item}>
            <label htmlFor="storeAddress" className={styles.labelFirst}>
              {citiesError && (
                <h3 className={styles.errorEmail}>Ошибка получения городов</h3>
              )}
              <input
                className={
                  formik.touched.storeAddress && formik.errors.storeAddress
                    ? styles.inputError
                    : styles.inputFirst
                }
                name="storeAddress"
                id="storeAddress"
                type="text"
                placeholder="Store adress"
                autoComplete="off"
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
            {!inclCities && formik.touched.storeAddress && (
              <h3 className={styles.errorEmail}>Нет такого города в списке</h3>
            )}
            {formik.touched.storeAddress && formik.errors.storeAddress && (
              <p className={styles.errorEmail}>{formik.errors.storeAddress}</p>
            )}
          </li>
        </ul>
        <div className={styles.containerAgree}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={formik.isValid && checkedCheckbox ? true : false}
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
            deliveryMethod: "Store pickup",
          }}
          formik={formik}
          setType={setType}
          setErrorCheckbox={setErrorCheckbox}
          radio={radio}
          incl={incl}
          inclCities={inclCities}
        />
      </div>
    </>
  );
};

export default StorePickup;
