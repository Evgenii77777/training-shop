import React from "react";
import Basket from "../basket/Basket";
import Menu from "../menu/Menu";
import TopBar from "../topBar/TopBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} data-test-id="header">
      <Basket />
      <TopBar />
      <Menu />
    </header>
  );
};

export default Header;
