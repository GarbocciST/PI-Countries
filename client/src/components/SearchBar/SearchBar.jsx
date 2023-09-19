import { useDispatch, useSelector } from 'react-redux'
import { searchCountry } from '../../redux/actions';

export const SearchBar = () => {

    const country = useSelector(state => state.country);
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchCountry(e.target[0].value));
    }

  return (
    <>  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>

    </>
  )
}
