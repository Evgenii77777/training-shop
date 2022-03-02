import React from "react";

const FilterPrice = () => {
  return (
    <div>
      <h3>Price</h3>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>$1200+</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>$600-$1200</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>$300-$600</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>$150-$300</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span> $50-$150</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>$7-$50</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default FilterPrice;
