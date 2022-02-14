import React from "react";
import styles from "./TopBar.module.css";
import LeftSide from "./leftSide/LeftSide";
import InternetGroup from "../internetGroup/InternetGroup";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.superContainer}>
        <LeftSide />
        <InternetGroup />
      </div>
    </div>
  );
};

export default TopBar;
