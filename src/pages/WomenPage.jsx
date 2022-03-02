import React from "react";
import AllProductsWomen from "../components/allProductsPage/AllProductsWomen";
import Loading from "../components/loading/Loading";
import TopClothes from "../components/topClothes/TopClothes";
import { PRODUCTS } from "../object/Products";

const WomenPage = ({ name = "Women" }) => {
  return (
    <section data-test-id={`products-page-women`}>
      <TopClothes name={name} />

      <AllProductsWomen PRODUCTS={PRODUCTS} />
      <Loading />
    </section>
  );
};

export default WomenPage;
