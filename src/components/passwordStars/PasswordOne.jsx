import star from "../../assets/svg/Asterisk.svg.png";
import styles from "./Password.module.css";

const PasswordOne = () => {
  return (
    <div className={styles.container}>
      <img src={star} alt="star" width="5" height="5" />
    </div>
  );
};

export default PasswordOne;
