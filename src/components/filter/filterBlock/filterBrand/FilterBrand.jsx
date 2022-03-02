import React, { useState } from "react";

const FilterBrand = ({ cl, PRODUCTS }) => {
  let arr = [];
  PRODUCTS.women.map((el) => arr.push(el.brand));
  let unicArr = [...new Set(arr)];

  let [brand, setBrand] = useState([]);
  const onHandleChange = (e) => {
    if (e.target.checked) {
      brand = [...brand, e.target];
      setBrand(brand);
    } else {
      brand = brand.filter((el) => el.id !== e.target.id);
      setBrand(brand);
    }
  };
  let brandArr = [];
  let newArr = [...new Set(brand)];
  newArr.map((el) => brandArr.push(el.name));
  console.log(brandArr);
  return (
    <div className={cl}>
      <h3>Brand</h3>
      <ul>
        {unicArr.map((el, index) => (
          <li key={el}>
            <label>
              <input
                type="checkbox"
                onChange={onHandleChange}
                name={el}
                id={index + 1}
              />
              <span>{el}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBrand;
