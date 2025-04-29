// Settings.jsx
import React, { useState } from "react";
import styles from "./settings.module.css";
import DonorInfuUpdate from "./donorPInfoUp";
import HandlePassUp from "./handlePassUP";

const Settings = () => {
  const [phyCon, setPhyCon] = useState(false);

  const [dp, setDp] = useState(null);

  const handlePhyConUpdate = (e) => {
    e.preventDefault();
    console.log("Updating Physical Condition:", phyCon);
  };

  const handlePhotoUpdate = (e) => {
    e.preventDefault();
    console.log("Updating DP:", dp);
  };

  return (
    <section className={styles.settingsPage}>
      <h2>⚙️ Settings</h2>

      {/* Info Update */}
      <DonorInfuUpdate />

      {/* Physical Condition */}
      <form onSubmit={handlePhyConUpdate} className={styles.formCard}>
        <h3>🏥 Physical Condition</h3>
        <label>
          <input
            type="checkbox"
            checked={phyCon}
            onChange={() => setPhyCon(!phyCon)}
          />{" "}
          Currently Sick
        </label>
        <button type="submit">Update Condition</button>
      </form>

      {/* Password Update */}
      <HandlePassUp/>
      
      {/* Profile Photo Update */}
      <form onSubmit={handlePhotoUpdate} className={styles.formCard}>
        <h3>🖼️ Update Profile Picture</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setDp(e.target.files[0])}
        />
        <button type="submit">Upload Photo</button>
      </form>
    </section>
  );
};

export default Settings;
