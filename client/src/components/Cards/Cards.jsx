import {useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { Card } from '../Card/Card';


export const Cards = () => {

    // const allCountries = useSelector(state => state.allCountries);
    const { allCountries, isLoading, country, countries } = useSelector(state => state);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
  
    const startIndex = currentPage * itemsPerPage;
  
    const currentCountries = countries.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  
    const nextPage = () => {
      if (startIndex + itemsPerPage < countries.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  

    useEffect(() => {
        dispatch(getCountries());
    }, []);

  return (
    <>
          <button onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
          <p>pagina: {currentPage + 1}</p>
          <button onClick={nextPage}disabled={startIndex + itemsPerPage >= countries.length}>{">"}</button>
        {
            isLoading ? <h1>Loading...</h1> :
            currentCountries.map(({id, name, flag, continent, capital, subregion, area, population}) => {
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
                    />
                )
            })      
        }
    
    
    </>
  )
}
