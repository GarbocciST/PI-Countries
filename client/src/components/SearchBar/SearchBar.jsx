import { useDispatch, useSelector } from 'react-redux'
import { searchCountry, setView } from '../../redux/actions';

export const SearchBar = () => {

    const { view } = useSelector(state => state);
    const country = useSelector(state => state.country);
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchCountry(e.target[0].value));
        dispatch(setView('Searched'));
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
