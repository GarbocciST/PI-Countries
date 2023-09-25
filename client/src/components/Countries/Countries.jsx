import { useSelector } from "react-redux";
import { usePaginate } from "../../hooks";
import { Card } from "../Card/Card";


const itemsPerPage = 10;

export const Countries = () => {
    const { countries } = useSelector(state => state);

    const { currentCountries, currentPage, startIndex, nextPage, prevPage} = usePaginate(countries, itemsPerPage);
  return (
    <>
        <button onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
        <p>pagina: {currentPage + 1}</p>
        <button onClick={nextPage}disabled={startIndex + itemsPerPage >= countries.length}>{">"}</button>
        { 
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
