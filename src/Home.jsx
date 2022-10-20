import React from "react";
import axios from "axios";
import styles from "./Home.module.css";

const URL_GAMING = "https://excuser.herokuapp.com/v1/excuse/gaming";

const URL_OFFICE = "https://excuser.herokuapp.com/v1/excuse/office";

const URL_FAMILY = "https://excuser.herokuapp.com/v1/excuse/family";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Generate Random Excuses 😝</h2>
      </div>
    </div>
  );
};

export default Home;
