import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Foto from "../components/foto/Foto";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Specifications from "../components/specifications/Specifications";
import TopClothesPage from "../components/topClothes/topClothesPage.jsx/TopClothesPage";
import styles from "./ProductPage.module.css";
// import { PRODUCTS } from "../object/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/thunk/getProduct";
import Error from "../components/error/Error";

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

  const dispatch = useDispatch();
  const product = useSelector((state) => state.item.product);

  useEffect(() => {
    dispatch(fetchProduct(par.id));
  }, [dispatch, par.id]);

  let card = [];

  if (product.length !== 0) {
    card = product[0];
  }

  const isError = useSelector((state) => state.item.product);

  return (
    <section data-test-id={`product-page-${card.category}`}>
      {isError && <Error />}
      {product.length !== 0 && (
        <>
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
            <RelatedProducts card={card} name={name} />
          </div>
        </>
      )}
    </section>
  );
};

export default ProductPage;
