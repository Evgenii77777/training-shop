import React, { useState } from "react";
import styles from "./Delivery.module.css";
import PickupPost from "./pickupPost/PickupPost";
import Express from "./express/Express";
import StorePickup from "./storePickup/StorePickup";

const Delivery = () => {
  let [radio, setRadio] = useState("1");
  const handleChangeRadio = (id) => {
    setRadio((radio = id));
  };
  return (
    <>
      <h4 className={styles.title}>
        Choose the method of delivery of the items
      </h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <input
            onClick={(e) => handleChangeRadio(e.target.id)}
            id="1"
            name="radioBtn"
            type="radio"
          />
          <p className={styles.itemText}>Pickup from post offices</p>
        </li>
        <li className={styles.item}>
          <input
            onClick={(e) => handleChangeRadio(e.target.id)}
            name="radioBtn"
            id="2"
            type="radio"
          />
          <p className={styles.itemText}>Express delivery</p>
        </li>
        <li className={styles.item}>
          <input
            onClick={(e) => handleChangeRadio(e.target.id)}
            name="radioBtn"
            id="3"
            type="radio"
          />
          <p className={styles.itemText}>Store pickup</p>
        </li>
      </ul>
      {radio === "1" && <PickupPost />}
      {radio === "2" && <Express />}
      {radio === "3" && <StorePickup />}
      <div className={styles.containerAgree}>
        <input type="checkbox" name="" id="" />
        <p className={styles.textAgree}>
          I agree to the processing of my personal information
        </p>
      </div>
    </>
  );
};

export default Delivery;
