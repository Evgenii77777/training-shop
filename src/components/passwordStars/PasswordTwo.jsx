import star from "../../assets/svg/Asterisk.svg.png";
import styles from "./Password.module.css";

const PasswordTwo = () => {
  return (
    <div className={styles.container}>
      <img src={star} alt="star" width="5" height="5" />
      <img src={star} alt="star" width="5" height="5" />
    </div>
  );
};

export default PasswordTwo;
