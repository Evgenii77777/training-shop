import React from "react";
import styles from "./Specifications.module.css";
import P1 from "../../assets/png/pp1.png";
import P2 from "../../assets/png/pp2.png";
import P3 from "../../assets/png/pp3.png";
import P4 from "../../assets/png/pp4.png";
import P5 from "../../assets/png/pp5.png";
import P6 from "../../assets/png/pp6.png";
import P7 from "../../assets/png/pp7.png";
import Color from "./color/Color";
import Size from "./size/Size";
import Price from "./price/Price";
import Ask from "./ask/Ask";
import Additional from "./additional/Additional";
import Review from "./review/Review";

const Specifications = () => {
  return (
    <div>
      <Color />
      <Size />
      <Price />
      <Ask />
      <div className={styles.payment}>
        <img src={P1} alt="stripe" />
        <img src={P2} alt="aes" />
        <img src={P3} alt="pay pal" />
        <img src={P4} alt="visa" />
        <img src={P5} alt="master card" />
        <img src={P6} alt="discover" />
        <img src={P7} alt="american express" />
      </div>
      <div className={styles.description}>
        <h4 className={styles.descriptionTitle}>DESCRIPTION</h4>
      </div>
      <Additional />
      <Review />
    </div>
  );
};

export default Specifications;
