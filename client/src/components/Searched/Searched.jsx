import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const Searched = () => {

    const {countrySearched} = useSelector(state => state);

  return (
    <>
        {
            countrySearched.map(({id, name, flag, continent, capital, subregion, area, population}) => {
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
