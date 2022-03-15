import React from "react";
import styles from "./GroupItem.module.css";
import Search from "../../assets/svg/search 1.svg";
import Globe from "../../assets/svg/globe 1.svg";
import User from "../../assets/svg/user 1.svg";
import Shopping from "../../assets/svg/shopping-bag 2.svg";
import { toggleBasket } from "../../redux/btnBasket/btnBasket-actions";
import { connect } from "react-redux";

const GroupItem = ({ open, onToggleBasket, isEmpty }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={Search} alt="search" />
        <img className={styles.logo} src={Globe} alt="globe" />
        <img className={styles.logo} src={User} alt="user" />
        <button
          className={styles.btn}
          onClick={() => onToggleBasket(!open)}
          data-test-id="cart-button"
        >
          <img className={styles.logo} src={Shopping} alt="shopping" />
          {isEmpty.length ? (
            <div className={styles.containerText}>
              <p className={styles.text}>{isEmpty.length}</p>
            </div>
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.basket.visible,
    isEmpty: state.basket.card,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleBasket: (open) => dispatch(toggleBasket(!open)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
