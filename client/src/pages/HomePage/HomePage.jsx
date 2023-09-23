import { useState } from "react";
import { Activities, Cards, NavBar } from "../../components"
// import { NavBar } from "../../components/NavBar/NavBar"
import { useDispatch } from "react-redux";
import { filterCountriesByActivity, filterCountriesByContinent, 
  orderCountries, orderCountriesByPopulation 
} from "../../redux/actions";

export const HomePage = () => {
  const [ view, setView ] = useState('Countries');
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    if(e.target.value === 'all') {
      dispatch(orderCountries(e.target.value));
    }
    if(e.target.value === 'asc') {
      dispatch(orderCountries(e.target.value));
    }
    if(e.target.value === 'desc') {
      dispatch(orderCountries(e.target.value));
    }
    if(e.target.value === 'pop') {
      dispatch(orderCountriesByPopulation(e.target.value));
    }
  }

  const handleFilter = (e) => {
    if(e.target.value === 'all') {
      dispatch(filterCountriesByContinent(e.target.value));
    }
    if(e.target.value === 'North America' || e.target.value === 'South America' || e.target.value === 'Europe' || e.target.value === 'Africa' || e.target.value === 'Asia' || e.target.value === 'Oceania' || e.target.value === 'Antarctica') {
      dispatch(filterCountriesByContinent(e.target.value));
    }
    if(e.target.value === 'activity') {
      dispatch(filterCountriesByActivity(e.target.value));
    }
  }



  return (
    <>
      <NavBar />
      {/* <button onClick={() => setView('Countries')}>Con</button>
      <button onClick={() => setView('Activities')}>Actividades</button> */}
      <select 
        onChange={handleOrder}
      >
        <option value="all">All</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        <option value="pop">Poblacion</option>
      </select>

      <select
        onChange={handleFilter}
      >
        <option value="all">All</option>
        <option value="activity">Activity</option>
        <option value="North America"> North America</option>
        <option value="South America"> South America</option>
        <option value="Europe"> Europe</option>
        <option value="Africa"> Africa</option>
        <option value="Asia"> Asia</option>
        <option value="Oceania"> Oceania</option>
        <option value="Antarctica"> Antarctica</option>
      </select>
      {view === 'Countries' ? <Cards /> : <Activities />}
    </>
  )
}
