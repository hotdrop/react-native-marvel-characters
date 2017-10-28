import { combineReducers } from 'redux';
import items from '../modules/items.reducer';

const rootReducer = combineReducers({
    items
});

export default rootReducer;