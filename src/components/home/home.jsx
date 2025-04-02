import React from "react";
import Banner from "./banner/Banner";
import styles from "./home.module.css";
import Features from "./features/feat";
const Home = () => {
  return (
    <section className={styles.home}>
      {/* <h1>Home</h1> */}
      <Banner />
      {/* <br /> */}

      <Features />
    </section>
  );
};

export default Home;
