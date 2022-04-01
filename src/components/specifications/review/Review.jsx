import React, { useState } from "react";
import styles from "./Review.module.css";
import OneStar from "../../stars/oneStar/OneStar";
import TwoStars from "../../stars/twoStar/TwoStars";
import ZeroStars from "../../stars/zeroStar/ZeroStars";
import ThreeStars from "../../stars/threeStars/ThreeStars";
import FourStars from "../../stars/fourStars/FourStars";
import FiveStars from "../../stars/fiveStars/FiveStars";
import ReviewForm from "../../reviewForm/ReviewForm";

const Review = ({ reviews }) => {
  let sumReviews = 0;
  reviews.forEach((el) => {
    return (sumReviews += el.rating);
  });
  sumReviews = Math.round(sumReviews / reviews.length);
  let [form, setForm] = useState(false);
  const backSide = function () {
    let body = document.querySelector("body");
    if (form) {
      window.scrollTo(0, 0);
      body.classList.add("no__scroll");
    } else {
      body.classList.remove("no__scroll");
    }
  };
  backSide();

  return (
    <div className={styles.review}>
      <h4 className={styles.reviewTitle}>reviews</h4>
      <div className={styles.reviewWrapper}>
        <div className={styles.reviewWrapperList}>
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
          <span className={styles.reviewSpan}>{reviews.length} Reviews</span>
        </div>
        <button
          className={styles.btn}
          onClick={() => setForm(!form)}
          data-test-id="review-button"
          id="btn"
        >
          Write a review
        </button>
      </div>
      {form && <ReviewForm form={form} setForm={setForm} />}
      <div>
        <ul className={styles.smallList}>
          {reviews.map((item) => (
            <li key={item.id} className={styles.smallListItem}>
              <div className={styles.reviewSmallListWraooer}>
                <p className={styles.reviewName}>{item.name}</p>
                {item.rating === 1 ? (
                  <OneStar />
                ) : "" || item.rating === 2 ? (
                  <TwoStars />
                ) : "" || item.rating === 3 ? (
                  <ThreeStars />
                ) : "" || item.rating === 4 ? (
                  <FourStars />
                ) : "" || item.rating === 5 ? (
                  <FiveStars />
                ) : (
                  <ZeroStars />
                )}
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
