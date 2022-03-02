import React from "react";
import styles from "./WomenProducts.module.css";
import CardsItem from "../cardsItem/CardsItem";
import { PRODUCTS } from "../../object/Products";

const WomensProducts = ({ btn }) => {
  return (
    <>
      <div className={styles.superContainer}>
        <ul className={styles.list}>
          {PRODUCTS.women
            .filter((el) => el.particulars[btn])
            .map((item) => (
              <li className={styles.item} key={item.id}>
                <CardsItem card={item} productType="women" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default WomensProducts;
