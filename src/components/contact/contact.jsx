import React, { useState } from "react";
import styles from "./contact.module.css";
import handLove from "../../assets/handLove.png";
import { api } from "../../db/api";
import SfLoading from "../loading/slfLoad";
import Popup from "../popup/popup";
import { Link } from "react-router";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [popInfo, setPopInfo] = useState({
    trigger: null,
    type: null,
    message: null,
  });

  const handleChange = (e) => {
    setContactInfo(() => {
      return {
        ...contactInfo,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { name, email, subject, message } = contactInfo;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${api}/donor/sendMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const resData = await response.json();

      setPopInfo({
        type: resData?.success,
        trigger: Date.now(),
        message: resData?.message,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setContactInfo({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.left}>
        <img src={handLove} alt="Contact Us" />
      </div>
      <div className={styles.right}>
        <h2>যোগাযোগ করুন</h2>
        <p className={styles.subtext}>
          আপনার যেকোনো প্রশ্ন, মতামত বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন।
        </p>

        <form className={styles.form} onSubmit={handleSendMessage}>
          <input
            name="name"
            onChange={handleChange}
            required
            type="text"
            placeholder="আপনার নাম"
            value={name}
          />
          <input
            name="email"
            onChange={handleChange}
            required
            type="email"
            placeholder="আপনার ইমেইল"
            value={email}
          />
          <input
            name="subject"
            onChange={handleChange}
            required
            type="text"
            placeholder="বিষয়"
            value={subject}
          />
          <textarea
            placeholder="আপনার বার্তা..."
            rows="5"
            name="message"
            onChange={handleChange}
            required
            value={message}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? <SfLoading /> : "পাঠান"}
          </button>
        </form>

        <div className={styles.contactInfo}>
          <h4>যোগাযোগের তথ্য</h4>
          <p>
            <strong>ইমেইল:</strong>{" "}
            <Link to={"mailto:federalbloodwave@gmail.com"}>
              federalbloodwave@gmail.com
            </Link>
          </p>
          <p>
            <strong>মোবাইল:</strong> +8801603070892
          </p>
          <p>
            <strong>অফিস:</strong> ঢাকা, বাংলাদেশ
          </p>
          <p>
            <strong>সাপোর্ট সময়:</strong> প্রতিদিন সকাল ৯টা - রাত ৯টা
          </p>
        </div>
      </div>
      <Popup popInfo={popInfo} />
    </section>
  );
};

export default Contact;
