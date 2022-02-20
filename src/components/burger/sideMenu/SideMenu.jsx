import React, { useContext } from "react";
import { MenuContext } from "../Burger";
import styled, { css } from "styled-components";
import mainRoutes from "../../../routes/MainRoutes";
import styles from "../../menu/Menu.module.css";
import { Link } from "react-router-dom";

const Menu = styled.nav`
  position: absolute;
  top: 98px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin-top: 0px;
  padding-left: 20px;
  padding-right: 0px;
  align-items: stretch;
  background-color: white;
  opacity: 0.7;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.li`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Menu data-test-id="burger-menu" className={styles.nav} open={isMenuOpen}>
      {children}
    </Menu>
  );
};
SideMenu.defaultProps = {
  children: (
    <>
      <ul className={styles.listBurger}>
        {mainRoutes.map((item) => (
          <MenuLink className={styles.item} key={item.id}>
            <Link
              className={styles.link}
              to={`/${item.path}`}
              data-test-id={`menu-link-${item.path}`}
              exact={item.exact}
            >
              {item.name}
            </Link>
          </MenuLink>
        ))}
      </ul>
    </>
  ),
};
