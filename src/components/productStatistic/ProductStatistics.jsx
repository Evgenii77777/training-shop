import React from "react";
import styles from "./ProductStatistics.module.css";
import Gold from "../../assets/png/star 1.png";

const ProductStatistics = ({ reviews }) => {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <img src={Gold} alt="Gold Star" />
          </li>
          <li>
            <img src={Gold} alt="Gold Star" />
          </li>
          <li>
            <img src={Gold} alt="Gold Star" />
          </li>
          <li>
            <img src={Gold} alt="Gold Star" />
          </li>
          <li>
            <img src={Gold} alt="Gold Star" />
          </li>
        </ul>
        <p className={styles.reviewText}>{reviews.length} Reviews</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.newText}>
          SKU: <span>777</span>
        </p>
        <p className={styles.text}>
          Availability: <span>In Stock</span>
        </p>
      </div>
    </div>
  );
};

export default ProductStatistics;
