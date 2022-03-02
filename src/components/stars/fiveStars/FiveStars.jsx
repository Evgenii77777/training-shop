import React from "react";
import styles from "../Stars.module.css";
import Gold from "../../../assets/png/star 1.png";

const FiveStars = () => {
  return (
    <ul className={styles.list}>
      <li>
        <img src={Gold} alt="Gold Star" />
      </li>
      <li>
        <img src={Gold} alt="Gold Star" />
      </li>
      <li>
        <img src={Gold} alt="Gold Star" />
      </li>
      <li>
        <img src={Gold} alt="Gold Star" />
      </li>
      <li>
        <img src={Gold} alt="Gold Star" />
      </li>
    </ul>
  );
};

export default FiveStars;
