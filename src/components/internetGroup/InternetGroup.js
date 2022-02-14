import React from "react";
import styles from "./InternetGroup.module.css";
import Facebook from "../../assets/svg/facebook 1.svg";
import Twitter from "../../assets/svg/logo-twitter 1.svg";
import Instagram from "../../assets/svg/instagram 1.svg";
import Pinters from "../../assets/svg/logo-pinterest 1.svg";

const InternetGroup = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Facebook} alt="facebook" />
      <img className={styles.logo} src={Twitter} alt="twitter" />
      <img className={styles.logo} src={Instagram} alt="instagram" />
      <img className={styles.logo} src={Pinters} alt="pinters" />
    </div>
  );
};

export default InternetGroup;
