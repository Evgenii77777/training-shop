import React from "react";
import styles from "../Stars.module.css";
import Grey from "../../../assets/png/star 5.png";

const ZeroStars = () => {
  return (
    <ul className={styles.list}>
      <li>
        <img src={Grey} alt="Grey Star" />
      </li>
      <li>
        <img src={Grey} alt="Grey Star" />
      </li>
      <li>
        <img src={Grey} alt="Grey Star" />
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

export default ZeroStars;
