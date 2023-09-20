import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCountriesById } from "../../helpers/getCountriesById";


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
      <h1>Detail Page</h1>
      <div className="card">
        <img src={countryDetail.flag} alt={countryDetail.name} />
        <div className="card-body">
          <h5 className="card-title">{countryDetail.name}</h5>
          <p className="card-text">ID: {countryDetail.id}</p>
          <p className="card-text">Capital: {countryDetail.capital}</p>
          <p className="card-text">Continente: {countryDetail.region}</p>
          { countryDetail.subregion && <p className="card-text">Subregión: {countryDetail.subregion}</p>}
          { countryDetail.area && <p className="card-text">Área: {countryDetail.area}</p>}
          <p className="card-text">Población: {countryDetail.population}</p>
        </div>
      </div>
    </>
  )
}
