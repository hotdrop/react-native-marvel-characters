// @flow

import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { CharacterAction as Action, State } from '../constants/types';

export default function characters(state: State = initialState, action: Action) {
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