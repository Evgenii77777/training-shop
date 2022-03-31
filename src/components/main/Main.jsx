import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Main_Clothes_Block_Menu } from "../../object/MainBlockMenu";
import { fetchAllProducts } from "../../redux/thunk/asincThunk/getAllProductsThunk";
import Advantage from "../advantage/Advantage";
import Blog from "../blog/Blog";
import Form from "../form/Form";
import MenProducts from "../menProducts/MenProducts";
import Poster from "../poster/Poster";
import Swip from "../swiper/Swip";
import WomensProducts from "../womenProducts/WomenProducts";
import styles from "./Main.module.css";

const Main = () => {
  let [btn, setBtn] = useState("isNewArrivals");
  let [btnMens, setBtnMen] = useState("isNewArrivals");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
    const itemWomen = document.querySelectorAll(".linksWomen");
    const itemMen = document.querySelectorAll(".linksMen");
    itemWomen[0].classList.add("linksWomenActive");
    itemMen[0].classList.add("linksWomenActive");
  }, [dispatch]);

  const onHandleWomen = function (e) {
    const items = document.querySelectorAll(".linksWomen");
    const target = e.currentTarget;
    Array.from(items).forEach((item) => {
      item.classList.remove("linksWomenActive");
    });
    target.classList.add("linksWomenActive");
  };
  const onHandleMen = function (e) {
    const items = document.querySelectorAll(".linksMen");
    const target = e.currentTarget;
    Array.from(items).forEach((item) => {
      item.classList.remove("linksWomenActive");
    });
    target.classList.add("linksWomenActive");
  };

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
          <div data-test-id={`clothes-women`}>
            <div className={styles.womenWrapper}>
              <h3 className={styles.womenTitle}>WOMEN’S</h3>
              <ul className={styles.listBtn}>
                {Main_Clothes_Block_Menu.map((el) => (
                  <li
                    key={el.name}
                    data-test-id={`clothes-women-${el.particularName}`}
                    onClick={() => setBtn((btn = el.particularName))}
                    className={styles.linkBtn}
                  >
                    <button className="linksWomen" onClick={onHandleWomen}>
                      {el.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <WomensProducts btn={btn} allProducts={items} />
          </div>
          <Link to="women" className={styles.seeAll}>
            See All
          </Link>
        </div>
      </section>
      <section className={styles.menContainer}>
        <div className={styles.superContainer}>
          <div data-test-id={`clothes-men`}>
            <div className={styles.womenWrapper}>
              <h3 className={styles.womenTitle}>MEN’S</h3>
              <ul className={styles.listBtn}>
                {Main_Clothes_Block_Menu.map((el) => (
                  <li
                    key={el.name}
                    data-test-id={`clothes-men-${el.particularName}`}
                    onClick={() => setBtnMen((btnMens = el.particularName))}
                    className={styles.linkBtn}
                  >
                    <button className="linksMen" onClick={onHandleMen}>
                      {el.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <MenProducts btn={btnMens} allProducts={items} />
          </div>
          <Link to="men" className={styles.seeAll}>
            See All
          </Link>
        </div>
      </section>
      <Poster />
      <Form />
      <Blog />
    </section>
  );
};

export default Main;
