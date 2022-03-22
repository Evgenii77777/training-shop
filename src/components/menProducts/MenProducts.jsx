import React from "react";
import styles from "../womenProducts/WomenProducts.module.css";
import CardsItem from "../cardsItem/CardsItem";

const MenProducts = ({ btn, allProducts }) => {
  return (
    <div className={styles.superContainer}>
      {allProducts.length !== 0 && (
        <ul className={styles.list}>
          {allProducts.men
            .filter((el) => el.particulars[btn])
            .map((item) => (
              <li className={styles.item} key={item.id}>
                <CardsItem card={item} productType="men" />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MenProducts;
