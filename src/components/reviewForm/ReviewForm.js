import React, { useState } from "react";
import styles from "./ReviewForm.module.css";
import Close from "../../assets/svg/x 1.svg";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { reviewPost } from "../../redux/thunk/postReview";
import { useParams } from "react-router-dom";
import OneStar from "../stars/oneStar/OneStar";
import TwoStars from "../stars/twoStar/TwoStars";
import ThreeStars from "../stars/threeStars/ThreeStars";
import FourStars from "../stars/fourStars/FourStars";
import FiveStars from "../stars/fiveStars/FiveStars";
import { Watch } from "react-loader-spinner";

const ReviewForm = ({ form, setForm }) => {
  let [rating, setStars] = useState(1);
  const dispatch = useDispatch();
  const par = useParams();
  const id = par.id;
  const isLoading = useSelector((state) => state.review.loading);
  const isError = useSelector((state) => state.review.error);
  let statusProduct = useSelector((state) => state.item.status);
  const isClosed = useSelector((state) => state.item.closed);

  if (!isClosed && statusProduct === "pending") {
    setForm(!form);
  }
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("Дожно быть строкой").required("Введите имя"),
    text: yup
      .string()
      .typeError("Дожно быть строкой")
      .required("Введите отзыв"),
    rating: yup.number().typeError("Дожно быть числом"),
  });
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          text: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={styles.form} data-test-id="review-modal">
            <button
              type="button"
              className={styles.close}
              onClick={() => setForm(!form)}
            >
              <img src={Close} alt="close" />
            </button>
            <h2 className={styles.text}>Write a review</h2>
            <div className={styles.stars}>
              <div className={styles.btnWrapper}>
                <button
                  className={styles.btnStars}
                  onClick={() => setStars((rating = 1))}
                ></button>
                <button
                  className={styles.btnStars}
                  onClick={() => setStars((rating = 2))}
                ></button>
                <button
                  className={styles.btnStars}
                  onClick={() => setStars((rating = 3))}
                ></button>
                <button
                  className={styles.btnStars}
                  onClick={() => setStars((rating = 4))}
                ></button>
                <button
                  className={styles.btnStars}
                  onClick={() => setStars((rating = 5))}
                ></button>
              </div>
              <div className={styles.starsWrapper}>
                {rating === 1 ? (
                  <OneStar />
                ) : "" || rating === 2 ? (
                  <TwoStars />
                ) : "" || rating === 3 ? (
                  <ThreeStars />
                ) : "" || rating === 4 ? (
                  <FourStars />
                ) : "" || rating === 5 ? (
                  <FiveStars />
                ) : (
                  ""
                )}
              </div>
            </div>
            <label htmlFor="name" className={styles.labelFirst}>
              <input
                className={styles.inputFirst}
                name={`name`}
                data-test-id="review-name-field"
                id="input1"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </label>
            {touched.name && errors.name && (
              <p className={styles.error}>{errors.name}</p>
            )}
            <label htmlFor="text" className={styles.label}>
              <input
                className={styles.input}
                data-test-id="review-text-field"
                name={`text`}
                type="text"
                placeholder="Enter your review"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.review}
              />
            </label>
            {touched.text && errors.text && (
              <p className={styles.error}>{errors.text}</p>
            )}
            <button
              onClick={() => {
                dispatch(reviewPost({ ...values, id, rating }));
              }}
              disabled={!isValid || !dirty || isLoading}
              className={styles.send}
              data-test-id="review-submit-button"
              type="submit"
            >
              {isLoading && (
                <div className={styles.loader}>
                  <Watch
                    height="20"
                    width="20"
                    color="white"
                    ariaLabel="loading"
                  />
                </div>
              )}
              Send
            </button>
            {isError && (
              <p className={styles.errorReview}>Ошибка при отправке почты</p>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ReviewForm;
