import React from "react";
import BtnLeft from "../buttons/leftRigth/BtnLeft";
import BtnRigth from "../buttons/leftRigth/BtnRigth";
import Stars from "../stars/Stars";
import styles from "./RelatedProducts.module.css";
import I1 from "../../assets/img/i1.jpg";
import I2 from "../../assets/img/i2.jpg";
import I3 from "../../assets/img/i3.jpg";
import I4 from "../../assets/img/i4.jpg";

const RelatedProducts = () => {
  return (
    <div className={styles.related}>
      <div className={styles.relatedWrapper}>
        <h2 className={styles.relatedTitle}>RELATED PRODUCTS</h2>
        <div>
          <BtnLeft />
          <BtnRigth />
        </div>
      </div>
      <ul className={styles.relatedList}>
        <li>
          <img src={I1} alt="Image1" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
        <li>
          <img src={I2} alt="Image2" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <span className={styles.darkSpan}>$ 60.00</span>
            <Stars />
          </div>
        </li>
        <li>
          <img src={I3} alt="Image3" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>

            <Stars />
          </div>
        </li>
        <li>
          <img src={I4} alt="Image4" />
          <p>Women's tracksuit Q109</p>
          <div className={styles.relatedContainer}>
            <span>$ 30.00</span>
            <Stars />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RelatedProducts;
