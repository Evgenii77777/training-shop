import React, { useState } from "react";
import styles from "./Basket.module.css";
import {
  decrement,
  deleteItem,
  increment,
  toggleBasket,
  toggleBasketSide,
} from "../../redux/btnBasket/btnBasket-actions";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, getIsEmpty } from "../../redux/btnBasket/btnBasket-selectors";
import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";
import NavBarBasket from "./navBarBasket/NavBarBasket";
import Total from "./total/Total";
import ErrorPayment from "./errorPayment/ErrorPayment";
import { addProducts } from "../../redux/order/order-actions";
import FulfieldPayment from "./fulfieldPayment/FulfieldPayment";
import { useFormik } from "formik";
import * as yup from "yup";
import { postCity } from "../../redux/thunk/asincThunk/postDeliveryCity";

const Basket = () => {
  let total = 0;
  const open = useSelector(getOpen);
  const isEmpty = useSelector(getIsEmpty);
  let newProducts = {};
  isEmpty.map(
    (el) =>
      (newProducts = {
        name: el.name,
        size: el.size,
        color: el.color[0],
        quantity: el.quantity,
      })
  );

  const dispatch = useDispatch();
  isEmpty.forEach((el) => (total = el.price * el.quantity + total));

  const backSide = function () {
    let body = document.querySelector("body");
    if (open) {
      body.classList.add("no__scroll");
    } else {
      body.classList.remove("no__scroll");
    }
  };
  backSide();

  let [type, setType] = useState("Item in Cart");
  let [error, setError] = useState(false);
  let [fulfield, setFulfield] = useState(false);
  let [cash, setCash] = useState("cardVisa");

  const addClass = () => {
    const navBar = document.querySelectorAll(".textBar");
    if (navBar.length !== 0 && type === "Item in Cart") {
      navBar[0].classList.add("firstBtn");
    }
  };
  addClass();

  const onHandleDelivery = (newProducts) => {
    const navBar = document.querySelectorAll(".textBar");
    dispatch(addProducts(newProducts));
    const addClass2 = () => {
      if (navBar.length !== 0) {
        if (navBar[0].classList.contains("firstBtn")) {
          navBar[0].classList.remove("firstBtn");
        }
        navBar[1].classList.add("firstBtn");
      }
    };
    addClass2();
    setType((type = "Delivery Info"));
  };

  const status = useSelector((state) => state.cart.status);

  const phoneRegExp =
    /(\+375|80)( )(\()(29|25|(44)|33)(\))(\d{3})(\d{2})(\d{2})$/;
  const postRegExp = /(\BY)( )(\d{6})/;

  const validationsSchema = yup.object().shape({
    phone: yup
      .string()
      .required("Поле должно быть заполнено")
      .matches(phoneRegExp, "Неправильный номер"),
    email: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
    country: yup.string().required("Поле должно быть заполнено"),
    city: yup.string().required("Поле должно быть заполнено"),
    street: yup.string().required("Поле должно быть заполнено"),
    house: yup.string().required("Поле должно быть заполнено"),
    apartment: yup.number(),
    postcode: yup
      .string()
      .required("Поле должно быть заполнено")
      .matches(postRegExp, "Неправильный индекс"),
  });
  const validationsSchemaExpress = yup.object().shape({
    phone: yup
      .string()
      .required("Поле должно быть заполнено")
      .matches(phoneRegExp, "Неправильный номер"),
    email: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
    country: yup.string().required("Поле должно быть заполнено"),
    city: yup.string().required("Поле должно быть заполнено"),
    street: yup.string().required("Поле должно быть заполнено"),
    house: yup.string().required("Поле должно быть заполнено"),
    apartment: yup.number(),
  });

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
    onSubmit: (values) => {
      console.log(values);
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
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationsSchemaExpress,
  });

  let [valuesNew, setValues] = useState({
    phone: "",
    email: "",
    storeAddress: "",
    country: "",
  });

  const validationsSchemaStore = yup.object().shape({
    phone: yup
      .string()
      .required("Поле должно быть заполнено")
      .matches(phoneRegExp, "Неправильный номер"),
    email: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
    country: yup.string().required("Поле должно быть заполнено"),
    storeAddress: yup.string().required("Поле должно быть заполнено"),
  });

  const formikStore = useFormik({
    initialValues: valuesNew,

    onSubmit: (values) => {
      console.log(values);
    },
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

  const cartRegExp = /(\d{4})( )(\d{4})( )(\d{4})( )(\d{4})/;
  const yearRegExp = /(\d{2})(\/)(\d{2})/;
  const cvvRegExp = /(\d{3})/;
  const validationsSchemaPayment = yup.object().shape({
    cart: yup
      .string()
      .required("Поле должно быть заполнено")
      .matches(cartRegExp, "Неправильный номер"),
    cardDate: yup
      .string()
      .matches(yearRegExp, "Неправильный номер")
      .required("Поле должно быть заполнено"),
    cardCVV: yup
      .string()
      .matches(cvvRegExp, "Неправильный номер")
      .required("Поле должно быть заполнено"),
  });

  const formikPayment = useFormik({
    initialValues: {
      cart: "",
      cardDate: "",
      cardCVV: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationsSchemaPayment,
  });

  const validationsSchemaPaymentPaypal = yup.object().shape({
    cashEmail: yup
      .string()
      .email("Невалидный email")
      .required("Поле должно быть заполнено"),
  });

  const formikPaymentPaypal = useFormik({
    initialValues: {
      cashEmail: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
    setValues(
      (valuesNew = {
        phone: "",
        email: "",
        storeAddress: "",
        country: "",
      })
    );
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
                {status === undefined || status === null || status === "" ? (
                  <div>
                    <NavBarBasket />
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
                        type={type}
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
                        type={type}
                        setType={setType}
                        total={total}
                        error={error}
                        setError={setError}
                        fulfield={fulfield}
                        setFulfield={setFulfield}
                        status={status}
                        formik={formikPayment}
                        formikPaypal={formikPaymentPaypal}
                        cash={cash}
                        setCash={setCash}
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    {status === "error" && (
                      <ErrorPayment
                        type={type}
                        setType={setType}
                        error={error}
                        setError={setError}
                      />
                    )}
                    {status === "resolved" && (
                      <FulfieldPayment
                        open={open}
                        toggleBasket={toggleBasket}
                        dispatch={dispatch}
                        fulfield={fulfield}
                        setFulfield={setFulfield}
                        type={type}
                        setType={setType}
                        formik={formik}
                        formikExpress={formikExpress}
                        formikPayment={formikPayment}
                        formikStore={formikStore}
                        formikPaymentPaypal={formikPaymentPaypal}
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
