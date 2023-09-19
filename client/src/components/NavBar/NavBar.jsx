import { SearchBar } from "../SearchBar/SearchBar"


export const NavBar = () => {
  return (
    <>
      <SearchBar />
      <button>{"<"}</button>
      <p>pagina: </p>
      <button>{">"}</button>
    </>
  )
}
