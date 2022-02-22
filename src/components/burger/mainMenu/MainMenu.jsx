import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../Burger";
import HamburgerBtn from "../hamburgerBtn/HamburgerBtn";
import useOnClickOutside from "../onClickOutside/OnClickOutside";
import { SideMenu } from "../sideMenu/SideMenu";

const Navbar = styled.div`
  display: flex;
  position: absolute;
  left: calc(50% - 20px);
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  top: 41px;
  margin: 0px;
  align-items: center;
  color: rgb(248, 248, 248);
  flex-direction: row;
  justify-content: flex-start;
  z-index: 500;
  @media (max-width: 500px) {
    left: 10px;
    top: 86px;
  }
  @media (max-width: 387px) {
    top: 97px;
  }
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div ref={node}>
      <Navbar>
        <HamburgerBtn />
      </Navbar>
      <SideMenu />
    </div>
  );
};

export default MainMenu;
