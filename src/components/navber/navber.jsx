import React, { useEffect, useState } from "react";
import styles from "./navber.module.css";
import { Link, useLocation, useNavigate, useRoutes } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../App";
import { api } from "../../db/api";

const Navber = () => {
  const [isNavProf, setIsNavProf] = useState(false);
  const [navRoute, setNavRoute] = useState("");

  const { isAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // Update active route
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setNavRoute(path || "home");
  }, [location.pathname]);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.navProf}`)) {
        setIsNavProf(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Navigation items list
  const navItems = [
    { name: "home", path: "/", icon: faHouse },
    isAuth
      ? { name: "community", path: "/community", icon: faUsers }
      : { name: "auth", path: "/auth", label: "LogIn" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = () => {
    setIsLoading(true);
    try {
      fetch(`${api}/donor/signOut`, {
        method: "POST",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          navigate("/", {
            replace: true,
          });
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className={styles.navber}>
      <section className={styles.navLogo}>
        <h1>
          <span>F</span>
          <span>B</span>W
        </h1>
      </section>

      <section className={styles.navItems}>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={`${item?.name + index}`}
              className={`${styles.navItem} ${
                navRoute === item?.name ? styles.active : ""
              }`}
            >
              <Link to={item?.path}>
                {item?.icon ? (
                  <FontAwesomeIcon icon={item?.icon} />
                ) : (
                  item?.label
                )}
              </Link>
            </li>
          ))}

          <div
            className={styles.activeIndicator}
            style={{
              left: `calc(${
                navItems.findIndex((item) => item?.name === navRoute) * 100
              }% + 10px)`,
            }}
          />
        </ul>
      </section>

      <section className={styles.navProf}>
        <ul>
          <li className={styles.navItem}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsNavProf((prev) => !prev);
              }}
            >
              <FontAwesomeIcon icon={faUserTie} />
            </button>
          </li>
        </ul>

        {isNavProf && (
          <ul className={styles.navProfItem}>
            {isAuth && (
              <>
                <li
                  className={`${styles.navItem} ${
                    navRoute === "profile" ? styles.active : ""
                  }`}
                >
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li
                  className={`${styles.navItem} ${
                    navRoute === "setting" ? styles.active : ""
                  }`}
                >
                  <Link to={"/setting"}>Setting</Link>
                </li>
              </>
            )}
            <li
              className={`${styles.navItem} ${
                navRoute === "about" ? styles.active : ""
              }`}
            >
              <Link to={"/about"}>AboutUS</Link>
            </li>
            <li
              className={`${styles.navItem} ${
                navRoute === "terms" ? styles.active : ""
              }`}
            >
              <Link to={"/terms"}>Terms&Condition</Link>
            </li>
            <li
              className={`${styles.navItem} ${
                navRoute === "contact" ? styles.active : ""
              }`}
            >
              <Link to={"/contact"}>CONTACT</Link>
            </li>
            <li>
              {isAuth && (
                <button onClick={handleLogOut} disabled={isLoading}>
                  {isLoading ? (
                    <span className={styles.loader}></span>
                  ) : (
                    "LOGOUT"
                  )}
                </button>
              )}
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
};

export default Navber;
