import React, { useState } from "react";
const FilterColor = ({ cl, PRODUCTS }) => {
  let arr = [];
  PRODUCTS.women.map((el) => el.images.map((i) => arr.push(i.color)));
  let unicArr = [...new Set(arr)];
  let [color, setColor] = useState([]);
  const onHandleChange = (e) => {
    if (e.target.checked) {
      color = [...color, e.target];
      setColor(color);
    } else {
      color = color.filter((el) => el.id !== e.target.id);
      setColor(color);
    }
  };
  let colorArr = [];
  let newArr = [...new Set(color)];
  newArr.map((el) => colorArr.push(el.name));
  console.log("color", colorArr);

  return (
    <div className={cl}>
      <h3>Color</h3>
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

export default FilterColor;
