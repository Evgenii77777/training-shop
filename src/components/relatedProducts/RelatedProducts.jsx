import React from "react";
import styles from "./RelatedProducts.module.css";
import SwiperRelated from "../swiper/swiperRelated/SwiperRelated";

const RelatedProducts = ({ name, card, allProducts }) => {
  return (
    <div className={styles.related}>
      <div className={styles.relatedWrapper}>
        <h2 className={styles.relatedTitle}>RELATED PRODUCTS</h2>
      </div>
      <SwiperRelated name={name} card={card} allProducts={allProducts} />
    </div>
  );
};

export default RelatedProducts;
