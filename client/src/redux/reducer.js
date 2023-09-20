import {ADD_ACTIVITY,GET_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, SET_LOADING,
    FILTER_COUNTRIES, ORDER_COUNTRIES, SEARCH_COUNTRY, GET_COUNTRIES, SET_SELECTED_COUNTRIES, CLEAR_STATE
} from './actions/action_types';


const initialState = {
    activities: [],
    country: [],
    countries: [],
    allCountries: [],
    selectedCountries:[],
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
                isLoading: false,
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                country: payload,
                isLoading: false,
            }
        case SET_SELECTED_COUNTRIES:
            return {
                ...state,
                selectedCountries: action.payload,
            };
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
        case FILTER_COUNTRIES:
            const filteredCountries = state.allCountries.filter(country => country.region === payload || country.activities.some(activity => activity.name === payload));
            return {
                ...state,
                allCountries: [...filteredCountries],
                isLoading: false,
            }
        case ORDER_COUNTRIES:
            const sortedCountries = state.countries.sort((a, b) => {
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
                allCountries: [...sortedCountries],
                isLoading: false,
            }
        case CLEAR_STATE:
            return {
                ...state,
                countries: [],
                allCountries: [],
                isLoading: false,
            }
        default:
            return {...state}
    }


}

export default reducer;