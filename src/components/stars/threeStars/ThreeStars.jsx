import React from "react";
import styles from "../Stars.module.css";
import Gold from "../../../assets/png/star 1.png";
import Grey from "../../../assets/png/star 5.png";

const ThreeStars = () => {
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
        <img src={Grey} alt="Grey Star" />
      </li>
      <li>
        <img src={Grey} alt="Grey Star" />
      </li>
    </ul>
  );
};

export default ThreeStars;
