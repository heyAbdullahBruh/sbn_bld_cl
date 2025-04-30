import React from "react";
import styles from "./donorcard.module.css";

const DonorCard = ({ donor, setDonorId, setModalOpen }) => {
  const { name, address, bloodGroup, donationStatus, profile, _id } =
    donor;

  const handleOpen = () => {
    setDonorId(_id);
    setModalOpen(true);
  };

  return (
    <div className={styles.card}>
      <p
        className={`${styles.status} ${
          donationStatus === "active" ? styles.active : styles.inactive
        }`}
      >
        {donationStatus === "active" ? "🟢 Available" : "🟡 Unavailable"}
      </p>
      <img src={profile?.img} alt={name} className={styles.profileImage} />

      <div className={styles.info}>
        <h3>{name}</h3>
        <p>
          <strong>Blood:</strong> {bloodGroup}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <button className={styles.showBtn} onClick={handleOpen}>
          Show Detials
        </button>
      </div>
    </div>
  );
};

export default DonorCard;
