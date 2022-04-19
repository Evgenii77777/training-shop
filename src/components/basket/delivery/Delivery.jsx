import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PickupPost from "./pickupPost/PickupPost";
import Express from "./express/Express";
import StorePickup from "./storePickup/StorePickup";
import { fetchCountry } from "../../../redux/thunk/asincThunk/getCountryThunk";
import styles from "./Delivery.module.css";

const Delivery = ({
  setType,
  total,
  formik,
  formikExpress,
  formikStore,
  setValues,
  valuesNew,
  checkedCheckbox,
  setCheckedCheckbox,
  checkedCheckboxExpress,
  setCheckedCheckboxExpress,
  checkedCheckboxStore,
  setCheckedCheckboxStore,
  radio,
  setRadio,
}) => {
  const dispatch = useDispatch();

  const handleChangeRadio = (id) => {
    setRadio(id);
  };
  useEffect(() => {
    if (radio === "") {
      setRadio("1");
    }
  }, [radio, setRadio]);
  useEffect(() => {
    if (radio === "3") {
      dispatch(fetchCountry());
    }
  }, [dispatch, radio]);

  return (
    <>
      <h4 className={styles.title}>
        Choose the method of delivery of the items
      </h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label htmlFor="1" className={styles.radio}>
              <input
                checked={radio === "1" ? true : false}
                id="1"
                type="radio"
                name="radio"
                className={styles.input}
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
              <div className={styles.radio__text}>Pickup from post offices</div>
            </label>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label htmlFor="2" className={styles.radio}>
              <input
                id="2"
                checked={radio === "2" ? true : false}
                type="radio"
                name="radio"
                className={styles.input}
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
              <div className={styles.radio__text}>Express delivery</div>
            </label>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.form_radio}>
            <label htmlFor="3" className={styles.radio}>
              <input
                id="3"
                checked={radio === "3" ? true : false}
                type="radio"
                name="radio"
                className={styles.input}
                onClick={(e) => handleChangeRadio(e.target.id)}
              />
              <div className={styles.radio__text}>Store pickup</div>
            </label>
          </div>
        </li>
      </ul>

      {radio === "1" && (
        <PickupPost
          radio={radio}
          setType={setType}
          total={total}
          formik={formik}
          checkedCheckbox={checkedCheckbox}
          setCheckedCheckbox={setCheckedCheckbox}
        />
      )}
      {radio === "2" && (
        <Express
          radio={radio}
          setType={setType}
          total={total}
          formik={formikExpress}
          checkedCheckboxExpress={checkedCheckboxExpress}
          setCheckedCheckboxExpress={setCheckedCheckboxExpress}
        />
      )}
      {radio === "3" && (
        <StorePickup
          radio={radio}
          setType={setType}
          total={total}
          formik={formikStore}
          setValues={setValues}
          valuesNew={valuesNew}
          checkedCheckboxStore={checkedCheckboxStore}
          setCheckedCheckboxStore={setCheckedCheckboxStore}
        />
      )}
    </>
  );
};

export default Delivery;
