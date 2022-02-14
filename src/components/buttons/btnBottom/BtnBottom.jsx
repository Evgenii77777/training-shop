import React from "react";
import styles from "../btnTop/BtnTop.module.css";
import Bottom from "../../../assets/svg/Group 10.svg";

const BtnBottom = () => {
  return (
    <button className={styles.btn}>
      <img className={styles.btn} src={Bottom} alt="Bottom" />
    </button>
  );
};

export default BtnBottom;
