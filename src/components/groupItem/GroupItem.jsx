import React from "react";
import styles from "./GroupItem.module.css";
import Search from "../../assets/svg/search 1.svg";
import Globe from "../../assets/svg/globe 1.svg";
import User from "../../assets/svg/user 1.svg";
import Shopping from "../../assets/svg/shopping-bag 2.svg";

const GroupItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={Search} alt="search" />
        <img className={styles.logo} src={Globe} alt="globe" />
        <img className={styles.logo} src={User} alt="user" />
        <img className={styles.logo} src={Shopping} alt="shopping" />
        <div className={styles.containerText}>
          <p className={styles.text}>2</p>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
