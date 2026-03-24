import React from "react";
import styles from "./donationM.module.css";
import bkashLogo from '../../assets/bkash.png';
import nagadLogo from '../../assets/nagad.png';
const DonationM = ({ open, setOpen }) => {
  return (
    <div
      className={styles.DonationM}
      onClick={() => setOpen(false)}
      style={{ display: open ? "flex" : "none" }}
    >
      <div className={styles.close}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ❌
        </button>
      </div>
      <div className={styles.dContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bkash}>
        <img src={bkashLogo} alt="bkash" />
            <span>:</span>
            <h3>+8801996404083(personal)</h3>
        </div>
        <div className={styles.nagad}>
            <img src={nagadLogo} alt="nagad" />
            <span>:</span>
            <h3>+8801603070892(personal)</h3>
        </div>
      </div>
    </div>
  );
};

export default DonationM;
