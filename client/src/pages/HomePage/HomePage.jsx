import { useState } from "react";
import { Activities, Cards, NavBar } from "../../components"
// import { NavBar } from "../../components/NavBar/NavBar"


export const HomePage = () => {
  const [ view, setView ] = useState('Countries');
  return (
    <>
      <NavBar />
      <button onClick={() => setView('Countries')}>Paises</button>
      <button onClick={() => setView('Activities')}>Actividades</button>
      {view === 'Countries' ? <Cards /> : <Activities />}
    </>
  )
}
