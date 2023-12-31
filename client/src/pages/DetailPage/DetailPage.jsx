import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCountriesById } from "../../helpers/getCountriesById";
import style from './DetailPage.module.css';


export const DetailPage = () => {  
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);

  const getDetail = async () => {
    const data = await getCountriesById(id);
    setCountryDetail(data);
  }

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <>
      <div className={style.card}>
        <img src={countryDetail.flag} alt={countryDetail.name} />
        <div className={style.cardBody}>
          <h5 className={style.cardTitle}>{countryDetail.name}</h5>
          <p className={style.cardText}>ID: {countryDetail.id}</p>
          <p className={style.cardText}>Capital: {countryDetail.capital}</p>
          <p className={style.cardText}>Continet: {countryDetail.continent}</p>
          { countryDetail.subregion && <p className={style.cardText}>Subregion: {countryDetail.subregion}</p>}
          { countryDetail.area && <span className={style.cardText}>Area: {countryDetail.area} km²</span>}
          <span className={style.cardText}>Population: {countryDetail.population}</span>
          <p className={style.cardText}>Activities: </p> 
          <div className={style["grid-container"]}>
          {countryDetail.activities?.map((activity, index) => (
            <span key={index} className={style.activity}>
              {activity}
            </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
