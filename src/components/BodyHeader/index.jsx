import React from "react";
import styles from "./BodyHeader.module.css";

const BodyHeader = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>наименование</div>
        <div className={styles.count}>количество</div>
        <div className={styles.price}>стоимость</div>
      </div>
    </div>
  );
};

export default BodyHeader;
