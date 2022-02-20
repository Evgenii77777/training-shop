import React from "react";
import { Link } from "react-router-dom";
import Stars from "../stars/Stars";
import styles from "../womenProducts/WomenProducts.module.css";

const CardsItem = ({
  card: { id, name, price, images, rating, discount },
  productType,
}) => {
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

        <Stars rating={rating} />
      </div>
    </Link>
  );
};

export default CardsItem;
