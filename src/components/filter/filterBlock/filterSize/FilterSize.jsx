import React, { useState } from "react";

const FilterSize = ({ cl, PRODUCTS }) => {
  let arr = [];
  PRODUCTS.women.map((el) => arr.push(...el.sizes));
  let unicArr = [...new Set(arr)];

  let [size, setSize] = useState([]);
  const onHandleChange = (e) => {
    if (e.target.checked) {
      size = [...size, e.target];
      setSize(size);
    } else {
      size = size.filter((el) => el.id !== e.target.id);
      setSize(size);
    }
  };
  let sizeArr = [];
  let newArr = [...new Set(size)];
  newArr.map((el) => sizeArr.push(el.name));
  console.log(sizeArr);
  return (
    <div className={cl}>
      <h3>Size</h3>
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

export default FilterSize;
