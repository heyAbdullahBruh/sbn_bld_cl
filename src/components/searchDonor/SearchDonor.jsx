import React from "react";
import styles from "./sdonor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { dhakaThana } from "../../db/data";

const SearchDonor = () => {
  return (
    <section className={styles.sDonor} id="SearchDonor">
      <form action="/donor/">
        <select name="bloodGroup" id="bloodGroup">
          <option value="A+ev">Enter A Blood Group</option>
          <option value="A+ev">A+ (ev)</option>
          <option value="A-ev">A- (ev)</option>
          <option value="B+ev">B+ (ev)</option>
          <option value="B-ev">B- (ev)</option>
          <option value="O+ev">O+ (ev)</option>
          <option value="O-ev">O- (ev)</option>
          <option value="AB+ev">AB+ (ev)</option>
          <option value="AB-ev">AB- (ev)</option>
        </select>
        <select name="thana" id="thana">
          <option value="Agargoan">Select Your Area</option>
          {dhakaThana?.map((data) => {
            const { id, name } = data;
            return (
              <option value={name} key={id}>
                {name}
              </option>
            );
          })}
        </select>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </button>
      </form>
    </section>
  );
};

export default SearchDonor;
