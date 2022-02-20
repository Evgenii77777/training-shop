import React from "react";
import { Link } from "react-router-dom";
import Advantage from "../advantage/Advantage";
import Blog from "../blog/Blog";
import SeeAll from "../buttons/seeAll/SeeAll";
import Form from "../form/Form";
import GroupsLinks from "../groupsLinks/GroupsLinks";
import MenProducts from "../menProducts/MenProducts";
import Poster from "../poster/Poster";
import Swip from "../swiper/Swip";
import WomensProducts from "../womenProducts/WomenProducts";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.superContainer}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Swip />
          </div>
          <div>
            <ul className={styles.list}>
              <li className={styles.women}>
                <Link to="/women">Women</Link>
              </li>
              <li className={styles.men}>
                <Link to="/men">Men</Link>
              </li>
            </ul>
            <div className={styles.acc}>
              <Link to="/accessories">Accessories</Link>
            </div>
          </div>
        </div>
        <Advantage />
      </div>
      <section className={styles.womenContainer}>
        <div className={styles.superContainer}>
          <div className={styles.womenWrapper}>
            <h3 className={styles.womenTitle}>WOMEN’S</h3>
            <GroupsLinks />
          </div>
          <WomensProducts />
          <SeeAll />
        </div>
      </section>
      <section className={styles.menContainer}>
        <div className={styles.superContainer}>
          <div className={styles.womenWrapper}>
            <h3 className={styles.womenTitle}>MEN’S</h3>
            <GroupsLinks />
          </div>
          <MenProducts />
          <SeeAll />
        </div>
      </section>
      <Poster />
      <Form />
      <Blog />
    </section>
  );
};

export default Main;
