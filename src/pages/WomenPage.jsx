import React from "react";
import Filter from "../components/filter/Filter";
import Loading from "../components/loading/Loading";
import TopClothes from "../components/topClothes/TopClothes";
import WomensProducts from "../components/womenProducts/WomenProducts";

const WomenPage = ({ name = "Women" }) => {
  return (
    <section data-test-id={`clothes-women`}>
      <TopClothes name={name} />
      <Filter />
      <WomensProducts />
      <Loading />
    </section>
  );
};

export default WomenPage;
