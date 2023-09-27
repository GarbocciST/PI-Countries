import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css';

export const Card = ({ id, name, flag, continent, capital, subregion, area, population, activities }) => {
  return (
    <div className={style.card}>
      {
        flag && 
      <div className={style.containerImg}>
        <img src={flag} alt={name} />
      </div>
      }
      {
         id &&
        <Link to={`/detail/${id}`}>
          <span className={style["detail-button"]}>View Detail</span>
        </Link>
      }
      <div className={style["button-container"]}>
        <h1>{name}</h1>
        <h2>Continent: {continent && continent}</h2>
        <h3>Capital: {capital && capital}</h3>
      </div>

      {activities?.length > 0 && (
        <h3 className={style["activities-title"]}>Activities:</h3>
      )}
      <div className={style["grid-container"]}>
        {activities?.map((activity, index) => (
          <span key={index} className={style.activity}>
            {activity}
          </span>
        ))}
      </div>
    </div>
  );
};
