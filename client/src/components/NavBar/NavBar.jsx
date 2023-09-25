import { useDispatch } from "react-redux"
import { SearchBar } from "../SearchBar/SearchBar"
import { setView } from "../../redux/actions";

export const NavBar = () => {

  const dispatch = useDispatch();

  return (
    <>
      <SearchBar />
      <button onClick={() => dispatch(setView('Countries'))} >View All Countries</button>
    </>
  )
}
