import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";
import NavBarBasket from "./navBarBasket/NavBarBasket";
import Total from "./total/Total";
import ErrorPayment from "./errorPayment/ErrorPayment";
import FulfieldPayment from "./fulfieldPayment/FulfieldPayment";

import { validationsSchema } from "../validation/validation-pickup";
import { validationsSchemaExpress } from "../validation/validation-express";
import { validationsSchemaStore } from "../validation/validation-store";
import { validationsSchemaPayment } from "../validation/validation-payment";
import { validationsSchemaPaymentPaypal } from "../validation/validation-paypal";

import {
  decrement,
  deleteItem,
  increment,
  toggleBasket,
  toggleBasketSide,
} from "../../redux/btnBasket/btnBasket-actions";
import { getOpen, getIsEmpty } from "../../redux/btnBasket/btnBasket-selectors";
import { addProducts } from "../../redux/order/order-actions";
import { postCity } from "../../redux/thunk/asincThunk/postDeliveryCity";
import styles from "./Basket.module.css";

const Basket = () => {
  let total = 0;
  let newProducts = {};
  const dispatch = useDispatch();
  const [type, setType] = useState("Item in Cart");
  const [error, setError] = useState(false);
  const [fulfield, setFulfield] = useState(false);
  const [cash, setCash] = useState("cardVisa");
  const open = useSelector(getOpen);
  const isEmpty = useSelector(getIsEmpty);
  const status = useSelector((state) => state.cart.status);

  const [valuesNew, setValues] = useState({
    phone: "",
    email: "",
    storeAddress: "",
    country: "",
  });

  isEmpty.map(
    (el) =>
      (newProducts = {
        name: el.name,
        size: el.size,
        color: el.color[0],
        quantity: el.quantity,
      })
  );

  isEmpty.forEach((el) => (total = el.price * el.quantity + total));

  const backSide = function () {
    const body = document.querySelector("body");
    if (open) {
      body.classList.add("no__scroll");
    } else {
      body.classList.remove("no__scroll");
    }
  };
  backSide();

  const onHandleDelivery = (newProducts) => {
    dispatch(addProducts(newProducts));
    setType("Delivery Info");
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
      house: "",
      apartment: "",
      postcode: "",
    },

    validationSchema: validationsSchema,
  });

  const formikExpress = useFormik({
    initialValues: {
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
      house: "",
      apartment: "",
    },

    validationSchema: validationsSchemaExpress,
  });

  const formikStore = useFormik({
    initialValues: valuesNew,

    handleChange: (event) => {
      setValues((prevValues) => ({
        ...prevValues,
        [event.target.name]: event.target.value,
      }));
      if (valuesNew.storeAddress.length >= 3) {
        dispatch(
          postCity({
            city: valuesNew.storeAddress,
            country: formik.values.country,
          })
        );
      }
    },
    handleChangeCountry: (event) => {
      setValues((prevValues) => ({
        ...prevValues,
        [event.target.name]: event.target.value,
      }));
      formik.values.country = event.target.value;
    },

    validationSchema: validationsSchemaStore,
  });

  const formikPayment = useFormik({
    initialValues: {
      card: "",
      cardDate: "",
      cardCVV: "",
    },

    validationSchema: validationsSchemaPayment,
  });

  const formikPaymentPaypal = useFormik({
    initialValues: {
      cashEmail: "",
    },

    validationSchema: validationsSchemaPaymentPaypal,
  });

  const closeCard = () => {
    formik.resetForm();
    formikStore.resetForm();
    formikExpress.resetForm();
    formikPayment.resetForm();
    formikPaymentPaypal.resetForm();
    dispatch(toggleBasket(open));
    setValues({
      phone: "",
      email: "",
      storeAddress: "",
      country: "",
    });
  };

  return (
    <div className={open ? styles.openBasketSide : null}>
      <div
        className={open ? styles.openBasket : null}
        id="backSide"
        onClick={(e) => dispatch(toggleBasketSide(e.target.id))}
      >
        <div
          className={open ? styles.container : styles.open}
          data-test-id="cart"
        >
          <div className={styles.wrapper}>
            <h3 className={styles.title}>Shopping Cart</h3>
            <button
              className={styles.cross}
              onClick={() => closeCard()}
            ></button>
          </div>
          <div className={styles.basket}>
            {isEmpty.length === 0 ? (
              <div>
                <h2 className={styles.text}>Sorry, your cart is empty</h2>
                <button className={styles.btn} onClick={() => closeCard()}>
                  back to shopping
                </button>
              </div>
            ) : (
              <div className={styles.notEmptyBasket}>
                {status === "error" && (
                  <ErrorPayment
                    setType={setType}
                    error={error}
                    setError={setError}
                    formik={formik}
                    formikExpress={formikExpress}
                    formikPayment={formikPayment}
                    formikStore={formikStore}
                    formikPaymentPaypal={formikPaymentPaypal}
                    setValues={setValues}
                  />
                )}
                {status === "resolved" && (
                  <FulfieldPayment
                    open={open}
                    toggleBasket={toggleBasket}
                    dispatch={dispatch}
                    fulfield={fulfield}
                    setFulfield={setFulfield}
                    setType={setType}
                    formik={formik}
                    formikExpress={formikExpress}
                    formikPayment={formikPayment}
                    formikStore={formikStore}
                    formikPaymentPaypal={formikPaymentPaypal}
                    setValues={setValues}
                    valuesNew={valuesNew}
                  />
                )}
                {!status && (
                  <div className={styles.deliveryContainer}>
                    <NavBarBasket type={type} />
                    {type === "Item in Cart" && (
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
                                  <span className={styles.color}>
                                    {el.color[0]},
                                  </span>
                                  <span className={styles.size}>{el.size}</span>
                                  <div className={styles.notEmptyBtnWrapper}>
                                    <div
                                      className={styles.notEmptyBtnContainer}
                                    >
                                      <button
                                        id={el.newId}
                                        onClick={(e) =>
                                          dispatch(decrement(e.target.id))
                                        }
                                        data-test-id="minus-product"
                                      >
                                        -
                                      </button>
                                      <span>{el.quantity}</span>
                                      <button
                                        id={el.newId}
                                        onClick={(e) =>
                                          dispatch(increment(e.target.id))
                                        }
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
                                      onClick={(e) =>
                                        dispatch(deleteItem(e.target.id))
                                      }
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
                    )}
                    {type === "Delivery Info" && (
                      <Delivery
                        setType={setType}
                        total={total}
                        formik={formik}
                        formikStore={formikStore}
                        formikExpress={formikExpress}
                        setValues={setValues}
                        valuesNew={valuesNew}
                      />
                    )}
                    {type === "Payment" && (
                      <Payment
                        setType={setType}
                        total={total}
                        formik={formikPayment}
                        formikPaypal={formikPaymentPaypal}
                        cash={cash}
                        setCash={setCash}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
