import React from "react";
import { Link, NavLink } from "react-router-dom";
import InternetGroup from "../internetGroup/InternetGroup";
import styles from "./Footer.module.css";
import { paymentSystems } from "../../object/PaymentSystems";
import { categories, infornation } from "../../routes/FooterRoutes";

const Footer = () => {
  return (
    <footer data-test-id="footer">
      <div className={styles.wrapper}>
        <div className={styles.superContainer}>
          <div className={styles.wrapperTop}>
            <h2 className={styles.title}>BE IN TOUCH WITH US:</h2>
            <label>
              <input
                className={styles.label}
                type="text"
                name="name"
                placeholder="Enter your email"
              />
            </label>
            <button className={styles.input}>Join Us</button>
          </div>
          <InternetGroup className={styles.group} />
        </div>
      </div>

      <div className={styles.superContainerList}>
        <ul className={styles.list}>
          <li>
            <h4>Categories</h4>
            {categories.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.path}`}
                data-test-id={`footer-nav-link-${item.path}`}
              >
                {item.name}
              </NavLink>
            ))}
          </li>
          <li>
            <h4>Infomation</h4>
            {infornation.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.path}`}
                data-test-id={`footer-nav-link-${item.path}`}
              >
                {item.name}
              </NavLink>
            ))}
          </li>
          <li>
            <h4>Useful links</h4>
            <NavLink to="/">Terms & Conditions</NavLink>
            <NavLink to="/">Returns & Exchanges</NavLink>
            <NavLink to="/">Shipping & Delivery</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>

          <li>
            <h4>CONTACT US</h4>
            <p className={styles.two}>Belarus, Gomel, Lange 17</p>
            <p className={styles.one}>+375 29 100 20 30</p>
            <p className={styles.three}>All week 24/7</p>
            <p className={styles.four}>info@clevertec.ru</p>
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
        <div className={styles.superContainer}>
          <p>Copyright © 2032 all rights reserved</p>
          <ul className={styles.listWrap}>
            {paymentSystems.map((item) => (
              <li className={styles.item} key={item.id}>
                <img src={item.img} alt={item.name} />
              </li>
            ))}
          </ul>
          <Link to="/">Clevertec.ru/training</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
