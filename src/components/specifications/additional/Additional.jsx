import React from "react";
import styles from "./Additional.module.css";

const Additional = ({ card }) => {
  return (
    <div className={styles.additional}>
      <h4 className={styles.additionalTitle}>ADDITIONAL INFORMATION</h4>
      <p className={styles.additionalText}>
        Color:
        {card.images.map((item) => (
          <span key={item.color} className={styles.additionalSpan}>
            {item.color},
          </span>
        ))}
      </p>

      <p className={styles.additionalText}>
        Size:
        {card.sizes.map((item) => (
          <span key={item} className={styles.additionalSpan}>
            {item[0].split(" ")[0]},
          </span>
        ))}
      </p>

      <p className={styles.additionalText}>
        Material:<span className={styles.additionalSpan}> {card.material}</span>
      </p>
    </div>
  );
};

export default Additional;
