import React from "react";
import styles from "./Review.module.css";
import Gold from "../../../assets/png/star 1.png";

const Review = () => {
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
          <span className={styles.reviewSpan}>2 Reviews</span>
        </div>
        <p className={styles.reviewText}>Write a review</p>
      </div>
      <div>
        <ul className={styles.smallList}>
          <li>
            <div className={styles.reviewSmallListWraooer}>
              <p className={styles.reviewName}>Oleh Chabanov</p>
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
            <p className={styles.reviewPar}>
              On the other hand, we denounce with righteous indignation and like
              men who are so beguiled and demoralized by the charms of pleasure
              of the moment
            </p>
          </li>
          <li>
            <div className={styles.reviewSmallListWraooer}>
              <p className={styles.reviewName}>ShAmAn design</p>
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
            <p className={styles.reviewPar}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
