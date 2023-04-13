import React from "react";
import Header from "../../components/organisms/Header";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header title="Home" />
      <main>
        <h2>Welcome to my app!</h2>
        <p>This is the home page.</p>
      </main>
    </div>
  );
};

export default Home;
