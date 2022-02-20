import React from "react";
import { useLocation, useParams } from "react-router";
import Foto from "../components/foto/Foto";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Specifications from "../components/specifications/Specifications";
import TopClothesPage from "../components/topClothes/topClothesPage.jsx/TopClothesPage";
import styles from "./ProductPage.module.css";
import { PRODUCTS } from "../object/Products";

const ProductPage = () => {
  const location = useLocation();
  const par = useParams();
  let name = "";
  const namePath = function () {
    if (location.pathname.split("/").includes("women")) {
      return (name = "women");
    }
    return (name = "men");
  };
  namePath();

  let card = [];
  PRODUCTS[name].filter((item) => {
    if (item.id === par.id) {
      return (card = item);
    }
  });
  return (
    <section data-test-id={`product-page-${card.category}`}>
      <TopClothesPage
        name={card.name}
        category={card.category}
        reviews={card.reviews}
      />
      <div className={styles.superContainer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Foto card={card} />
          </li>
          <li className={styles.item}>
            <Specifications card={card} />
          </li>
        </ul>
        <RelatedProducts card={card} />
      </div>
    </section>
  );
};

export default ProductPage;
