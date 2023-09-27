import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import { clearCountrySearched, setView } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';

export const NavBar = () => {
  const {countrySearched} = useSelector(state => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();


  const handleView = () => {
    dispatch(setView('Countries'));
    dispatch(clearCountrySearched());
  };

  return (
    <div className={style.navBarContainer}>
      <button onClick={handleView} className={style.navBarButton} disabled={countrySearched.length === 0} >View all countries</button>
      <SearchBar />
      {pathname === '/home' ? (
        <Link to='/form' >
          <button className={style.navBarButton} onClick={ handleView }>
            Go to activities
          </button>
        </Link>
      ) : (
        <Link to='/home'>
          <button  className={style.navBarButton}>
            Go to home
          </button>
        </Link>
      )}
    </div>
  );
};
