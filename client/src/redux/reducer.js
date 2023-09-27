import {ADD_ACTIVITY,GET_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, SET_VIEW,
    ORDER_COUNTRIES, SEARCH_COUNTRY, GET_COUNTRIES, SET_LOADING, CLEAR_COUNTRIES_SEARCHED,
    ORDER_COUNTRIES_BY_POPULATION, FILTER_COUNTRIES_BY_ACTIVITY, FILTER_COUNTRIES_BY_CONTINENT, CLEAR_STATE
} from './actions/action_types';


const initialState = {
    activities: [],
    countrySearched: [],
    countries: [],
    allCountries: [],
    view: 'Countries',
    isLoading: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                allCountries: payload,
                // selectedCountries: payload,
                isLoading: false,
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countrySearched: payload,
                isLoading: false,
            }
        case GET_ACTIVITY:
            return {
                ...state,
                activities: payload,
                isLoading: false,
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, payload],
                isLoading: false,
            }
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.map(activity => activity.id === payload.id ? payload : activity),
                isLoading: false,
            }
        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== payload),
                isLoading: false,
            }
        case FILTER_COUNTRIES_BY_ACTIVITY:
            const filteredByActivity = state.allCountries.filter(country => country.activities.length > 0);            
            return {
                ...state,
                countries: [...filteredByActivity],
            }
        case FILTER_COUNTRIES_BY_CONTINENT:
            const filteredByContinent = state.allCountries.filter(country => country.continent === payload);
            return {
                ...state,
                countries: payload === 'all' ? state.allCountries : [...filteredByContinent],
            }
        case ORDER_COUNTRIES:
            const sortedCountries = [...state.countries].sort((a, b) => {
                if (a.name > b.name) {
                    return payload === 'asc' ? 1 : -1;
                }
                if (a.name < b.name) {
                    return payload === 'asc' ? -1 : 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: payload === 'all' ? state.allCountries : [...sortedCountries],
            }
        case ORDER_COUNTRIES_BY_POPULATION:
            const sortedByPopulation = [...state.countries].sort((a, b) => {
                if (a.population > b.population) {
                    return payload === 'asc' ? 1 : -1;
                }
                if (a.population < b.population) {
                    return payload === 'asc' ? -1 : 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: [...sortedByPopulation],
            }
        case SET_VIEW:
            return {
                ...state,
                view: payload,
                // isLoading: false,                
            }
        case CLEAR_STATE:
            return {
                ...state,
                countries: [],
                allCountries: [],
                isLoading: false,
            }
        case CLEAR_COUNTRIES_SEARCHED:
            return {
                ...state,
                countrySearched: [],
            }
        default:
            return {...state}
    }


}

export default reducer;