import * as actionTypes from './actionTypes';

const API_KEY = 'c4c4ef14b8ebc2a0c2e4fae6cb58fdff';

export const fetchWeather = () => dispatch => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=${API_KEY}`)
        .then(response => {
            if(response.ok) {
                return response
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then(weather => dispatch(addWeather(weather)))
        .catch(error => dispatch(weatherFailed(error.message)))       
}

export const weatherFailed = errmess => ({
    type: actionTypes.WEATHER_FAILED,
    payload: errmess
});

export const addWeather = (weather) => ({
    type: actionTypes.FETCH_WEATHER,
    payload: weather
});


