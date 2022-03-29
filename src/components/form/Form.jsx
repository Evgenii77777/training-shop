import React, { useState } from "react";
import styles from "./Form.module.css";
import M from "../../assets/img/bgm.png";
import W from "../../assets/img/bgw.png";
import { useDispatch, useSelector } from "react-redux";
import { emailPost } from "../../redux/thunk/postEmail";
import { Watch } from "react-loader-spinner";

const Form = () => {
  let isDis = true;
  let [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAction = (email) => {
    dispatch(emailPost(email));
  };
  const isLoading = useSelector((state) => state.mail.loading);
  const isError = useSelector((state) => state.mail.error);
  let message = useSelector((state) => state.mail.message);
  const status = useSelector((state) => state.mail.status);

  const handleChange = (event) => {
    setText((text = event.target.value));
  };
  function ValidMail() {
    const re = /^[\w-.=.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(text);
    if (valid && !isLoading) return (isDis = false);
    else return (message = "");
  }
  ValidMail();
  return (
    <section className={styles.container}>
      <img className={styles.women} src={W} alt="women" />
      <img className={styles.men} src={M} alt="men" />
      <form className={styles.form}>
        <span>Special Offer</span>
        <h2>
          Subscribe And <span className={styles.sale}> Get 10% Off</span>
        </h2>
        <label>
          <input
            className={styles.label}
            data-test-id="main-subscribe-mail-field"
            required
            id="email"
            name="email"
            type="text"
            value={text}
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className={styles.loaderWrapper}>
          {status === "resolved" && (
            <h4 className={styles.status}>{message}</h4>
          )}
          {isError && <h4 className={styles.error}>{message}</h4>}
          <input
            className={styles.input}
            data-test-id="main-subscribe-mail-button"
            disabled={isDis}
            type="button"
            value="Subscribe"
            onClick={() => handleAction(text)}
          />
          {isLoading && (
            <div className={styles.loader} data-test-id="loader">
              <Watch height="30" width="30" color="white" ariaLabel="loading" />
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
