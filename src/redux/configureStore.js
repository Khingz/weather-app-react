import { weatherReducer } from './weatherReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';


export const configureStore = () => {
    const store = createStore(
        weatherReducer,
        applyMiddleware(thunk, logger)
    );
    return store;
}