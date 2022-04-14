import React, { useState, useEffect } from "react";
import styles from "./Delivery.module.css";
import PickupPost from "./pickupPost/PickupPost";
import Express from "./express/Express";
import StorePickup from "./storePickup/StorePickup";
import { fetchCountry } from "../../../redux/thunk/asincThunk/getCountryThunk";
import { useDispatch } from "react-redux";

const Delivery = ({
  type,
  setType,
  total,
  formik,
  formikExpress,
  formikStore,
  setValues,
  valuesNew,
}) => {
  let [radio, setRadio] = useState("1");
  let [errorCheckbox, setErrorCheckbox] = useState(false);
  const dispatch = useDispatch();

  const handleChangeRadio = (id) => {
    setRadio((radio = id));
    if (radio === "3") {
      dispatch(fetchCountry());
    }
  };

  useEffect(() => {
    const radioInput = document.getElementById("1");
    return (radioInput.checked = true);
  }, []);

  return (
    <>
      <h4 className={styles.title}>
        Choose the method of delivery of the items
      </h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <input
              id="1"
              type="radio"
              name="radio"
              onClick={(e) => handleChangeRadio(e.target.id)}
            />
            <label htmlFor="1"></label>
          </div>
          <p className={styles.itemText}>Pickup from post offices</p>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <input
              id="2"
              type="radio"
              name="radio"
              onClick={(e) => handleChangeRadio(e.target.id)}
            />
            <label htmlFor="2"></label>
          </div>
          <p className={styles.itemText}>Express delivery</p>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <input
              id="3"
              type="radio"
              name="radio"
              onClick={(e) => handleChangeRadio(e.target.id)}
            />
            <label htmlFor="3"></label>
          </div>

          <p className={styles.itemText}>Store pickup</p>
        </li>
      </ul>

      {radio === "1" && (
        <PickupPost
          type={type}
          setType={setType}
          total={total}
          formik={formik}
          errorCheckbox={errorCheckbox}
          setErrorCheckbox={setErrorCheckbox}
        />
      )}
      {radio === "2" && (
        <Express
          type={type}
          setType={setType}
          total={total}
          errorCheckbox={errorCheckbox}
          setErrorCheckbox={setErrorCheckbox}
          formik={formikExpress}
        />
      )}
      {radio === "3" && (
        <StorePickup
          type={type}
          setType={setType}
          total={total}
          errorCheckbox={errorCheckbox}
          setErrorCheckbox={setErrorCheckbox}
          formik={formikStore}
          setValues={setValues}
          valuesNew={valuesNew}
        />
      )}
    </>
  );
};

export default Delivery;
