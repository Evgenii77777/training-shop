import React from "react";
import styles from "../womenProducts/WomenProducts.module.css";
import { menProducts } from "../../object/MenProductsObj";
import Stars from "../stars/Stars";
import { Link } from "react-router-dom";

const MenProducts = () => {
  return (
    <div className={styles.superContainer} data-test-id={`clothes-men`}>
      <ul className={styles.list}>
        {menProducts.map((item) => (
          <li className={styles.item} key={item.id}>
            <Link
              data-test-id={`clothes-card-${item.producttype}`}
              path={item.producttype}
              to={`/${item.producttype}/${item.id}`}
              producttype={item.producttype}
            >
              <img src={item.img} alt={item.name} />
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

export default MenProducts;
