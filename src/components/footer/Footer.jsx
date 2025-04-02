// Footer Component with FontAwesome & Module CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo Section */}
        <div className={styles.footerLogo}>
          <img src={logo} alt="Federal Blood Wave Logo" />
          <p>মানবতার জন্য একধাপ এগিয়ে...</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h4>গুরুত্বপূর্ণ লিংক</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">AboutUs</a>
            </li>
            <li>
              <a href="/community">community</a>
            </li>
            <li>
              <a href="/terms">Terms&Condition</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerContact}>
          <h4>যোগাযোগ</h4>
          <p>
            <strong>📍 ঠিকানা:</strong> ঢাকা, বাংলাদেশ
          </p>
          <p>
            <strong>📞 ফোন:</strong> +8801603070892
          </p>
          <p>
            <strong>📧 ইমেইল:</strong>{" "}
            <a
              href="mailto:federalbloodwave@gmail.com"
              style={{ color: "white", fontWeight: "bold" }}
            >
              federalbloodwave@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className={styles.footerSocial}>
          <h4>আমাদের অনুসরণ করুন</h4>
          <div className={styles.socialIcons}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Federal Blood Wave. All right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
