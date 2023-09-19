
export const Card = ({id, name, flag, continent, capital, subregion, area, population}) => {
  return (
    <>
        <div>
            <img src={flag} alt={name}/>
            <h1>{name}</h1>
            <h2>{continent}</h2>
            <h3>{capital}</h3>
            <h4>{subregion}</h4>
            <h5>{area}</h5>
            <h6>{population}</h6>
        </div>
    </>
  )
}
