import React from "react";
import styles from "./ProductStatistics.module.css";
import OneStar from "../stars/oneStar/OneStar";
import TwoStars from "../stars/twoStar/TwoStars";
import ThreeStars from "../stars/threeStars/ThreeStars";
import FourStars from "../stars/fourStars/FourStars";
import FiveStars from "../stars/fiveStars/FiveStars";
import ZeroStars from "../stars/zeroStar/ZeroStars";

const ProductStatistics = ({ reviews }) => {
  let sumReviews = 0;
  reviews.forEach((el) => {
    return (sumReviews += el.rating);
  });
  sumReviews = Math.round(sumReviews / reviews.length);
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        {sumReviews === 1 ? (
          <OneStar />
        ) : "" || sumReviews === 2 ? (
          <TwoStars />
        ) : "" || sumReviews === 3 ? (
          <ThreeStars />
        ) : "" || sumReviews === 4 ? (
          <FourStars />
        ) : "" || sumReviews === 5 ? (
          <FiveStars />
        ) : (
          <ZeroStars />
        )}
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
