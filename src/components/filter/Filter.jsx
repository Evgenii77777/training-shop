import React, { useState } from "react";
import styles from "./Filter.module.css";
import Adjust from "../../assets/svg/adjustments 1.svg";
import View from "../../assets/svg/view-list 1.svg";
import Grid from "../../assets/svg/view-grid 1.svg";
import FilterBlock from "./filterBlock/FilterBlock";

const Filter = ({ PRODUCTS }) => {
  const [activeState, setActiveState] = useState(true);

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.wrapper}>
          <button
            className={styles.btnAdjust}
            onClick={() => setActiveState(!activeState)}
          >
            <img src={Adjust} alt="Adjust" />
          </button>
          <h3 className={styles.title}>Filter</h3>
        </div>
        <div className={styles.container}>
          <button className={styles.btnView}>
            <img src={View} alt="View" />
          </button>
          <button className={styles.btnGrid}>
            <img src={Grid} alt="Grid" />
          </button>
        </div>
      </div>
      <div className={styles.filter__block}>
        <FilterBlock active={activeState} PRODUCTS={PRODUCTS} />
      </div>
    </>
  );
};

export default Filter;
