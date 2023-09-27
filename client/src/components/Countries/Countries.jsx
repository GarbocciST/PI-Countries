import React from "react";
import { useSelector } from "react-redux";
import { usePaginate } from "../../hooks";
import { Card } from "../Card/Card";
import style from "./Countries.module.css";

const itemsPerPage = 10;

export const Countries = () => {
  const { countries } = useSelector(state => state);

  const { currentCountries, currentPage, startIndex, nextPage, prevPage } = usePaginate(countries, itemsPerPage);
  
  return (
    <div>
      <div className={style.countriesContainer}>
        <div className={style.pageNavigation}>
          <button className={style.pageButton} onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
          <p>Page: {currentPage + 1}</p>
          <button className={style.pageButton} onClick={nextPage} disabled={startIndex + itemsPerPage >= countries.length}>{">"}</button>
        </div>
      </div>
      
      <div className={style.gridContainer}>
        {currentCountries.map(({ id, name, flag, continent, capital, subregion, area, population, activities }) => {
          return (
            <Card 
              key={id}
              id={id}
              name={name}
              flag={flag}
              continent={continent}
              capital={capital}
              subregion={subregion}
              area={area}
              population={population}
              activities={activities}
            />
          );
        })}
      </div>
    </div>
  );
};
