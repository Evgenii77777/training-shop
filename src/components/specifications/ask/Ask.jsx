import React from "react";
import styles from "./Ask.module.css";

const Ask = () => {
  return (
    <div className={styles.ask}>
      <ul className={styles.askList}>
        <li className={styles.one}>
          <p>Shipping & Delivery</p>
        </li>
        <li className={styles.two}>
          <p>Returns & Exchanges</p>
        </li>
        <li className={styles.three}>
          <p>Ask a question</p>
        </li>
      </ul>

      {/* <p className={styles.text}>Guaranted Safe Checkout</p> */}
    </div>
  );
};

export default Ask;
