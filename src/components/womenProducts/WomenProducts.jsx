import React from "react";
import styles from "./WomenProducts.module.css";
import CardsItem from "../cardsItem/CardsItem";

const WomensProducts = ({ btn, allProducts }) => {
  return (
    <>
      <div className={styles.superContainer}>
        {allProducts.length !== 0 && (
          <ul className={styles.list}>
            {allProducts.women
              .filter((el) => el.particulars[btn])
              .map((item) => (
                <li className={styles.item} key={item.id}>
                  <CardsItem card={item} productType="women" />
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default WomensProducts;
