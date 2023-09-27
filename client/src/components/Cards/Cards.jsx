import {useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { Card } from '../Card/Card';
import { Searched } from '../Searched/Searched';
import { usePaginate } from '../../hooks';
import { Countries } from '../Countries/Countries';
import { Loading } from '../Loading/Loading';


export const Cards = () => {

    const { isLoading, view } = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCountries());
    }, []);

  return (
    <>
      {
        (isLoading) ? <Loading /> :
        (view === 'Countries') ? <Countries /> : <Searched /> 
      }
    </>
  )
}
