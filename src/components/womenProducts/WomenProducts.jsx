import React from "react";
import styles from "./WomenProducts.module.css";
import CardsItem from "../cardsItem/CardsItem";
import { PRODUCTS } from "../../object/Products";

const WomensProducts = () => {
  return (
    <div className={styles.superContainer} data-test-id={`clothes-women`}>
      <ul className={styles.list}>
        {PRODUCTS.women.map((item) => (
          <li className={styles.item} key={item.id}>
            <CardsItem card={item} productType="women" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WomensProducts;
