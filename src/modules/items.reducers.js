import * as types from '../constants/actionTypes';
import initialState from '../reducers/initialState';

export default function (state = initialState.items, action) {
    switch (action.type) {
        case types.RETRIEVE_ITEMS_SUCCESS:
            return {
                ...state,
                companies: action.companies
            };
        default:
            return state;
    }
}