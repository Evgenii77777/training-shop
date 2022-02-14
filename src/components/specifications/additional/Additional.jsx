import React from "react";
import styles from "./Additional.module.css";

const Additional = () => {
  return (
    <div className={styles.additional}>
      <h4 className={styles.additionalTitle}>ADDITIONAL INFORMATION</h4>
      <p className={styles.additionalText}>
        Color:
        <span className={styles.additionalSpan}>Blue, White, Black, Grey</span>
      </p>

      <p className={styles.additionalText}>
        Size:<span className={styles.additionalSpan}>XS, S, M, L</span>
      </p>

      <p className={styles.additionalText}>
        Material:<span className={styles.additionalSpan}> 100% Polyester</span>
      </p>
    </div>
  );
};

export default Additional;
