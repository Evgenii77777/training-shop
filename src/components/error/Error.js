import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Ошибка получения данных</h2>
    </div>
  );
};

export default Error;
