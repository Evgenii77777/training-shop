import React from "react";
import styles from "./Form.module.css";
import M from "../../assets/img/bgm.png";
import W from "../../assets/img/bgw.png";

const Form = () => {
  return (
    <section className={styles.container}>
      <img className={styles.women} src={W} alt="women" />
      <img className={styles.men} src={M} alt="men" />
      <form className={styles.form}>
        <span>Special Offer</span>
        <h2>
          Subscribe And <span className={styles.sale}> Get 10% Off</span>
        </h2>
        <label>
          <input
            className={styles.label}
            type="text"
            name="name"
            placeholder="Enter your text"
          />
        </label>
        <input className={styles.input} type="submit" value="Subscribe" />
      </form>
    </section>
  );
};

export default Form;
