import React from "react";
import Filter from "../components/filter/Filter";
import Loading from "../components/loading/Loading";
import MenProducts from "../components/menProducts/MenProducts";
import TopClothes from "../components/topClothes/TopClothes";

const MenPage = ({ name = "Men" }) => {
  return (
    <section data-test-id={`clothes-men`}>
      <TopClothes name={name} />
      <Filter />
      <MenProducts />
      <Loading />
    </section>
  );
};

export default MenPage;
