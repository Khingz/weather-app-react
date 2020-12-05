import * as actionTypes from './actionTypes';


export const weatherReducer = (state = {
    isLoading: true,
    errMess: null,
    weather: []
}, action) => {
    switch(action.type) {
        case actionTypes.FETCH_WEATHER:
            return ({...state, isLoading: false, errMess: null, weather: action.payload});

        case actionTypes.WEATHER_LOADING:
            return {...state, isLoading: true, errMess: null, weather: []};

        case actionTypes.WEATHER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, weather: []};

        default:
            return state
    }
};