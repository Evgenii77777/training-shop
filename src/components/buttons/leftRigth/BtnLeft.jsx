import React from "react";
import Left from "../../../assets/svg/Group 7.svg";
import styles from "./BtnLeft.module.css";

const BtnLeft = () => {
  return (
    <button className={styles.btn}>
      <img className={styles.btn} src={Left} alt="left" />
    </button>
  );
};

export default BtnLeft;
