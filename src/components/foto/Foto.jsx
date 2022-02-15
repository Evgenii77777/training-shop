import React from "react";
import BtnBottom from "../buttons/btnBottom/BtnBottom";
import BtnTop from "../buttons/btnTop/BtnTop";
import BtnLeft from "../buttons/leftRigth/BtnLeft";
import BtnRigth from "../buttons/leftRigth/BtnRigth";
import F1 from "../../assets/img/f1.jpg";
import F2 from "../../assets/img/f2.jpg";
import F3 from "../../assets/img/f3.jpg";
import F4 from "../../assets/img/f4.jpg";

import styles from "./Foto.module.css";

const Foto = () => {
  return (
    <div className={styles.foto}>
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
          <BtnTop />
          <BtnBottom />
        </div>
        <ul className={styles.list}>
          <li>
            <img src={F1} alt="product foto 1" />
          </li>
          <li>
            <img src={F2} alt="product foto 2" />
          </li>
          <li>
            <img src={F3} alt="product foto 3" />
          </li>
          <li>
            <img src={F4} alt="product foto 4" />
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <BtnLeft />
        <BtnRigth />
      </div>
    </div>
  );
};

export default Foto;
