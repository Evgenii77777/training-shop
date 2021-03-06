import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link className={styles.first} to="/" data-test-id="header-logo-link">
        CleverShop
      </Link>
    </>
  );
};

export default Logo;
