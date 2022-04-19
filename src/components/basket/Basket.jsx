import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";
import NavBarBasket from "./navBarBasket/NavBarBasket";
import ErrorPayment from "./errorPayment/ErrorPayment";
import FulfieldPayment from "./fulfieldPayment/FulfieldPayment";
import ItemCart from "./itemCart/ItemCart";

import { validationsSchema } from "../validation/validation-pickup";
import { validationsSchemaExpress } from "../validation/validation-express";
import { validationsSchemaStore } from "../validation/validation-store";
import { validationsSchemaPayment } from "../validation/validation-payment";
import { validationsSchemaPaymentPaypal } from "../validation/validation-paypal";
import { initial } from "../validation/initial-values/initial-state";

import {
  toggleBasket,
  toggleBasketSide,
} from "../../redux/btnBasket/btnBasket-actions";
import { getOpen, getIsEmpty } from "../../redux/btnBasket/btnBasket-selectors";
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
  const [valuesNew, setValues] = useState(initial.initialStore);
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const [checkedCheckboxExpress, setCheckedCheckboxExpress] = useState(false);
  const [checkedCheckboxStore, setCheckedCheckboxStore] = useState(false);
  const [radio, setRadio] = useState("");
  const open = useSelector(getOpen);
  const isEmpty = useSelector(getIsEmpty);
  const status = useSelector((state) => state.cart.status);
  const backSide = function () {
    const body = document.querySelector("body");
    if (open) {
      body.classList.add("no__scroll");
    } else {
      body.classList.remove("no__scroll");
    }
  };
  useEffect(() => {
    backSide();
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

  const formik = useFormik({
    initialValues: initial.initialPickup,
    validationSchema: validationsSchema,
  });

  const formikExpress = useFormik({
    initialValues: initial.initialExpress,
    validationSchema: validationsSchemaExpress,
  });

  const formikStore = useFormik({
    initialValues: valuesNew,
    handleChange: (event) => {
      setValues((prevValues) => ({
        ...prevValues,
        [event.target.name]: event.target.value,
      }));
      if (valuesNew.storeAddress.length >= 2) {
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
    initialValues: initial.initialPayment,
    validationSchema: validationsSchemaPayment,
  });

  const formikPaymentPaypal = useFormik({
    initialValues: initial.initialPaypal,
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
                    setCheckedCheckbox={setCheckedCheckbox}
                    setCheckedCheckboxExpress={setCheckedCheckboxExpress}
                    setCheckedCheckboxStore={setCheckedCheckboxStore}
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
                    setCheckedCheckbox={setCheckedCheckbox}
                    setCheckedCheckboxExpress={setCheckedCheckboxExpress}
                    setCheckedCheckboxStore={setCheckedCheckboxStore}
                  />
                )}
                {!status && (
                  <div className={styles.deliveryContainer}>
                    <NavBarBasket type={type} />
                    {type === "Item in Cart" && (
                      <ItemCart
                        setType={setType}
                        total={total}
                        isEmpty={isEmpty}
                        newProducts={newProducts}
                      />
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
                        checkedCheckbox={checkedCheckbox}
                        setCheckedCheckbox={setCheckedCheckbox}
                        checkedCheckboxExpress={checkedCheckboxExpress}
                        setCheckedCheckboxExpress={setCheckedCheckboxExpress}
                        checkedCheckboxStore={checkedCheckboxStore}
                        setCheckedCheckboxStore={setCheckedCheckboxStore}
                        radio={radio}
                        setRadio={setRadio}
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
                        radio={radio}
                        setRadio={setRadio}
                        setCheckedCheckbox={setCheckedCheckbox}
                        setCheckedCheckboxExpress={setCheckedCheckboxExpress}
                        setCheckedCheckboxStore={setCheckedCheckboxStore}
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
