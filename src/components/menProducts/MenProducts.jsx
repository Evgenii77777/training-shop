import React from "react";
import styles from "../womenProducts/WomenProducts.module.css";
import CardsItem from "../cardsItem/CardsItem";
import { PRODUCTS } from "../../object/Products";

const MenProducts = ({ btn }) => {
  return (
    <div className={styles.superContainer} data-test-id={`clothes-men`}>
      <ul className={styles.list}>
        {PRODUCTS.men
          .filter((el) => el.particulars[btn])
          .map((item) => (
            <li className={styles.item} key={item.id}>
              <CardsItem card={item} productType="men" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenProducts;
