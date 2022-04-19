import styles from "../Basket.module.css";

const Total = ({ total }) => {
  return (
    <div className={styles.spanWrapper}>
      <span className={styles.spanWrapperFirst}>Total</span>
      <span className={styles.spanWrapperSecond}>${total.toFixed(2)}</span>
    </div>
  );
};

export default Total;
