import React from "react";
import styles from "../home.module.css";
import CountUp from "react-countup";
import { Link } from "react-router";
import { useAuth } from "../../../App";

const BLDinfo = () => {
  const { isAuth } = useAuth();

  return (
    <section className={styles.bldinfo}>
      <aside className={styles.infoSec1}>
        <div className={styles.infos}>
          <h2>
            <CountUp end={7} duration={1} /> +
          </h2>
          <h3>Different type Blood</h3>
        </div>
        <div className={styles.infos}>
          <h2>{/* <CountUp end={200} duration={3} />+ */} 0</h2>
          <h3>Donted Blood</h3>
        </div>
        <div className={styles.infos}>
          <h2>{/* <CountUp end={40} duration={3} />+ */} 0</h2>
          <h3>Complete Serve Patient</h3>
        </div>
        <div className={styles.infos}>
          <h2>{/* <CountUp end={80} duration={3} />+ */} 0</h2>
          <h3>DONOR</h3>
        </div>
        <div className={styles.infos}>
          <h2>{/* <CountUp end={90} duration={3} />+ */} 0</h2>
          <h3>Actrive Donor</h3>
        </div>
      </aside>
      {isAuth || (
        <aside className={styles.infoSec2}>
          <Link to={"/auth"}>
            <button>Join As A Donor</button>
          </Link>
        </aside>
      )}
    </section>
  );
};

export default BLDinfo;
