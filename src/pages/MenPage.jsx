import React from "react";
import AllProductsMen from "../components/allProductsPage/AllProductsMen";
import Loading from "../components/loading/Loading";
import TopClothes from "../components/topClothes/TopClothes";

const MenPage = ({ name = "Men" }) => {
  return (
    <section data-test-id={`products-page-men`}>
      <TopClothes name={name} />
      <AllProductsMen />
      <Loading />
    </section>
  );
};

export default MenPage;
