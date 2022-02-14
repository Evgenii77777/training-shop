import React from "react";
import Menu from "../menu/Menu";
import TopBar from "../topBar/TopBar";

const Header = () => {
  return (
    <header data-test-id="header">
      <TopBar />
      <Menu />
    </header>
  );
};

export default Header;
