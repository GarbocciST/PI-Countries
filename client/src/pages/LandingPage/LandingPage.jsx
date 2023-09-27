import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css';

export const LandingPage = () => {
  return (
    <div className={style.landingContainer}>
      <img className={style.landingImage} src="/public/countries.png" alt="Countries" />

      <div className={style.buttonContainer}>
        <Link to="/home">
          <button className={style.startButton}>Let's Go!</button>
        </Link>
      </div>
    </div>
  );
}
