import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { usePaginate } from "../../hooks";
import style from "./Searched.module.css";



const itemsPerPage = 10;

export const Searched = () => {

    const {countrySearched} = useSelector(state => state);
    const { currentCountries, currentPage, startIndex, nextPage, prevPage} = usePaginate(countrySearched, itemsPerPage);
  
    return (
      <div>
        <div className={style.countriesContainer}>
          <div className={style.pageNavigation}>
            <button className={style.pageButton} onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
            <p>Page: {currentPage + 1}</p>
            <button className={style.pageButton} onClick={nextPage} disabled={startIndex + itemsPerPage >= countrySearched.length}>{">"}</button>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
      </div>
    );
}
