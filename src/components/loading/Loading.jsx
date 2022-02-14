import React from "react";
import styles from "./Loading.module.css";
import Load from "../../assets/svg/Square-Loading 1.svg";

const Loading = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btnLoad}>
        <img src={Load} alt="Load" />
      </button>
    </div>
  );
};

export default Loading;
