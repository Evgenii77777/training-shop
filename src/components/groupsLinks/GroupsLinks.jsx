import React from "react";
import styles from "./GroupsLinks.module.css";
import { Main_Clothes_Block_Menu } from "../../object/MainBlockMenu";

const GroupsLinks = () => {
  // const [btn, useBtn] = useState("");
  // const onHandleClick = () => {
  //   console.log(particularName);
  // };

  return (
    <ul className={styles.list}>
      {Main_Clothes_Block_Menu.map((el) => (
        <li key={el.name}>
          <button
            onClick={() => {
              console.log(el.particularName);
            }}
            className={styles.link}
          >
            {el.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GroupsLinks;
