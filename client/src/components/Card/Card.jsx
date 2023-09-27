import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css';

export const Card = ({ id, name, flag, continent, capital, subregion, area, population, activities }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={flag} alt={name} />
        <Link to={`/detail/${id}`}>
          <span className={style["detail-button"]}>Ver detalle</span>
        </Link>
      </div>

      <div className={style["button-container"]}>
        <h1>{name}</h1>
        <h2>Continent: {continent}</h2>
        <h3>Capital: {capital}</h3>
        <h4>Subregion: {subregion}</h4>
        <h5>Area: {area} km²</h5>
        <h6>Population: {population}</h6>
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
