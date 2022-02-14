import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import GroupItem from "../groupItem/GroupItem";
import Logo from "../logo/Logo";
import mainRoutes from "../../routes/MainRoutes";

const Menu = () => {
  return (
    <nav className={styles.nav} data-test-id="menu">
      <div className={styles.wrapper}>
        <Logo />
        <ul className={styles.list}>
          {mainRoutes.map((item) => (
            <li key={item.id}>
              <Link
                className={styles.link}
                to={`/${item.path}`}
                data-test-id={`menu-link-${item.path}`}
                exact={item.exact}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <GroupItem />
      </div>
    </nav>
  );
};

export default Menu;
