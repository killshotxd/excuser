import React, { useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";

const URL_GAMING = "https://excuser.herokuapp.com/v1/excuse/gaming";

const URL_OFFICE = "https://excuser.herokuapp.com/v1/excuse/office";

const URL_FAMILY = "https://excuser.herokuapp.com/v1/excuse/family";

const Home = () => {
  // Functions
  const [officePost, setOfficePost] = useState("");
  const [familyPost, setFamilyPost] = useState("");
  const [gamingPost, setGamingPost] = useState("");

  const office = () => {
    axios.get(URL_OFFICE).then((response) => {
      setOfficePost(response.data[0].excuse);
    });
  };

  const family = () => {
    axios.get(URL_FAMILY).then((response) => {
      setFamilyPost(response.data[0].excuse);
    });
  };

  const gaming = () => {
    axios.get(URL_GAMING).then((response) => {
      setGamingPost(response.data[0].excuse);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Generate Random Excuses 😝</h2>

        <div className={styles.excuses}>
          <button className={styles.button5} onClick={office}>
            Excuse for Office 🙄
          </button>
          <p>{officePost}</p>
        </div>

        <div className={styles.excuses}>
          <button className={styles.button5} onClick={family}>
            Excuse for Family 🙄
          </button>
          <p>{familyPost}</p>
        </div>

        <div className={styles.excuses}>
          <button className={styles.button5} onClick={gaming}>
            Excuse for Gaming 🙄
          </button>
          <p>{gamingPost}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
