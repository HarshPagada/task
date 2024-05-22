import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer'
import { thunk } from 'redux-thunk';

console.log(thunk)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;