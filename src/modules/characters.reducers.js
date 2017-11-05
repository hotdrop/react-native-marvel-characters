import * as types from '../constants/actionTypes';
import initialState from '../reducers/initialState';

export default (state = initialState.items, action) => {
    switch (action.type) {
        case types.RETRIEVE_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.characters
            };
        default:
            return state;
    }
}