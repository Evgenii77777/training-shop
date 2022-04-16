import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PickupPost from "./pickupPost/PickupPost";
import Express from "./express/Express";
import StorePickup from "./storePickup/StorePickup";
import { fetchCountry } from "../../../redux/thunk/asincThunk/getCountryThunk";
import styles from "./Delivery.module.css";

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
  const [radio, setRadio] = useState("1");
  const [errorCheckbox, setErrorCheckbox] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (radio === "3") {
      dispatch(fetchCountry());
    }
  }, [dispatch, radio]);

  const handleChangeRadio = (id) => {
    setRadio(id);
  };

  return (
    <>
      <h4 className={styles.title}>
        Choose the method of delivery of the items
      </h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label
              htmlFor="1"
              className={radio === "1" ? styles.checked : styles.noChecked}
              checked
            >
              <input
                id="1"
                type="radio"
                name="radio"
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
            </label>
          </div>
          <p className={styles.itemText}>Pickup from post offices</p>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label
              htmlFor="2"
              className={radio === "2" ? styles.checked : styles.noChecked}
            >
              <input
                id="2"
                type="radio"
                name="radio"
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
            </label>
          </div>
          <p className={styles.itemText}>Express delivery</p>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label
              htmlFor="3"
              className={radio === "3" ? styles.checked : styles.noChecked}
            >
              <input
                id="3"
                type="radio"
                name="radio"
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
            </label>
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
