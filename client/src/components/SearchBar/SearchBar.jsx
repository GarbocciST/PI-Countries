import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry, setView } from '../../redux/actions';
import style from './SearchBar.module.css';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { view } = useSelector(state => state);
  const country = useSelector(state => state.country);
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchCountry(search));
    dispatch(setView('Searched'));
    setSearch('');
  };

  return (
    <div className={style.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
          name="search"
          className={style.searchInput}
        />
        <button type="submit" className={style.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};
