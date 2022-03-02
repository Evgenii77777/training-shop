import React, { useState } from "react";
import { PRODUCTS } from "../../object/Products";
import CardsItem from "../cardsItem/CardsItem";
import styles from "../womenProducts/WomenProducts.module.css";
import style from "../filter/filterBlock/FilterBlock.module.css";
import Adjust from "../../assets/svg/adjustments 1.svg";
import View from "../../assets/svg/view-list 1.svg";
import Grid from "../../assets/svg/view-grid 1.svg";
import Close from "../../assets/svg/x 1.svg";

const AllProductsWomen = () => {
  const [activeState, setActiveState] = useState(true);
  let [color, setColor] = useState([]);
  let [size, setSize] = useState([]);
  let [brand, setBrand] = useState([]);
  let [price, setPrice] = useState([]);

  let arrColor = [];
  PRODUCTS.women.map((el) => el.images.map((i) => arrColor.push(i.color)));
  let unicArrolor = [...new Set(arrColor)];
  const onHandleChangeColor = (e) => {
    if (e.target.checked) {
      color = [...color, e.target];
      setColor(color);
    } else {
      color = color.filter((el) => el.id !== e.target.id);
      setColor(color);
    }
  };
  let colorArr = [];
  let newArrColor = [...new Set(color)];
  newArrColor.map((el) => colorArr.push(el.name));

  let arrSize = [];
  PRODUCTS.women.map((el) => arrSize.push(...el.sizes));
  let unicArrSize = [...new Set(arrSize)];
  const onHandleChangeSize = (e) => {
    if (e.target.checked) {
      size = [...size, e.target];
      setSize(size);
    } else {
      size = size.filter((el) => el.id !== e.target.id);
      setSize(size);
    }
  };
  let sizeArr = [];
  let newArrSize = [...new Set(size)];
  newArrSize.map((el) => sizeArr.push(el.name));

  let arrBrand = [];
  PRODUCTS.women.map((el) => arrBrand.push(el.brand));
  let unicArrBrand = [...new Set(arrBrand)];
  const onHandleChangeBrand = (e) => {
    if (e.target.checked) {
      brand = [...brand, e.target];
      setBrand(brand);
    } else {
      brand = brand.filter((el) => el.id !== e.target.id);
      setBrand(brand);
    }
  };
  let brandArr = [];
  let newArrBrand = [...new Set(brand)];
  newArrBrand.map((el) => brandArr.push(el.name));

  let arrPrice = [];
  PRODUCTS.women.map((el) => arrPrice.push(el.price));
  const onHandleChangePrice = (e) => {
    if (e.target.checked) {
      price = [...price, e.target];
      setPrice(price);
    } else {
      price = price.filter((el) => el.id !== e.target.id);
      setPrice(price);
    }
  };
  let priceArr = [];
  let newArrPrice = [...new Set(price)];
  newArrPrice.map((el) => priceArr.push(el.name));
  let numb = [];
  if (priceArr.length !== 0) {
    numb.push(...priceArr.map((el) => el.split(" ").map((e) => +e)));
  }

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.filterWrapper}>
          <button
            className={styles.btnAdjust}
            onClick={() => setActiveState(!activeState)}
            data-test-id="filter-button"
          >
            <img src={activeState ? Adjust : Close} alt="Adjust" />
          </button>
          <h3 className={styles.filterTitle}>Filter</h3>
        </div>
        <div className={styles.filterContainer}>
          <button className={styles.btnView}>
            <img src={View} alt="View" />
          </button>
          <button className={styles.btnGrid}>
            <img src={Grid} alt="Grid" />
          </button>
        </div>
      </div>
      <div className={styles.filter__block}>
        <div
          className={activeState ? style.activeBtn : style.container}
          data-test-id="filters-women"
        >
          <div className={style.searchWrapper}>
            <div className={style.wrapper} data-test-id="filters-color">
              <h3>Color</h3>
              <ul>
                {unicArrolor.map((el, index) => (
                  <li key={el}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={onHandleChangeColor}
                        name={el}
                        id={index + 1}
                        data-test-id={`filter-color-${el}`}
                      />
                      <span>{el}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.wrapper} data-test-id="filters-size">
              <h3>Size</h3>
              <ul>
                {unicArrSize.map((el, index) => (
                  <li key={el}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={onHandleChangeSize}
                        name={el}
                        id={index + 1}
                        data-test-id={`filter-size-${el}`}
                      />
                      <span>{el}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.searchWrapper}>
            <div className={style.wrapper} data-test-id="filters-brand">
              <h3>Brand</h3>
              <ul>
                {unicArrBrand.map((el, index) => (
                  <li key={el}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={onHandleChangeBrand}
                        name={el}
                        id={index + 1}
                        data-test-id={`filter-brand-${el}`}
                      />
                      <span>{el}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.wrapper}>
              <h3>Price</h3>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="600 1200"
                      id={1}
                      onChange={onHandleChangePrice}
                    />
                    <span>$600-$1200</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="300 600"
                      id={2}
                      onChange={onHandleChangePrice}
                    />
                    <span>$300-$600</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="150 300"
                      id={3}
                      onChange={onHandleChangePrice}
                    />
                    <span>$150-$300</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="50 150"
                      id={4}
                      onChange={onHandleChangePrice}
                    />
                    <span> $50-$150</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="7 50"
                      id={5}
                      onChange={onHandleChangePrice}
                    />
                    <span>$7-$50</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.superContainer} data-test-id={`clothes-women`}>
        <ul className={styles.list}>
          {priceArr.length !== 0 &&
            brandArr.length === 0 &&
            sizeArr.length === 0 &&
            colorArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        numb.some((e) => el.price >= e[0] && el.price <= e[1])
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter((el) =>
                    numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length === 0 &&
            colorArr.length === 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) => brandArr.includes(el.brand))
                        .length
                    }{" "}
                    items Found
                  </h2>
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter((el) => brandArr.includes(el.brand))
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {sizeArr.length !== 0 &&
            brandArr.length === 0 &&
            colorArr.length === 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        sizeArr.some((e) => el.sizes.includes(e))
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter((el) => sizeArr.some((e) => el.sizes.includes(e)))
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {sizeArr.length === 0 &&
            brandArr.length === 0 &&
            colorArr.length !== 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some((e) => colorArr.includes(e.color))
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter((el) =>
                    el.images.some((e) => colorArr.includes(e.color))
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length !== 0 &&
            colorArr.length === 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            brandArr.includes(el.brand) &&
                            sizeArr.some((e) => el.sizes.includes(e))
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      brandArr.includes(el.brand) &&
                      sizeArr.some((e) => el.sizes.includes(e))
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length === 0 &&
            colorArr.length !== 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            brandArr.includes(el.brand) &&
                            el.images.some((e) => colorArr.includes(e.color))
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      brandArr.includes(el.brand) &&
                      el.images.some((e) => colorArr.includes(e.color))
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length === 0 &&
            sizeArr.length !== 0 &&
            colorArr.length !== 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            sizeArr.some((e) => el.sizes.includes(e))
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      sizeArr.some((e) => el.sizes.includes(e))
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length === 0 &&
            sizeArr.length === 0 &&
            colorArr.length !== 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            )
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length === 0 &&
            sizeArr.length !== 0 &&
            colorArr.length === 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            ) && sizeArr.some((e) => el.sizes.includes(e))
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      numb.some((e) => el.price >= e[0] && el.price <= e[1]) &&
                      sizeArr.some((e) => el.sizes.includes(e))
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length === 0 &&
            colorArr.length === 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            ) && brandArr.includes(el.brand)
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      numb.some((e) => el.price >= e[0] && el.price <= e[1]) &&
                      brandArr.includes(el.brand)
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length !== 0 &&
            colorArr.length !== 0 &&
            priceArr.length === 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            sizeArr.some((e) => el.sizes.includes(e)) &&
                            brandArr.includes(el.brand)
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      sizeArr.some((e) => el.sizes.includes(e)) &&
                      brandArr.includes(el.brand)
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length !== 0 &&
            colorArr.length === 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            sizeArr.some((e) => el.sizes.includes(e)) &&
                            brandArr.includes(el.brand) &&
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            )
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>

                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      sizeArr.some((e) => el.sizes.includes(e)) &&
                      brandArr.includes(el.brand) &&
                      numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length === 0 &&
            colorArr.length !== 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            brandArr.includes(el.brand) &&
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            )
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      brandArr.includes(el.brand) &&
                      numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length === 0 &&
            sizeArr.length !== 0 &&
            colorArr.length !== 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            sizeArr.some((e) => el.sizes.includes(e)) &&
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            )
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      sizeArr.some((e) => el.sizes.includes(e)) &&
                      numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length !== 0 &&
            sizeArr.length !== 0 &&
            colorArr.length !== 0 &&
            priceArr.length !== 0 && (
              <>
                <li className={styles.foundItem}>
                  <h2 className={styles.foundTitle}>
                    {
                      PRODUCTS.women.filter((el) =>
                        el.images.some(
                          (e) =>
                            el.images.some((e) => colorArr.includes(e.color)) &&
                            sizeArr.some((e) => el.sizes.includes(e)) &&
                            brandArr.includes(el.brand) &&
                            numb.some(
                              (e) => el.price >= e[0] && el.price <= e[1]
                            )
                        )
                      ).length
                    }{" "}
                    items Found
                  </h2>
                  {colorArr.map((el) => (
                    <p className={styles.foundPrice}>Color: {el}</p>
                  ))}
                  {sizeArr.map((el) => (
                    <p className={styles.foundPrice}>Size: {el}</p>
                  ))}
                  {brandArr.map((el) => (
                    <p className={styles.foundPrice}>Brand: {el}</p>
                  ))}
                  {numb.map((el) => (
                    <p className={styles.foundPrice}>
                      Price:${el[0]}-${el[1]}
                    </p>
                  ))}
                </li>
                {PRODUCTS.women
                  .filter(
                    (el) =>
                      el.images.some((e) => colorArr.includes(e.color)) &&
                      sizeArr.some((e) => el.sizes.includes(e)) &&
                      brandArr.includes(el.brand) &&
                      numb.some((e) => el.price >= e[0] && el.price <= e[1])
                  )
                  .map((item) => (
                    <li className={styles.item} key={item.id}>
                      <CardsItem card={item} productType="women" />
                    </li>
                  ))}
              </>
            )}
          {brandArr.length === 0 &&
            sizeArr.length === 0 &&
            colorArr.length === 0 &&
            priceArr.length === 0 && (
              <>
                {PRODUCTS.women.map((item) => (
                  <li className={styles.item} key={item.id}>
                    <CardsItem card={item} productType="women" />
                  </li>
                ))}
              </>
            )}
        </ul>
      </div>
    </>
  );
};

export default AllProductsWomen;
