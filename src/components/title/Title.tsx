import React from "react";
import styles from "./Title.module.css";
import react from "../../assets/react.svg";

const Title = () => {
  return (
    <div className={styles.container}>
      <img src={react} />
      <h3 className={styles.title}>WorkingTitle</h3>
    </div>
  );
};

export default Title;
