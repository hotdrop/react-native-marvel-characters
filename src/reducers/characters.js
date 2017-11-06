// @flow
import * as types from '../actions/actionTypes';
import type { Action } from '../actions/characters';

const initialState = {
    characters: []
};

export default (state: Object = initialState, action: Action) => {
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