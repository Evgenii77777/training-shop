import React from "react";
import { useLocation } from "react-router";
import Foto from "../components/foto/Foto";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Specifications from "../components/specifications/Specifications";
import TopClothesPage from "../components/topClothes/topClothesPage.jsx/TopClothesPage";
import styles from "./ProductPage.module.css";

const ProductPage = ({ path = "Women's tracksuit Q109" }) => {
  const location = useLocation();
  let name = "";
  const namePath = function () {
    if (location.pathname.split("/").includes("women")) {
      return (name = "Women");
    }
    return (name = "Men");
  };
  const newName = name.toLocaleLowerCase();
  namePath();
  return (
    <section data-test-id={`product-page-${newName}`}>
      <TopClothesPage path={path} name={name} />
      <div className={styles.superContainer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Foto />
          </li>
          <li className={styles.item}>
            <Specifications />
          </li>
        </ul>
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductPage;
