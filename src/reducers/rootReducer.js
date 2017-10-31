import { combineReducers } from 'redux';
import items from '../modules/characters.reducers';

const rootReducer = combineReducers({
    items
});

export default rootReducer;