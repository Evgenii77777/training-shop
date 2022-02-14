import React from "react";
import styles from "./WomenProducts.module.css";
import { womenProducts } from "../../object/WomenProductsObj";
import Stars from "../stars/Stars";
import { Link } from "react-router-dom";

const WomensProducts = () => {
  return (
    <div className={styles.superContainer}>
      <ul className={styles.list}>
        {womenProducts.map((item) => (
          <li
            className={styles.item}
            key={item.id}
            data-test-id={`product-page-${item.producttype}`}
          >
            <Link
              data-test-id={`clothes-card-${item.producttype}`}
              path={item.producttype}
              to={`/${item.producttype}/${item.id}`}
              producttype={item.producttype}
            >
              <img src={item.img} alt={item.name} />
              {item.sale && (
                <div className={styles.sale}>
                  <p>{item.sale}</p>
                </div>
              )}
              <h4>{item.name}</h4>
              <div className={styles.wrapper}>
                <span>{item.price}</span>

                <Stars />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WomensProducts;
