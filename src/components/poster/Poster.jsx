import React from "react";
import styles from "./Poster.module.css";

const Poster = () => {
  return (
    <section className={styles.poster}>
      <ul className={styles.list}>
        <li className={styles.one}>
          <div>
            <span>New Season</span>
            <h3>lookbook collection</h3>
          </div>
        </li>
        <li className={styles.two}>
          <div>
            <span>Sale</span>
            <h3>
              Get UP to <span className={styles.redSpan}>50% off</span>
            </h3>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Poster;
