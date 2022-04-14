import React from "react";
import Cur from "../../../assets/png/наклон.png";
import styles from "../Basket.module.css";

const NavBarBasket = () => {
  return (
    <div className={styles.notEmpty}>
      <p id="Item in Cart" className="textBar" name="navBar">
        Item in Cart
      </p>
      <img src={Cur} alt="item" />
      <p className="textBar" id="Delivery Info" name="navBar">
        Delivery Info
      </p>
      <img src={Cur} alt="item" />
      <p className="textBar" id="Payment" name="navBar">
        Payment
      </p>
    </div>
  );
};

export default NavBarBasket;
