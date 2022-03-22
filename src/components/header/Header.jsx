import React from "react";
import Basket from "../basket/Basket";
import Menu from "../menu/Menu";
import TopBar from "../topBar/TopBar";
import styles from "./Header.module.css";
import { Watch } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoading = useSelector((state) => state.items.loading);
  const isLoadings = useSelector((state) => state.item.loading);

  return (
    <header className={styles.header} data-test-id="header">
      {isLoading && (
        <div className={styles.loader} data-test-id="loader">
          <div className={styles.spinner}>
            <Watch height="100" width="100" color="grey" ariaLabel="loading" />
          </div>
        </div>
      )}
      {isLoadings && (
        <div className={styles.loader} data-test-id="loader">
          <div className={styles.spinner}>
            <Watch height="100" width="100" color="grey" ariaLabel="loading" />
          </div>
        </div>
      )}
      <Basket />
      <TopBar />
      <Menu />
    </header>
  );
};

export default Header;
