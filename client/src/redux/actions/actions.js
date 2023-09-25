import {ADD_ACTIVITY,GET_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, SET_VIEW,
    ORDER_COUNTRIES, SEARCH_COUNTRY, GET_COUNTRIES, SET_LOADING, 
    ORDER_COUNTRIES_BY_POPULATION, FILTER_COUNTRIES_BY_ACTIVITY, FILTER_COUNTRIES_BY_CONTINENT
} from './action_types';
import { countriesApi } from '../../api/countriesAPI';


export const getCountries = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })

            setTimeout(async () => {
                const { data } = await countriesApi.get('/countries');
                dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                })
            }, 1000);
        } catch (error) {
            console.log(error.message);
            alert('Error getting countries')
        }
    }
}

export const searchCountry = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })

            const { data } = await countriesApi.get(`/countries/name?name=${payload}`);
            console.log(data)
            dispatch({
                type: SEARCH_COUNTRY,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
            alert('Error searching country')
        }
    }
}

export const getActivities = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })
            
            setTimeout(async () => {
                const { data } = await countriesApi.get('/activities');
                dispatch({
                    type: GET_ACTIVITY,
                    payload: data
                })
            }, 1000);
        } catch (error) {
            console.log(error.message);
            alert('Error getting activities')
        }
    }
}

export const addActivity = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })

            setTimeout(async () => {
                const { data } = await countriesApi.post('/activities', payload);
                dispatch({
                    type: ADD_ACTIVITY,
                    payload: data
                })
            }, 1000);
            alert('Activity created successfully')
        } catch (error) {
            console.log(error.message);
            alert('Error creating activity')
        }
    }
}

export const updateActivity = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })

            const { data } = await countriesApi.put(`/activities/${payload.id}`, payload);
            dispatch({
                type: UPDATE_ACTIVITY,
                payload: data
            })
            alert('Activity updated successfully')
        } catch (error) {
            console.log(error.message);
            alert('Error updating activity')
        }
    }
}

export const deleteActivity = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING })

            await countriesApi.delete(`/activities/${payload}`);
            dispatch({
                type: DELETE_ACTIVITY,
                payload
            })
            alert('Activity deleted successfully')
        } catch (error) {
            console.log(error.message);
            alert('Error deleting activity')
        }
    }
}

export const orderCountries = (payload) => {
    return (dispatch) => {
        dispatch({
            type: ORDER_COUNTRIES,
            payload
        })
    }
}

export const orderCountriesByPopulation = (payload) => {
    return (dispatch) => {
        dispatch({
            type: ORDER_COUNTRIES_BY_POPULATION,
            payload
        })
    }
}

export const filterCountriesByContinent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_COUNTRIES_BY_CONTINENT,
            payload
        })
    }
}

export const filterCountriesByActivity = (payload) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_COUNTRIES_BY_ACTIVITY,
            payload
        })
    }
}

export const setView = (payload) => {
    return (dispatch) => {

        // setTimeout(() => {
        //     dispatch({ type: SET_LOADING })
        // }, 1000);

        dispatch({
            type: SET_VIEW,
            payload
        })
    }
}