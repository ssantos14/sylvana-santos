import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import projects from './projects';

const reducer = combineReducers({projects});
// create our store and apply any necessary middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;