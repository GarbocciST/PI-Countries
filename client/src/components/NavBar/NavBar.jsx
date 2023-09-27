import React from "react";
import { useDispatch } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import { setView } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className={style.navBarContainer}>
      <button onClick={() => dispatch(setView('Countries'))} className={style.navBarButton}>View all countries</button>
      <SearchBar />
      {pathname === '/home' ? (
        <Link to='/form' >
          <button className={style.navBarButton}>
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
