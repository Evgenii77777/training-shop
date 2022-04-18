import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  deleteItem,
  increment,
} from "../../../redux/btnBasket/btnBasket-actions";
import { addProducts } from "../../../redux/order/order-actions";
import styles from "../Basket.module.css";
import Total from "../total/Total";

const ItemCart = ({ setType, total, isEmpty, newProducts }) => {
  const dispatch = useDispatch();
  const onHandleDelivery = (newProducts) => {
    dispatch(addProducts(newProducts));
    setType("Delivery Info");
  };
  return (
    <>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {isEmpty.map((el, index) => (
            <li key={index} data-test-id="cart-card">
              <div>
                <img
                  src={el.color[1]}
                  alt="images"
                  className={styles.notEmptyImg}
                />
              </div>
              <div className={styles.notEmptySpanContainer}>
                <span className={styles.name}>{el.name}</span>
                <span className={styles.color}>{el.color[0]},</span>
                <span className={styles.size}>{el.size}</span>
                <div className={styles.notEmptyBtnWrapper}>
                  <div className={styles.notEmptyBtnContainer}>
                    <button
                      id={el.newId}
                      onClick={(e) => dispatch(decrement(e.target.id))}
                      data-test-id="minus-product"
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      id={el.newId}
                      onClick={(e) => dispatch(increment(e.target.id))}
                      data-test-id="plus-product"
                    >
                      +
                    </button>
                  </div>
                  <span id="price" className={styles.price}>
                    $ {(el.price * el.quantity).toFixed(2)}
                  </span>
                  <button
                    className={styles.trash}
                    id={el.newId}
                    onClick={(e) => dispatch(deleteItem(e.target.id))}
                    data-test-id="remove-product"
                  ></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.notEmptyWrapper}>
        <Total total={total} />
        <div className={styles.btnWrapper}>
          <button
            className={styles.btnWrapperFirst}
            onClick={() => onHandleDelivery(newProducts)}
          >
            Further
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
