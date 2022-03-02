import React from "react";
import styles from "./Additional.module.css";

const Additional = ({ card }) => {
  const unicColor = [...new Set(card.images.map((el) => el.color))];
  const unicSize = [...new Set(card.sizes.map((el) => el))];

  return (
    <div className={styles.additional}>
      <h4 className={styles.additionalTitle}>ADDITIONAL INFORMATION</h4>
      <p className={styles.additionalText}>
        Color:
        <span className={styles.additionalSpan}>{unicColor.join(",")}</span>
      </p>

      <p className={styles.additionalText}>
        Size:
        <span className={styles.additionalSpan}>{unicSize.join(",")}</span>
      </p>

      <p className={styles.additionalText}>
        Material:<span className={styles.additionalSpan}> {card.material}</span>
      </p>
    </div>
  );
};

export default Additional;
