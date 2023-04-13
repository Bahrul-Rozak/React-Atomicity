import React from "react";
import Button from "../../atoms/Button";
import styles from "./styles.module.css";

const Header = ({ title, onButtonClick }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Button label="Logout" onClick={onButtonClick} />
    </header>
  );
};

export default Header;
