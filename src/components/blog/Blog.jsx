import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.superContainer}>
        <div className={styles.wrapper}>
          <h2>LATEST FROM BLOG</h2>
          <button>See All</button>
        </div>
        <ul className={styles.list}>
          <li className={styles.one}>
            <div className={styles.containerItem}>
              <h4>The Easiest Way to Break</h4>
              <span>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </span>
            </div>
          </li>
          <li className={styles.two}>
            <div className={styles.containerItem}>
              <h4>Wedding Season</h4>
              <span>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </span>
            </div>
          </li>
          <li className={styles.three}>
            <div className={styles.containerItem}>
              <h4>Recent Favorites On Repeat</h4>
              <span>
                But I must explain to you how all this mistaken idea of
                denouncing pleas and praising pain was bor
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
