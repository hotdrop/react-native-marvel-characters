import { combineReducers } from 'redux';
import items from '../modules/items.reducers';

const rootReducer = combineReducers({
    items
});

export default rootReducer;