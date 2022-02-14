import React from "react";
import styles from "./BtnTop.module.css";
import Top from "../../../assets/svg/Group 9.svg";

const BtnTop = () => {
  return (
    <button className={styles.btn}>
      <img className={styles.btn} src={Top} alt="top" />
    </button>
  );
};

export default BtnTop;
