import React from "react";
import Left from "../../../assets/svg/Group 8.svg";
import styles from "./BtnLeft.module.css";

const BtnRigth = () => {
  return (
    <button className={styles.btn}>
      <img className={styles.btn} src={Left} alt="left" />
    </button>
  );
};

export default BtnRigth;
