import React from "react";
import { Link } from "react-router-dom";
import FiveStars from "../stars/fiveStars/FiveStars";
import FourStars from "../stars/fourStars/FourStars";
import OneStar from "../stars/oneStar/OneStar";
import ThreeStars from "../stars/threeStars/ThreeStars";
import TwoStars from "../stars/twoStar/TwoStars";
import ZeroStars from "../stars/zeroStar/ZeroStars";
import styles from "../womenProducts/WomenProducts.module.css";

const CardsItem = ({
  card: { id, name, price, images, discount },
  productType,
  card,
}) => {
  let sumReviews = 0;
  card.reviews.forEach((el) => {
    return (sumReviews += el.rating);
  });

  sumReviews = Math.round(sumReviews / card.reviews.length);
  return (
    <Link
      to={`/${productType}/${id}`}
      data-test-id={`clothes-card-${productType}`}
    >
      {discount && (
        <div className={styles.sale}>
          <p>{discount}</p>
        </div>
      )}
      <img
        src={`https://training.cleverland.by/shop${images[0]?.url}`}
        alt="clothes"
      />
      <h4>{name}</h4>
      <div className={styles.wrapper}>
        <span>$ {price}</span>
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
      </div>
    </Link>
  );
};

export default CardsItem;
