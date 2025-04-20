// Settings.jsx
import React, { useState } from "react";
import styles from "./settings.module.css";

const Settings = () => {
  const [info, setInfo] = useState({ name: "", phone: "", address: "" });
  const [phyCon, setPhyCon] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", newPass: "" });
  const [dp, setDp] = useState(null);

  const handleInfoUpdate = (e) => {
    e.preventDefault();
    console.log("Updating Info:", info);
  };

  const handlePhyConUpdate = (e) => {
    e.preventDefault();
    console.log("Updating Physical Condition:", phyCon);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log("Updating Password:", passwords);
  };

  const handlePhotoUpdate = (e) => {
    e.preventDefault();
    console.log("Updating DP:", dp);
  };

  return (
    <section className={styles.settingsPage}>
      <h2>⚙️ Settings</h2>

      {/* Info Update */}
      <form onSubmit={handleInfoUpdate} className={styles.formCard}>
        <h3>📝 Update Info</h3>
        <input type="text" placeholder="Full Name" onChange={(e) => setInfo({ ...info, name: e.target.value })} />
        <input type="text" placeholder="Phone Number" onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
        <input type="text" placeholder="Address" onChange={(e) => setInfo({ ...info, address: e.target.value })} />
        <button type="submit">Update Info</button>
      </form>

      {/* Physical Condition */}
      <form onSubmit={handlePhyConUpdate} className={styles.formCard}>
        <h3>🏥 Physical Condition</h3>
        <label>
          <input type="checkbox" checked={phyCon} onChange={() => setPhyCon(!phyCon)} /> Currently Sick
        </label>
        <button type="submit">Update Condition</button>
      </form>

      {/* Password Update */}
      <form onSubmit={handlePasswordUpdate} className={styles.formCard}>
        <h3>🔒 Update Password</h3>
        <input type="password" placeholder="Current Password" onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} />
        <input type="password" placeholder="New Password" onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })} />
        <button type="submit">Update Password</button>
      </form>

      {/* Profile Photo Update */}
      <form onSubmit={handlePhotoUpdate} className={styles.formCard}>
        <h3>🖼️ Update Profile Picture</h3>
        <input type="file" accept="image/*" onChange={(e) => setDp(e.target.files[0])} />
        <button type="submit">Upload Photo</button>
      </form>
    </section>
  );
};

export default Settings;
