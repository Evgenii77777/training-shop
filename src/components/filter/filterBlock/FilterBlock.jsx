import React from "react";
import styles from "./FilterBlock.module.css";
import FilterBrand from "./filterBrand/FilterBrand";
import FilterColor from "./filterColor/FilterColor";
import FilterPrice from "./filterPrice/FilterPrice";
import FilterSize from "./filterSize/FilterSize";

const FilterBlock = ({ active, PRODUCTS }) => {
  return (
    <div className={active ? styles.activeBtn : styles.container}>
      <FilterColor cl={styles.wrapper} PRODUCTS={PRODUCTS} />
      <FilterSize cl={styles.wrapper} PRODUCTS={PRODUCTS} />
      <FilterBrand cl={styles.wrapper} PRODUCTS={PRODUCTS} />
      <FilterPrice PRODUCTS={PRODUCTS} />
    </div>
  );
};

export default FilterBlock;
