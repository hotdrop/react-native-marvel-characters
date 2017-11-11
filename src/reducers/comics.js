// @flow

import * as types from '../actions/actionTypes';
import initialState from './initialState';
import type { ComicAction as Action, State } from '../constants/types';

export default function comics(state: State = initialState, action: Action) {
    switch (action.type) {
        case types.RETRIEVE_COMICS_SUCCESS:
            return {
                ...state,
                comics: action.comics
            };
        default:
            return state;
    }
}