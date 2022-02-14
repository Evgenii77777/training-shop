import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./GroupsLinks.module.css";

const GroupsLinks = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink className={styles.link} to="/women">
          NEW ARRIVALS
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/women">
          SPECIALS
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/women">
          BESTSELLERS
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/women">
          MOST VIEWED
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/women">
          FEATURED PRODUCTS
        </NavLink>
      </li>
    </ul>
  );
};

export default GroupsLinks;
