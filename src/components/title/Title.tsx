import React from "react";
import styles from "./Title.module.css";
import { ReactComponent as Logo } from "../../assets/react.svg";

const Title = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <h3 className={styles.title}>WorkingTitle</h3>
    </div>
  );
};

export default Title;
