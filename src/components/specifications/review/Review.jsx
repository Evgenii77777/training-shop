import React from "react";
import styles from "./Review.module.css";
import Gold from "../../../assets/png/star 1.png";

const Review = ({ reviews }) => {
  return (
    <div className={styles.review}>
      <h4 className={styles.reviewTitle}>reviews</h4>
      <div className={styles.reviewWrapper}>
        <div className={styles.reviewWrapperList}>
          <ul className={styles.reviewList}>
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
          <span className={styles.reviewSpan}>{reviews.length} Reviews</span>
        </div>
        <p className={styles.reviewText}>Write a review</p>
      </div>
      <div>
        <ul className={styles.smallList}>
          {reviews.map((item) => (
            <li key={item.name}>
              <div className={styles.reviewSmallListWraooer}>
                <p className={styles.reviewName}>{item.name}</p>
                <ul className={styles.reviewListSmall}>
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
              </div>
              <p className={styles.reviewPar}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
