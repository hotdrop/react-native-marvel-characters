// @flow
import * as types from '../constants/actionTypes';
import initialState from '../reducers/initialState';

import type { Action } from './characters.actions';
import type { Characters } from '../reducers/initialState';

export default (state: Characters = initialState, action: Action) => {
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