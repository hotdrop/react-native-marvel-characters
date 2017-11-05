// @flow
import * as types from '../constants/actionTypes';
import initialState from '../reducers/initialState';
import type { Action } from './characters.actions';

// TODO Object to MyState Type
export default (state: Object = initialState.items, action: Action) => {
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