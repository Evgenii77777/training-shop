import React from "react";
import Cur from "../../../assets/png/наклон.png";
import styles from "../Basket.module.css";

const NavBarBasket = ({ type }) => {
  return (
    <div className={styles.notEmpty}>
      <p
        id="Item in Cart"
        className={type === "Item in Cart" ? styles.firstBtn : styles.textBar}
        name="navBar"
      >
        Item in Cart
      </p>
      <img src={Cur} alt="item" />
      <p
        className={type === "Delivery Info" ? styles.firstBtn : styles.textBar}
        id="Delivery Info"
        name="navBar"
      >
        Delivery Info
      </p>
      <img src={Cur} alt="item" />
      <p
        className={type === "Payment" ? styles.firstBtn : styles.textBar}
        id="Payment"
        name="navBar"
      >
        Payment
      </p>
    </div>
  );
};

export default NavBarBasket;
